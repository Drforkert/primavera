var swiper = new Swiper(".teamSwiper", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
    },
    disableOnInteraction: false,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: auto,
    centeredSlides: true,
    coverFlowEffect: {
        rotate: 50,
        stretch: 0,
        depth:100, 
        slideShadows:true,
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