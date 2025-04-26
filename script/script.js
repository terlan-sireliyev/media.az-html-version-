import { data } from '../data/blogNews.js';

// Xəbərləri göstərmək üçün funksiya
function displayNews(category) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Bütün xəbərləri təmizləyirik
    // News cards bölməsində uyğun xəbərləri göstəririk
    category.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card'); // Hər bir xəbər üçün news-card  sinifi əlavə edirik
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

displayNews(data)
