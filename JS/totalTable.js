// ======= AJOUT AUTOMATIQUE D’UNE LIGNE "TOTAL" À CHAQUE TABLE =======
document.addEventListener("DOMContentLoaded", () => {

  /**
   * Additionne les valeurs d'une colonne donnée et insère une ligne "Total".
   * @param {number} columnIndex - index de la colonne à additionner (commence à 0)
   */
  function ajouterLigneTotal(columnIndex) {
    const tables = document.querySelectorAll("table");

    tables.forEach(table => {
      let somme = 0;
      const lignes = table.querySelectorAll("tbody tr");

      // 🔹 Additionne toutes les valeurs numériques de la colonne
      lignes.forEach(ligne => {
        const cellule = ligne.cells[columnIndex];
        if (cellule) {
          const texte = cellule.textContent.trim().replace(/[^\d.,-]/g, "").replace(",", ".");
          const valeur = parseFloat(texte);
          if (!isNaN(valeur)) somme += valeur;
        }
      });

      // 🔹 Création de la ligne "Total"
      const ligneTotal = document.createElement("tr");
      ligneTotal.style.backgroundColor = "palegreen";
      ligneTotal.style.fontWeight = "bold";

      const nbColonnes = table.rows[0]?.cells.length || columnIndex + 1;

      for (let i = 0; i < nbColonnes; i++) {
        const cellule = document.createElement("td");
        cellule.style.textAlign = "center";

        if (i === columnIndex - 1) {
          cellule.textContent = "Total";
          cellule.style.color = "red";
        } else if (i === columnIndex) {
          cellule.textContent = `${somme.toFixed(2)} €`;
          cellule.style.color = "red";
        }
        ligneTotal.appendChild(cellule);
      }

      // 🔹 Insère avant "Liens utiles" ou à la fin si non trouvé
      const ligneLiens = Array.from(lignes).find(l =>
        l.textContent.toLowerCase().includes("liens utiles")
      );

      if (ligneLiens) {
        ligneLiens.parentNode.insertBefore(ligneTotal, ligneLiens);
      } else {
        table.querySelector("tbody").appendChild(ligneTotal);
      }
    });
  }

  // Appel pour additionner la colonne 8 (index 7)
  ajouterLigneTotal(7);
});








