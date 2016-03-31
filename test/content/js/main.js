$( ".current_order" ).on( "click", function()
{
    $( ".content" ).fadeToggle( "fast" );
    $(".current_order").toggleClass("active");
    $(".current_sing").toggleClass("sing_active");
});

$( "#all_orders" ).on( "click", function()
{
    $( ".orders" ).fadeToggle( "fast" );

});

