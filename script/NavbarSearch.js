import { data } from "../data/blogNews.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const closeSearchİnput = document.getElementById("closeSearchİnput");






    searchIcon.addEventListener("click", () => {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "flex";
            const input = searchInput.querySelector("input");
            if (input) input.focus();
        } else {
            searchInput.style.display = "none";
        }
    });

    closeSearchİnput.addEventListener("click", () => {
        searchInput.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (
            !searchInput.contains(e.target) &&
            !searchIcon.contains(e.target)
        ) {
            searchInput.style.display = "none";
        }
    });


});
