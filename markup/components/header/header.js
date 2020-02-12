$(document).ready(function () {
    $('.header__trigger, .header__content-close').click(function () {
        $('.header__content').toggleClass('header__content--show');
    });
});