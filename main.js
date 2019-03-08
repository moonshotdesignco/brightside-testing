$(function(){
  $("#trigger").click(function() {
    $("body").addClass("freeze");
    $("#nav").slideDown(700);
  });
  $("#close").click(function() {
    $("#nav").slideUp(700);
    $("body").removeClass("freeze");
  });
});