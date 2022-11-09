/*Swiper slider */
let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*Swiper slider*/


/*progress */
let progress = document.querySelector(".progress");
var pageHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener("scroll", function () {
    verticalPosition = window.scrollY;
    var progressRate = (verticalPosition / pageHeight) * 100;
    progress.style.width = progressRate + "%";
});
/*progress */


/*Scroll Reveal */
ScrollReveal().reveal('.build-img', {          
    duration: 1000,								
    origin: 'left',					
    distance: '100px',
    interval: 200,
    reset: true										
});

ScrollReveal().reveal('.about', {
    duration: 1000,
    origin: 'right',
    distance: '100px',
    interval: 200,
    reset: true
});
/*Scroll Reveal */

/*Home filter */

let $home = $('.home').isotope(); 

$('.filter-btn-group').on('click', 'button', function () {  
    let filterValue = $(this).attr('data-filter');   
    $home.isotope({
        filter: filterValue      
    });
});

/*Home filter */

