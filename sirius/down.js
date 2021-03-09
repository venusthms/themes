$(document).ready(function(){
    var height = $(window).height(); 
    $('.down').click(function(){ 
        $('html, body').animate({scrollTop: height }, 1100); 
        return false; 
    });
	
	    $('.scrollup').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
