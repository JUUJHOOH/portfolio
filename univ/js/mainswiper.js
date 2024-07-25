const TodaysSwiper = new Swiper('.Todays', {
    slidesPerView : "auto",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    speed: 150,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
$('.Todays .swiper-slide a').on('mouseover', function(){
    TodaysSwiper.autoplay.stop();
});
$('.Todays .swiper-slide a').on('mouseout', function(){
    TodaysSwiper.autoplay.start();
});

const MasscomSwiper = new Swiper('.Masscom', {
    loop: true,
    slidesPerView : "auto",
    spaceBetween: 50,
    slidesOffsetBefore: 50,
    slidesOffsetAfter: 50,
    speed: 300,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
});
$('.Masscom .swiper-slide').on('mouseover', function(){
    MasscomSwiper.autoplay.stop();
});
$('.Masscom .swiper-slide').on('mouseout', function(){
    MasscomSwiper.autoplay.start();
});

const snsSwiper = new Swiper('.snsSwiper', {
    loop: true,
    slidesPerView : "auto",
    spaceBetween: 20,
    speed: 300,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
});
$('.snsSwiper .swiper-slide').on('mouseover', function(){
    snsSwiper.autoplay.stop();
});
$('.snsSwiper .swiper-slide').on('mouseout', function(){
    snsSwiper.autoplay.start();
});