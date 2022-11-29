$(function () {
    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    // mainSlide
    $('.mainSlide').slick({
        // slidesToShow: 2,
        // arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // 마우스가 올라가도 슬라이드 넘기기
        pauseOnHover: false,
        pauseOnFocus: false,
        // speed: 0,


    });










});