document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     CONFIGURATION
     ===================================================== */

  const BASE = "/leger";

  const MENU_LINKS = [
    { label: "Accueil",  href: `${BASE}./index.html` },

    // A
    { label: "Villes A", href: `${BASE}../sommaireA.html` },

    // B (seul dossier au pluriel)
    { label: "Villes B", href: `${BASE}./Villes_B/sommaireB.html` },

    { label: "Villes C", href: `${BASE}./Ville_C/sommaireC.html` },
    { label: "Villes D", href: `${BASE}/Ville_D/sommaireD.html` },
    { label: "Villes E", href: `${BASE}/Ville_E/sommaireE.html` },
    { label: "Villes F", href: `${BASE}/Ville_F/sommaireF.html` },
    { label: "Villes G", href: `${BASE}/Ville_G/sommaireG.html` },
    { label: "Villes H", href: `${BASE}/Ville_H/sommaireH.html` },
    { label: "Villes I", href: `${BASE}/Ville_I/sommaireI.html` },
    { label: "Villes J", href: `${BASE}/Ville_J/sommaireJ.html` },
    { label: "Villes K", href: `${BASE}/Ville_K/sommaireK.html` },
    { label: "Villes L", href: `${BASE}/Ville_L/sommaireL.html` },
    { label: "Villes M", href: `${BASE}/Ville_M/sommaireM.html` },
    { label: "Villes N", href: `${BASE}/Ville_N/sommaireN.html` },
    { label: "Villes O", href: `${BASE}/Ville_O/sommaireO.html` },
    { label: "Villes P", href: `${BASE}/Ville_P/sommaireP.html` },
    { label: "Villes Q", href: `${BASE}/Ville_Q/sommaireQ.html` },
    { label: "Villes R", href: `${BASE}/Ville_R/sommaireR.html` },
    { label: "Villes S", href: `${BASE}/Ville_S/sommaireS.html` },
    { label: "Villes T", href: `${BASE}/Ville_T/sommaireT.html` },
    { label: "Villes U", href: `${BASE}/Ville_U/sommaireU.html` },
    { label: "Villes V", href: `${BASE}/Ville_V/sommaireV.html` },
    { label: "Villes W", href: `${BASE}/Ville_W/sommaireW.html` },
    { label: "Villes X", href: `${BASE}/Ville_X/sommaireX.html` },
    { label: "Villes Y", href: `${BASE}/Ville_Y/sommaireY.html` },
    { label: "Villes Z", href: `${BASE}/Ville_Z/sommaireZ.html` }
  ];

  /* =====================================================
     INJECTION DU MENU
     ===================================================== */

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="menu-root" data-menu-root>
      <div class="menu-overlay" data-menu-overlay></div>

      <nav class="menu-panel" aria-label="Menu principal">
        <div class="menu-header">
          <h2 class="menu-title">Navigation</h2>
          <button
            class="menu-close"
            type="button"
            data-menu-close
            aria-label="Fermer le menu">×</button>
        </div>

        <ul class="menu-list" data-menu-list></ul>
      </nav>
    </div>
    `
  );

  const menuRoot = document.querySelector("[data-menu-root]");
  const menuList = menuRoot.querySelector("[data-menu-list]");

  /* =====================================================
     INSERTION DES LIENS
     ===================================================== */

  MENU_LINKS.forEach(item => {
    const li = document.createElement("li");
    li.className = "menu-item";
    li.innerHTML = `<a class="menu-link" href="${item.href}">${item.label}</a>`;
    menuList.appendChild(li);
  });

  /* =====================================================
     OUVERTURE / FERMETURE
     ===================================================== */

  document.addEventListener("click", (e) => {

    if (e.target.closest("[data-menu-open]")) {
      menuRoot.dataset.open = "true";
      return;
    }

    if (
      e.target.closest("[data-menu-close]") ||
      e.target.closest("[data-menu-overlay]")
    ) {
      delete menuRoot.dataset.open;
    }
  });

  /* =====================================================
     FERMETURE AU CLIC SUR LIEN
     ===================================================== */

  menuRoot.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      delete menuRoot.dataset.open;
    });
  });

  /* =====================================================
     LIEN ACTIF
     ===================================================== */

  const currentPath = location.pathname.replace(/\/+$/, "");

  menuRoot.querySelectorAll(".menu-link").forEach(link => {
    const linkPath = new URL(link.getAttribute("href"), location.origin)
      .pathname
      .replace(/\/+$/, "");

    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }
  });

});
