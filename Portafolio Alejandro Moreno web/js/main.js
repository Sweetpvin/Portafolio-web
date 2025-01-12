const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
const backgroundImage = document.querySelector('.background-image');

let currentIndex = 0;
const totalItems = items.length;


function changeBackgroundImage() {
    const currentImage = items[currentIndex].querySelector('img').src;
    backgroundImage.style.backgroundImage = `url('${currentImage}')`;
}

function updateCarousel() {
    const offset = -currentIndex * 100; 
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators(); 
    changeBackgroundImage(); 
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
    updateCarousel();
});


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; 
    updateCarousel();
});



updateCarousel();
