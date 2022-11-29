$(function () {

    // j쿼리에서만 작동
    $('.topBanner i').on('click', function () {
        $('.topBanner').toggleClass('on')
    });

    $('.topBanner2 i').on('click', function () {
        $('.topBanner2 .inner').slideToggle(3000);
    });

    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle();
    });


    $('.popup button').on('click', function () {
        $(this).parent().hide();
    });


    $('.leftBanner i').on('click', function () {
        $('.leftBanner').toggleClass('on')
    })

    $('.rightBanner i').on('click', function () {
        $('.rightBanner').toggleClass('on')
    })
}); 