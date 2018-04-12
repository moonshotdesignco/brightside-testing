$(document).ready(function() {

  $("img.album").click(function() {

    if ($(this).attr("id") == "las") {
      $("div.album#las").fadeIn();
    } else if ($(this).attr("id") == "aei") {
      $("div.album#aei").fadeIn();
    } else if ($(this).attr("id") == "flf") {
      $("div.album#flf").fadeIn();
    } else if ($(this).attr("id") == "hs") {
      $("div.album#hs").fadeIn();
    }

  });

  $("img.bio").click(function() {
    if ($(this).attr("id") == "con") {
      $("div.bio#con").fadeIn();
    } else if ($(this).attr("id") == "jake") {
      $("div.bio#jake").fadeIn();
    } else if ($(this).attr("id") == "dil") {
      $("div.bio#dil").fadeIn();
    } else if ($(this).attr("id") == "will") {
      $("div.bio#will").fadeIn();
    } else if ($(this).attr("id") == "cor") {
      $("div.bio#cor").fadeIn();
    }
  });

  $("span.close").click(function() {

    $("div.album, div.bio").fadeOut();

  });

  $(window).scroll(function() {

		if ($(this).scrollTop() > 200) {
			$("i#scrollUp").fadeIn();
		} else {
			$("i#scrollUp").fadeOut();
		}

	});

  $("i#scrollUp").click(function() {

    $("html, body").animate({scrollTop : 0},500);
		return false;

	});

});
