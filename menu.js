$(document).ready(function() {

  $("img.btn").click(function() {
    if ($(this).hasClass("open") == true) {
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    $(".menu-container").slideToggle();
  });

});
