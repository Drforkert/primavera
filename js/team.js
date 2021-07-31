var swiper = new Swiper(".teamSwiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
    },
    disableOnInteraction: false,
    effect: "cube",
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.5,
    },

    pagination: {
        el: 'pagination',
        clickable: false,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});