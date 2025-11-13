var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    });

const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.sideMenu');
const overlay = document.querySelector('.overlay');

function openMenu() {
    if (window.innerWidth < 1440) {
        sideMenu.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeMenu() {
    if (window.innerWidth < 1440) {
        sideMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function checkScreen() {
    if (window.innerWidth >= 1440) {
        sideMenu.style.display = 'block';
        overlay.style.display = 'none';
    } else {
        sideMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkScreen);
window.addEventListener('resize', checkScreen);