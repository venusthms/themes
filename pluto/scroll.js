    $(document).ready(function(){
 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
 
    $('.up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
 
});
