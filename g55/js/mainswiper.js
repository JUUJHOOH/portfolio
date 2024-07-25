const mainBanner = new Swiper('.mainBanner', {
    slidesPerView : 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
    speed: 1000,
    spaceBetween: 60,
});
$('.mainBanner .swiper-slide').on('mouseover', function(){
    mainBanner.autoplay.stop();
});
$('.mainBanner .swiper-slide').on('mouseout', function(){
    mainBanner.autoplay.start();
});

const categoryInWindow = new Swiper('.categoryInWindow', {
    slidesPerView : 5,
    direction: "vertical",
    spaceBetween: 34,
    speed: 100,
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const popularClass = new Swiper('.popularClass', {
    loop: true,
    slidesPerView : "auto",
    spaceBetween: 36,
    speed: 3000,
    allowTouchMove : false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        },
});
$('.popularClass').on('mouseenter', function(){
    popularClass.autoplay.stop();
});
$('.popularClass').on('mouseleave', function(){
    popularClass.autoplay.start();
});