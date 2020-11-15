const carouselSlide = document.querySelector ('.slider_main');
const carouselImages = document.querySelectorAll ('.slider_main img');

//Buttons
const prevBtn = document.querySelector ('#prevBtn');
const nextBtn = document.querySelector ('#nextBtn');

//Counter
let Counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)';

//Button

nextBtn.addEventListener('click',() => {
    if (Counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    Counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)';

});

prevBtn.addEventListener('click',() => {
    if (Counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    Counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if (carouselImages[Counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        Counter = carouselImages.length - 2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)';
    }
    if (carouselImages[Counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        Counter = carouselImages.length - Counter;
        carouselSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)';
    }
});


