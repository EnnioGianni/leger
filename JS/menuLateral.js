/* =========================================================
   menuLateral.js — Menu latéral global A → Z
   Auteur : Gianni
   Usage : injection automatique sur toutes les pages
   ========================================================= */

(function () {

  /* ================================
     CONFIGURATION
     ================================ */

  // Ajuste ce chemin si nécessaire selon la profondeur
  const BASE_PATH = '../../';

  const menuItems = [
    { label: 'Cote des lettres Anciennes', url: 'lettresAnciennes.html' },
    { label: 'Proposition', url: 'Proposition/index.html' },

    { label: 'Sommaire A', url: 'Villes_A/sommaireA.html' },
    { label: 'Sommaire B', url: 'Villes_B/sommaireB.html' },
    { label: 'Sommaire C', url: 'Villes_C/C_sommaire.html' },
    { label: 'Sommaire D', url: 'Villes_D/D_sommaire.html' },
    { label: 'Sommaire E', url: 'Villes_E/E_sommaire.html' },
    { label: 'Sommaire F', url: 'Villes_F/F_sommaire.html' },
    { label: 'Sommaire G', url: 'Villes_G/G_sommaire.html' },
    { label: 'Sommaire H', url: 'Villes_H/H_sommaire.html' },
    { label: 'Sommaire I', url: 'Villes_I/I_sommaire.html' },
    { label: 'Sommaire J', url: 'Villes_J/J_sommaire.html' },
    { label: 'Sommaire K', url: 'Villes_K/K_sommaire.html' },
    { label: 'Sommaire L', url: 'Villes_L/L_sommaire.html' },
    { label: 'Sommaire M', url: 'Villes_M/M_sommaire.html' },
    { label: 'Sommaire N', url: 'Villes_N/N_sommaire.html' },
    { label: 'Sommaire O', url: 'Villes_O/O_sommaire.html' },
    { label: 'Sommaire P', url: 'Villes_P/P_sommaire.html' },
    { label: 'Sommaire Q', url: 'Villes_Q/Q_sommaire.html' },
    { label: 'Sommaire R', url: 'Villes_R/R_sommaire.html' },
    { label: 'Sommaire S', url: 'Villes_S/S_sommaire.html' },
    { label: 'Sommaire T', url: 'Villes_T/T_sommaire.html' },
    { label: 'Sommaire U', url: 'Villes_U/U_sommaire.html' },
    { label: 'Sommaire V', url: 'Villes_V/V_sommaire.html' },
    { label: 'Sommaire W', url: 'Villes_W/W_sommaire.html' },
    { label: 'Sommaire X', url: 'Villes_X/X_sommaire.html' },
    { label: 'Sommaire Y', url: 'Villes_Y/Y_sommaire.html' },
    { label: 'Sommaire Z', url: 'Villes_Z/Z_sommaire.html' }
  ];

  /* ================================
     CRÉATION DU MENU
     ================================ */

  const nav = document.createElement('nav');
  nav.id = 'sideMenu';
  nav.className = 'side-menu';
  nav.setAttribute('aria-hidden', 'true');

  /* Champ de recherche */
  const search = document.createElement('input');
  search.type = 'search';
  search.id = 'menu-search';
  search.placeholder = 'Rechercher un sommaire…';
  search.setAttribute('aria-label', 'Rechercher un sommaire');

  /* Liste */
  const ul = document.createElement('ul');
  ul.id = 'menu-list';

  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = BASE_PATH + item.url;
    a.textContent = item.label;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(search);
  nav.appendChild(ul);

  /* Injection dans le DOM */
  document.body.appendChild(nav);

  /* ================================
     RECHERCHE DYNAMIQUE
     ================================ */

  search.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const links = ul.querySelectorAll('li');

    links.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(value) ? '' : 'none';
    });
  });

})();
