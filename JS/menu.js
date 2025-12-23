document.addEventListener("DOMContentLoaded", () => {

  const MENU_LINKS = [
    { label: "Accueil", href: "index.html" },
    { label: "Villes A", href: "Ville_A/sommaireA.html" },
    { label: "Villes B", href: "Ville_B/sommaireB.html" },
    { label: "Villes C", href: "Ville_C/sommaireC.html" }
  ];

  /* Injection menu */
  document.body.insertAdjacentHTML("beforeend", `
    <div class="menu-root" data-menu-root>
      <div class="menu-overlay" data-menu-overlay></div>
      <nav class="menu-panel" aria-label="Menu principal" data-menu-panel>
        <div class="menu-header">
          <h2 class="menu-title">Navigation</h2>
          <button class="menu-close" data-menu-close>×</button>
        </div>
        <ul class="menu-list" data-menu-list></ul>
      </nav>
    </div>
  `);

  const menuRoot = document.querySelector("[data-menu-root]");
  const list = menuRoot.querySelector("[data-menu-list]");
  const overlay = menuRoot.querySelector("[data-menu-overlay]");
  const closeBtn = menuRoot.querySelector("[data-menu-close]");
  const openBtns = document.querySelectorAll("[data-menu-open]");

  MENU_LINKS.forEach(l => {
    const li = document.createElement("li");
    li.className = "menu-item";
    li.innerHTML = `<a class="menu-link" href="${l.href}">${l.label}</a>`;
    list.appendChild(li);
  });

  const openMenu = () => menuRoot.dataset.open = "true";
  const closeMenu = () => delete menuRoot.dataset.open;

  openBtns.forEach(b => b.addEventListener("click", openMenu));
  overlay.addEventListener("click", closeMenu);
  closeBtn.addEventListener("click", closeMenu);

  /* Lien actif */
  const current = location.pathname.split("/").pop();
  menuRoot.querySelectorAll(".menu-link").forEach(a => {
    if (a.getAttribute("href") === current) {
      a.classList.add("active-link");
    }
  });

});
