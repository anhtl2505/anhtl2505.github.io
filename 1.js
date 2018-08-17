/*$('body').animate({scrollTop: $('.hinhnen2').offset().top}, 1500,"easeOutElastic")*/
/*console.log($('.hinhnen2').offset().top);*/



/*var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $('body').animate({scrollTop:1000 }, 1500)
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});*/

$(window).scroll(function(event)
{
	$('hinhnen5').animate({scrollTop:0}, 800)

});

$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           // downscroll code
           console.log('scroll down');
       } else {
          // upscroll code
          console.log('scroll up');
          $('body').animate({scrollTop:0}, 800)
       }
       lastScrollTop = st;
    });
});

			/*$('body').animate({scrollTop:0}, 800)*/
