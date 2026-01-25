/* =========================================================
   Le Postillon — JS unique
   TITRE : Interactions (scrollTop, dropdown villes, popups)
   ========================================================= */

/* ---- Helpers DOM (ROBUSTES) ---- */
// Accepte sélecteur, document ou élément
const $ = (sel, parent = document) =>
  typeof sel === 'string' ? parent.querySelector(sel) : sel;

const $$ = (sel, parent = document) =>
  typeof sel === 'string'
    ? Array.from(parent.querySelectorAll(sel))
    : [];

/* =========================================================
   BOUTON HAUT DE PAGE
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = $('#scrollToTopButton');
  if (!scrollBtn) return;

  const toggleBtn = () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  };

  toggleBtn();
  window.addEventListener('scroll', toggleBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* =========================================================
   DROPDOWN RECHERCHE VILLES
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  const villeInput = $('#villeInput');
  const dropdownContent = $('#dropdownContent');
  if (!villeInput || !dropdownContent) return;

  const VILLES = [
    { label: 'Abbeville', url: '../Abbeville/abbeville.html' },
    { label: 'Agde', url: '../Agde/agde.html' },
    { label: 'Abries (Dauphiné)', url: './abries.html' },
    { label: 'Aix', url: '../Aix/aix.html' }
  ];

  function renderDropdown(filterText = '') {
    dropdownContent.innerHTML = '';
    const ft = filterText.trim().toLowerCase();

    const results = VILLES.filter(v =>
      v.label.toLowerCase().includes(ft)
    );

    if (!results.length) {
      dropdownContent.classList.remove('show');
      return;
    }

    results.forEach(v => {
      const item = document.createElement('div');
      item.className = 'dropdown-item';
      item.textContent = v.label;
      item.addEventListener('click', () => {
        window.location.href = v.url;
      });
      dropdownContent.appendChild(item);
    });

    dropdownContent.classList.add('show');
  }

  villeInput.addEventListener('input', e => {
    renderDropdown(e.target.value);
  });

});

/* =========================================================
   FERMETURE DES DROPDOWNS (clic extérieur)
   ========================================================= */
document.addEventListener('click', (e) => {
  if (
    e.target.closest('.dropdown') ||
    e.target.closest('#lang-switcher')
  ) return;

  document
    .querySelectorAll('.dropdown .show')
    .forEach(el => el.classList.remove('show'));
});

/* =========================================================
   POPUPS GÉNÉRIQUES
   ========================================================= */
function openPopup(id, htmlContent = '') {
  const popup = document.getElementById(id);
  if (!popup) return;

  const p = $('p', popup);
  if (p) p.innerHTML = htmlContent;

  popup.classList.add('show');
  popup.setAttribute('aria-hidden', 'false');
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (!popup) return;

  popup.classList.remove('show');
  popup.setAttribute('aria-hidden', 'true');
}

$$('.popup-content .close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const id = btn.dataset.close;
    if (id) closePopup(id);
  });
});

$$('.popup-container').forEach(layer => {
  layer.addEventListener('click', e => {
    if (e.target === layer) {
      layer.classList.remove('show');
      layer.setAttribute('aria-hidden', 'true');
    }
  });
});

/* =========================================================
   SYSTÈME DE NOTES (ISOLÉ — PAS DE CONFLIT GLOBAL)
   ========================================================= */
(() => {

  const overlayNote = document.getElementById('popupNote');
  const popupContent = document.getElementById('popupContent');
  const closeBtn = document.getElementById('closePopup');

  if (!overlayNote || !popupContent || !closeBtn) return;

  function ouvrirPopup(texte) {
    popupContent.innerHTML = texte;
    overlayNote.style.display = 'flex';
  }

  function fermerPopup() {
    overlayNote.style.display = 'none';
  }

  closeBtn.addEventListener('click', fermerPopup);

  overlayNote.addEventListener('click', e => {
    if (e.target === overlayNote) fermerPopup();
  });

  document.querySelectorAll('.ligne-note').forEach(ligne => {
    ligne.addEventListener('click', e => {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') return;
      ouvrirPopup(ligne.dataset.note);
    });
  });

  document.querySelectorAll('.numNote').forEach(num => {
    num.addEventListener('click', e => {
      e.stopPropagation();
      const ligne = num.closest('.ligne-note');
      if (ligne) ouvrirPopup(ligne.dataset.note);
    });
  });

})();

/* =========================================================
   AJUSTEMENT DES IMAGES (mm → px)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('table.exemple img[data-width-mm]')
    .forEach(img => {
      const mm = parseFloat(img.dataset.widthMm);
      if (!isNaN(mm)) {
        const px = mm * 3.78;
        img.style.width = px + 'px';
        img.style.maxWidth = px + 'px';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
      }
    });
});

/* =========================================================
   SURVOL DES LIGNES DU TABLEAU
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('table.exemple tr').forEach(ligne => {
    const cells = ligne.querySelectorAll('th, td');

    ligne.addEventListener('mouseenter', () => {
      cells.forEach(c => {
        c.dataset.oldBg = c.style.backgroundColor;
        c.dataset.oldColor = c.style.color;
        c.style.setProperty('background-color', '#c59f55', 'important');
        c.style.setProperty('color', '#000', 'important');
      });
    });

    ligne.addEventListener('mouseleave', () => {
      cells.forEach(c => {
        c.style.backgroundColor = c.dataset.oldBg || '';
        c.style.color = c.dataset.oldColor || '';
      });
    });
  });
});

/* =========================================================
   BOUTON RETOUR
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const btnRetour = document.getElementById('btnRetour');
  if (!btnRetour) return;

  btnRetour.addEventListener('click', () => {
    if (history.length > 1) history.back();
    else window.location.href = './index.html';
  });
});










/* ============================================================
   app.js — Script principal
   - Gestion dropdowns (clic extérieur)
   - Sélecteur de langue 🌍 (JS uniquement)
   - Traduction déclenchée UNIQUEMENT au chargement
     ou au changement volontaire de langue
   ============================================================ */

/* ============================================================
   1) GESTION DES DROPDOWNS (clic extérieur)
   ============================================================ */

document.addEventListener('click', (e) => {

  // Exclusions : dropdowns + sélecteur de langue
  if (
    e.target.closest('.dropdown') ||
    e.target.closest('#lang-switcher')
  ) {
    return;
  }

  // Ferme toutes les dropdowns ouvertes
  document
    .querySelectorAll('.dropdown .show')
    .forEach(el => el.classList.remove('show'));
});


/* ============================================================
   2) LANG SWITCHER — TRADUCTION GLOBALE (JS ONLY)
   ============================================================ */

(() => {

  /* ---------------- CONFIGURATION ---------------- */

  const LANGS = {
    fr: "Français",
    en: "Anglais",
    it: "Italien",
    es: "Espagnol",
    de: "Allemand",
    pt: "Portugais",
    nl: "Néerlandais",
    pl: "Polonais",
    ar: "Arabe",
    zh: "Chinois"
  };

  const STORAGE_KEY = "site_lang";
  const API = "https://translate.googleapis.com/translate_a/single";
  const IGNORE = "script,style,code,pre,noscript,textarea,input,[data-no-translate]";
  const ATTRS = ["title", "aria-label", "placeholder", "alt"];

  const originalText = new Map();
  const originalAttrs = new Map();
  let busy = false;


  /* ---------------- LANG INIT ---------------- */

  const getStoredLang = () => {
    try {
      const l = localStorage.getItem(STORAGE_KEY);
      return LANGS[l] ? l : null;
    } catch {
      return null;
    }
  };

  const getBrowserLang = () => {
    const l = (navigator.language || "fr").split("-")[0];
    return LANGS[l] ? l : "fr";
  };

  const initialLang = getStoredLang() || getBrowserLang();


  /* ---------------- UI + CSS ---------------- */

  function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher {
        position: fixed !important;
        top: 55px !important;
        right: 90px !important;
        z-index: 2147483647 !important;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(255,255,255,.96);
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 0 4px 14px rgba(0,0,0,.15);
        font: 13px system-ui, sans-serif;
      }

      #lang-switcher select {
        border: none;
        background: transparent;
        cursor: pointer;
      }

      #lang-switcher select:focus {
        outline: none;
      }
    `;
    document.head.appendChild(style);
  }

  function buildUI() {
    const box = document.createElement('div');
    box.id = 'lang-switcher';
    box.setAttribute('aria-label', 'Sélecteur de langue');

    const globe = document.createElement('span');
    globe.textContent = '🌍';

    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Choisir la langue');

    Object.entries(LANGS).forEach(([k, v]) => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = v;
      if (k === initialLang) opt.selected = true;
      select.appendChild(opt);
    });

    box.append(globe, select);
    return { box, select };
  }

  function mountUI(ui) {
    if (document.getElementById('lang-switcher')) return;
    document.body.appendChild(ui.box);
  }


  /* ---------------- COLLECTE DOM ---------------- */

  function isTextOK(node) {
    if (!node.nodeValue.trim()) return false;
    if (node.parentElement.closest(IGNORE)) return false;
    if (/^[\d\s.,:/()%+-]+$/.test(node.nodeValue)) return false;
    return true;
  }

  function collectTextNodes() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) {
      if (isTextOK(walker.currentNode)) {
        nodes.push(walker.currentNode);
      }
    }
    return nodes;
  }

  function cacheText() {
    collectTextNodes().forEach(n => {
      if (!originalText.has(n)) {
        originalText.set(n, n.nodeValue);
      }
    });
  }

  function cacheAttrs() {
    document.querySelectorAll('*').forEach(el => {
      if (el.closest(IGNORE)) return;

      ATTRS.forEach(attr => {
        const v = el.getAttribute(attr);
        if (!v) return;

        if (!originalAttrs.has(el)) {
          originalAttrs.set(el, {});
        }

        if (!originalAttrs.get(el)[attr]) {
          originalAttrs.get(el)[attr] = v;
        }
      });
    });
  }


  /* ---------------- TRADUCTION ---------------- */

  async function translate(str, lang) {
    const r = await fetch(
      `${API}?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(str)}`
    );
    const j = await r.json();
    return j[0].map(x => x[0]).join('');
  }

  async function applyTranslation(lang) {
    if (!LANGS[lang]) return;

    // Empêche toute retraduction inutile
    if (lang === document.documentElement.lang) return;

    busy = true;

    cacheText();
    cacheAttrs();

    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    for (const [node, original] of originalText.entries()) {
      if (node.isConnected) {
        node.nodeValue = await translate(original, lang);
      }
    }

    for (const [el, attrs] of originalAttrs.entries()) {
      if (!el.isConnected) continue;

      for (const a in attrs) {
        el.setAttribute(a, await translate(attrs[a], lang));
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}

    busy = false;
  }


  /* ---------------- OBSERVER (SÉCURISÉ) ---------------- */

  const observer = new MutationObserver(mutations => {
    if (busy) return;

    const lang = getStoredLang();
    if (!lang) return;

    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (
          node.nodeType === Node.TEXT_NODE &&
          isTextOK(node)
        ) {
          originalText.set(node, node.nodeValue);

          translate(node.nodeValue, lang).then(t => {
            if (node.isConnected) {
              node.nodeValue = t;
            }
          });
        }
      });
    });
  });


  /* ---------------- INIT ---------------- */

  document.addEventListener('DOMContentLoaded', () => {

    injectCSS();

    const ui = buildUI();
    mountUI(ui);

    ui.select.addEventListener('change', e => {
      applyTranslation(e.target.value);
    });

    // Traduction UNIQUE au chargement
    applyTranslation(initialLang);

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });

})();
/* ============================================================
 * PAGER MOBILE — ALIGNEMENT FORCÉ EN LIGNE (JS UNIQUEMENT)
 * Corrige les structures HTML verticales imbriquées
 * ============================================================ */

(() => {
  "use strict";

  const pager = document.querySelector("nav.pager");
  if (!pager) return;

  const mq = window.matchMedia("(max-width: 720px)");

  let row = null;
  let saved = [];

  function enableMobile() {
    if (row) return;

    // Création de la ligne unique
    row = document.createElement("div");
    row.setAttribute("data-mobile-row", "true");

    Object.assign(row.style, {
      display: "flex",
      alignItems: "center",
      gap: "0px",
      width: "100%",
      padding: "8px",
      boxSizing: "border-box"
    });

    // Sélection LARGE : boutons + input, même enfouis
    const elements = pager.querySelectorAll(
      "button, a, input#villeInput"
    );

    elements.forEach(el => {
      // Sauvegarde position originale
      saved.push({
        el,
        parent: el.parentNode,
        next: el.nextSibling
      });

      // Neutralisation complète
      el.style.display = "flex";
      el.style.width = "auto";
      el.style.margin = "0";

      // Extraction
      row.appendChild(el);
    });

    // Styles spécifiques
    elements.forEach(el => {
      if (el.id === "villeInput") {
        Object.assign(el.style, {
          flex: "1",
          minWidth: "0",
          height: "44px"
        });
      } else {
        Object.assign(el.style, {
          minWidth: "44px",
          height: "44px",
          padding: "0 12px",
          alignItems: "center",
          justifyContent: "center"
        });
      }
    });

    // Insertion en tête du pager
    pager.prepend(row);
  }

  function disableMobile() {
    if (!row) return;

    // Restauration exacte
    saved.forEach(item => {
      item.parent.insertBefore(item.el, item.next);
      item.el.removeAttribute("style");
    });

    row.remove();
    row = null;
    saved = [];
  }

  function apply() {
    mq.matches ? enableMobile() : disableMobile();
  }

  apply();
  mq.addEventListener("change", apply);
})();






/* ============================================================
 * NAV VILLES — HARMONISATION TOTALE (JS UNIQUEMENT)
 * Compatible Bootstrap pagination
 * Référence visuelle : 3e image
 * ============================================================ */

(() => {
  "use strict";

  const mq = window.matchMedia("(max-width: 720px)");

  /* ============================================================
     1) HARMONISATION VISUELLE DE LA BARRE
     ============================================================ */

  function harmoniseNavVilles() {

    const nav = document.querySelector("nav");
    const pagination = nav?.querySelector(".pagination");
    if (!pagination) return;

    // Force une seule ligne, centrée
    Object.assign(pagination.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",
      gap: "8px",
      width: "100%",
      margin: "0 auto"
    });

    // Tous les li.page-item
    pagination.querySelectorAll(".page-item").forEach(li => {
      Object.assign(li.style, {
        float: "none",
        margin: "0",
        flexShrink: "0"
      });
    });

    // Tous les liens type bouton
    pagination.querySelectorAll(".page-link").forEach(link => {
      Object.assign(link.style, {
        height: "40px",
        minWidth: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        fontSize: "16px",
        whiteSpace: "nowrap"
      });
    });

    // Bloc dropdown (ville)
    const dropdown = pagination.querySelector(".dropdown");
    if (dropdown) {
      Object.assign(dropdown.style, {
        display: "flex",
        alignItems: "center",
        gap: "6px"
      });
    }

    // Champ input
    const input = document.getElementById("villeInput");
    if (input) {
      Object.assign(input.style, {
        height: "40px",
        minWidth: "160px",
        maxWidth: "420px",
        flex: "1",
        padding: "0 12px",
        borderRadius: "10px",
        fontSize: "15px"
      });
    }

    // Lien "Elle s'affichera ici"
    const villeLink = document.getElementById("villeLink");
    if (villeLink) {
      Object.assign(villeLink.style, {
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap"
      });
    }
  }

  /* ============================================================
     2) DROPDOWN VILLES — VISIBILITÉ FORCÉE SUR MOBILE
     ============================================================ */

  function fixDropdown() {

    const input = document.getElementById("villeInput");
    const dropdown = document.getElementById("dropdownContent");
    if (!input || !dropdown) return;

    if (mq.matches) {
      const rect = input.getBoundingClientRect();

      Object.assign(dropdown.style, {
        position: "fixed",
        left: rect.left + "px",
        top: (rect.bottom + 6) + "px",
        width: rect.width + "px",
        maxHeight: "50vh",
        overflowY: "auto",
        zIndex: "99999",
        background: "#f7e7c2",
        boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
        borderRadius: "10px"
      });
    } else {
      dropdown.removeAttribute("style");
    }
  }

  /* ============================================================
     3) INITIALISATION
     ============================================================ */

  document.addEventListener("DOMContentLoaded", () => {
    harmoniseNavVilles();
    fixDropdown();
  });

  window.addEventListener("resize", () => {
    harmoniseNavVilles();
    fixDropdown();
  });

  document.addEventListener("click", fixDropdown);
  window.addEventListener("scroll", fixDropdown, true);
  mq.addEventListener("change", fixDropdown);

})();
