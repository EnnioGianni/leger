// ===== Interactions spécifiques à la page Lettres anciennes =====
document.addEventListener('DOMContentLoaded', () => {
  // Bouton “haut de page”
  const scrollBtn = document.getElementById('scrollToTopButton');
  if (scrollBtn) {
    const toggleBtn = () => {
      scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    toggleBtn();
    window.addEventListener('scroll', toggleBtn);
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // (Option) logique d’affichage des prix par data-id
  // document.querySelectorAll('.prixProduit').forEach(td => {
  //   const id = td.getAttribute('data-id');
  //   // ... récupère/forme le prix ...
  //   // td.textContent = prixFormate;
  // });
});



// ==============================
// SURVOL DES LIGNES DU TABLEAU .exemple
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // On prend toutes les lignes du tableau .exemple
  const lignes = document.querySelectorAll("table.exemple tr");

  lignes.forEach(ligne => {
    const cellules = ligne.querySelectorAll("th, td");

    // Survol : on fonce la couleur de toute la ligne
    ligne.addEventListener("mouseenter", () => {
      cellules.forEach(cell => {
        cell.dataset.oldBg = getComputedStyle(cell).backgroundColor;
        cell.dataset.oldColor = getComputedStyle(cell).color;

        cell.style.setProperty("background-color", "#c59f55", "important"); // doré foncé
        cell.style.setProperty("color", "#000000", "important");             // texte noir lisible
      });
    });

    // Sortie : on remet les couleurs d'origine
    ligne.addEventListener("mouseleave", () => {
      cellules.forEach(cell => {
        const oldBg = cell.dataset.oldBg || "transparent";
        const oldColor = cell.dataset.oldColor || "";

        cell.style.setProperty("background-color", oldBg, "important");
        cell.style.setProperty("color", oldColor, "important");
      });
    });

  });
});

