$(document).ready(function () {
    $('.component').each(function () {
        $(this).mouseover(function () {
            $(this).find('span:first').addClass('hide');
            $(this).find('span:last').removeClass('hide');
        }).mouseout(function () {
            $(this).find('span:last').addClass('hide');
            $(this).find('span:first').removeClass('hide');
        })
    })
});