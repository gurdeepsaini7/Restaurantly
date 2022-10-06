// Toggle Navigation ======>

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener('click', () => toggleNavbar());

// Sticky Navbar ======>

window.addEventListener('scroll', function(){

    let navbar = document.getElementById('menu-bar');

    if(window.pageYOffset >= 40){
        navbar.classList.add('sticky');
    }

    else{
        navbar.classList.remove('sticky');
    };

})

// Swiper JS ======>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      993: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
});

