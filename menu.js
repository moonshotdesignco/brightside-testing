$(document).ready(function() {

  $(".menu-trigger button").click(function(e) {
    e.stopPropagation();
    $(".menu").slideToggle();
  });

  $(".menu").click(function(e) {
    e.stopPropagation();
  });
  
  $(document, "html").click(function() {
    $(".menu").slideUp();
  });

});
