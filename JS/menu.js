/* ===== /JS/menu.js — Menu latéral automatique & idempotent ===== */
document.addEventListener("DOMContentLoaded", () => {
  /* --- Liens centralisés (édite seulement ici) --- */
  const MENU_LINKS = [
    { label: "Accueil", href: "./index.html" },
    { label: "Cote des lettres anciennes", href: "./lettresAnciennes.html" },
    { label: "Proposition", href: "./proposition/index.html" },
    { label: "Villes_A", href: "./sommaireA.html" },
    { label: "Villes_A", href: "./sommaireA.html" },
    { label: "Villes_B", href: "./sommaireB.html" },
  ];

  /* --- 1) Injecter le menu s’il n’existe pas --- */
  let menuRoot = document.querySelector("[data-menu-root]");
  if (!menuRoot) {
    const html = `
      <div class="menu-root" data-menu-root>
        <div class="menu-overlay" data-menu-overlay></div>
        <nav class="menu-panel" role="dialog" aria-modal="true" aria-label="Menu principal" data-menu-panel>
          <div class="menu-header">
            <h2 class="menu-title">Navigation</h2>
            <button class="menu-close" type="button" aria-label="Fermer le menu" data-menu-close>×</button>
          </div>
          <ul class="menu-list" data-menu-list></ul>
        </nav>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", html);
    menuRoot = document.querySelector("[data-menu-root]");
  }
  if (!menuRoot) return;

  /* --- 2) Remplir les liens du menu --- */
  const ul = menuRoot.querySelector("[data-menu-list]") || menuRoot.querySelector(".menu-list");
  if (!ul) return;
  ul.innerHTML = "";
  MENU_LINKS.forEach(({ label, href }) => {
    const li = document.createElement("li");
    li.className = "menu-item";
    const a = document.createElement("a");
    a.className = "menu-link";
    a.textContent = label;
    a.href = href; // chemins absolus ⇒ fonctionnent depuis n'importe quel dossier
    li.appendChild(a);
    ul.appendChild(li);
  });

  /* --- 3) Sélecteurs & fonctions open/close --- */
  const overlay = menuRoot.querySelector("[data-menu-overlay]");
  const panel   = menuRoot.querySelector("[data-menu-panel]");
  const btnClose= menuRoot.querySelector("[data-menu-close]");
  // supporte plusieurs boutons d’ouverture dans la page
  let btnOpens  = document.querySelectorAll("[data-menu-open]");
  // compat rétro si tu utilises encore data-menu-toggle par erreur
  if (btnOpens.length === 0) btnOpens = document.querySelectorAll("[data-menu-toggle]");

  if (!overlay || !panel || !btnClose) return;

  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  const openMenu = () => {
    menuRoot.setAttribute("data-open", "true");
    const prevY = window.scrollY;
    htmlEl.dataset.prevScrollY = String(prevY);
    htmlEl.style.overflow = "hidden";
    bodyEl.style.overflow = "hidden";
    (panel.querySelector(".menu-link") || btnClose).focus();
  };
  const closeMenu = () => {
    menuRoot.removeAttribute("data-open");
    htmlEl.style.overflow = "";
    bodyEl.style.overflow = "";
    if (htmlEl.dataset.prevScrollY) {
      window.scrollTo(0, Number(htmlEl.dataset.prevScrollY));
      delete htmlEl.dataset.prevScrollY;
    }
  };

  btnOpens.forEach(b => b.addEventListener("click", openMenu));
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuRoot.getAttribute("data-open") === "true") closeMenu();
  });
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a.menu-link");
    if (a) closeMenu();
  });

  /* --- 4) Surligner la page active --- */
  const normalize = (p) => {
    try {
      let n = new URL(p, location.origin + location.pathname).pathname.replace(/\/+$/, "");
      if (n.endsWith("/index.html")) n = n.slice(0, -"/index.html".length);
      return n || "/";
    } catch { return p; }
  };
  const current = normalize(location.pathname);
  menuRoot.querySelectorAll(".menu-link").forEach(a => {
    const target = normalize(a.getAttribute("href") || "");
    if (target === current) {
      a.setAttribute("aria-current", "page");
      a.classList.add("active-link");
    }
  });

  /* --- 5) Bouton fallback si absent (sécurité) --- */
  if (btnOpens.length === 0) {
    const header = document.querySelector(".header");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-toggle";
    btn.setAttribute("data-menu-open", "");
    btn.setAttribute("aria-label", "Ouvrir le menu");
    btn.textContent = "☰";
    if (header) {
      header.style.position = header.style.position || "relative";
      btn.style.position = "absolute";
      btn.style.left = "12px";
      btn.style.top = "8px";
      header.appendChild(btn);
    } else {
      btn.style.position = "fixed";
      btn.style.left = "16px";
      btn.style.bottom = "70px";
      btn.style.zIndex = "1600";
      document.body.appendChild(btn);
    }
    btn.addEventListener("click", openMenu);
  }
});
