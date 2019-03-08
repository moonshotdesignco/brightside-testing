$(function(){
  $("#trigger").click(function() {
    $("html, body").toggleClass("freeze");
    $(".container#header").toggleClass("open");
    $(".container#content, .container#footer").fadeToggle(0);
    $("#trigger").find(".fa-bars, .fa-times").toggleClass("fa-times fa-bars");
    $("#nav").toggle(0);
  });
  $("html, body").click(function() {
    $("#nav").hide(0);
    $("#trigger").find(".fa-times").toggleClass("fa-bars");
    $(".container#content, .container#footer").fadeIn(0);
    $(".container#header").removeClass("open");
    $("html, body").removeClass("freeze");
  });
  $("#trigger, #nav").click(function(e) {
    e.stopPropagation();
  });
});