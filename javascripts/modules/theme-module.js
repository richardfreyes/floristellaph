$(function() {
  initResponsiveHeader();  
  collapseAccordion();
  popupCart();

  $(window).on("load", function() {
    initNavbar();
    swiperHomeBanner();
    swiperCollection();
  });

  $(window).on('resize', () => {
    initResponsiveHeader();
    initHeaderScrolled();
  });

  $(window).on('scroll', () => {
    initHeaderScrolled();
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

  function swiperHomeBanner() {
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
  }

  function swiperCollection() {
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
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 15,
        }
      }
    });
  }

  function collapseAccordion() {
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });
  }

  function popupCart() {
    $(document).on('click', '.open-cart', function() {
      $(".popup-cart").addClass("show");
      $("body").addClass("bg-overlay");
    });
  
    $(document).on('click', '.close-cart', function() {
      $(".popup-cart").removeClass("show");
      $("body").removeClass("bg-overlay");
    });
  }
});