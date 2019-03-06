$(document).ready(function(){
  $("html").on("click tap", function() {
    $("#nav").hide(0);
    $("#trigger").removeClass("active");
  });
  $("#trigger").on("click tap", function() {
    $(this).toggleClass("active");
    $("#nav").toggle(0);
  });
  $("#trigger, #nav").on("click tap", function(e) {
    e.stopPropagation();
  });
});