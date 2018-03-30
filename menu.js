$(document).ready(function() {

  $(".menu-trigger").click(function() {
    if ($("#content-wrapper").css("left") == "0px") {
      $("#content-wrapper").css({"left": "240px", "overflow": "hidden"});
      $(".menu-trigger").addClass("open");
    } else if ($("#content-wrapper").css("left") == "240px") {
      $("#content-wrapper").css({"left": "0px", "overflow": "auto"});
      $(".menu-trigger").removeClass("open");
    }
  });

  $("#content-wrapper").click(function() {
    if ($("#content-wrapper").css("left") == "240px") {
      $("#content-wrapper").css({"left": "0px", "overflow": "auto"});
      $(".menu-trigger").removeClass("open");
    }
  });

});
