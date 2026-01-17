/* ===========================================================
   Bouton "Haut de page" avec animation jQuery
   Version stabilisée — sans conflit avec $
   =========================================================== */

(() => {

  // Vérifie que jQuery est bien chargé
  if (!window.jQuery) {
    console.warn('bouttonHautDePage.js : jQuery non chargé');
    return;
  }

  const jq = window.jQuery;

  jq(document).ready(function () {

    // --- Création / récupération du bouton "↑"
    let $scrollBtn = jq('#scrollToTopButton');

    // S'il n'existe pas encore dans le HTML, on le crée
    if ($scrollBtn.length === 0) {
      jq('body').append('<button id="scrollToTopButton" title="Haut de page"></button>');
      $scrollBtn = jq('#scrollToTopButton');
    }

    // --- Apparition / disparition selon le scroll
    jq(window).on('scroll', function () {
      if (jq(this).scrollTop() > 200) {
        $scrollBtn.stop(true, true).fadeIn(400);
      } else {
        $scrollBtn.stop(true, true).fadeOut(400);
      }
    });

    // --- Action au clic : remontée fluide
    $scrollBtn.on('click', function () {
      jq('html, body').animate({ scrollTop: 0 }, 1000, 'swing');
      return false;
    });

  });

})();
