/* ============================================================
 * File: /JS/recherches.js
 * Recherche avancée : multi-mots, fuzzy, highlight, sans accents
 * + Navigation clavier (↑ ↓ Entrée Échap)
 * ============================================================ */

(() => {
  "use strict";

  /* -----------------------------------------------
   * 1) Injection du CSS .active-item dans le <head>
   * ----------------------------------------------- */
  const style = document.createElement("style");
  style.textContent = `
    .letter-card.active-item {
      display: block !important;
      outline: 2px solid #ffcc66;
      background-color: rgba(255, 230, 180, 0.6);
      border-radius: 6px;
      padding: 4px 6px;
      position: relative;
      z-index: 10;
      transition: background-color 0.15s ease, outline 0.15s ease;
    }
  `;
  document.head.appendChild(style);

  /* ------------------------
   * 2) Normalisation & utils
   * ------------------------ */
const normalize = (str) =>
  (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")   // supprime accents
    .replace(/[^a-z0-9]/g, "")        // 🔥 supprime espaces, tirets, apostrophes, points
    .toLowerCase();

  const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[m]);

  const levenshtein = (a, b) => {
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const dp = Array.from({ length: b.length + 1 }, (_, i) =>
      Array(a.length + 1).fill(0)
    );
    for (let j = 0; j <= a.length; j++) dp[0][j] = j;
    for (let i = 0; i <= b.length; i++) dp[i][0] = i;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        dp[i][j] =
          b[i - 1] === a[j - 1]
            ? dp[i - 1][j - 1]
            : 1 + Math.min(
                dp[i - 1][j],
                dp[i][j - 1],
                dp[i - 1][j - 1]
              );
      }
    }
    return dp[b.length][a.length];
  };

  const highlight = (label, query) => {
    if (!query) return escapeHtml(label);

    const nLabel = normalize(label);
    const nQ = normalize(query);

    const idx = nLabel.indexOf(nQ);
    if (idx === -1) return escapeHtml(label);

    // ⚠️ approximation, mais suffisant visuellement
    return (
      escapeHtml(label.slice(0, idx)) +
      `<mark class="hl">${escapeHtml(label.slice(idx, idx + query.length))}</mark>` +
      escapeHtml(label.slice(idx + query.length))
    );
  };

  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];

  /* ------------------------
   * 3) Références DOM
   * ------------------------ */
  const input = $("#ville-search");
  const btn = $("#ville-search-btn");
  const clearBtn = $("#ville-clear-btn");
  const cards = $$(".letter-card");
  const count = $("#search-count");
  const noResults = $("#no-results");

  for (const a of cards) {
    if (!a.dataset.label) a.dataset.label = a.textContent.trim();
  }

  let lastQuery = "";
  let keyboardIndex = -1;
  let visibleCards = [];

  /* -----------------------------------------
   * 4) Matching (multi-mots + fuzzy)
   * ----------------------------------------- */
  const matches = (label, query) => {
    const base = normalize(label);
    const q = normalize(query);
    if (!q) return true;

    const words = q.split(/\s+/);

    for (const w of words) {
      if (!w) continue;

      if (base.includes(w)) continue;

      if (levenshtein(base.slice(0, w.length + 1), w) <= 1) continue;

      return false;
    }
    return true;
  };

  /* ------------------------
   * 5) Filtrage principal
   * ------------------------ */
  const applyFilter = (query) => {
    if (query === lastQuery) return;
    lastQuery = query;

    visibleCards = [];
    keyboardIndex = -1;

    let visible = 0;

    for (const a of cards) {
      const label = a.dataset.label;
      if (matches(label, query)) {
        a.hidden = false;
        visibleCards.push(a);
        visible++;
        a.innerHTML = highlight(label, query);
      } else {
        a.hidden = true;
        a.textContent = label;
      }
    }

    if (count) {
      count.textContent =
        !query.trim()
          ? `Toutes les ${cards.length} villes`
          : `${visible} résultat(s) sur ${cards.length}`;
    }

    if (noResults) noResults.hidden = visible > 0;
  };

  /* ------------------------
   * 6) Navigation clavier
   * ------------------------ */
  const updateKeyboardSelection = () => {
    visibleCards.forEach((a) => a.classList.remove("active-item"));
    if (keyboardIndex >= 0 && visibleCards[keyboardIndex]) {
      visibleCards[keyboardIndex].classList.add("active-item");
      visibleCards[keyboardIndex].scrollIntoView({ block: "nearest" });
    }
  };

  input?.addEventListener("keydown", (e) => {
    // ÉCHAP : doit toujours marcher, même sans résultat
    if (e.key === "Escape") {
      input.value = "";
      applyFilter("");
      return;
    }

    const total = visibleCards.length;
    if (!total) return; // si aucune ville visible, on ignore ↑ ↓ Entrée

    if (e.key === "ArrowDown") {
      e.preventDefault();
      keyboardIndex = (keyboardIndex + 1) % total;
      updateKeyboardSelection();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      keyboardIndex = (keyboardIndex - 1 + total) % total;
      updateKeyboardSelection();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target =
        keyboardIndex >= 0 ? visibleCards[keyboardIndex] : visibleCards[0];
      if (target) {
        window.location.href = target.href;
      }
    }
  });

  /* ------------------------
   * 7) Events classiques
   * ------------------------ */
  input?.addEventListener("input", () => applyFilter(input.value));
  btn?.addEventListener("click", () => applyFilter(input.value));

  clearBtn?.addEventListener("click", () => {
    input.value = "";
    input.focus();
    applyFilter("");
  });

  // Init : tout afficher
  applyFilter("");
})();
/* STYLE POUR LE COMPTEUR DE RÉSULTATS */
const styleCount = document.createElement("style");
styleCount.textContent = `
  #search-count {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 10px;
    color: #5a3d1e;
    animation: blinkResult 1.2s infinite;
  }

  @keyframes blinkResult {
    0% { opacity: 1; }
    50% { opacity: 0.45; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(styleCount);
