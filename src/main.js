var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    });

const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.sideMenu');

burgerButton.addEventListener('click', function() {
    sideMenu.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    sideMenu.style.display = 'none';
});