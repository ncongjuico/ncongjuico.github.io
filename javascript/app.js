$(document).ready(function(){
    
    // toggles dropdown of mobile menu
    $('#mobile-nav').on('click', function(){
      $('#mobile-nav ul').slideToggle(); 
    });
    
    // functions for smooth scrolling here
    $('.about').on('click', function(e){
        e.preventDefault();  // prevents the default event that occurs when you click on an anchor tag. This prevents redirection to other pages as well as an initial 'blink' that goes to the specific id you direct it to.
        $('body').animate({scrollTop: $('#about').offset().top}, 1000);  // body will animate(scroll) the distance from the top of the page to the #about section
    });       
});