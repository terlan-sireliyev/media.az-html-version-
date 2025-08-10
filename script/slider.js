<<<<<<< HEAD

const paginationContainer = document.querySelector('.slider-pagination');
const slides = document.querySelectorAll('.imgCard');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let currentIndex = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updatePagination(currentIndex)
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updatePagination(currentIndex)

}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});



// Dinamik olaraq bullet-ləri yarat
slides.forEach((_, index) => {
    const bullet = document.createElement('span');
    bullet.classList.add('slider-pagination-bullet');
    bullet.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        showSlide(currentIndex);
        updatePagination()
        startAutoSlide(currentIndex);
    });
    paginationContainer.appendChild(bullet);
});

function updatePagination() {
    const bullets = document.querySelectorAll('.slider-pagination-bullet');
    bullets.forEach((bullet, i) => {
        bullet.style.backgroundColor = i === currentIndex ? '#00bcd4' : '#ccc';
        bullet.textContent = i + 1
    });
}
// Start slider
showSlide(currentIndex);
updatePagination()
=======

const paginationContainer = document.querySelector('.slider-pagination');
const slides = document.querySelectorAll('.imgCard');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let currentIndex = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updatePagination(currentIndex)
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updatePagination(currentIndex)

}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});



// Dinamik olaraq bullet-ləri yarat
slides.forEach((_, index) => {
    const bullet = document.createElement('span');
    bullet.classList.add('slider-pagination-bullet');
    bullet.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = index;
        showSlide(currentIndex);
        updatePagination()
        startAutoSlide(currentIndex);
    });
    paginationContainer.appendChild(bullet);
});

function updatePagination() {
    const bullets = document.querySelectorAll('.slider-pagination-bullet');
    bullets.forEach((bullet, i) => {
        bullet.style.backgroundColor = i === currentIndex ? '#00bcd4' : '#ccc';
        bullet.textContent = i + 1
    });
}
// Start slider
showSlide(currentIndex);
updatePagination()
>>>>>>> aac8d85f967a9afaa1e48fd0da975077ace9f3d7
startAutoSlide();