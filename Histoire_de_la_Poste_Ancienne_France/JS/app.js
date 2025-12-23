const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 150 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
