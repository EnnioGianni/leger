// =========================================
// Menu hamburger — Le Postillon (simple)
// VERSION ISOLÉE (sans conflit global)
// =========================================

(() => {

  const hamburger = document.getElementById("hamburger");
  const sideMenu  = document.getElementById("sideMenu");
  const overlay   = document.getElementById("menuOverlay");
  const search    = document.getElementById("menu-search");
  const items     = document.querySelectorAll("#menu-list li");

  if (!hamburger || !sideMenu || !overlay) return;

  /* Ouvrir le menu */
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.hidden = false;
  });

  /* Fermer le menu */
  function closeMenu() {
    sideMenu.classList.remove("open");
    overlay.hidden = true;
  }

  overlay.addEventListener("click", closeMenu);

  /* Fermer quand on clique sur un lien */
  sideMenu.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      closeMenu();
    }
  });

  /* Recherche simple */
  if (search) {
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();
      items.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(value)
          ? ""
          : "none";
      });
    });
  }

})();
(function () {
  const script = document.createElement("script");
  script.src = "../../JS/app.js";
  script.defer = true;
  document.head.appendChild(script);
})();
