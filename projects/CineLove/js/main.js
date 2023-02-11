$(document).ready(function() {
    
    //Initialize mouse follower
    mouseFollow();
    $('.menu-btn').click(menuToggle);

    //----Change Header On Scroll
    $(document.body).scroll(function() {
        var height = $(document.body).scrollTop();
        if(height > 50) {
                $('.header-bg').addClass('active');
                $('.menu-btn').addClass('darkened');
            } else {
                $('.header-bg').removeClass('active');
                $('.menu-btn').removeClass('darkened');
        }
    });
    
    /**
		Works Carousel
	**/
	var works_carousel = new Swiper('.m-works-carousel.default .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 50,
		centeredSlides: true,
		speed: 1000,
		loop: true,
		mousewheel: true,
		preventInteractionOnTransition: true,
		navigation: false,
		pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		}
	});

	/**
		Works Carousel
	**/
	var works_carousel = new Swiper('.m-works-carousel.fully .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 0,
		centeredSlides: true,
		speed: 1000,
		loop: true,
		mousewheel: true,
		preventInteractionOnTransition: true,
		navigation: false,
		pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		}
	});

    //----Menu Overlay Submenu
    $('li.has-subitems div').click(function() {
        
        $(this).parent().siblings('.has-subitems').children(".subitems").addClass("hidden");
        //$(this).siblings('.has-subitems').children(".subitems").css("transform", "scale(0)");
        $(this).parent().siblings('.has-subitems').removeClass("active");
        $(this).parent().siblings('.has-subitems').find('span').removeClass("active");

        $(this).find('span').toggleClass('active');
        $(this).parent().toggleClass("active");
        $(this).parent().children("ul").toggleClass("hidden");
    });

    //Last Slider Code
    $('.end-section .slider-btn-container.next-btn').click(function() {
        scrollSliderNext();
    })
    $('.end-section .slider-btn-container.prev-btn').click(function() {
        scrollSliderPrev();
    })

    // Fancybox Config
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
        ],
        loop: false,
        protect: true
    });
    $('[data-fancybox="video"]').fancybox({
        afterShow: function() {
        this.content.find('video').on('ended', function() {
            $.fancybox.next();
        });
        }
    });
  
});

function scrollSliderNext() {
    var activeId = parseInt($(".end-section .slider").attr('active-id'));
    if (activeId != $('.end-section .slider').children().length) {
        $(".end-section .slider").attr('active-id', activeId+1);
    }
    $('.end-section .slider').animate({scrollLeft: $('.end-section .slider')[0].clientWidth*activeId}, 500);
}
function scrollSliderPrev() {
    var activeId = parseInt($(".end-section .slider").attr('active-id'));
    if (activeId != 1) {
        $(".end-section .slider").attr('active-id', activeId-1);
    }
    $('.end-section .slider').animate({scrollLeft: $('.end-section .slider')[0].clientWidth*(activeId-2)}, 500);
}

//Mouse follow Animation
function mouseFollow() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 12;
      mouseY = e.pageY - 12; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);

    //Handle cursor follower
    $('.clickable').mouseover(function() {
        $('.circle-cursor').css("transform", 'scale(2)');
    })
    $('.clickable').mouseout(function() {
        $('.circle-cursor').css("transform", 'scale(1)');
        
    })
}

//----Show/Hide Header Menu
function menuToggle() {
    $('.menu-btn span').toggleClass("crossed");
    $('.header-menu').toggleClass("hidden");
    $('.header').toggleClass('menu-active');
    $('.has-subitems .subitems').addClass('hidden')
    $('.has-subitems').removeClass('active');
    $('.has-subitems .menu-item-expand').removeClass('active');

    //Fix Issue
    var height = $(document.body).scrollTop();
    if(height < 50) {
        $('.header-bg').toggleClass('active');
    }
    //Animations
    setTimeout(function() {
        $('.socials-container').toggleClass("active");
        $('.links-container').toggleClass("active");
    }, 700);
}
