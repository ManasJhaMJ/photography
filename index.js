// Change navbar properties on scroll
var navbar = document.querySelector('nav')
window.onscroll = function () {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// NavButton toggler
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Splide Carousel
var splide = new Splide('.splide', {
    type: 'loop',
    height: '50vh',
    focus: 'center',
    autoplay: true,
    interval: 1500,
    lazyLoad: 'false',
    autoWidth: true,
});

splide.mount(window.splide.Extensions);