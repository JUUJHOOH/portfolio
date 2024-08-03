$(document).ready(function (){
    let didScroll;

    const procedure = ['intro','NaGyeongStone','gnuboard','univ','livart','downy','touslesjours','designWorks','profile'];
    const pageCount = 9; // pageCount 총 페이지의 수
    const toNextScroll = 250; // toNextScroll 다음 페이지로 넘어가기 위한 스크롤 입력 값
    const multiple = 11; // multiple 반복수
    const centerValue = 5; // centerValue multiple 값을 넘었을 경우 돌아올 가운데 값(0~multiple)
    const NaGyeongStoneProcedure = procedure.indexOf('NaGyeongStone');
    const gnuboardProcedure = procedure.indexOf('gnuboard');
    const univProcedure = procedure.indexOf('univ');
    const livartProcedure = procedure.indexOf('livart');
    const downyProcedure = procedure.indexOf('downy');
    const touslesjoursProcedure = procedure.indexOf('touslesjours');
    const designWorksProcedure = procedure.indexOf('designWorks');
    const profileProcedure = procedure.indexOf('profile');

    $('body').css({'height':toNextScroll*pageCount*multiple+(window.innerHeight+(toNextScroll*2))});// endPoint에서 startPoint로 자연스럽게 넘어가기 위한 body높이
    $(window).scrollTop(toNextScroll*pageCount*centerValue);
    setTimeout (() => {
        $('#roundboard').css({'transition':'all 0.75s ease-in-out'});
        $('#roundboard>div').css({'transition':'all 0.2s 0.3s'});
    }, 500);
    const navbtn_int = document.querySelector('.navbtn_int');
    navbtn_int.onclick = () => {$(window).scrollTop(toNextScroll*pageCount*centerValue)};
    const navbtn_pub = document.querySelector('.navbtn_pub');
    navbtn_pub.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+1)+1)};
        const navbtn_NaGyeongStone = document.querySelector('.navbtn_NaGyeongStone');
        navbtn_NaGyeongStone.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+NaGyeongStoneProcedure)+1)};
        const navbtn_gnuboard = document.querySelector('.navbtn_gnuboard');
        navbtn_gnuboard.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+gnuboardProcedure)+1)};
        const navbtn_univ = document.querySelector('.navbtn_univ');
        navbtn_univ.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+univProcedure)+1)};
        const navbtn_livart = document.querySelector('.navbtn_livart');
        navbtn_livart.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+livartProcedure)+1)};
        const navbtn_downy = document.querySelector('.navbtn_downy');
        navbtn_downy.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+downyProcedure)+1)};
        const navbtn_touslesjours = document.querySelector('.navbtn_touslesjours');
        navbtn_touslesjours.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+touslesjoursProcedure)+1)};
    const navbtn_dsi = document.querySelector('.navbtn_dsi');
    navbtn_dsi.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+designWorksProcedure)+1)};
    const navbtn_prf = document.querySelector('.navbtn_prf');
    navbtn_prf.onclick = () => {$(window).scrollTop(toNextScroll*((pageCount*centerValue)+profileProcedure)+1)};

    const intro = document.querySelector(".elementsWrap>.intro");
    const NaGyeongStone = document.querySelector(".elementsWrap>.NaGyeongStone");
    const gnuboard = document.querySelector(".elementsWrap>.gnuboard");
    const univ = document.querySelector(".elementsWrap>.univ");
    const livart = document.querySelector(".elementsWrap>.livart");
    const downy = document.querySelector(".elementsWrap>.downy");
    const touslesjours = document.querySelector(".elementsWrap>.touslesjours");
    const designWorks = document.querySelector(".elementsWrap>.designWorks");
    const profile = document.querySelector(".elementsWrap>.profile");

    window.addEventListener('scroll', function(){
        didScroll = true;
    })

    function hasScrolled(){
        let sctop = $(this).scrollTop();
        if (sctop <= 1 || sctop >= toNextScroll*pageCount*multiple + toNextScroll){
            $(window).scrollTop(toNextScroll*pageCount*centerValue + 125);
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
                $('.no_0').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_1').css({'transform':'translate(50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_2').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_3').css({'transform':'translate(50%, 50%) rotate('+(i*45)+'deg)'})
                $('.no_4').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_5').css({'transform':'translate(-50%, 50%) rotate('+(i*45)+'deg)'})
                $('.no_6').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                $('.no_7').css({'transform':'translate(-50%, -50%) rotate('+(i*45)+'deg)'})
                // console.log('i= '+i);
            };
            //intro
            if (sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) {
                let introNum = (88888+2+((pageCount-8)*i))%8
                let introReceiver = document.querySelector(".no_"+introNum);
                introReceiver.innerHTML = '';
                introReceiver.appendChild(intro);
                $('body').css({'background':'#fff'});

                $('.navbtn_int').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //NaGyeongStone
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*NaGyeongStoneProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(NaGyeongStoneProcedure+1)) {
                let NaGyeongStoneNum = (88888+(NaGyeongStoneProcedure+2)+((pageCount-8)*i))%8
                let NaGyeongStoneReceiver = document.querySelector(".no_"+NaGyeongStoneNum);
                NaGyeongStoneReceiver.innerHTML = '';
                NaGyeongStoneReceiver.appendChild(NaGyeongStone);
                $('body').css({'background':'#FF7789'})

                $('.navbtn_NaGyeongStone').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //gnuboard
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*gnuboardProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(gnuboardProcedure+1)) {
                let gnuboardNum = (88888+(gnuboardProcedure+2)+((pageCount-8)*i))%8
                let gnuboardReceiver = document.querySelector(".no_"+gnuboardNum);
                gnuboardReceiver.innerHTML = '';
                gnuboardReceiver.appendChild(gnuboard);
                $('body').css({'background':'#FEB203'})

                $('.navbtn_gnuboard').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //univ
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*univProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(univProcedure+1)) {
                let univNum = (88888+(univProcedure+2)+((pageCount-8)*i))%8
                let univReceiver = document.querySelector(".no_"+univNum);
                univReceiver.innerHTML = '';
                univReceiver.appendChild(univ);
                $('body').css({'background':'#92d5e6'})

                $('.navbtn_univ').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //livart
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*livartProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(livartProcedure+1)) {
                let livartNum = (88888+(livartProcedure+2)+((pageCount-8)*i))%8
                let livartReceiver = document.querySelector(".no_"+livartNum);
                livartReceiver.innerHTML = '';
                livartReceiver.appendChild(livart);
                $('body').css({'background':'#DAC3A3'})

                $('.navbtn_livart').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //downy
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*downyProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(downyProcedure+1)) {
                let downyNum = (88888+(downyProcedure+2)+((pageCount-8)*i))%8
                let downyReceiver = document.querySelector(".no_"+downyNum);
                downyReceiver.innerHTML = '';
                downyReceiver.appendChild(downy);
                $('body').css({'background':'#E0F4FF'})

                $('.navbtn_downy').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //touslesjours
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*touslesjoursProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(touslesjoursProcedure+1)) {
                let touslesjoursNum = (88888+(touslesjoursProcedure+2)+((pageCount-8)*i))%8
                let touslesjoursReceiver = document.querySelector(".no_"+touslesjoursNum);
                touslesjoursReceiver.innerHTML = '';
                touslesjoursReceiver.appendChild(touslesjours);
                $('body').css({'background':'#F3E8DC'});

                $('.navbtn_touslesjours').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //designWorks
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*designWorksProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(designWorksProcedure+1)) {
                let designWorksNum = (88888+(designWorksProcedure+2)+((pageCount-8)*i))%8
                let designWorksReceiver = document.querySelector(".no_"+designWorksNum);
                designWorksReceiver.innerHTML = '';
                designWorksReceiver.appendChild(designWorks);
                $('body').css({'background':'#DE90D6'});

                $('.navbtn_dsi').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };
            //profile
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*profileProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(profileProcedure+1)) {
                let profileNum = (88888+(profileProcedure+2)+((pageCount-8)*i))%8
                let profileReceiver = document.querySelector(".no_"+profileNum);
                profileReceiver.innerHTML = '';
                profileReceiver.appendChild(profile);
                $('body').css({'background':'#d1d1d1'})

                $('.navbtn_prf').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
            };

            //puvlishing (page 2~6)
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*1 && sctop < i*(toNextScroll*pageCount)+toNextScroll*(touslesjoursProcedure+1)) {
                $('.depth2').stop().slideDown(600);
                $('.navbtn_pub').addClass('opa1').removeClass('opa04').parent().siblings().find('a').removeClass('opa1').addClass('opa04');
                $('.gnb>li:nth-of-type(2)').hover(function(){
                    $('.depth2').stop().slideDown(600);
                }, function(){
                    $('.depth2').stop().slideDown(600);
                });
            };
            //publishing + designWorks (page 2~7)
            if (sctop >= i*(toNextScroll*pageCount)+toNextScroll*1 && sctop < i*(toNextScroll*pageCount)+toNextScroll*(designWorksProcedure+1)) {
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
            //intro + profile (intro, 8)
            if ((sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) || (sctop >= i*(toNextScroll*pageCount)+toNextScroll*profileProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(profileProcedure+1))) {
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
            //intro + design + profile (intro, 7, 8)
            if ((sctop >= i*(toNextScroll*pageCount) && sctop < i*(toNextScroll*pageCount)+toNextScroll) || (sctop >= i*(toNextScroll*pageCount)+toNextScroll*designWorksProcedure && sctop < i*(toNextScroll*pageCount)+toNextScroll*(profileProcedure+1))) {
                $('.depth2').stop().slideUp(300);
                $('.gnb>li:nth-of-type(2)').hover(function(){
                    $('.depth2').stop().slideDown(450);
                }, function(){
                    $('.depth2').stop().slideUp(300);
                });
            };
        };
    };

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

    //skillsLevel
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

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    }, 100);
});