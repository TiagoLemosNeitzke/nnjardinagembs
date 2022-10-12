jQuery(document).ready(function ($) {
  //FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };

    // Isotoppe 

    let btns = $("#galeria .button-group button");

    btns.click(function(e) {
        $("#galeria .button-group button").removeClass("active");
        e.target.classList.add("active");
        
        let selector = $(e.target).attr("data-filter");
        $("#galeria .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#galeria .grid").isotope({
            filter: "*",
        });
    });

        // Magnify 
    $(".grid .popup-link").magnificPopup({ 
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    });

    //OWL
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});