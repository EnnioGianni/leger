// ===============================
// Le Postillon — postillon.js
// ===============================

// ----- Modale + Fade-in du site -----
(() => {
  const body = document.body;
  const MODAL_SELECTOR = '.modalDialog';
  const PANEL_SELECTOR = '.modalDialog__panel';
  const CLOSE_SELECTOR = '.modal-close, .close';
  const FOCUSABLE = 'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])';
  const FIRST_KEY = 'welcomeSeen';

  const lastFocusMap = new WeakMap();

  // Marque les zones du site pour le fade (déjà dans le HTML via .page-fade, mais sécurité)
  function markPageForFade(){
    ['.header','main','.News-footer'].forEach(sel => {
      const el = document.querySelector(sel);
      if (el && !el.classList.contains('page-fade')) el.classList.add('page-fade');
    });
  }
  function revealPage(){
    document.querySelectorAll('.page-fade').forEach(el => el.classList.add('is-visible'));
  }

  function getPanel(modal){ return modal.querySelector(PANEL_SELECTOR) || modal; }
  function getFocusableEls(root){
    return Array.from(root.querySelectorAll(FOCUSABLE))
      .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
  }

  function openModal(modal){
    if (!modal) return;
    lastFocusMap.set(modal, document.activeElement);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    body.classList.add('prevent-background-scroll');
    const first = getFocusableEls(modal)[0] || getPanel(modal);
    first?.focus({ preventScroll:true });
    modal.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onKeydown, true);
  }

  function closeModal(modal){
    if (!modal) return;
    const panel = getPanel(modal);
    const usesAnimation = getComputedStyle(panel).animationName !== 'none';

    const reallyClose = () => {
      modal.classList.remove('closing','is-open');
      modal.setAttribute('aria-hidden','true');
      body.classList.remove('prevent-background-scroll');
      modal.removeEventListener('click', onBackdropClick);
      document.removeEventListener('keydown', onKeydown, true);
      const prev = lastFocusMap.get(modal);
      if (prev && typeof prev.focus === 'function') prev.focus({ preventScroll:true });
      // Affiche le site en fondu
      revealPage();
    };

    if (usesAnimation) {
      modal.classList.add('closing');
      panel.addEventListener('animationend', reallyClose, { once:true });
    } else {
      reallyClose();
    }
  }

  function onBackdropClick(e){
    const modal = e.currentTarget;
    if (e.target === modal) closeModal(modal);
  }

  function onKeydown(e){
    const modal = document.querySelector(`${MODAL_SELECTOR}.is-open`);
    if (!modal) return;

    if (e.key === 'Escape') { e.preventDefault(); closeModal(modal); return; }

    if (e.key === 'Tab') {
      const focusables = getFocusableEls(modal);
      if (focusables.length === 0){ e.preventDefault(); getPanel(modal).focus(); return; }
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  }

  // Ouvre la modale d'accueil la toute première fois, sinon révèle directement le site
  document.addEventListener('DOMContentLoaded', () => {
    markPageForFade();
    const welcome = document.getElementById('welcomeModal');
    const alreadySeen = localStorage.getItem(FIRST_KEY) === '1';

    if (!alreadySeen) {
      openModal(welcome);
      localStorage.setItem(FIRST_KEY, '1');
    } else {
      revealPage();
    }
  });

  // Fermeture via bouton .modal-close / .close
  document.addEventListener('click', (e) => {
    const btn = e.target.closest(CLOSE_SELECTOR);
    if (!btn) return;
    const modal = btn.closest(MODAL_SELECTOR);
    if (modal){
      e.preventDefault();
      closeModal(modal);
    }
  });
})();

// ----- Bouton “Remonter en haut” -----
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTopButton');
  if (!scrollBtn) return;

  const toggleBtn = () => { scrollBtn.style.display = (window.scrollY > 200) ? 'block' : 'none'; };
  toggleBtn();
  window.addEventListener('scroll', toggleBtn, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ----- Parallaxe très légère du fond derrière les cellules -----
(() => {
  const section = document.querySelector('.table-letters');
  if (!section) return;

  // Désactive si préférence "réduire les animations"
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  const onScroll = () => {
    // Parallaxe douce : 0.08 => très subtil
    const y = Math.round(window.scrollY * 0.08);
    section.style.setProperty('--bgY', `${y}px`);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
/* =========================================================================
   Titre : Réouverture systématique de la modale d’accueil à chaque visite
   Fichier : JS/postillon.js
   Objet : Afficher la modale #welcomeModal à CHAQUE arrivée sur la page,
           y compris lors d’un retour via l’historique (bfcache).
   Prérequis HTML :
     - <div id="welcomeModal" class="modalDialog" aria-hidden="true" ...>
     - <a id="enterSite" class="close modal-close" href="#">Accéder au site</a>
   ========================================================================= */

(function () {
  // --- Sélecteurs des éléments de la modale
  const modal = document.getElementById('welcomeModal');         // Conteneur de la modale
  const panel = modal ? modal.querySelector('.modalDialog__panel') : null; // Panneau "document"
  const closeBtn = document.getElementById('enterSite');         // Bouton/ lien de fermeture

  // --- Sécurité : si la modale n’existe pas, on sort proprement
  if (!modal || !panel || !closeBtn) return;

  // --- IMPORTANT : si tu avais un mécanisme "vu une fois", on le neutralise
  // Supprime tout flag éventuel laissé par une version précédente.
  try {
    localStorage.removeItem('welcomeSeen');
    sessionStorage.removeItem('welcomeSeen');
    // Si tu utilisais un cookie, pense à le supprimer côté serveur ou via document.cookie.
  } catch (_) { /* no-op */ }

  // --- Fonction : ouvrir la modale proprement et accessiblement
  function openModal() {
    // Marqueurs d’état (à adapter à ton CSS si besoin)
    modal.classList.add('is-open');

    // Accessibilité : annonce au lecteur d’écran que la modale est visible
    modal.setAttribute('aria-hidden', 'false');

    // Optionnel : empêcher le scroll de la page derrière
    document.body.style.overflow = 'hidden';

    // Focus initial sur le panneau (ou le titre si tu préfères)
    // Cela “piège” naturellement le focus dans la modale pour la plupart des cas simples
    // (pour un vrai focus trap complet, ajouter un cycle tab/shift+tab si besoin).
    panel.setAttribute('tabindex', '-1');
    panel.focus();
  }

  // --- Fonction : fermer la modale proprement
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // rétablit le scroll
    // Rendre le focus à un élément logique (le logo, par ex.)
    const returnTarget = document.querySelector('.logo-link') || document.body;
    returnTarget.focus({ preventScroll: true });
  }

  // --- Fermeture par clic sur le bouton prévu
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault(); // évite le saut de page dû à href="#"
    closeModal();
  });

  // --- Fermeture au clavier (Escape)
  modal.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      closeModal();
    }
  });

  // --- OUVERTURE À CHAQUE ARRIVÉE SUR LA PAGE -----------------------------
  // 1) Au chargement classique (arrivée directe / F5 / lien)
  document.addEventListener('DOMContentLoaded', openModal);

  // 2) Au retour via l’historique (bfcache) : l’événement "pageshow" est la clé.
  //    On ouvre la modale QUOI QU’IL ARRIVE, que la page soit restaurée (persisted)
  //    ou non. Ainsi, elle s’affichera même en revenant en arrière.
  window.addEventListener('pageshow', function () {
    openModal();
  });

  // --- (Optionnel) Fermeture si on clique en dehors du panneau
  modal.addEventListener('click', function (e) {
    // Si on a cliqué sur l’overlay (zone grisée) et pas à l'intérieur du panneau, on ferme
    if (e.target === modal) {
      closeModal();
    }
  });

})();
