/* =========================================================
   File: /JS/pub_popup.js
   Feature: Fenêtre publicitaire rotative
   ========================================================= */

(function () {
  "use strict";

  /* =========================
     CONFIGURATION DES PUBLICITÉS
     ========================= */
  const ads = [
    {
      image: '../../../La Poste/Images/in_34.jpg',
      title: 'Vente à prix nets !',
      d1: "📅 Vente à prix net – Paris",
      d2: "Collection exceptionnelle de lettres anciennes et timbres.",
      d3: "Lots rares – quantités limitées.",
      link: 'https://www.letimbreclassique.com/ltc-parcourir-lots/vpn-2024/vpn-2024/'
    },
    {
      image: '../../../La Poste/Images/IvertTellier.png',
      title: 'Yvert & Tellier',
      d1: "Le site officiel de référence",
      d2: "Catalogues, timbres, monnaies",
      d3: "Visuels précis de chaque timbre",
      link: 'https://www.yvert.com/'
    },
    {
      image: '../../../La Poste/Images/L_EchoPhil.png',
      title: "L'Écho de la Timbrologie",
      d1: "Le journal philatélique de référence",
      d2: "Actualités, interviews, analyses",
      d3: "Abonnement papier disponible",
      link: 'http://www.echo-de-la-timbrologie.com/store/'
    },
    {
      image: '../../../La Poste/Images/feteDuTimbre2025.jpg',
      title: 'Fête du Timbre 2025',
      d1: "📅 8–9 mars 2025",
      d2: "📍 Montpellier – Salle Nougaret",
      d3: "Expositions, ventes, oblitérations",
      link: 'https://www.asso-philatelique-montpellier.fr/evenement/fete-du-timbre/8/'
    },
    {
      image: '../../../La Poste/Images/Decembre2024.jpg',
      title: 'Timbres Magazine',
      d1: "Mensuel philatélique français",
      d2: "Actualités & études",
      d3: "Numéro de décembre",
      link: 'https://timbresmag.fr/'
    }
    // 👉 Tu peux ajouter jusqu’à 10 pubs ou plus ici
  ];

  /* =========================
     INDEX SAUVEGARDÉ
     ========================= */
  let currentIndex = parseInt(localStorage.getItem("pubIndex"), 10);
  if (isNaN(currentIndex)) currentIndex = 0;

  function saveIndex() {
    localStorage.setItem("pubIndex", currentIndex);
  }

  /* =========================
     CRÉATION DE LA POPUP
     ========================= */
  const popup = document.createElement("div");
  popup.id = "pubPopup";
  popup.style.cssText = `
    position:fixed;
    bottom:20px;
    right:20px;
    width:340px;
    background:#f9a15d;
    border-radius:10px;
    box-shadow:0 10px 30px rgba(0,0,0,.35);
    padding:16px;
    z-index:9999;
    display:none;
  `;
  document.body.appendChild(popup);

  /* Bouton fermer */
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.title = "Fermer";
  closeBtn.style.cssText = `
    position:absolute;
    top:6px;
    right:10px;
    font-size:30px;
    cursor:pointer;
    font-weight:bold;
  `;
  popup.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    popup.remove();
    stopRotation();
  });

  /* Image */
  const img = document.createElement("img");
  img.style.cssText = `
    width:100%;
    border-radius:6px;
    margin-bottom:10px;
  `;
  popup.appendChild(img);

  /* Textes */
  const title = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  [title, p1, p2, p3].forEach(el => {
    el.style.margin = "6px 0";
    el.style.fontSize = "14px";
  });

  popup.append(title, p1, p2, p3);

  /* Lien */
  const link = document.createElement("a");
  link.textContent = "➡ En savoir plus";
  link.target = "_blank";
  link.rel = "noopener";
  link.style.cssText = `
    display:block;
    margin-top:10px;
    text-align:center;
    font-weight:bold;
    color:#003366;
    text-decoration:none;
  `;
  popup.appendChild(link);

  /* Flèches */
  const prev = document.createElement("span");
  const next = document.createElement("span");

  prev.textContent = "◀";
  next.textContent = "▶";

  [prev, next].forEach(el => {
    el.style.cssText = `
      position:absolute;
      top:45%;
      font-size:22px;
      cursor:pointer;
      user-select:none;
    `;
    popup.appendChild(el);
  });

  prev.style.left = "8px";
  next.style.right = "8px";

  /* =========================
     RENDU DE LA PUB
     ========================= */
  function render() {
    const ad = ads[currentIndex];

    /* Image spécifique à chaque pub */
    if (ad.image) {
      img.src = ad.image;
      img.alt = ad.title || "Publicité philatélique";
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    title.textContent = ad.title || "";
    p1.textContent = ad.d1 || "";
    p2.textContent = ad.d2 || "";
    p3.textContent = ad.d3 || "";
    link.href = ad.link || "#";

    saveIndex();
  }

  /* =========================
     NAVIGATION MANUELLE
     ========================= */
  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + ads.length) % ads.length;
    render();
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % ads.length;
    render();
  });

  /* =========================
     ROTATION AUTOMATIQUE
     ========================= */
  let timer = null;

  function startRotation() {
    timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % ads.length;
      render();
    }, 10000);
  }

  function stopRotation() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  popup.addEventListener("mouseenter", stopRotation);
  popup.addEventListener("mouseleave", startRotation);

  /* =========================
     OUVERTURE APRÈS 5s
     ========================= */
  setTimeout(() => {
    popup.style.display = "block";
    render();
    startRotation();
  }, 5000);

})();
