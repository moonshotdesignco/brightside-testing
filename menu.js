$(document).ready(function() {

  $(".menu-trigger").click(function() {
    if ($(".menu").css("display") == "none") {
      $(".menu-trigger p").addClass("open");
    } else {
      $(".menu-trigger p").removeClass("open");
    }
    $(".menu").slideToggle();
  });

});
