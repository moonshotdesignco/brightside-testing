$(document).ready(function() {

  $(".menu-trigger").click(function() {
    if ($(".menu").css("display") == "none") {
      $(".menu-trigger img").addClass("open");
      $(".block-section").addClass("menu-open");
    } else {
      $(".menu-trigger img").removeClass("open");
      $(".block-section").removeClass("menu-open");
    }
    $(".menu").slideToggle(400);
  });

});
