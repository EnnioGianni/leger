/* ===========================================================
   Bouton "Haut de page" avec jQuery-style animation
   Version : Gianni / 2025
   =========================================================== */

$(document).ready(function() {

  // --- Création / récupération du bouton "↑"
  const $scrollBtn = $('#scrollToTopButton');

  // S'il n'existe pas encore dans le HTML, on le crée automatiquement
  if ($scrollBtn.length === 0) {
    $('body').append('<button id="scrollToTopButton" title="Haut de page"></button>');
  }

  // --- Style d’apparition / disparition selon le scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
      $('#scrollToTopButton').fadeIn(400);  // apparition douce
    } else {
      $('#scrollToTopButton').fadeOut(400); // disparition douce
    }
  });

  // --- Action au clic : remontée fluide vers le haut
  $('#scrollToTopButton').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'swing'); // 1 seconde de remontée
    return false; // empêche tout comportement par défaut
  });

});
