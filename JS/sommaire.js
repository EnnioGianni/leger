// ===== Menu latéral — compatible avec le patch CSS et la structure data-menu-* =====
document.addEventListener('DOMContentLoaded', () => {
  const root   = document.querySelector('[data-menu-root]');
  const overlay= root?.querySelector('[data-menu-overlay]');
  const panel  = root?.querySelector('[data-menu-panel]');
  const btnClose = root?.querySelector('[data-menu-close]');
  const btnOpen  = document.querySelector('[data-menu-open]'); // bouton dans le header
  const linksInPanel = root?.querySelectorAll('.menu-link');

  if (!root || !overlay || !panel || !btnClose || !btnOpen) {
    // Si une page n'a pas le menu, on sort proprement
    return;
  }

  // Utilitaires
  const html = document.documentElement;
  const body = document.body;

  const getFocusable = () => {
    return panel.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
  };

  const openMenu = () => {
    root.setAttribute('data-open', 'true');
    panel.setAttribute('aria-hidden', 'false');

    // Bloque le scroll de fond
    const prevScrollY = window.scrollY;
    html.dataset.prevScrollY = String(prevScrollY);
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    // Focus dans le panneau
    const focusables = getFocusable();
    (focusables[0] || btnClose).focus();
  };

  const closeMenu = () => {
    root.setAttribute('data-open', 'false');
    panel.setAttribute('aria-hidden', 'true');

    // Rétablit le scroll
    html.style.overflow = '';
    body.style.overflow = '';
    if (html.dataset.prevScrollY) {
      window.scrollTo(0, Number(html.dataset.prevScrollY));
      delete html.dataset.prevScrollY;
    }

    // Rend le focus au bouton d'ouverture
    btnOpen.focus();
  };

  // Ouverture / fermeture
  btnOpen.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Ferme au clic sur un lien du menu
  if (linksInPanel?.length) {
    linksInPanel.forEach(a => {
      a.addEventListener('click', () => {
        // Si navigation intra-page, on ferme quand même
        closeMenu();
      });
    });
  }

  // Échap pour fermer + focus trap dans le panneau
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = Array.from(getFocusable());
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // Empêche le clic à l’intérieur du panneau de déclencher une fermeture involontaire
  panel.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
