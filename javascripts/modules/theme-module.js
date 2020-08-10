$(function() {
  initResponsiveHeader();  

  $(window).on("load", function() {
    initNavbar();

    var heroBanner = new Swiper('.section-banner .swiper-container', {
      loop: true,
      slidesPerView: 1,
      noSwiping: false,
      autoplay: {
        delay: 6700,
      },
      speed: 900,
      pagination: {
        el: '.section-banner .swiper-pagination',
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
          },
      },
    });

    var collection = new Swiper('.section-collections .swiper-container', {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 55,
      autoplay: {
        delay: 6700,
      },
      speed: 900,
      navigation: {
        nextEl: '.section-collections .swiper-button-next',
        prevEl: '.section-collections .swiper-button-prev',
      },
    });
  });

  $(window).on('resize', () => {
    initResponsiveHeader();
    // initHeaderScrolled();
  });

  $(window).on('scroll', () => {
    // initHeaderScrolled();
  });

  function initNavbar() {
    $('.nav-link[href*="#"], a[href*="#"]').click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      var scroll = $(window).scrollTop();
      var offset =  80;

      $('.nav-item').removeClass('active');
      $(this).parent().addClass('active');

      if($(window).width() < 576 && scroll < 84) {
        offset = 40; 
      } 

      $("html, body").animate({
        scrollTop: $(section).offset().top - offset
      });
    });
  }

  function initHeaderScrolled() {
    var header = $(".custom-header");
    var scroll = $(window).scrollTop();

    if ($(window).width() >= 992 && scroll >= 85) {
      header.addClass("sticky-top");
    } else if ($(window).width() >= 992 && scroll <= 84) {
      header.removeClass("sticky-top");
    }

    if ($(window).width() <= 991) {
      if (scroll <= 84) {
        header.removeClass('sticky-top');
      } else {
        header.addClass('sticky-top');
      }
    }
  }

  function initResponsiveHeader() {
    var header = $(".custom-header");

    if ($(window).width() <= 991) {
      header.addClass('sticky-top');
    } else {
      header.removeClass('sticky-top');
    }
  }
});
