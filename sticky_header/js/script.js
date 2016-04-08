
$(document).ready(function(){
    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        if(scrTop >= 30){
            $("body").addClass("sticky");
        }else{
            $("body").removeClass("sticky");
        }
    });
});

