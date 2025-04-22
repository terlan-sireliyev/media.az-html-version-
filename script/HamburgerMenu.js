const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// İstəyə görə, başqa yerə kliklədikdə menyunu bağlamaq üçün:
window.addEventListener("click", (e) => {
    if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active");
    }
});
