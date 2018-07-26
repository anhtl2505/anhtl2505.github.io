 

/*-------------------------------------------------------------------------
*/ $(function(){
 	$('.navbar-right li:nth-child(2) a')
 	.click(function(event) {
 		/* Act on the event */
 		$('body').animate({scrollTop:750})
 		return false;
 	});

	 $('.navbar-right li:nth-child(3) a')
 	.click(function(event) {
 		/* Act on the event */
 		$('body').animate({scrollTop:1700})
 		return false;
 	});
	 
})  
 


