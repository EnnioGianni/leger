/* =========================================================
   Le Postillon — JS unique
   TITRE : Interactions (scrollTop, dropdown villes, popups)
   ========================================================= */

/* ---- Helpers DOM ---- */
// Récupère un élément par sélecteur
const $ = (sel, parent = document) => parent.querySelector(sel);
// Récupère une NodeList par sélecteur
const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

/* ---- Bouton Haut de page ---- */
// Récupération du bouton
const scrollBtn = $('#scrollToTopButton');

// Affiche/masque le bouton selon le défilement
window.addEventListener('scroll', () => {
  // Si on a défilé de plus de 200px, on montre le bouton
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Remonte en haut doucement au clic
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---- Dropdown de recherche de villes (démo légère) ---- */
// Champ de saisie
const villeInput = $('#villeInput');
// Conteneur des résultats
const dropdownContent = $('#dropdownContent');

// Jeu de données minimal (tu peux remplacer par tes listes complètes plus tard)
const VILLES = [
  { label: 'Abbeville', url: '../Abbeville/abbeville.html' },
  { label: 'Agde', url: '../Agde/agde.html' },
  { label: 'Abries (Dauphiné)', url: './abries.html' },
  { label: 'Aix', url: '../Aix/aix.html' }
];

// Met à jour la liste selon la saisie
function renderDropdown(filterText = '') {
  // Vide le contenu
  dropdownContent.innerHTML = '';
  // Filtre les villes (insensible à la casse, contient)
  const ft = filterText.trim().toLowerCase();
  const results = VILLES.filter(v => v.label.toLowerCase().includes(ft));
  // Si aucun résultat, on cache
  if (results.length === 0) {
    dropdownContent.classList.remove('show');
    return;
  }
  // Pour chaque résultat, créer un item cliquable
  results.forEach(v => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.setAttribute('role', 'option');
    item.textContent = v.label;
    // Navigation au clic
    item.addEventListener('click', () => {
      window.location.href = v.url;
    });
    dropdownContent.appendChild(item);
  });
  // Affiche le conteneur
  dropdownContent.classList.add('show');
}

// Écoute la saisie
villeInput.addEventListener('input', (e) => {
  renderDropdown(e.target.value);
});

// Ferme la dropdown si on clique ailleurs
document.addEventListener('click', (e) => {
  // Si clic en dehors de la zone dropdown+input, on ferme
  if (!e.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});

/* ---- Popups génériques ---- */
// Fonction pour ouvrir une popup avec contenu texte
function openPopup(id, htmlContent = '') {
  const popup = document.getElementById(id);
  if (!popup) return;
  // Insère le contenu s'il existe
  const p = $('p', popup);
  if (p) p.innerHTML = htmlContent;
  // Affiche la popup
  popup.classList.add('show');
  popup.setAttribute('aria-hidden', 'false');
}

// Fonction pour fermer une popup
function closePopup(id) {
  const popup = document.getElementById(id);
  if (!popup) return;
  popup.classList.remove('show');
  popup.setAttribute('aria-hidden', 'true');
}

// Gestion des boutons "close"
$$('.popup-content .close').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche la navigation '#'
    const id = btn.dataset.close; // data-close="popup1" etc.
    if (id) closePopup(id);
  });
});

// Ferme la popup au clic sur l’arrière-plan
$$('.popup-container').forEach(layer => {
  layer.addEventListener('click', (e) => {
    if (e.target === layer) {
      layer.classList.remove('show');
      layer.setAttribute('aria-hidden', 'true');
    }
  });
});

/* ---- Exemples d’utilisation (tu peux supprimer) ---- */
// Ouvre popup1 après 1,5s pour démonstration (commenter si inutile)
setTimeout(() => {
  // openPopup('popup1', 'Exemple d’information dans la popup 1.');
}, 1500);

/* ---- Accessibilité rapide ---- */
// Ajoute les rôles ARIA s’ils manquent (header/nav/main/footer)
(function ensureLandmarks() {
  const header = document.getElementById('mainHeader');
  if (header && !header.hasAttribute('role')) header.setAttribute('role', 'banner');

  const navs = $$('nav');
  navs.forEach(n => { if (!n.hasAttribute('role')) n.setAttribute('role', 'navigation'); });

  const main = $('main');
  if (main && !main.hasAttribute('role')) main.setAttribute('role', 'main');
})();
/* ===============================================
   Ajustement automatique de la taille des images
   selon data-width-mm (valeur en millimètres)
   =============================================== */
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("table.exemple img[data-width-mm]");

  images.forEach(img => {
    const mm = parseFloat(img.getAttribute("data-width-mm"));
    if (!isNaN(mm)) {
      // 1 mm ≈ 3.78 px (conversion standard)
      const px = mm * 3.78;

      img.style.width = px + "px";
      img.style.maxWidth = px + "px";
      img.style.height = "auto";
      img.style.display = "block";
      img.style.margin = "0 auto";
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTopButton');
  if (!scrollBtn) return; // évite toute erreur si le bouton n'est pas dans la page

  const toggleBtn = () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };

  // état initial + écouteurs
  toggleBtn();
  window.addEventListener('scroll', toggleBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ==============================
//  SYSTEME DE NOTES + POPUP
// ==============================

// Sélecteurs du popup
const overlay = document.getElementById('popupNote');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closePopup');

// --- Fonction pour ouvrir le popup ---
function ouvrirPopup(texteNote) {
    popupContent.innerHTML = texteNote;
    overlay.style.display = 'flex';
}

// --- Fonction pour fermer le popup ---
function fermerPopup() {
    overlay.style.display = 'none';
}

// --- Clic sur la croix ---
closeBtn.addEventListener('click', fermerPopup);

// --- Clic sur l'overlay (extérieur) ---
overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
        fermerPopup();
    }
});

// ==============================
//  NOTES DANS LES LIGNES
// ==============================

// Chaque ligne cliquable
document.querySelectorAll('.ligne-note').forEach(ligne => {

    // Clic sur la ligne entière
    ligne.addEventListener('click', function (e) {

        // Empêche de déclencher le lien <a> dans la cellule IMG
        if (e.target.tagName === 'A' || e.target.tagName === 'IMG') return;

        const texteNote = this.dataset.note;
        ouvrirPopup(texteNote);
    });

});

// ==============================
//  NUMÉROS DE NOTE (1), (2), ...
// ==============================

// Si tu veux que (1) (2) (3) déclenchent aussi le popup :
document.querySelectorAll('.numNote').forEach(num => {

    num.addEventListener('click', function (e) {
        e.stopPropagation(); // évite conflit avec clic sur la ligne

        const ligne = this.closest('.ligne-note');
        const texteNote = ligne.dataset.note;

        ouvrirPopup(texteNote);
    });

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



















