
let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart').onclick=() =>{
    shoppingCart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login');
document.querySelector('#login').onclick=() =>{
    login.classList.toggle('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
}
window.onscroll = () =>{
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".Review-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}