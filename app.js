const container = document.querySelector('.container');
const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider__line");
const slides = document.querySelectorAll(".slider__slide");
const slide = document.querySelector(".slider__slide");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let visibleSlides; // Кол-во слайдов, отображаемых на странице слайдера (В зависимости от ширины экрана)
let slideWidth; // Ширина одного слайда (задаем в css)
let count = 0; // Счетчик страниц слайдера.
let screenWidth; // Ширина контейнера.

// Функция, которая считывает ширину контейнера и в зависмости от этого, задает кол-во карточек на странице слайдера.
function init() {

    slideWidth = slide.offsetWidth; // Ширина слайда
    screenWidth = container.offsetWidth; // Ширина контейнера
    console.log(screenWidth);
    if(screenWidth < 768) {
        visibleSlides = 1;
    }
    else if(screenWidth < 1024) {
        visibleSlides = 2;
    }
    else {
        visibleSlides = 3;
    }

    // Задаем ширину слайдера в зависимости от кол-ва слайдов, показынных на странице
    slider.style.width = visibleSlides * slideWidth + 'px'; 
    console.log(visibleSlides);
}

init();
window.addEventListener('resize', init);


function rollSlider() {
    // sliderLine.style.transform = "translateX(-960px)"
    sliderLine.style.transform = `translateX(-${count * slider.offsetWidth}px)`
    console.log(`translateX = -${count * slider.offsetWidth}px`);
}



nextBtn.addEventListener('click', () => {
    count++;
    if(count >= slides.length / visibleSlides) {
        count = 0;
    }
    rollSlider();
    console.log(count);
    console.log(slides.length / visibleSlides);
})

prevBtn.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = slides.length / visibleSlides - 1;
    }
    rollSlider();
})

console.log(slides);
console.log(slideWidth);
console.log(slider);