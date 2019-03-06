$(document).ready(function(){
  $("html").click(function() {
    $("#nav").fadeOut(200, function() {
      $("#trigger").removeClass("active");
    });
  });
  $("#trigger").click(function() {
    $(this).toggleClass("active");
    $("#nav").fadeToggle(200);
  });
  $("#trigger, #nav").click(function(e) {
    e.stopPropagation();
  });
});