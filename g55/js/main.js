$(window).ready(function(){
    // ------------ category ---------------
    const categoryGroup = document.getElementById('categoryGroup')
    $('.categoryInWindow .swiper-slide').click(function(){
        $('.classWindow a').addClass('displayNone');
    });
    $('.categoryInWindow .All').click(function(){
        $('.classWindow a').removeClass('displayNone');
        categoryGroup.textContent = 'All'
    });
    $('.categoryInWindow .ClubOriginals').click(function(){
        $('.classWindow .ClubOriginals').removeClass('displayNone')
        categoryGroup.textContent = 'ClubOriginals'
    });
    $('.categoryInWindow .Art').click(function(){
        $('.classWindow .Art').removeClass('displayNone')
        categoryGroup.textContent = 'Art'
    });
    $('.categoryInWindow .Economy').click(function(){
        $('.classWindow .Economy').removeClass('displayNone')
        categoryGroup.textContent = 'Economy'
    });
    $('.categoryInWindow .DanceExercise').click(function(){
        $('.classWindow .DanceExercise').removeClass('displayNone')
        categoryGroup.textContent = 'DanceExercise'
    });
    $('.categoryInWindow .MusicPlay').click(function(){
        $('.classWindow .MusicPlay').removeClass('displayNone')
        categoryGroup.textContent = 'MusicPlay'
    });
    $('.categoryInWindow .Drawing').click(function(){
        $('.classWindow .Drawing').removeClass('displayNone')
        categoryGroup.textContent = 'Drawing'
    });
    $('.categoryInWindow .Parentseducation').click(function(){
        $('.classWindow .Parentseducation').removeClass('displayNone')
        categoryGroup.textContent = 'Parentseducation'
    });
    $('.categoryInWindow .WithMom').click(function(){
        $('.classWindow .WithMom').removeClass('displayNone')
        categoryGroup.textContent = 'WithMom'
    });
    $('.categoryInWindow .KidsChildren').click(function(){
        $('.classWindow .KidsChildren').removeClass('displayNone')
        categoryGroup.textContent = 'KidsChildren'
    });
    $('.categoryInWindow .HomeCook').click(function(){
        $('.classWindow .HomeCook').removeClass('displayNone')
        categoryGroup.textContent = 'HomeCook'
    });

    $('.selectWrap').click(function(){
        $('.selArrow').css({'transform':'rotate(225deg) translateY(-50%)'});
    });
    $('.selectWrap').mouseleave(function(){
        $('.selArrow').css({'transform':'rotate(405deg)'});
    });
    $('.familySite').click(function(){
        $('.familyArrow').css({'transform':'rotate(225deg) translateY(-50%)'});
    });
    $('.familySite').mouseleave(function(){
        $('.familyArrow').css({'transform':'rotate(405deg)'});
    });

    //------------ map ----------------
    $('.toggleSwitch>div').click(function(){
        $(this).css({'border':'1px solid #333','border-bottom':'none','background-color':'unset','color':'#333','height':'80px'});
        $(this).siblings().css({'border':'none','border-bottom':'1px solid #333','background-color':'#FEB203','color':'#fff','height':'60px'});
    });
    $('.switch1').click(function(){
        $('.choiceWrap, .branch1, .branch2, .branch3').show();
        $('.branchList').css({'height':'518px','padding-top':'unset'});
    });
    $('.switch2').click(function(){
        $('.choiceWrap, .branch1, .branch2, .branch3').hide();
        $('.branchList').css({'height':'654px','padding-top':'30px'});
    });
    $('.mapSelecter').click(function(){
        $('.mapSelecterArrow').css({'transform':'rotate(180deg)'});
    });
    $('.mapSelecter').mouseleave(function(){
        $('.mapSelecterArrow').css({'transform':'rotate(0deg)'});
    });
    $('.branchList>article').click(function(){
        $(this).addClass('focusOn').removeClass('focusOff').removeClass('focusOnPrev').siblings().removeClass('focusOn').removeClass('focusOnPrev').addClass('focusOff');
        $(this).prev().addClass('focusOnPrev');
    });

    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.4782, 127.1196),
        zoom: 15
    });
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.4782, 127.1196),
        map: map,
        icon: {
            url: 'image/mapMarker.png',
            size: new naver.maps.Size(30, 45),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 45)
        }
    });
    $('.branch1').click(function(){
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.4782, 127.1196),
            zoom: 16
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.4782, 127.1196),
            map: map,
            icon: {
                url: 'image/mapMarker.png',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 45)
            }
        });
    });
    $('.branch2').click(function(){
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.7705, 128.9226),
            zoom: 16
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.7705, 128.9226),
            map: map,
            icon: {
                url: 'image/mapMarker.png',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 45)
            }
        });
    });
    $('.branch3').click(function(){
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.5858, 126.6772),
            zoom: 16
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5858, 126.6772),
            map: map,
            icon: {
                url: 'image/mapMarker.png',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 45)
            }
        });
    });
    $('.branch4').click(function(){
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(35.3368, 129.0263),
            zoom: 16
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(35.3368, 129.0263),
            map: map,
            icon: {
                url: 'image/mapMarker.png',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 45)
            }
        });
    });

    // var marker = new naver.maps.Marker(markerOptions);
});