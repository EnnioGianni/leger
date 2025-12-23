// =====================================================================
//  ISOLATION — le script ne s'exécute QUE sur la page .page-proposition
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {

    if (!document.body.classList.contains('page-proposition')) {
        console.warn("❌ Script Proposition ignoré : la page n’a pas la classe .page-proposition");
        return;
    }

    console.log("💠 Script Proposition activé.");

    const form = document.getElementById('imageForm');
    const gallery = document.getElementById('gallery');
    const pasteArea = document.getElementById('pasteArea');
    const imageFile = document.getElementById('imageFile');

    // Chargement initial des données
    const images = JSON.parse(localStorage.getItem('images')) || [];

    // -----------------------------------------------------------------
    //  AFFICHAGE DES IMAGES
    // -----------------------------------------------------------------
    function displayImages() {
        gallery.innerHTML = '';

        images.forEach((img, index) => {
            const card = document.createElement('div');
            card.classList.add('image-card');

            card.innerHTML = `
                <img src="${img.data}" alt="Image">
                <p><strong>Description :</strong> ${img.description}</p>
                <p><strong>Coordonnées :</strong> ${img.coordinates}</p>
                <button class="delete-btn" data-index="${index}">Supprimer</button>
            `;

            gallery.appendChild(card);
        });

        // Gestion des boutons supprimer
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index, 10);
                deleteImage(index);
            });
        });
    }

    // -----------------------------------------------------------------
    //  SUPPRESSION D’UNE IMAGE
    // -----------------------------------------------------------------
    function deleteImage(index) {
        images.splice(index, 1);
        localStorage.setItem('images', JSON.stringify(images));
        displayImages();
    }

    // -----------------------------------------------------------------
    //  AJOUT D’UNE IMAGE (formulaire)
    // -----------------------------------------------------------------
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const coordinates = document.getElementById('coordinates').value;

        const file = imageFile.files[0];
        if (!file) {
            alert("Veuillez sélectionner ou coller une image.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {
            const newImage = {
                description,
                coordinates,
                data: event.target.result
            };

            images.push(newImage);
            localStorage.setItem('images', JSON.stringify(images));

            form.reset();
            displayImages();
        };

        reader.readAsDataURL(file);
    });

    // -----------------------------------------------------------------
    //  AJOUT D’UNE IMAGE (collage Ctrl+V)
    // -----------------------------------------------------------------
    pasteArea.addEventListener('paste', (event) => {
        const items = event.clipboardData.items;

        for (let item of items) {
            if (item.type.startsWith('image/')) {
                const file = item.getAsFile();
                const reader = new FileReader();

                reader.onload = function(e) {
                    const newImage = {
                        description: "Image collée",
                        coordinates: "N/A",
                        data: e.target.result
                    };

                    images.push(newImage);
                    localStorage.setItem('images', JSON.stringify(images));
                    displayImages();
                };

                reader.readAsDataURL(file);
            }
        }
    });

    // -----------------------------------------------------------------
    //  CHARGEMENT INITIAL DES IMAGES
    // -----------------------------------------------------------------
    displayImages();
});


// =====================================================================
//  BOUTON ← RETOUR (version stable, autonome et compatible everywhere)
// =====================================================================
(function() {
    const btn = document.getElementById('btnRetour');
    if (!btn) return;

    const FALLBACK_URL = "../../index.html";

    btn.addEventListener('click', () => {
        try {
            const ref = document.referrer || "";
            const sameOrigin = ref && new URL(ref).origin === window.location.origin;

            if (sameOrigin && window.history.length > 1) {
                window.history.back();
                return;
            }
        } catch (e) {
            console.warn("Erreur dans le retour historique :", e);
        }

        // Fallback si pas d’historique
        window.location.href = FALLBACK_URL;
    });
})();
