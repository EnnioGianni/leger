/* =========================================================
   File: /JS/header_actions.js
   Feature: Boutons déroulants (VSO / Magasins / Événements)
   ========================================================= */

(function () {
  "use strict";

  const header =
    document.querySelector(".lp-header") ||
    document.querySelector("header");

  if (!header) return;

  const actions = document.createElement("div");
  actions.className = "lp-header-actions";

  function createDropdown(icon, label, links) {
    const wrap = document.createElement("div");
    wrap.className = "lp-dropdown-wrap";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lp-rect-btn";
    btn.innerHTML = `${icon} <span>${label}</span>`;

    const menu = document.createElement("div");
    menu.className = "lp-dropdown lp-hidden";

    // liens NORMAUX, externes
    menu.innerHTML = links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.text}</a>`
      )
      .join("");

    // 🔒 empêche la fermeture AVANT le clic
    menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      document
        .querySelectorAll(".lp-dropdown")
        .forEach((m) => m.classList.add("lp-hidden"));

      menu.classList.toggle("lp-hidden");
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    return wrap;
  }

  /* =========================
     BOUTONS
     ========================= */

  actions.appendChild(
    createDropdown("🏠", "Maisons VSO", [
      { text: "Delcampe", href: "https://www.delcampe.net" },
      { text: "Drouot", href: "https://www.drouot.com" },
      { text: "Catawiki", href: "https://www.catawiki.com" },
      { text: "eBay", href: "https://www.ebay.fr" }
    ])
  );

  actions.appendChild(
    createDropdown("🏬", "Magasins philatéliques", [
      { text: "Yvert & Tellier", href: "https://www.yvert.com" },
      { text: "Cérès Philatélie", href: "https://www.ceresphilat.fr" },
      { text: "Le Timbre Classique", href: "https://www.letimbreclassique.com" },
      { text: "Calves Philatélie", href: "https://www.calves.fr" }
    ])
  );

  actions.appendChild(
    createDropdown("🎪", "Salons & événements", [
      { text: "Salon philatélique d’Automne", href: "https://www.ffap.net" },
      { text: "Paris-Philex", href: "https://www.parisphilex.fr" },
      { text: "Bourse aux timbres", href: "https://www.ffap.net/bourses" },
      { text: "Expositions FFAP", href: "https://www.ffap.net/expositions" }
    ])
  );

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".lp-dropdown")
      .forEach((m) => m.classList.add("lp-hidden"));
  });

  header.appendChild(actions);
})();
