$(window).ready(function(){
    $('.header_hamburger').click(function(){
        if ($('.gnb').hasClass('gnbToggleOn') === true){
            $('.gnb').removeClass('gnbToggleOn');
            $('body').css({'overflow':'auto'});
        } else {
            $('.gnb').addClass('gnbToggleOn');
            $('body').css({'overflow':'hidden'});
        };
    });
    $('.gnbExit').click(function(){
            $('body').css({'overflow':'auto'});
            $('.gnb').removeClass('gnbToggleOn');
    });
    function transGNB (){
        var screenWidth = window.innerWidth;
        if (screenWidth > 1280) {
            console.log(screenWidth);
            $('.depth2, .depth2_bg').hide();
            $('.gnb>li, .depth2_bg').hover(function(){
                $('.depth2, .depth2_bg').show();
            },function(){
                $('.depth2, .depth2_bg').hide();
            });
            $('.gnb>li').unbind('click');
            $('.gnb>li:nth-of-type(1)').find('.depth2').stop().slideUp(0);
            $('.gnb>li').children().removeClass('gnbLiClickOn');
        } else {
            console.log("작은 화면");
            $('.depth2, .depth2_bg').hide();
            $('.gnb>li, .depth2_bg').unbind('mouseenter mouseleave');
            $('.gnb>li:nth-of-type(1)').find('.depth2').slideDown(0);
            $('.gnb>li').children().removeClass('gnbLiClickOn');
            $('.gnb>li').children().first().addClass('gnbLiClickOn');
            $('.gnb>li').click(function(){
                $(this).children().first().addClass('gnbLiClickOn');
                $(this).find('.depth2').slideDown();
                $(this).siblings().children().removeClass('gnbLiClickOn')
                $(this).siblings().find('.depth2').slideUp();
            });
        };
        //메인비쥬얼 사이즈
        if (screenWidth > 1280){
            $('#main__visual .mainImg img, #main__visual .swiper-slide video').css({'width':screenWidth});
        } else if (screenWidth > 768){
            $('#main__visual .mainImg img').css({'width':'121.40625%'});
        } else {
            $('#main__visual .mainImg img').css({'width':'180.208333%'});
        };
    };
    transGNB();
    $(window).resize(function(){
        transGNB();
    });


// 메인 비디오
    $('.slideVideo, .videoBtn, .swiper-pagination, div[class^=swiper-button').hover(function(){
        $('.videoBtn').show();
        $('.swiper-pagination').show();
        $('div[class^=swiper-button').css({'opacity':'0.3'});
        $('div[class^=swiper-button').hover(function(){
            $(this).css({'opacity':'0.7'});
        },function(){
            $(this).css({'opacity':'0.3'});
        });        
    },function(){
        $('.videoBtn').hide();
        $('.swiper-pagination').hide();
        $('div[class^=swiper-button').css({'opacity':'0.0'});
    });
    $('.playBtn').click(function(){
        for(let i = 1; i <= 9; i++){
            var video = document.getElementById("video"+i);
            video.play();
        };
        $('.playBtn').addClass('displayNone')
        $('.pauseBtn').removeClass('displayNone')
        $('#header').slideUp();
    });
    $('.pauseBtn').click(function(){
        for(let i = 1; i <= 9; i++){
            var video = document.getElementById("video"+i);
            video.pause();
        };
        $('.pauseBtn').addClass('displayNone')
        $('.playBtn').removeClass('displayNone')
        $('#header').show();
    });
});

function swiperBtnUpdate (){
    if($('.first-swiper-slide').hasClass('swiper-slide-active') === true){
        $('.swiper-button-prev').hide();
        $('.swiper-button-next').show();
    } else if ($('.last-swiper-slide').hasClass('swiper-slide-active') === true){
        $('.swiper-button-next').hide();
        $('.swiper-button-prev').show();
    } else {
        $('.swiper-button-next').show();
        $('.swiper-button-prev').show();
    };
};
setInterval(swiperBtnUpdate, 200);


//헤더 쇼하이드
window.addEventListener('wheel', (e) => {
    console.log(e.deltaY, e.deltaX);
    if(e.deltaY<=0){
        $('#header').stop().show();
        $(window).on('mousemove',function(e){
            if(e.clientY <= 103){
                $('#header').css({'display':'block'});
            };
        });
    }else{
        $('#header').stop().hide();
        $(window).on('mousemove',function(e){
            if(e.clientY <= 103){
                $('#header').css({'display':'block'});
            };
        });
    };
});