$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

$(document).ready(() => {
  //Typed
  var typed = new Typed(".typed", {
    strings: ["Full-Stack Developer.", "Systems Analyst."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  //Waypoints
  //About image animation
  var aboutImage = $(".about-image");
  aboutImage.waypoint(
    function() {
      aboutImage.addClass("animated bounceInLeft");
      aboutImage.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //About name animation
  var aboutName = $(".about-name");
  aboutName.waypoint(
    function() {
      aboutName.addClass("animated fadeInDown");
      aboutName.css("opacity", "1");
    },
    { offset: "80%" }
  );

  //About title animation
  var aboutTitle = $(".about-title");
  aboutTitle.waypoint(
    function() {
      aboutTitle.addClass("animated bounceInRight");
      aboutTitle.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //About text animation
  var aboutText = $(".about-text");
  aboutText.waypoint(
    function() {
      aboutText.addClass("animated fadeIn delay-1s");
      aboutText.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Resume Button
  var resumeButton = $(".resume-button");
  resumeButton.waypoint(
    function() {
      resumeButton.addClass("animated lightSpeedIn");
      resumeButton.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Fast Hexagon
  var fastHex = $(".fast-hex");
  fastHex.waypoint(
    function() {
      fastHex.addClass("animated rotateIn");
      fastHex.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Responsive Hexagon
  var responHex = $(".respon-hex");
  responHex.waypoint(
    function() {
      responHex.addClass("animated rotateIn");
      responHex.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Intuitive Hexagon
  var intuitHex = $(".intuit-hex");
  intuitHex.waypoint(
    function() {
      intuitHex.addClass("animated rotateIn");
      intuitHex.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Dynamic Hexagon
  var dynamicHex = $(".dynamic-hex");
  dynamicHex.waypoint(
    function() {
      dynamicHex.addClass("animated rotateIn");
      dynamicHex.css("opacity", "1");
    },
    { offset: "60%" }
  );

  //Fast text
  var fastText = $(".fast-text");
  fastText.waypoint(
    function() {
      fastText.addClass("animated fadeIn");
      fastText.css("opacity", "1");
    },
    { offset: "70%" }
  );

  //Responsive text
  var responText = $(".respon-text");
  responText.waypoint(
    function() {
      responText.addClass("animated fadeIn");
      responText.css("opacity", "1");
    },
    { offset: "70%" }
  );

  //Intuitive text
  var intuitText = $(".intuit-text");
  intuitText.waypoint(
    function() {
      intuitText.addClass("animated fadeIn");
      intuitText.css("opacity", "1");
    },
    { offset: "70%" }
  );

  //Dynamic text
  var dynamicText = $(".dynamic-text");
  dynamicText.waypoint(
    function() {
      dynamicText.addClass("animated fadeIn");
      dynamicText.css("opacity", "1");
    },
    { offset: "70%" }
  );

  //Swiper
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 1,
    keyboard: {
      enabled: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination"
    },
    breakpoints: {
      1050: {
        slidesPerView: 3
      },
      775: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  //Fancy Box
  $("[data-fancybox]").fancybox();

  //Isotope
  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });

  //EasyPieChart
  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  //Stick Navbar

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  $(".navbar-nav .nav-link").on("click", function() {
    $(".navbar-nav")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });

  //Copyrigth
  let year = new Date().getFullYear();
  $(".copyright")
    .children("span")
    .text(year);
});
