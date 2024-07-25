$(document).ready(function (){
    const pageCount = 8; // pageCount 총 페이지의 수
    const toNextScroll = 333; // toNextScroll 다음 페이지로 넘어가기 위한 스크롤 입력 값
    const multiple = 20; // multiple 반복수
    const centerValue = 9; // centerValue multiple 값을 넘었을 경우 돌아올 가운데 값(0~multiple)
    $('body').css({'height':toNextScroll*pageCount*multiple+(window.innerHeight+(toNextScroll*2))});
    $(window).scrollTop(toNextScroll*pageCount*centerValue);
    setTimeout (() => {
        $('#roundboard').css({'transition':'all 0.75s ease-in-out'});
        $('#roundboard>div').css({'transition':'all 0.2s 0.3s'});
    }, 500);
    const navbtn_int = document.querySelector('.navbtn_int');
    navbtn_int.onclick = () => {$(window).scrollTop(toNextScroll*pageCount*centerValue)};
    const navbtn_pub = document.querySelector('.navbtn_pub');
    navbtn_pub.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+1))};
        const navbtn_gnuboard = document.querySelector('.navbtn_gnuboard');
        navbtn_gnuboard.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+1))};
        const navbtn_univ = document.querySelector('.navbtn_univ');
        navbtn_univ.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+2))};
        const navbtn_livart = document.querySelector('.navbtn_livart');
        navbtn_livart.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+3))};
        const navbtn_downy = document.querySelector('.navbtn_downy');
        navbtn_downy.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+4))};
        const navbtn_touslesjours = document.querySelector('.navbtn_touslesjours');
        navbtn_touslesjours.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+5))};
    const navbtn_dsi = document.querySelector('.navbtn_dsi');
    navbtn_dsi.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+6))};
    const navbtn_prf = document.querySelector('.navbtn_prf');
    navbtn_prf.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+7))};

    const intro = document.querySelector(".elementsWrap>.intro");
    const page2 = document.querySelector(".elementsWrap>.page2");
    const page3 = document.querySelector(".elementsWrap>.page3");
    const page4 = document.querySelector(".elementsWrap>.page4");
    const page5 = document.querySelector(".elementsWrap>.page5");
    const page6 = document.querySelector(".elementsWrap>.page6");
    const page7 = document.querySelector(".elementsWrap>.page7");
    const page8 = document.querySelector(".elementsWrap>.page8");

    $(window).on("scroll", function(){
        let sctop = $(this).scrollTop();
        if (sctop <= 1 || sctop >= toNextScroll*pageCount*multiple + toNextScroll){
            $(window).scrollTop(toNextScroll*pageCount*centerValue + 33);
            $('#roundboard').css({'transition':'none'});
            $('#roundboard>div').css({'transition':'none'});
            setTimeout (() => {
                $('#roundboard').css({'transition':'all 0.75s ease-in-out'});
                $('#roundboard>div').css({'transition':'all 0.2s 0.3s'});
            }, 10);
        };
        // console.log('sctop:'+sctop);
        for (let i = 0; i < pageCount*(multiple+1); i++) {
            if (sctop >= i*toNextScroll && sctop < (i+1)*toNextScroll){
                $('#roundboard').css({'transform':'translate(calc(-100% + 960px), calc(-50%)) rotate('+((i*45)*(-1))+'deg)'})
                $('.no_1').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_2').css({'transform':'translate(50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_3').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_4').css({'transform':'translate(50%, 50%) rotate('+(i*45)+'deg)'})
                $('.no_5').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_6').css({'transform':'translate(-50%, 50%) rotate('+(i*45)+'deg)'})
                $('.no_7').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_8').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                // console.log('i= '+i);
            };
            //page1
            if (sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) {
                let page1Num = (88888+(3+((pageCount-8)*i)))%8
                if (page1Num == 0){page1Num = 8};
                let introReceiver = document.querySelector(".no_"+page1Num);
                introReceiver.innerHTML = '';
                introReceiver.appendChild(intro);
                $('body').css({'background':'#fff'});

                $('.navbtn_int').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page2
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll && sctop < i*(toNextScroll*pageCount)+toNextScroll*2) {
                let page2Num = (88888+(4+((pageCount-8)*i)))%8
                if (page2Num == 0){page2Num = 8};
                let page2Receiver = document.querySelector(".no_"+page2Num);
                page2Receiver.innerHTML = '';
                page2Receiver.appendChild(page2);
                $('body').css({'background':'#FEB203'})

                $('.navbtn_gnuboard').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page3
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*2 && sctop < i*(toNextScroll*pageCount)+toNextScroll*3) {
                let page3Num = (88888+(5+((pageCount-8)*i)))%8
                if (page3Num == 0){page3Num = 8};
                let page3Receiver = document.querySelector(".no_"+page3Num);
                page3Receiver.innerHTML = '';
                page3Receiver.appendChild(page3);
                $('body').css({'background':'#92d5e6'})

                $('.navbtn_univ').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page4
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*3 && sctop < i*(toNextScroll*pageCount)+toNextScroll*4) {
                let page4Num = (88888+(6+((pageCount-8)*i)))%8
                if (page4Num == 0){page4Num = 8};
                let page4Receiver = document.querySelector(".no_"+page4Num);
                page4Receiver.innerHTML = '';
                page4Receiver.appendChild(page4);
                $('body').css({'background':'#DAC3A3'})

                $('.navbtn_livart').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page5
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*4 && sctop < i*(toNextScroll*pageCount)+toNextScroll*5) {
                let page5Num = (88888+(7+((pageCount-8)*i)))%8
                if (page5Num == 0){page5Num = 8};
                let page5Receiver = document.querySelector(".no_"+page5Num);
                page5Receiver.innerHTML = '';
                page5Receiver.appendChild(page5);
                $('body').css({'background':'#E0F4FF'})

                $('.navbtn_downy').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page6
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*5 && sctop < i*(toNextScroll*pageCount)+toNextScroll*6) {
                let page6Num = (88888+(8+((pageCount-8)*i)))%8
                if (page6Num == 0){page6Num = 8};
                let page6Receiver = document.querySelector(".no_"+page6Num);
                page6Receiver.innerHTML = '';
                page6Receiver.appendChild(page6);
                $('body').css({'background':'#F3E8DC'});

                $('.navbtn_touslesjours').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page7
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*6 && sctop < i*(toNextScroll*pageCount)+toNextScroll*7) {
                let page7Num = (88888+(1+((pageCount-8)*i)))%8
                if (page7Num == 0){page7Num = 8};
                let page7Receiver = document.querySelector(".no_"+page7Num);
                page7Receiver.innerHTML = '';
                page7Receiver.appendChild(page7);
                $('body').css({'background':'#DE90D6'});

                $('.navbtn_dsi').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //page8
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*7 && sctop < i*(toNextScroll*pageCount)+toNextScroll*8) {
                let page8Num = (88888+(2+((pageCount-8)*i)))%8
                if (page8Num == 0){page8Num = 8};
                let page8Receiver = document.querySelector(".no_"+page8Num);
                page8Receiver.innerHTML = '';
                page8Receiver.appendChild(page8);
                $('body').css({'background':'#d1d1d1'})

                $('.navbtn_prf').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };

            //puvlishing (page 2~6)
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*1 && sctop < i*(toNextScroll*pageCount)+toNextScroll*6) {
                $('.depth2').stop().slideDown(600);
                $('.navbtn_pub').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
                $('.gnb>li:nth-of-type(2)').hover(function(){
                    $('.depth2').stop().slideDown(600);
                }, function(){
                    $('.depth2').stop().slideDown(600);
                });
            };
            //publishing + designWorks (page 2~7)
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*1 && sctop < i*(toNextScroll*pageCount)+toNextScroll*7) {
                $('nav').stop().css({'left':'-6360px'});
                document.addEventListener('mousemove', (e) => {
                    $('#mouse').css({left:e.clientX, top:e.clientY});
                    if (e.pageX < 180) {
                        $('nav').stop().css({'left':'-6360px'})
                    } else if (e.pageX >= 360) {
                        $('nav').stop().css({'left':'-6360px'})
                    };
                });
            };
            //intro + profile (page1 + 8)
            if ((sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) || (sctop >= i*(toNextScroll*pageCount)+toNextScroll*7 && sctop < i*(toNextScroll*pageCount)+toNextScroll*8)) {
                $('nav').stop().css({'left':'-6720px'});
                document.addEventListener('mousemove', (e) => {
                    $('#mouse').css({left:e.clientX, top:e.clientY});
                    if (e.pageX < 180) {
                        $('nav').stop().css({'left':'-6360px'})
                    } else if (e.pageX >= 360) {
                        $('nav').stop().css({'left':'-6720px'})
                    };
                });
            };
            //intro + design + profile (page1 + 7 + 8)
            if ((sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) || (sctop >= i*(toNextScroll*pageCount)+toNextScroll*6 && sctop < i*(toNextScroll*pageCount)+toNextScroll*8)) {
                $('.depth2').stop().slideUp(300);
                $('.gnb>li:nth-of-type(2)').hover(function(){
                    $('.depth2').stop().slideDown(450);
                }, function(){
                    $('.depth2').stop().slideUp(300);
                });
            };
        };
    });

    $(".PUBImage").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").css({
            top: - (imgH-caseH)
        });
    });
    $(".PUBImage").on("mouseleave", function(){
        $(this).find("img").css({
            top:0
        });
    });

    let swiper = new Swiper('.workswiper', {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween : 40,
        speed : 500,
        loop: true,
        mousewheel: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('.turnImg').hover(function(){
        $(this).find('img').css({'transform':'rotateY('+ 720 + 'deg' +')'});
        setTimeout(() => {
            $(this).find('img').attr('src','images/leaflet_page02.jpg')
        }, 275);
    },function(){
        $(this).find('img').css({'transform':'rotateY('+ 0 + 'deg' +')'});
        setTimeout(() => {
            $(this).find('img').attr('src','images/leaflet_page01.jpg')
        }, 275);
    });

    for (let k = 1 ; k <=8 ; k++){
        let n;
        $('.skillIcon:nth-of-type('+k+')').hover(function(){
            k === 1 ? n=17 : false ;
            k === 2 ? n=18 : false ;
            k === 3 ? n=16 : false ;
            k === 4 ? n=17 : false ;
            k === 5 ? n=12 : false ;
            k === 6 ? n=16 : false ;
            k === 7 ? n=17 : false ;
            k === 8 ? n=15 : false ;
            for(let i = 0; i <= n; i++){
                setTimeout(function(){
                    $('.skillIcon:nth-of-type('+k+') .rotateScore').css({'background':'conic-gradient(#333 '+i*5+'%, #fff0 '+i*5+'%)'});
                }, i * 30);
            };
        },function(){
            k === 1 ? n=17 : false ;
            k === 2 ? n=18 : false ;
            k === 3 ? n=16 : false ;
            k === 4 ? n=17 : false ;
            k === 5 ? n=12 : false ;
            k === 6 ? n=16 : false ;
            k === 7 ? n=17 : false ;
            k === 8 ? n=15 : false ;
            $('.skillIcon:nth-of-type('+k+')').css({'pointer-events':'none'});
            setTimeout(function(){
                for(let i = 0; i <= n; i++){
                    setTimeout(function(){
                        $('.skillIcon:nth-of-type('+k+') .rotateScore').css({'background':'conic-gradient(#333 '+ (n-i)*5+'%, #fff0 '+ (n-i)*5+'%)'});
                    }, i * 30);
                };
            },2000);
            setTimeout(function(){
                $('.skillIcon:nth-of-type('+k+')').css({'pointer-events':'all'});
            },3000);
        });
    };

    function mouseOn() {
        $('#mouse>div>div[class^=circle]').addClass('mousehover');
    }
    function mouseLeave() {
        $('#mouse>div>div[class^=circle]').removeClass('mousehover');
    }
    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('mouseover', mouseOn);
        item.addEventListener('mouseleave', mouseLeave);
    })
    document.querySelectorAll('input').forEach(item => {
        item.addEventListener('mouseover', mouseOn);
        item.addEventListener('mouseleave', mouseLeave);
    })
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('mouseover', mouseOn);
        item.addEventListener('mouseleave', mouseLeave);
    })
    document.querySelectorAll('.buttonLike').forEach(item => {
        item.addEventListener('mouseover', mouseOn);
        item.addEventListener('mouseleave', mouseLeave);
    })
});