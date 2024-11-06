// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Remove toggle icon when not active
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Typed.js effect
var typed = new Typed('#element', {
    strings: ['an IDN Student', 'a student of software engineering'],
    typeSpeed: 80,
    loop: true
});
