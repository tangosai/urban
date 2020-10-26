$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        speed: 1500,
        parallax: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

    //SWIPER-EVENT
    mySwiper.on('slideChangeTransitionStart', function () {

        anime({
            targets: '.swiper-slide-active .bg',
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: 'easeInOutQuart'
        });

        anime({
            targets: '.swiper-slide-active .slide-img img',
            translateY: [100, 0],
            opacity: [0, 1],
            delay: 300,
            easing: 'easeInOutQuart'
        });

        anime({
            targets: '.swiper-slide-active .slider-content .element',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150, {
                start: 500
            }),
            easing: 'easeInOutQuart'
        });


    });

    anime({
        targets: '.sa-slider',
        translateX: [-500, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.bg',
        translateX: [-500, 0],
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.logo a',
        rotate: 360,
        opacity: [0, 1],
        delay: 800,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.menu ul li',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {
            start: 1000
        }),
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.slide-img img',
        scale: [1.2, 1],
        opacity: [0, 1],
        delay: 1200,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-slide-active .slider-content .element',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 1700
        }),
        easing: 'easeInOutQuart'
    });
    
        anime({
        targets: '.sa-social ul li',
        translateX: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 2200
        }),
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-button-prev',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-button-next',
        translateX: [100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });
    anime({
        targets: '.swiper-pagination',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: 3000,
        easing: 'easeInOutQuart'
    });


});
