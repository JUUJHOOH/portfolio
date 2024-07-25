
//fullpage 스크립트 + 앵커 스크립트
$(document).ready(function () {
    let sc = $('.section'); //클래스 section을 변수 sc에 담는다.
    $("#fullpage").fullpage({
        anchors: ["mainVisuer", "autismRace", "autismStory", "footer"],
        menu: "#anchors",
        responsiveWidth: 1440,
        //navigation: true,
        //scrollBar: true,
        afterLoad: function(origin, destination, direction){
            let idx = destination.index; //목적지 페이지의 인덱스를 변수 idx에 담는다.
            sc.eq(idx).addClass('comein').siblings().removeClass('comein');
            //섹션의 목적지 섹션에는 클래스 comein을 추가하고 동위관계의 섹션에 있는 클래스 comein은 제거한다.
            if(idx <= 1) {
                sc.removeClass('comein');
            }
            const element = document.querySelectorAll('#anchors a');
            if(idx >= 2) {
                for ( i=0 ; i<=3 ; i++) {
                    element[i].style.backgroundColor = '#333';
                }
            } else {
                for ( i=0 ; i<=3 ; i++) {
                    element[i].style.backgroundColor = '#fff';
                }
            }
        }
    });

    // 모바일 버튼 
    $(".m_btn").on("click", function(){
        $(".m_btn_menu").toggleClass("on")
        $(this).toggleClass("on")
    });

    const swiper = new Swiper('.ambassador', {
        loop: true,
        slidesPerView: 1,
        speed : 2700,
        autoplay : {
            delay : 10000,
            disableOnInteraction : false, 
            pauseOnMouseEnter : true,
        },
    });
    const swiperSNS = new Swiper('.autismRaceSNS', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2,
        speed : 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            769: {  // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1440: {  // 가로해상도가 1440px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});

const snsSlide = document.querySelector(".autismRaceSNS div a");
const autismStory = document.querySelector(".autismStory");
function reSnsHeight(){
    document.documentElement.style.setProperty("--snsSlideSize", snsSlide.swiperSlideSize);
    let winWidth = window.innerWidth;
    if (winWidth < 1440) {
        $(".fp-section").addClass("fp-auto-height");
    } else {
        $(".fp-section").removeClass("fp-auto-height");
    }
}
setTimeout(reSnsHeight, 200);
window.addEventListener('resize', reSnsHeight);

const nav = document.querySelector("#header .inner nav");
const navBtn = document.querySelector("i.xi-bars");
const fullpage = document.querySelector("#fullpage");
navBtn.addEventListener('click', function(){
    nav.classList.toggle('displayNone');
})
fullpage.addEventListener('click', function(){
    nav.classList.add('displayNone');
})
function navSensor(){
    let winWidth = window.innerWidth;
    if (winWidth <= 1366) {
        nav.classList.add('displayNone');
    } else {
        nav.classList.remove('displayNone');
    }
}
setTimeout(navSensor, 100);
window.addEventListener('resize', navSensor);
