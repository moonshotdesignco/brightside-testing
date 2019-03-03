$(document).ready(function(){

  $(".menu-link").click(function(){
    if ($(this).find(".indicator").hasClass("rotated") == true) {
      $(this).find(".indicator.rotated").removeClass("rotated");
      $(".menu-link").delay(600).not(this).slideDown();
      $("#body-wrapper, .body-content").delay(100).slideUp();
    } else {
      $(this).find(".indicator").addClass("rotated");
      $(".menu-link").delay(100).not(this).slideUp();
      $("#body-wrapper").slideDown();
      if ($(this).attr("id") == "ml-music") {
        $("#bc-music").delay(600).slideToggle();
      } else if ($(this).attr("id") == "ml-videos") {
        $("#bc-videos").delay(600).slideToggle();
      } else if ($(this).attr("id") == "ml-tour") {
        $("#bc-tour").delay(600).slideToggle();
      } else if ($(this).attr("id") == "ml-merch") {
        $("#bc-merch").delay(600).slideToggle();
      } else if ($(this).attr("id") == "ml-contact") {
        $("#bc-contact").delay(600).slideToggle();
      }
    }
  });

});