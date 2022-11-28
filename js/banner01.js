$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').toggleClass('on')
    });

    // j쿼리에서만 작동
    $('.topBanner2 i').on('click', function () {
        $('.topBanner2 .inner').slideToggle(3000);
    });

    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle();
    });


    $('.popup button').on('click', function () {
        $(this).parent().hide();
    });

}); 