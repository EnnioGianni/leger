document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     CONFIGURATION DES LIENS (CHEMINS ABSOLUS)
     ===================================================== */

  const MENU_LINKS = [
    { label: "Accueil", href: "./index.html" },

    { label: "Villes A", href: "./Villes_A/sommaireA.html" },
    { label: "Villes B", href: "./Villes_B/sommaireB.html" },
    { label: "Villes C", href: "/Villes_C/sommaireC.html" },
    { label: "Villes D", href: "/Villes_D/sommaireD.html" },
    { label: "Villes E", href: "/Villes_E/sommaireE.html" },
    { label: "Villes F", href: "/Villes_F/sommaireF.html" },
    { label: "Villes G", href: "/Villes_G/sommaireG.html" },
    { label: "Villes H", href: "/Villes_H/sommaireH.html" },
    { label: "Villes I", href: "/Villes_I/sommaireI.html" },
    { label: "Villes J", href: "/Villes_J/sommaireJ.html" },
    { label: "Villes K", href: "/Villes_K/sommaireK.html" },
    { label: "Villes L", href: "/Villes_L/sommaireL.html" },
    { label: "Villes M", href: "/Villes_M/sommaireM.html" },
    { label: "Villes N", href: "/Villes_N/sommaireN.html" },
    { label: "Villes O", href: "/Villes_O/sommaireO.html" },
    { label: "Villes P", href: "/Villes_P/sommaireP.html" },
    { label: "Villes Q", href: "/Villes_Q/sommaireQ.html" },
    { label: "Villes R", href: "/Villes_R/sommaireR.html" },
    { label: "Villes S", href: "/Villes_S/sommaireS.html" },
    { label: "Villes T", href: "/Villes_T/sommaireT.html" },
    { label: "Villes U", href: "/Villes_U/sommaireU.html" },
    { label: "Villes V", href: "/Villes_V/sommaireV.html" },
    { label: "Villes W", href: "/Villes_W/sommaireW.html" },
    { label: "Villes X", href: "/Villes_X/sommaireX.html" },
    { label: "Villes Y", href: "/Villes_Y/sommaireY.html" },
    { label: "Villes Z", href: "/Villes_Z/sommaireZ.html" }
  ];

  /* =====================================================
     INJECTION DU MENU DANS LE DOM
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
     INSERTION DES LIENS DANS LE MENU
     ===================================================== */

  MENU_LINKS.forEach(item => {
    const li = document.createElement("li");
    li.className = "menu-item";
    li.innerHTML = `<a class="menu-link" href="${item.href}">${item.label}</a>`;
    menuList.appendChild(li);
  });

  /* =====================================================
     OUVERTURE / FERMETURE DU MENU
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
     FERMETURE AUTOMATIQUE AU CLIC SUR UN LIEN
     ===================================================== */

  menuRoot.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      delete menuRoot.dataset.open;
    });
  });

  /* =====================================================
     GESTION DU LIEN ACTIF (PAGE COURANTE)
     ===================================================== */

  const currentPath = location.pathname.replace(/\/+$/, "");

  menuRoot.querySelectorAll(".menu-link").forEach(link => {

    const linkPath = new URL(
      link.getAttribute("href"),
      location.origin
    ).pathname.replace(/\/+$/, "");

    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }

  });

});
