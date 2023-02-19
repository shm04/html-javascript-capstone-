const menu = document.querySelector('.sections-navbar');
const navSec = document.querySelectorAll('.sec-navbar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const hamBtn = document.querySelector('.ham-btn');

function toggleMenu() {
  if (menu.classList.contains('showMenu') && window.innerWidth <= 768) {
    menu.classList.remove('showMenu');
    closeBtn.style.display = 'none';
    hamBtn.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeBtn.style.display = 'block';
    hamBtn.style.display = 'none';
  }
}

menuBtn.addEventListener('click', toggleMenu);
navSec.forEach(
  (navSec) => {
    navSec.addEventListener('click', toggleMenu);
  },
);