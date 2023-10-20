$(function () {

    //스와이퍼 슬라이드 
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //nav 버튼
    $('.menu_open').click(function () {
        $('nav').slideDown(800);
    });
    $('.menu_close').click(function () {
        $('nav').slideUp(800);
    });

    //.cont01 click 이벤트
    let itemButton = $('.tab_wrap li');
    itemButton.click(function () {
        $('.list_in').removeClass('on');
        $('.list_in').eq($(this).index()).addClass('on');

        itemButton.removeClass('on');
        $(this).addClass('on');
    });

    //.cont02 mouseenter 이벤트
    let bigImage = $('.big_image img');
    let smallImage = $('.small_item li');

    smallImage.mouseenter(function(){
        let bigImageChange = $(this).find('img').attr('src');
        let bigH3Change = $(this).find('h3').text();
        let bigSpanChange = $(this).find('span').text();
        let bigPChange = $(this).find('p').text();
        let bigAChange = $(this).find('a').attr('href');

        bigImage.attr('src',bigImageChange);
        $('.text_box h3').text(bigH3Change);
        $('.text_box span').text(bigSpanChange);
        $('.text_box p').text(bigPChange);
        $('.text_box a').attr('href',bigAChange);
    });

});//jquery end