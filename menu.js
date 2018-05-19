$(document).ready(function() {

  $(".menu-trigger").click(function() {
    if ($(".menu").css("display") == "none") {
      $(".menu-trigger img").addClass("open");
    } else {
      $(".menu-trigger img").removeClass("open");
    }
    $(".menu").slideToggle(400);
  });

});
