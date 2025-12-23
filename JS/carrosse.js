// /JS/carrosse.js
// Applique un fond "carrosse" sur toutes les pages.
// Personnalisation possible via attributs sur <body> :
//  - data-no-carrosse="true"   -> désactive le fond sur cette page
//  - data-bg-url=".../monimage.jpg" -> change l'image de fond pour cette page

(function () {
  const applyBackground = (url) => {
    const b = document.body;
    b.style.minHeight = "100vh";
    b.style.margin = "0";
    b.style.background = `url("${url}") center center / cover no-repeat fixed`;
    b.style.backgroundAttachment = "fixed";
  };

  const onReady = () => {
    const body = document.body;
    if (!body) return;

    // Option pour désactiver sur une page spécifique
    if (body.dataset.noCarrosse === "true") return;

    // Image par défaut (chemin absolu -> marche depuis n'importe quel dossier)
    const DEFAULT_URL = "/laPosteDeLancienneFrance/Resource/carrosseAvecPhoto.jpg";

    // Autoriser un override par page : <body data-bg-url="/chemin/vers/autre.jpg">
    const customUrl = body.dataset.bgUrl;
    const bgUrl = customUrl && customUrl.trim() ? customUrl.trim() : DEFAULT_URL;

    // Appliquer immédiatement
    applyBackground(bgUrl);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
