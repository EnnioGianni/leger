// /JS/largeurImages.js — v2 : respect strict de data-width-mm même sur mobile
(function () {
  const MM_TO_PX = 3.78; // approx. 96dpi => 1mm ≈ 3.78px

  function applyWidth(img) {
    const mm = parseFloat(img.getAttribute('data-width-mm'));
    if (isNaN(mm)) return;
    const px = mm * MM_TO_PX;

    // Styles inline + priorité pour éviter qu'un CSS mobile n'écrase
    img.style.setProperty('width', px + 'px', 'important');
    img.style.setProperty('max-width', px + 'px', 'important');
    img.style.setProperty('height', 'auto', 'important');
    img.style.setProperty('display', 'block', 'important');
    // Optionnel centrage
    img.style.setProperty('margin', '0 auto', 'important');
  }

  function applyAll() {
    document.querySelectorAll('img[data-width-mm]').forEach(applyWidth);
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAll);
  } else {
    applyAll();
  }

  // Réapplique si l’orientation change / resize
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(applyAll, 100);
  });

  // Réapplique si les images se chargent tardivement
  window.addEventListener('load', applyAll);
})();
