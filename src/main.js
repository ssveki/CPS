const swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    enabled: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            enabled: true,
            spaceBetween: 16,
        },
        768: {
            enabled: false, 
            spaceBetween: 24,
        },
        1440: {
            enabled: false,
            spaceBetween: 32,
        }
    }
});

const burgerButton = document.querySelector('.burger');
const callButtons = document.querySelectorAll('.call');
const feedbackButtons = document.querySelectorAll('.feedback');
const closeButtons = document.querySelectorAll('.close-btn');
const sideMenu = document.querySelector('.sideMenu:not(.sideMenu--right)');
const callMenu = document.querySelector('.callMenu');
const feedbackMenu = document.querySelector('.feedbackMenu');
const overlay = document.querySelector('.overlay');

function openMenu(menu) {
    closeAllMenus();
    menu.classList.add('open');
    overlay.style.display = 'block';
    setTimeout(() => overlay.classList.add('active'), 10);

    if (window.innerWidth >= 1440) {
        sideMenu.style.zIndex = '998';
    }
}

function closeAllMenus() {
    document.querySelectorAll('.sideMenu').forEach(menu => {
        menu.classList.remove('open');
    });
    overlay.classList.remove('active');

    if (window.innerWidth >= 1440) {
        sideMenu.style.zIndex = '1000';
    }
    
    setTimeout(() => {
        const anyMenuOpen = document.querySelector('.sideMenu.open');
        if (!anyMenuOpen) {
            overlay.style.display = 'none';
        }
    }, 300);
}

function toggleSideMenu() {
    if (window.innerWidth < 1440) {
        if (sideMenu.classList.contains('open')) {
            closeAllMenus();
        } else {
            openMenu(sideMenu);
        }
    }
}

function checkScreen() {
    if (window.innerWidth >= 1440) {
        sideMenu.classList.add('open');
        overlay.style.display = 'none';
        overlay.classList.remove('active');
        callMenu.classList.remove('open');
        feedbackMenu.classList.remove('open');
    } else {
        sideMenu.classList.remove('open');
    }
}

burgerButton.addEventListener('click', toggleSideMenu);

callButtons.forEach(button => {
    button.addEventListener('click', () => openMenu(callMenu));
});

feedbackButtons.forEach(button => {
    button.addEventListener('click', () => openMenu(feedbackMenu));
});

closeButtons.forEach(button => {
    button.addEventListener('click', closeAllMenus);
});

overlay.addEventListener('click', closeAllMenus);

document.addEventListener('DOMContentLoaded', checkScreen);
window.addEventListener('resize', checkScreen);