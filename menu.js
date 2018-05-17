$(document).ready(function() {

  $(".menu-trigger button").click(function() {
    $(".menu").slideToggle();
  });

  $(".menu-trigger button, .menu").click(function(e) {
    e.stopPropagation();
  });
  
  $(window, document, "html", "body").click(function() {
    $(".menu").slideUp();
  });

});