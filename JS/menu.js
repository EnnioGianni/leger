/* ===== /JS/menu.js — Menu latéral automatique & idempotent ===== */
document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     1) Détection de la racine du site (compatible GitHub Pages)
     ============================================================ */
  const ROOT = location.pathname.includes("/Ville_")
    ? location.pathname.split("/Ville_")[0] + "/"
    : "./";

  /* ============================================================
     2) Liens centralisés (ALIGNÉS AVEC TON ARBORESCENCE)
     ============================================================ */
const MENU_LINKS = [
  { label: "Accueil", href: "/leger/index.html" },
  { label: "Lettres anciennes", href: "/leger/lettresAnciennes.html" },
  { label: "Proposition", href: "/leger/Proposition/index.html" },
  { label: "Villes A", href: "/leger/Ville_A/sommaireA.html" },
  { label: "Villes B", href: "/leger/Ville_B/sommaireB.html" },
  { label: "Villes C", href: "/leger/Ville_C/sommaireC.html" }
];

  /* ============================================================
     3) Injection du menu s’il n’existe pas
     ============================================================ */
  let menuRoot = document.querySelector("[data-menu-root]");
  if (!menuRoot) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="menu-root" data-menu-root>
        <div class="menu-overlay" data-menu-overlay></div>
        <nav class="menu-panel" role="dialog" aria-modal="true"
             aria-label="Menu principal" data-menu-panel>
          <div class="menu-header">
            <h2 class="menu-title">Navigation</h2>
            <button class="menu-close" type="button"
                    aria-label="Fermer le menu" data-menu-close>×</button>
          </div>
          <ul class="menu-list" data-menu-list></ul>
        </nav>
      </div>
    `);
    menuRoot = document.querySelector("[data-menu-root]");
  }
  if (!menuRoot) return;

  /* ============================================================
     4) Remplissage du menu
     ============================================================ */
  const ul = menuRoot.querySelector("[data-menu-list]");
  ul.innerHTML = "";

  MENU_LINKS.forEach(({ label, href }) => {
    const li = document.createElement("li");
    li.className = "menu-item";

    const a = document.createElement("a");
    a.className = "menu-link";
    a.textContent = label;
    a.href = href;

    li.appendChild(a);
    ul.appendChild(li);
  });

  /* ============================================================
     5) Ouverture / fermeture
     ============================================================ */
  const overlay = menuRoot.querySelector("[data-menu-overlay]");
  const panel   = menuRoot.querySelector("[data-menu-panel]");
  const btnClose= menuRoot.querySelector("[data-menu-close]");
  let btnOpens  = document.querySelectorAll("[data-menu-open]");

  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  const openMenu = () => {
    menuRoot.dataset.open = "true";
    htmlEl.style.overflow = "hidden";
    bodyEl.style.overflow = "hidden";
    (panel.querySelector(".menu-link") || btnClose).focus();
  };

  const closeMenu = () => {
    delete menuRoot.dataset.open;
    htmlEl.style.overflow = "";
    bodyEl.style.overflow = "";
  };

  btnOpens.forEach(b => b.addEventListener("click", openMenu));
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menuRoot.dataset.open) closeMenu();
  });

  panel.addEventListener("click", e => {
    if (e.target.closest("a.menu-link")) closeMenu();
  });

  /* ============================================================
     6) Surlignage page active
     ============================================================ */
  const current = location.pathname.replace(/\/+$/, "");
  menuRoot.querySelectorAll(".menu-link").forEach(a => {
    if (a.pathname === current) {
      a.classList.add("active-link");
      a.setAttribute("aria-current", "page");
    }
  });

  /* ============================================================
     7) Bouton menu fallback si absent
     ============================================================ */
  if (btnOpens.length === 0) {
    const header = document.querySelector(".header");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-toggle";
    btn.dataset.menuOpen = "";
    btn.setAttribute("aria-label", "Ouvrir le menu");
    btn.textContent = "☰";

    if (header) {
      header.style.position ||= "relative";
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
