// /JS/liensUtiles.js
// Insère une rangée de logos sous "Liens utiles" et force une taille identique partout (desktop & mobile)

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#table-liens").forEach((tableLiens) => {
    // Conteneur
    const logosContainer = document.createElement("div");
    // Style du conteneur en pur JS (ligne horizontale, centrée, scroll si trop long)
    logosContainer.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      gap: 12px;
      overflow-x: auto;
      padding: 8px 0;
      margin-top: 8px;
      white-space: nowrap;
    `;

    // Liste des logos (avec dimensions en data)
    const logos = [
      { href: "https://www.academiedephilatelie.fr/", title: "Académie De Philatélie", src: "../Resource/academieDePhilatelie.png", "data-width": 50, "data-height": 50 },
      { href: "https://gallica.bnf.fr/", title: "Gallica", src: "../Resource/gallica.png", "data-width": 50, "data-height": 50 },
      { href: "https://unionmarcophile.fr/", title: "Union Marcophile", src: "../Resource/unionMarcophile.png", "data-width": 50, "data-height": 50 },
      { href: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal", title: "Wikipédia", src: "../Resource/Wikipedia.png", "data-width": 50, "data-height": 50 },
      { href: "https://museedelaposte.fr/fr", title: "Musée de la Poste", src: "../Resource/museeDeLaPoste.png", "data-width": 50, "data-height": 50 }
    ];

    logos.forEach((logo) => {
      const link = document.createElement("a");
      link.href = logo.href;
      link.title = logo.title;
      link.target = "_blank";
      link.rel = "noopener";

      const img = document.createElement("img");
      img.src = logo.src;
      img.alt = logo.title;

      // Récup des dimensions déclarées
      const w = Number(logo["data-width"]);
      const h = Number(logo["data-height"]);

      // Taille FIXE, prioritaire sur tout le reste (même sur mobile)
      img.style.setProperty("width",  w + "px", "important");
      img.style.setProperty("height", h + "px", "important");
      img.style.setProperty("max-width",  "none", "important");
      img.style.setProperty("max-height", "none", "important");
      img.style.setProperty("display", "block", "important"); // évite l’espace de ligne

      link.appendChild(img);
      logosContainer.appendChild(link);
    });

    tableLiens.appendChild(logosContainer);
  });
});
