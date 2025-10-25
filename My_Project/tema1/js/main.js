// js for navbar
$(".navbar .lines").click(function (e) {
    e.preventDefault();
    if($("body").hasClass("navbar_active")){
        $("body").removeClass("navbar_active");
        $("body").removeClass("disable_scroll");
    }else{
        $("body").addClass("navbar_active");
        $("body").addClass("disable_scroll");
    }
});


$(".dropdown_bigger .boxes h2").click(function (e) {
    e.preventDefault();
    if($(this).hasClass("down_opened")){
        $(this).removeClass("down_opened");
        $(this).next().css("max-height", "0px");

    }else{
        $(".down_opened").next().css("max-height", "0px");
        $(".down_opened").removeClass("down_opened");

        $(this).addClass("down_opened");
        var getheight = $(this).next().find("ul").height() + 50;
        $(this).next().css("max-height", getheight + "px");
    }
});

$(".navbar .for_mobile ul .dropdown_li a").click(function (e) {
    if(!$(this).parent().parent().parent().hasClass("ford")){
        e.preventDefault();
        $(".dropdown_smaller").css("max-height", "0px");
        $(".dropdown_active").removeClass("dropdown_active");
        $(this).next().addClass("dropdown_bigger_active")
    }
});
$(".dropdown_bigger .goback_mobile").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("dropdown_bigger_active")
});

$(".navbar .for_mobile ul .dropdown_li_sm a").click(function (e) {
    if ($(window).width() < 900) {
        if(!$(this).parent().parent().parent().hasClass("ford")){
            e.preventDefault();
            
            if($(this).hasClass("dropdown_active")){
                $(this).removeClass("dropdown_active");
                $(this).next("").css("max-height", "0px");
            }else{
                $(this).addClass("dropdown_active");
                var getheight = $(this).next().find(".boxes").height() + 50;
                $(this).next("").css("max-height", getheight + "px");
            }
        }
    }
});

$(".root").scroll(function() {
    if ($(this).scrollTop() > 100) {
        $("body").addClass("navbar_scrolled");
    }else{
        $("body").removeClass("navbar_scrolled");
    }
});
// js for navbar end




// js for header
$('.slick_slide_imgs').slick({
    cssEase: 'cubic-bezier(0.600, -0.400, 0.735, 0.045)',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$("#typed").typed({
    strings: ["great.", "something.", "everything."],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: "|",
    contentType: "html"
});
// js for header


// js for testimonials
$(".testimonialSlider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    speed: 900,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  });
  $( window ).resize(function() {
    $('.testimonialSlider').slick('resize');
  });
// js for testimonials end
  
  

// js for partners
$(".partnerSlider").slick({
    arrows: false,
    dots: false,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 6,
    infinite: true,
    speed: 900,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  // js for partners end


// about us counter
jQuery(function ($) {
    // Function which adds the 'animated' class to any '.animatable' in view
    var startCounter = function () {
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $(".counterSection");
  
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off("scroll", startCounter);
      }
  
      // Check all animatables and animate them if necessary
      $animatables.each(function (i) {
        var $animatable = $(this);
        if ($animatable.offset().top + $animatable.height() - 40 < offset) {
          // $animatable.addClass("counterStart");
          const counters = document.querySelectorAll(".counter");
          const speed = 200; // The lower the slower
  
          counters.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
  
              // Lower inc to slow and higher to slow
              const inc = target / speed;
  
              var countedNumbers = 0;
  
              // console.log(inc);
              // console.log(count);
  
              // Check if target is reached
              if (count < target) {
                // Add inc to count and output in counter
                countedNumbers = count + inc;
                counter.innerText = Math.ceil(countedNumbers);
                console.log(count);
                // Call function every ms
                setTimeout(updateCount, 30);
              } else {
                counter.innerText = parseInt(target);
              }
            };
  
            updateCount();
          });
        }
      });
      var test = $(window).width();
      if (test <= 768) {
        $animatables.each(function (i) {
          var $animatable = $(this);
          if ($animatable.offset().top + $animatable.height() - 640 < offset) {
            // $animatable.addClass("animationStart");
          }
        });
      }
    };
  
    // Hook doAnimations on scroll, and trigger a scroll
    $(".root").on("scroll", startCounter);
    $(".root").trigger("scroll");
  });
  // about us counter end



  // faq 
  $(".faq_card .question").click(function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass("question_opened")) {
      $(this).parent().removeClass("question_opened");
      $(this).next().css("max-height", "0px");
    } else {
      $(".question_opened").find(".answer").css("max-height", "0px");
      $(".question_opened").removeClass("question_opened");
      $(this).parent().addClass("question_opened");
      var heightinside = $(this).next().find(".inner").height() + 50;
      $(this)
        .next()
        .css("max-height", heightinside + "px");
    }
  });
  // faq end