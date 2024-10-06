'use strict';

const questions = document.querySelectorAll('.faq__question');


// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ============================================== */

// Faq
function removeClass() {
    questions.forEach((qus) => {
        qus.classList.remove('open');
    });
};

questions.forEach((qwe) => {
    qwe.addEventListener('click', () => {
        removeClass();
        qwe.classList.add('open');
    });
});