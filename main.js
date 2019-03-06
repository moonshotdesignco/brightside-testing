$(document).ready(function(){
  $("html, body").click(function() {
    $("#nav").hide(0);
    $("#trigger").removeClass("active");
  });
  $("#trigger").click(function() {
    $(this).toggleClass("active");
    $("#nav").toggle(0);
  });
  $("#trigger, #nav").click(function(e) {
    e.stopPropagation();
  });
});