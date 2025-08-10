const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerClose = document.getElementById("hamburgerClose");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


window.addEventListener("click", (e) => {
    if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active");
    }
});
hamburgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
