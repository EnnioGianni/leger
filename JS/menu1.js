// =========================================
// MENU1 — spécifique à cette page
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");
  const search = document.getElementById("menu-search");
  const items = document.querySelectorAll("#menu-list li");

  if (!hamburger || !menu || !overlay) {
    console.warn("menu1.js : éléments manquants");
    return;
  }

  function openMenu(){
    menu.classList.add("open");
    overlay.hidden = false;
  }

  function closeMenu(){
    menu.classList.remove("open");
    overlay.hidden = true;
  }

  hamburger.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);

  // Ferme quand on clique sur un lien
  menu.addEventListener("click", e => {
    if (e.target.tagName === "A") closeMenu();
  });

  // Recherche simple
  if (search) {
    search.addEventListener("input", () => {
      const v = search.value.toLowerCase();
      items.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(v)
          ? ""
          : "none";
      });
    });
  }

});
