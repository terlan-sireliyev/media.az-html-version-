import { data } from "../data/blogNews.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");
    const newsContainer = document.getElementById("news-container");

    // Səhifə ilk yükləndikdə bütün xəbərləri göstər
    displayNews(data);

    // Axtarış inputunu aç və ya gizlət
    searchIcon.addEventListener("click", () => {
        const isHidden = searchInput.style.display === "none";
        searchInput.style.display = isHidden ? "inline-block" : "none";
        if (isHidden) searchInput.focus();
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
