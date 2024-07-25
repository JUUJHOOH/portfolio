$(document).ready(function(){
    $('.depth2').hide();
    $('.depth2_bg').hide();
    $('.depth3').hide();
    $('.depth3_bg').hide();
    $('.gnb>ul>li').hover(function(){
        $('.gnbliStocker').css({'display':'block'});
        var stocleft = $(this).offset().left;
        var stocwidth = $(this).innerWidth();
        $('.gnbliStocker').css({'width':stocwidth-30,'left':stocleft+15});
        $(this).find('.depth2').stop().slideDown(1);
        $('.depth2_bg').stop().slideDown(50);
        $('.depth3_bg').stop().delay(50).slideDown(100);
    },function(){
        $(this).find('.depth2').stop().slideUp(1);
        $('.depth2_bg').stop().delay(100).slideUp(50);
        $('.depth3_bg').stop().slideUp(100);
    });

    $('.gnb>ul').mouseleave(function(){
        $('.gnbliStocker').css({'display':'none','width':'unset','left':'unset'});
    });

    $('.depth2>li').hover(function(){
        $('.depth2Stocker').css({'display':'block'});
        var stocleft = $(this).offset().left;
        var stocwidth = $(this).innerWidth();
        $('.depth2Stocker').css({'width':stocwidth-26,'left':stocleft+13});
        $(this).find('.depth3').stop().slideDown(1);
    },function(){
        $(this).find('.depth3').stop().slideUp(1);
    });
    $('.depth2').mouseleave(function(){
        $('.depth2Stocker').css({'display':'none','width':'unset','left':'unset'});
    });
});

// =================== trustDowny ===============
$(function(){
    $(window).on("scroll", function(){
        var sctop = $(this).scrollTop();
        console.log(sctop);
        console.log(window.innerHeight)
        var fade1Top = window.innerHeight*((((sctop-1200)**2)/1300000)+0.5);
        if(sctop>1200){
            var fade1Top = window.innerHeight*((-((sctop-1200)**2)/1300000)+0.5);
        }
        console.log(fade1Top)
        var fade2Top = window.innerHeight*((((sctop-2400)**2)/1300000)+0.5);
        if(sctop>2400){
            var fade2Top = window.innerHeight*((-((sctop-2400)**2)/1300000)+0.5);
        }
        console.log(fade2Top)
        var fade3Top = window.innerHeight*((((sctop-3600)**2)/1300000)+0.5);
        if(sctop>3600){
            var fade3Top = window.innerHeight*((-((sctop-3600)**2)/1300000)+0.5);
        }
        console.log(fade3Top)
        var fade4Top = window.innerHeight*((((sctop-5600)**2)/1300000)+0.5);
        if(sctop>5600){
            var fade4Top = window.innerHeight*(0.5);
        }
        console.log(fade4Top)
        $('.fade1').css({'top':fade1Top});
        $('.fade2').css({'top':fade2Top});
        $('.fade3').css({'top':fade3Top});
        $('.fade4').css({'top':fade4Top});
        
        console.log(fade1opa)
        var fade1opa = Math.abs((window.innerHeight-(2*fade1Top))/window.innerHeight)
        $('.fade1').css({'opacity':(1.01-fade1opa)})
        var fade2opa = Math.abs((window.innerHeight-(2*fade2Top))/window.innerHeight)
        $('.fade2').css({'opacity':(1.01-fade2opa)})
        var fade3opa = Math.abs((window.innerHeight-(2*fade3Top))/window.innerHeight)
        $('.fade3').css({'opacity':(1.01-fade3opa)})
        var fade4opa = Math.abs((window.innerHeight-(2*fade4Top))/window.innerHeight)
        $('.fade4').css({'opacity':(1/1.15-fade4opa)*1.15})
        if(sctop>5600){
            $('.fade4').css({'opacity':(1-((sctop-5600)/35)**2/1225)})
        }
        

// =================== whyDowny ==================
        if(sctop<6900){
            $('.whydowny').css({'top':window.innerHeight+500})
            $('.whyd2,.whyd3,.whyd4,.whyd5,.whyd6').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd1').css({'transform':'scale(1.5)'})
        };
        if(sctop>=6900){
            $('.whydowny').css({'top':0})
        }
        if(sctop<8000){
            $('.whyd__img').css({'background-position-y':0})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(0deg) scale(1.5)'})
        }
        if(sctop>= 6900 && sctop<8000){
            $('.whyd1').css({'top':275,'transform':'unset'})
            $('.whyd2').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd__visual').css({'transform':'rotate(0deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(0deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(0deg)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(0deg)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(0deg)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(0deg)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(0deg)'})
        };
        if(sctop>= 8000 && sctop<8800){
            $('.whyd1').css({'top':-1500,'transform':'scale(1.5)'})
            $('.whyd2').css({'top':275,'transform':'unset'})
            $('.whyd3').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd__visual').css({'transform':'rotate(60deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(-60deg)','background-position-y':-375})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(-60deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(-60deg) scale(1.5)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(-60deg)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(-60deg)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(-60deg)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(-60deg)'})
        };
        if(sctop>= 8800 && sctop<9600){
            $('.whyd2').css({'top':-1500,'transform':'scale(1.5)'})
            $('.whyd3').css({'top':275,'transform':'unset'})
            $('.whyd4').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd__visual').css({'transform':'rotate(120deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(-120deg)','background-position-y':-750})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(-120deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(-120deg)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(-120deg) scale(1.5)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(-120deg)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(-120deg)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(-120deg)'})
        };
        if(sctop>= 9600 && sctop<10200){
            $('.whyd3').css({'top':-1500,'transform':'scale(1.5)'})
            $('.whyd4').css({'top':275,'transform':'unset'})
            $('.whyd5').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd__visual').css({'transform':'rotate(180deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(-180deg)','background-position-y':-1125})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(-180deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(-180deg)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(-180deg)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(-180deg) scale(1.5)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(-180deg)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(-180deg)'})
        };
        if(sctop>= 10200 && sctop<10800){
            $('.whyd4').css({'top':-1500,'transform':'scale(1.5)'})
            $('.whyd5').css({'top':275,'transform':'unset'})
            $('.whyd6').css({'top':window.innerHeight+500,'transform':'scale(1.5)'})
            $('.whyd__visual').css({'transform':'rotate(240deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(-240deg)','background-position-y':-1500})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(-240deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(-240deg)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(-240deg)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(-240deg)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(-240deg) scale(1.5)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(-240deg)'})
        };
        if(sctop>= 10800 && sctop<11600){
            $('.whyd5').css({'top':-1500,'transform':'scale(1.5)'})
            $('.whyd6').css({'top':275,'transform':'unset'})
            $('.whyd__visual').css({'transform':'rotate(300deg)'})
            $('.whyd__img').css({'transform':'translate(-50%,-50%) rotate(-300deg)','background-position-y':-1875})
            $('.whyd__visual h4:nth-of-type(1)').css({'transform':'rotate(-300deg)'})
            $('.whyd__visual h4:nth-of-type(2)').css({'transform':'rotate(-300deg)'})
            $('.whyd__visual h4:nth-of-type(3)').css({'transform':'rotate(-300deg)'})
            $('.whyd__visual h4:nth-of-type(4)').css({'transform':'rotate(-300deg)'})
            $('.whyd__visual h4:nth-of-type(5)').css({'transform':'rotate(-300deg)'})
            $('.whyd__visual h4:nth-of-type(6)').css({'transform':'rotate(-300deg) scale(1.5)'})
        };
        if(sctop>= 11600 && sctop<12200){
            $('.whyd6').css({'transform':'scale(1.5)'})
        };
        if(sctop>= 11600){
            $('.whydowny').css({'top':-3000})
            $('.whyd1,.whyd2,.whyd3,.whyd4,.whyd5').css({'top':-1500,'transform':'scale(1.5)'})
        }
    });
});

// ===================== introduceProducts ==================
$(function(){
    $('.products>a').hover(function(){
        $(this).css({'width':450,'height':450});
        $(this).find('h3').css({'padding-top':15,'height':112,'bottom':0});
        $(this).find('h4').css({'opacity':1});
    },function(){
        $(this).css({'width':330,'height':330});
        $(this).find('h3').css({'padding-top':15,'height':55,'bottom':55});
        $(this).find('h4').css({'opacity':0});
    });
});

// ===================== goTop ==================
$(function(){
    $('.gotop').hide();
    $(window).on("scroll", function(){
        var sctop = $(this).scrollTop();
        if(sctop<200){
            $('.gotop').fadeOut();
        }else{
            $('.gotop').fadeIn();
        };
    });
});