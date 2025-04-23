import { data } from "../data/blogNews.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const newsContainer = document.getElementById("news-container");
    const closeSearchİnput = document.getElementById("closeSearchİnput");

    // Səhifə ilk yükləndikdə bütün xəbərləri göstər
    displayNews(data);

    // Axtarış inputunu aç və ya gizlət
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


    // Canlı axtarış
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();

        const filteredNews = query
            ? data.filter((item) => item.title.toLowerCase().includes(query))
            : data;

        showFilteredNews(filteredNews);
    });

    // Enter düyməsi basıldıqda
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) console.log("Axtarılan:", query);
        }
    });

    function displayNews(newsList) {
        showFilteredNews(newsList);
    }

    function showFilteredNews(filteredData) {
        newsContainer.innerHTML = "";

        filteredData.slice(0, 12).forEach((item) => {
            const newsCard = document.createElement("div");
            newsCard.classList.add("news-card");

            newsCard.innerHTML = `
                <a href="./singlePage.html" class="cardLink">
                    <div class="card">
                        <img src="${item.img}" alt="${item.title}"/>
                        <h3>${item.title}</h3>
                        <div class="centerCardCategory">${item.category} | ${item.time}</div>
                    </div>
                </a>
            `;

            newsContainer.appendChild(newsCard);
        });
    }
});
