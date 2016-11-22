$(document).ready(function(){

    // toggles dropdown of mobile menu
    $('#mobile-nav').on('click', function(){
      $('#mobile-nav ul').slideToggle();
    });

    // functions for smooth scrolling here
    $('.about').on('click', function(e){
        e.preventDefault();  // prevents the default event that occurs when you click on an anchor tag. This prevents redirection to other pages as well as an initial 'blink' that goes to the specific id you direct it to.
        $('body').animate({scrollTop: $('.about-section').offset().top}, 700);  // body will animate(scroll) the distance from the top of the page to the #about section
    });

    $('.portfolio').on('click', function(e){
        e.preventDefault();  // prevents the default event that occurs when you click on an anchor tag. This prevents redirection to other pages as well as an initial 'blink' that goes to the specific id you direct it to.
        $('body').animate({scrollTop: $('.portfolio-section').offset().top}, 700);  // body will animate(scroll) the distance from the top of the page to the #about section
    });

    $('.contact').on('click', function(e){
        e.preventDefault();  // prevents the default event that occurs when you click on an anchor tag. This prevents redirection to other pages as well as an initial 'blink' that goes to the specific id you direct it to.
        $('body').animate({scrollTop: $('.contact-section').offset().top}, 700);  // body will animate(scroll) the distance from the top of the page to the #about section
    });
});
