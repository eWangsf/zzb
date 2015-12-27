$(document).ready(function () {
    var height = window.screen.availHeight;
    $('.content').css({
        'min-height': height + 'px'
    })
    $('.bgmodal:first').css({
        'height': height + 'px'
    })
});