let navbarOpenIcon = document.querySelector(".navbar-mobile-open");
let navbarCloseIcon = document.querySelector(".navbar-mobile-close");
let navbarMobileMenu = document.querySelector(".navbar-mobile-menu");
let navbarMobileItemOne = document.querySelector(".navbar-mobile-item-one");
let navbarMobileItemTwo = document.querySelector(".navbar-mobile-item-two");
let navbarMobileItemThree = document.querySelector(".navbar-mobile-item-three");
let navbarMobileItemFour = document.querySelector(".navbar-mobile-item-four");


navbarMobileItemOne.addEventListener('click', () => {
    navbarMobileMenu.style.display = "none";
    navbarCloseIcon.style.display = "none";
    navbarOpenIcon.style.display = "block";
})

navbarMobileItemTwo.addEventListener('click', () => {
    navbarMobileMenu.style.display = "none";
    navbarCloseIcon.style.display = "none";
    navbarOpenIcon.style.display = "block";
})

navbarMobileItemThree.addEventListener('click', () => {
    navbarMobileMenu.style.display = "none";
    navbarCloseIcon.style.display = "none";
    navbarOpenIcon.style.display = "block";
})

navbarMobileItemFour.addEventListener('click', () => {
    navbarMobileMenu.style.display = "none";
    navbarCloseIcon.style.display = "none";
    navbarOpenIcon.style.display = "block";
})

navbarOpenIcon.addEventListener('click', () => {
    navbarOpenIcon.style.display = "none";
    navbarCloseIcon.style.display = "block";
    navbarMobileMenu.style.display = "grid";
})

navbarCloseIcon.addEventListener('click', () => {
    navbarCloseIcon.style.display = "none";
    navbarOpenIcon.style.display = "block";
    navbarMobileMenu.style.display = "none";
})