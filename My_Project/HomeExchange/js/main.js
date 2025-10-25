$(".faq_card .question").click(function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("question_opened")) {
    //   $(this).parent().removeClass("question_opened");
    //   $(this).next().css("max-height", "0px");
    } else {
        $(this).parent().parent().parent().find(".question_opened .answer").css("max-height", "0px");
        $(this).parent().parent().parent().find(".question_opened").removeClass("question_opened");
        $(this).parent().addClass("question_opened");
        var heightinside = $(this).next().find(".inner").height() + 50;
        $(this)
        .next()
        .css("max-height", heightinside + "px");
        }
  });

  $(".sec4 .loyality_slider .box").hover(
    function () {
      $(this).parent().parent().addClass("result_hover");
    },
    function () {
      $(this).parent().parent().removeClass("result_hover");
    }
  );
  $('.loyality_slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 9,
  });

  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
  });
<<<<<<< HEAD
=======




function rangeSlider() {
    let slider = document.querySelectorAll(".range-slider");
    let range = document.querySelectorAll(".range-slider__range");
    let value = document.querySelectorAll(".range-slider__value");
  
    slider.forEach((currentSlider) => {
      value.forEach((currentValue) => {
        let val = currentValue.previousElementSibling.getAttribute("value");
        currentValue.innerText = val;
      });
  
      range.forEach((elem) => {
        elem.addEventListener("input", (eventArgs) => {
          elem.nextElementSibling.innerText = eventArgs.target.value;
        });
      });
    });
  }
  rangeSlider();


  $('input[type=range]').on('input', function () {
    var valof = $(this).parent().find(".range-slider__value").text();
    $(this).parent().parent().find("p span").text(valof)
});
>>>>>>> 26f6f02e18a8d7b5a70a765719070cc4b347f737
