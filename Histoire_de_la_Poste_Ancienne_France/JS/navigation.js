/* ======================================================
   MENU HAMBURGER
====================================================== */

const menu = document.getElementById("sideMenu");
const btn = document.getElementById("menuBtn");

// Ouvrir / fermer le menu
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

// Fermer en cliquant ailleurs
document.addEventListener("click", () => menu.classList.remove("open"));
menu.addEventListener("click", (e) => e.stopPropagation());


/* ======================================================
   SOUS-MENUS : OUVERTURE MULTI-NIVEAUX
====================================================== */

document.querySelectorAll(".has-sub > span").forEach(span => {
    span.addEventListener("click", (e) => {
        e.stopPropagation();

        const parent = span.parentElement;
        const sub = span.nextElementSibling;
        const isOpen = sub.style.display === "block";

        // Si on clique sur un chapitre → n’affecte PAS les autres chapitres
        if (parent.classList.contains("chapter")) {
            // Fermer seulement les autres chapitres du même groupe
            parent.parentElement.querySelectorAll(".chapter .sub").forEach(s => {
                if (s !== sub) s.style.display = "none";
            });
        }

        // Si on clique sur un titre principal → ferme les autres groupes seulement
        if (parent.classList.contains("group")) {
            document.querySelectorAll(".group .sub").forEach(s => {
                if (s !== sub) s.style.display = "none";
            });
        }

        // Basculer l'ouverture du sous-menu cliqué
        sub.style.display = isOpen ? "none" : "block";

        // Gestion des couleurs actives
        document.querySelectorAll(".active-title").forEach(a => a.classList.remove("active-title"));
        if (!isOpen) parent.classList.add("active-title");

    });
});


/* ======================================================
   COULEUR DES LIENS AU CLIC
====================================================== */

document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".side-menu a").forEach(a => a.classList.remove("active-article"));
        link.classList.add("active-article");
        menu.classList.remove("open");
    });
});


/* ======================================================
   OUVERTURE AUTOMATIQUE DU BON GROUPE / CHAPITRE
====================================================== */

const current = window.location.pathname.split("/").pop();

document.querySelectorAll(".side-menu a").forEach(link => {
    if (link.href.includes(current)) {

        // Lien actif
        link.classList.add("active-article");

        // Chapitre parent actif
        const chapter = link.closest(".chapter");
        if (chapter) {
            chapter.classList.add("active-title");
            const sub = chapter.querySelector(".sub");
            if (sub) sub.style.display = "block";
        }

        // Groupe parent actif
        const group = link.closest(".group");
        if (group) {
            group.classList.add("active-title");
            const sub = group.querySelector(".sub");
            if (sub) sub.style.display = "block";
        }
    }
});
