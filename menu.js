$(document).ready(function() {

  $(".menu-button").click(function() {
    if ($(".body-container").css("left") == "0px") {
      $(".menu-button").addClass("open");
      $(".body-container").css("position", "fixed");
      $(".menu-container").css("right", "0px");
    } else if ($(".body-container").css("left") == "-200px") {
      $(".menu-button").removeClass("open");
      $(".body-container").css("position", "relative");
      $(".menu-container").css("right", "-200px");
    }
  });

  $("html, #close-button").click(function() {
    if ($(".menu-container").css("right") == "0px") {
      $(".menu-button").removeClass("open");
      $(".body-container").css("position", "relative");
      $(".menu-container").css("right", "-200px");
    }
  });
  
  $(".menu-button, .menu-container").click(function(event){
      event.stopPropagation();
  });

});
