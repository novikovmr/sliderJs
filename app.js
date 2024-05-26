const container = document.querySelector('.container');
const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider__line");
let slides = document.querySelectorAll(".slider__slide");
const slide = document.querySelector(".slider__slide");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let slidesList = sliderLine.children; //  HTML Collection со слайдами.
let visibleSlides; // Кол-во слайдов, отображаемых на странице слайдера (В зависимости от ширины экрана)
let slideWidth; // Ширина одного слайда (задаем в css)
let count = 0; // Счетчик страниц слайдера.
let screenWidth; // Ширина контейнера.

// Функция, которая считывает ширину контейнера и в зависмости от этого, задает кол-во карточек на странице слайдера.
function init() {

    slideWidth = slide.offsetWidth; // Получаем ширину слайда
    screenWidth = container.offsetWidth; // Получаем ширину контейнера
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
}

//Перемещение странице со слайдами.
function rollSlider() {
    sliderLine.style.transform = `translateX(-${count * slider.offsetWidth}px)`
}

//Клонирование элементов в конец коллекции
function addFirstToEnd() {
    for(let i = 0; i < slides.length; i++) {
        let cloneItem = slidesList[i].cloneNode(true);
        slidesList[i].parentNode.appendChild(cloneItem);
    }
}

// Функция, которая чистит от клонов коллекцию
function removeClones() {
    for (let i = slidesList.length - 1; i >= slides.length; i--) {
        slidesList[i].remove();
    }
}

nextBtn.addEventListener('click', () => {
    count++;
    // if(count >= slides.length / visibleSlides) {
    //     count = 0;
    // }
    if(count >= slides.length / visibleSlides) {
        addFirstToEnd();
    }
    rollSlider();
    console.log(count);
})

prevBtn.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = slides.length / visibleSlides - 1;
    }
    rollSlider();

    if (count <= 1) {
        setTimeout(removeClones, 2000) 
    }
})

init();
window.addEventListener('resize', init);
