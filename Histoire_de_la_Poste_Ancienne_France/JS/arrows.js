// Ordre des pages
const pages = [
    "index.html",
    "1_protoPoste.html",
    "2_posteRoyale.html",
    "3_xvie.html",
    "4_xviie_reformes.html",
    "5_louvois.html",
    "6_fermes_generales.html",
    "7_tarifs_reglements.html",
    "8_reseau_et_metiers.html",
    "9_vers_1791.html"
];

const current = window.location.pathname.split("/").pop() || "index.html";
const index = pages.indexOf(current);

window.prevPage = pages[index - 1] || null;
window.nextPage = pages[index + 1] || null;

document.addEventListener("DOMContentLoaded", () => {
    const prev = document.getElementById("prevArrow");
    const next = document.getElementById("nextArrow");

    if (prev) {
        if (window.prevPage) {
            prev.href = window.prevPage;
            prev.classList.remove("disabled");
        } else {
            prev.href = "#";
            prev.classList.add("disabled");
        }
    }

    if (next) {
        if (window.nextPage) {
            next.href = window.nextPage;
            next.classList.remove("disabled");
        } else {
            next.href = "#";
            next.classList.add("disabled");
        }
    }
});
