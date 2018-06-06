$(document).ready(function() {

  $("img.btn").click(function() {
    if ($(this).hasClass("open") == true) {
      $(this).removeClass("open");
      $(".btn-container").removeClass("open");
    } else {
      $(this).addClass("open");
      $(".btn-container").addClass("open");
    }
    $(".menu-container").slideToggle(500);
  });

});
