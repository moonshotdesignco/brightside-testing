$(function(){
  $("#trigger > a").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(".container#nav").offset().top
    }, 700);
    $("body").addClass("freeze");
    $(".container#header a, .container#content a, .container#footer a").attr("tabindex", "-1");
    $(".container#nav").animate({
      "min-height": "100%"
    }, 700, function() {
      $(".container#nav ul").css("overflow", "auto");
      $(".container#nav ul li a").removeAttr("tabindex");
    });
  });
  $("#close > a").click(function(e) {
    e.preventDefault();
    $(".container#nav ul").animate({
      scrollTop: $("body").offset().top
    }, 700);
    $(".container#nav ul").css("overflow", "hidden");
    $(".container#nav ul li a").attr("tabindex", "-1");
    $(".container#nav").animate({
      "min-height": "0%"
    }, 700, function() {
      $(".container#header a, .container#content a, .container#footer a").removeAttr("tabindex");
      $("body").removeClass("freeze");
    });
  });
});