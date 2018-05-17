$(document).ready(function() {

  $(window, document, "html", "body").click(function() {
    $(".menu").slideUp();
  });

  $(".menu-trigger button").click(function() {
    $(".menu").slideToggle();
  });

  $(".menu-trigger button, .menu").click(function(e) {
    e.stopPropagation();
  });

});
