'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Menu
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeMenu = menu.querySelector('.menu__close'),
          links = menu.querySelectorAll('.menu__link a'),
          overlayMenu = menu.querySelector('.menu__overlay');

    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', menuClose);

    links.forEach(link => {
        link.addEventListener('click', menuClose);
    });

    menu.addEventListener('click', (e) => {
        if (e.target == overlayMenu) {
            menuClose();  
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && menu.classList.contains('active')) {
            menuClose();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        overlayMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function menuClose() {
        menu.classList.remove('active');
        overlayMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    //retings

    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span'),
        width = document.querySelectorAll('.skills__ratings-line');

    counters.forEach( (counter, i) => {
        console.log(counter.innerHTML);
        if (counter.innerHTML <= `${0}%`) {
            lines[i].style.width = 0;
        } else {
        lines[i].style.width = counter.innerHTML;
        lines[i].style.maxWidth = `${width[i].clientWidth}px`;            
        }
    });
});



