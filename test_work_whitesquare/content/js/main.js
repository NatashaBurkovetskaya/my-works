$(document).ready(function () {
    var removeActive = function () {
        $("figure").removeClass("show");
    };

    $('.button1').bind('click', function () {
        removeActive();
        $('.banner1').addClass("show");
    });
    $('.button2').bind('click', function () {
        removeActive();
        $('.banner2').addClass("show");
    });
    $('.button3').bind('click', function () {
        removeActive();
        $('.banner3').addClass("show");
    });
    $('.button4').bind('click', function () {
        removeActive();
        $('.banner4').addClass("show");
    });

});
