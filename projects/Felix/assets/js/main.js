$(document).ready(function() {
    var heroSwiper = new Swiper('.hero-swiper', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 1000,
      slidesPerView: 1,
      autoplay: {
        delay: '1000'
      },
      loop: 'true'

    })
    var successSwiper = new Swiper('.success-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        // when window width is >= 480px
        575: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1199: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }

    })
    var recruiterSwiper = new Swiper('.recruiter-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

    })
    var reviewSwiper = new Swiper('.review-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 3,
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 0,
        }
      }

    })
})