// /JS/pagination.js
document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  // Fonction : rendre toutes les cellules égales
  function normalizePaginationHeight() {
    const items = pagination.querySelectorAll(".page-item, .page-link, #villeInput");
    let maxHeight = 0;

    // Mesure de la hauteur la plus grande
    items.forEach((el) => {
      el.style.height = "auto";
      maxHeight = Math.max(maxHeight, el.offsetHeight);
    });

    // Application à tous
    items.forEach((el) => {
      el.style.height = maxHeight + "px";
    });
  }

  // Initialisation + ajustement responsive
  normalizePaginationHeight();
  window.addEventListener("resize", normalizePaginationHeight);
});
