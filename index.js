// Change navbar properties on scroll
var navbar = document.querySelector('nav')
window.onscroll = function () {
    if (window.scrollY > 500) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}