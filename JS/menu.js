// =========================================
// Menu hamburger — Le Postillon (simple)
// =========================================

const hamburger = document.getElementById("hamburger");
const sideMenu  = document.getElementById("sideMenu");
const overlay   = document.getElementById("menuOverlay");
const search    = document.getElementById("menu-search");
const items     = document.querySelectorAll("#menu-list li");

/* Ouvrir le menu */
hamburger.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.hidden = false;
});

/* Fermer le menu */
overlay.addEventListener("click", closeMenu);

function closeMenu(){
  sideMenu.classList.remove("open");
  overlay.hidden = true;
}

/* Fermer quand on clique sur un lien */
sideMenu.addEventListener("click", e => {
  if(e.target.tagName === "A"){
    closeMenu();
  }
});

/* Recherche simple */
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  items.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(value)
      ? ""
      : "none";
  });
});
