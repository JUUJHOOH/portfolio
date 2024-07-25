
const mainSwiper = new Swiper('.main__video', {
    // loop: true,
    speed: 200,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        activeIndexChange : function() {
            for(let i = 1; i <= 9; i++){
                var video = document.getElementById("video"+i);
                video.currentTime = 0;

                if ($('.playBtn').hasClass('displayNone') === true){
                    video.play();
                } else {
                    video.pause();
                };
            };
        },
    },
    /* effect: 'fade' */
});

const recommendSwiper = new Swiper(".recommendSwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop: true,
    speed: 200,
    slidesPerView: 3,
    centeredSlides: true,
    mousewheel: true,
    // loopedSlides: 9,

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        769: {  // 가로해상도가 768px 이상일 경우
            slidesPerView: 5,
        },
        1281: {  // 가로해상도가 1400px 이상일 경우
            slidesPerView: 7,
        },
    },
});
$('.recommendSwiper .swiper-slide a').on('mouseover', function(){
    recommendSwiper.autoplay.stop();
});
$('.recommendSwiper .swiper-slide a').on('mouseout', function(){
    recommendSwiper.autoplay.start();
});

const eventSwiper = new Swiper(".eventSwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop: true,
    speed: 200,
    slidesPerView: 3,
    centeredSlides: true,
});

const newsSwiper = new Swiper(".newsSwiper", {
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    direction: "vertical",
});