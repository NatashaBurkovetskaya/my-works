$(document).ready(function(){

   function moveText(){
       var banner = $(".text1");
       var banner2 = $(".text");

       banner.animate({left: 40}, 1000);
       banner.delay(1700).animate({opacity: 0});
       banner2.delay(3000).animate({left: 40}, 1000);
   }
  moveText();
    //function movePictures(){
    //    var $element = $(".cookies");
    //    var lastHeight = $(".cookies1").css('height');
    //    function checkForChanges()
    //    {
    //        if ($element.css('height') != lastHeight)
    //        {
    //            lastHeight = $element.css('height');
    //        }
    //
    //        setTimeout(checkForChanges, 500);
    //    }
    //    checkForChanges();
    //
    //}
    //movePictures();
});