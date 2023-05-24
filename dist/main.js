/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = function () {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');
window.onscroll = function () {
  sections.forEach(function (sec) {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (links) {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
    ;
  });
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top'
});
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', {
  origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', {
  origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
  origin: 'right'
});
var typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Graphic Designer', 'Gamer'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});
var typedAr = new Typed('.multiple-textar', {
  strings: ['مُطوِّر واجهة المُستخدِم الأمامية', 'مُصمِّم جرافيك', 'لاعِب فيديو جيمز'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  unicode: true
});
/******/ })()
;