import { data } from '../data/blogNews.js';


document.addEventListener('DOMContentLoaded', () => {
    // const navUl = document.querySelector('nav ul');

    // // Unikal kateqoriyaları əldə edirik
    // const categories = ['all', ...new Set(data.map(item => item.category))];

    // // Hər kateqoriya üçün bir <li> elementi yaradırıq
    // categories.forEach(category => {
    //     const li = document.createElement('li');
    //     li.id = category;
    //     li.textContent = category === 'all' ? 'Hamısı' : capitalize(category);
    //     if (category === 'all') li.classList.add('active'); // default olaraq "Hamısı" aktiv olsun
    //     // navUl.appendChild(li);
    //     const firstChild = navUl.firstChild;  // Əgər valideyndə uşaq varsa

    //     navUl.insertBefore(li, firstChild);
    // });

    // İlk olaraq "Hamısı" kateqoriyasını avtomatik göstəririk
    displayNews('all');

    // Hər bir navbar item-ə klik hadisəsi əlavə edirik
    document.querySelectorAll('.navList-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const category = e.target.id;
            document.querySelectorAll('.navList-item').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            displayNews(category);
        });
    });
});

// İlk hərfi böyük edən funksiya
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// Xəbərləri göstərmək üçün funksiya
function displayNews(category) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Bütün xəbərləri təmizləyirik

    // Seçilən kateqoriya üzrə xəbərləri göstəririk
    let filteredNews = [];


    if (category === 'all') {
        filteredNews = data;
    } else {
        filteredNews = data.filter(news => news.category === category);
    }
    const slicedNews = filteredNews.slice(0, 12);

    // News cards bölməsində uyğun xəbərləri göstəririk
    slicedNews.forEach(item => {
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


// Xəbərləri göstərmək üçün funksiya
// function displayData(category) {
//     const newsContainer = document.getElementById('right-sidebar');
//     newsContainer.innerHTML = ''; // Əvvəlcə təmizləyirik

//     // 2-li qruplarla dövrə salırıq
//     for (let i = 0; i < category.length; i += 4) {
//         // Hər qrup üçün başlıq əlavə edirik
//         const titleElement = document.createElement('h3');
//         titleElement.textContent = `Başlıq-${i / 2 + 1}`; // Başlıq nömrəsi
//         newsContainer.appendChild(titleElement);

//         // 2-lik slice edirik
//         const group = category.slice(i, i + 4);

//         // Həmin 2-li xəbərləri göstəririk
//         group.forEach(item => {
//             const newsCard = document.createElement('div');
//             newsCard.innerHTML = `
//                 <div class="sidebar-card">
//                     <img src="${item.img}" alt="${item.title}"/>
//                     <div>${item.title}</div>
//                 </div>
//             `;
//             newsContainer.appendChild(newsCard);
//         });
//     }
// }

// displayData(data);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function updateDropdown() {
//     const screenWidth = window.innerWidth;
//     const dropdown = document.getElementById('dropdown');
//     const navUl = document.querySelector('#navList');
//     const items = Array.from(navUl.children);

//     let itemsToMove = 0;

//     if (screenWidth < 650) {
//         itemsToMove = 5;
//     }
//     else if (screenWidth < 750) {
//         itemsToMove = 8;
//     }
//     else if (screenWidth < 880) {
//         itemsToMove = 4;
//     }
//     else if (screenWidth < 1070) {
//         itemsToMove = 2;
//     } else if (screenWidth < 1250) {
//         itemsToMove = 1;
//     }

//     const dropdownMenu = document.querySelector('.dropdown-menu');
//     const dropdownItems = Array.from(dropdownMenu.children);

//     dropdownItems.forEach(dropItem => {
//         navUl.insertBefore(dropItem, dropdown);
//     });

//     if (dropdownMenu.children.length === 0) {
//         dropdown.style.display = "none";
//     }

//     const updatedItems = Array.from(navUl.children).filter(li => !li.classList.contains('dropdown'));

//     for (let i = 0; i < itemsToMove; i++) {
//         const itemToMove = updatedItems[updatedItems.length - 1 - i];
//         if (itemToMove) {
//             dropdownMenu.insertBefore(itemToMove, dropdownMenu.firstChild);
//         }
//     }

//     if (itemsToMove > 0) {
//         dropdown.style.display = "block";
//     }
// }


// updateDropdown();

// window.addEventListener('resize', updateDropdown);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
