$(document).ready(function () {

    $(".current_order").on("click", function () {
        $(".content").fadeToggle("fast");
        $(".current_order").toggleClass("active");
        $(".current_sing").toggleClass("sing_active");
    });

    function hideOrder() {
        $(".content").fadeOut("fast");
        $(".current_order").removeClass("active");
        $(".current_sing").removeClass("sing_active");
    }

    function removeNotActive() {
        $("ul").removeClass("notActive");
        $("article").removeClass("notActive");
        $("div").removeClass("notActive");
    }

    $("#all_orders").on("click", function () {
        removeNotActive();
    });

    $("#current").on("click", function () {
        removeNotActive();
        $(".canceled_order, .finished_order").toggleClass("notActive");

    });

    $("#finished").on("click", function () {
        removeNotActive();
        $(".canceled_order, .current_order").toggleClass("notActive");
        hideOrder();

    });

    $("#canceled").on("click", function () {
        removeNotActive();
        $(".current_order, .finished_order, .content ").toggleClass("notActive");
        hideOrder();

    });

});
