$(document).ready(function () {

    function moveText() {
        var banner = $(".text1");
        var banner2 = $(".text");

        banner.animate({left: 40}, 750);
        banner.delay(1500).animate({opacity: 0});
        banner2.delay(2500).animate({left: 40}, 750);
    }

    moveText();
    function movePictures() {
        $("#cookie1").delay(1500).fadeIn();
        $("#cookie2").delay(1750).fadeIn();
        $("#cookie3").delay(2000).fadeIn();
    }

    movePictures();
});