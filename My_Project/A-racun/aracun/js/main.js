var $document = $(document),
    $element = $('.navbartop_c'),
    className = 'navbartop_c_fixed';

$document.scroll(function() {
  if ($document.scrollTop() >= 200) {
    // user scrolled 50 pixels or more;
    // do stuff
    $element.addClass(className);
  } else {
    $element.removeClass(className);
  }
});


$( ".home_s3 .w_box .box .area .bodyarea .procitajvise" ).click(function(e) {
    e.preventDefault();
    if(!$(this).parent().hasClass("textopened")){
	    $(this).parent().addClass("textopened");
	    $(this).html("UMANJITE <img src='img/down-arrow-of-angle.svg' >");
    }else{
	    $(this).parent().removeClass("textopened");
	    $(this).html("PROČITAJTE JOŠ <img src='img/down-arrow-of-angle.svg' >");
    }
});


$( ".kontakt_s2 .form .plfordiv input" ).focus(function() {
    $(this).parent().addClass("activated");
});
$( ".kontakt_s2 .form .plfordiv textarea" ).focus(function() {
    $(this).parent().addClass("activated");
});