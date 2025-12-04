const swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    enabled: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            enabled: true,
        },
        768: {
            enabled: false, 
        },
        1440: {
            enabled: false,
        }
    }
});


// меню
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
    if (window.innerWidth >= 1440) sideMenu.style.zIndex = '998';
}

function closeAllMenus() {
    document.querySelectorAll('.sideMenu').forEach(menu => menu.classList.remove('open'));
    overlay.classList.remove('active');
    
    if (window.innerWidth >= 1440) sideMenu.style.zIndex = '1000';
    
    setTimeout(() => {
        if (!document.querySelector('.sideMenu.open')) overlay.style.display = 'none';
    }, 300);
}

function toggleSideMenu() {
    if (window.innerWidth < 1440) {
        sideMenu.classList.contains('open') ? closeAllMenus() : openMenu(sideMenu);
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

    if (window.innerWidth >= 768) {
        closeButtons.forEach(button => {
            button.style.marginLeft = '-30px';
        });
    } else {
        closeButtons.forEach(button => {
            button.style.marginLeft = '0';
        });
    }
}

burgerButton.addEventListener('click', toggleSideMenu);
callButtons.forEach(button => button.addEventListener('click', () => openMenu(callMenu)));
feedbackButtons.forEach(button => button.addEventListener('click', () => openMenu(feedbackMenu)));
closeButtons.forEach(button => button.addEventListener('click', closeAllMenus));
overlay.addEventListener('click', closeAllMenus);

document.addEventListener('DOMContentLoaded', checkScreen);
window.addEventListener('resize', checkScreen);

// показ текста
function setupToggle(button, elements, options = {}) {
    const { expandedClass = 'expanded', showClass = 'show-all-text', nameSelector, picSelector, expandedText = 'Скрыть', collapsedText } = options;
    
    button.addEventListener('click', function() {
        const isExpanded = button.classList.toggle(expandedClass);
        const moreName = button.querySelector(nameSelector);
        const morePic = button.querySelector(picSelector);
        
        elements.forEach(el => el.classList.toggle(showClass));
        
        if (moreName) moreName.textContent = isExpanded ? expandedText : collapsedText;
        if (morePic) morePic.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}

setupToggle(
    document.querySelector('.firstBlock__more'),
    [document.querySelector('.firstBlock__text--hidden'), document.querySelector('.hideThis'), document.querySelector('.firstBlock__text--all')],
    { nameSelector: '.firstBlock__more--name', picSelector: '.firstBlock__more--pic', collapsedText: 'Читать далее' }
);

// бренды
setupToggle(
    document.querySelector('.more-brands'),
    document.querySelectorAll('.brands .hidden-slide'),
    { showClass: 'show-all-slides', nameSelector: '.more__name', picSelector: '.more__pic', collapsedText: 'Показать все' }
);

// техника
setupToggle(
    document.querySelector('.more-equipment'),
    document.querySelectorAll('.equipment .hidden-slide'),
    { showClass: 'show-all-slides', nameSelector: '.more__name', picSelector: '.more__pic', collapsedText: 'Показать все' }
);

document.querySelectorAll('.round__btn, .send').forEach(button => {
    button.addEventListener('click', () => alert('Пока не работает'));
});

// язык
document.querySelectorAll('.sideMenu__main--contacts--language--name').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelectorAll('.sideMenu__main--contacts--language--name').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

// главы в меню
document.querySelectorAll('.sideMenu__main--list--chapter').forEach(chapter => {
    chapter.addEventListener('click', function() {
        if (this.classList.contains('activeChapter')) return;
        
        document.querySelectorAll('.sideMenu__main--list--chapter').forEach(ch => {
            ch.classList.remove('activeChapter');
            ch.querySelector('.title__name--highlight')?.remove();
        });
        
        this.classList.add('activeChapter');
        const highlight = document.createElement('div');
        highlight.className = 'title__name--highlight';
        this.insertBefore(highlight, this.firstChild);
    });
});

// кнопки в слайд меню
const slideMenuButtons = document.querySelectorAll('.slideMenu__button');
if (slideMenuButtons.length > 0) {
    const firstButton = slideMenuButtons[0];
    firstButton.innerHTML = `<div class="slideMenu__button--active">${firstButton.textContent}</div>`;
    firstButton.classList.add('slideMenu__button--active');
}

slideMenuButtons.forEach(button => {
    button.addEventListener('click', function() {
        slideMenuButtons.forEach(btn => {
            btn.classList.remove('slideMenu__button--active');
            const activeDiv = btn.querySelector('.slideMenu__button--active');
            if (activeDiv) btn.innerHTML = activeDiv.textContent;
        });
        
        this.classList.add('slideMenu__button--active');
        this.innerHTML = `<div class="slideMenu__button--active">${this.textContent}</div>`;
    });
});