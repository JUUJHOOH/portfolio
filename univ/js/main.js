$(window).ready(function(){
    $('#bigMenu li').mouseenter(function(){
        $(this).addClass('BMOn').siblings().removeClass('BMOn')
    });

    var fadeOffsetTop1 = $('.fadeUp1').offset().top;
    var fadeOffsetTop2 = $('.fadeUp2').offset().top;
    var fadeOffsetTop3 = $('.fadeUp3').offset().top;
    var fadeOffsetTop4 = $('.fadeUp4').offset().top;

    var FOTObj = {};
    for (let i = 1; i <= 4; i++) {
        FOTObj[`fadeOffsetTop${i}`] = eval(`fadeOffsetTop${i}`)
        console.log(FOTObj);

        var sctop = 0;
        if (sctop >= (FOTObj[`fadeOffsetTop${i}`] - (window.innerHeight + 35))){
            $('.fadeUp'+i).css({'transform':'translateY(0)','opacity':'1'})
        } else {
            $('.fadeUp'+i).css({'transform':'translateY(160px)','opacity':'0'})
        };
        $(window).on("scroll", function(){
            var sctop = $(this).scrollTop();

            if (sctop >= (FOTObj[`fadeOffsetTop${i}`] - (window.innerHeight + 35))){
                $('.fadeUp'+i).css({'transform':'translateY(0)','opacity':'1'})
            } else {
                $('.fadeUp'+i).css({'transform':'translateY(160px)','opacity':'0'})
            };
        });
    };
});