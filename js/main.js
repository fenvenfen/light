
$( ".seaAll" ).click(function() {
  $( ".block_cat" ).toggle("normal");
});

$(document).ready(function(){
    $(".lm-navigation li a:first").addClass("first");

    $('.lm-navigation .first').prepend("<span class='image-link catalog'></span>");

    $('.lm-navigation li:nth-child(2) a').prepend("<span class='image-link about'></span>");


  $(".mobile-menu li a:first").addClass("first");

    $('.mobile-menu .first').prepend("<span class='image-link catalog'></span>");

    $('.mobile-menu li:nth-child(2) a').prepend("<span class='image-link about'></span>");

        $('.menu-button').click(function() {
        if ($('.menu-wrapper').hasClass('opened')) {
            $('.menu-wrapper').removeClass('opened');
            $(this).removeClass('opened');
            return;
        }
        $('.menu-wrapper').addClass('opened');
        $(this).addClass('opened');
    });

})