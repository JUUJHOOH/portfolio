$(document).ready(function () {
    //fullpage 스크립트 + 앵커 스크립트
    $("#fullpage").fullpage({
        anchors: ["mainVisuer", "marketingConcept", "colorPalette", "brands", "etc","news","footer"],
        menu: "#topMenu",
        navigation: true,
        scrollBar: true,
        afterLoad: function(origin, destination, direction){
            if(destination.index == 5 || destination.index == 6){
                $("#topMenu li").css({'background-color':'#000'});
            }else{
                $("#topMenu li").css({'background-color':'#fff'});
            }}
    });

    //header
    $(window).on('scroll', function(){
        var sctop = $(this).scrollTop();
        if(sctop < 100){
            $('#header').stop().css({"transition":"background-color 0.6s"}).fadeIn(100);
            $(window).on('mousemove',function(e){
                if(e.clientY <= 110){
                    $('#header').css({'display':'block'});
                }
                if(e.clientY > 110){
                    $('#header').css({'display':'block'});
                };
            });
        }
        if(sctop>=100){
            $('#header').stop().css({"transition":"unset",'display':'none'});
            $(window).on('mousemove',function(e){
                if(e.clientY <= 110){
                    $('#header').css({'display':'block','opacity':'1'});
                }
                if(e.clientY > 110){
                    $('#header').css({'display':'none','opacity':'1'});
                };
            });
        };
    });

    //marketingConcept
    $('.marketingConcept').find('dd').stop().slideUp(300, 'linear');
    $('.marketingConcept .onn').find('dd').stop().slideDown(300, 'linear');
        $('.marketingConcept dl dt').mouseenter(function(){
            $(this).parent().siblings().removeClass('onn');
            $(this).parent().addClass('onn');
            $('.marketingConcept').find('dd').stop().slideUp(200);
            $('.marketingConcept .onn').find('dd').stop().slideDown(200);
            $('.marketingConcept').find('figure').css({'animation':'','z-index':'500','opacity':'0'});
            $('.marketingConcept .onn').find('figure').css({'animation':'fadeSlide 0.8s','z-index':'600','opacity':'1'});
        });

    //colorPalette
    $(window).on('scroll', function(){
        function colorPaletteDelay (){
            $('.colorPaletteIn>h3>img').stop().css({'animation':'resetAni 1ms forwards'});
            $('.colorPaletteIn>h3>span').stop().css({'animation':'resetAni 1ms forwards'});
            $('.colorPaletteIn hr').stop().css({'animation':'resetAni 1ms forwards'});
            $('.colorPaletteIn p').stop().css({'animation':'resetAni 1ms forwards'});
            $('.colorPaletteIn>a').stop().css({'animation':'resetAni 1ms forwards'});

            $('.active .colorPaletteIn>h3>img').stop().css({'animation':'colorPaletteimg 5.2s forwards'});

            $('.active .colorPaletteIn>h3>span:nth-of-type(1)').stop().css({'animation':'colorPalettespan 5.5s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(2)').stop().css({'animation':'colorPalettespan 5.6s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(3)').stop().css({'animation':'colorPalettespan 5.7s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(4)').stop().css({'animation':'colorPalettespan 6.0s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(5)').stop().css({'animation':'colorPalettespan 6.05s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(6)').stop().css({'animation':'colorPalettespan 6.1s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(7)').stop().css({'animation':'colorPalettespan 6.4s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(8)').stop().css({'animation':'colorPalettespan 6.6s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(9)').stop().css({'animation':'colorPalettespan 6.7s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(10)').stop().css({'animation':'colorPalettespan 6.75s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(11)').stop().css({'animation':'colorPalettespan 6.8s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(12)').stop().css({'animation':'colorPalettespan 6.85s forwards'});
            $('.active .colorPaletteIn>h3>span:nth-of-type(13)').stop().css({'animation':'colorPalettespan 6.9s forwards'});

            $('.active .colorPaletteIn hr').stop().css({'animation':'colorPalettehr 7.95s forwards'});

            $('.active .colorPaletteIn p').stop().css({'animation':'colorPaletteP 10s forwards'});

            $('.active .colorPaletteIn>a').stop().css({'animation':'colorPaletteMore 11.5s forwards'});
        };
        setTimeout(colorPaletteDelay, 500);
    });

    var docStyle = document.documentElement.style;
    const CPbg = document.getElementById('CPbg');
    const CPbgWidth = CPbg.offsetWidth;
    const CPbgHeight = CPbg.offsetHeight;

    document.addEventListener('mousemove', function(e) {
    docStyle.setProperty('--mouse-x', (e.clientX  - (window.innerWidth * 0.5)) * ((CPbgWidth-window.innerWidth)/window.innerWidth));
    docStyle.setProperty('--mouse-y', (e.clientY - (window.innerHeight * 0.5)) * ((CPbgHeight-window.innerHeight)/window.innerHeight));
    });


    //brands
    $('.brands li>a').mouseenter(function(){
        $(this).parent().siblings().removeClass('onnn');
        $(this).parent().addClass('onnn');
    });
    //news
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween : 40,
        speed : 2500,
        autoplay : {
            delay : 2500,
            disableOnInteraction : false, 
            pauseOnMouseEnter : true,
        },
    });
});

