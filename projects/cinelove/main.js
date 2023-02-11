$(document).ready(function() {
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

    /**
		Menu Full Overlay Submenu
	**/
	$('.menu-full').on('click', '.has-children > a', function(){
		if($(this).closest('li').hasClass('opened')) {
			$(this).closest('li').removeClass('opened');
			$(this).closest('li').addClass('closed');
			$(this).closest('li').find('> ul').css('max-height', 0);
		} else {
			$(this).closest('ul').find('> li').removeClass('closed').removeClass('opened');
			$(this).closest('ul').find('> li').find('> ul').css('max-height', 0);
			
			$(this).closest('li').addClass('opened');

			var submenu_h = 0;
			$(this).closest('li').find('> ul > li').each(function(){
				submenu_h += $(this).height() + 20;
			});
			$(this).closest('li').find('> ul').css('max-height', submenu_h + 20);
		}
		return false;
	});

    //----Menu Items Expand/Collapse
    $('li.has-subitems div').click(function() {
        
        $(this).parent().siblings('.has-subitems').children(".subitems").addClass("hidden");
        //$(this).siblings('.has-subitems').children(".subitems").css("transform", "scale(0)");
        $(this).parent().siblings('.has-subitems').removeClass("active");
        $(this).parent().siblings('.has-subitems').find('span').removeClass("active");

        $(this).find('span').toggleClass('active');
        $(this).parent().toggleClass("active");
        $(this).parent().children("ul").toggleClass("hidden");
    });

    //----Lightbox
    $('.img-lightbox').click(function() {
        if ($('.img-lightbox .img-container:hover, .img-lightbox .lightbox-nav:hover, .lightbox-tools .tools-item:not(.close):hover').length == 0) {
            $(this).addClass('hidden');
            $(this).hide();
            document.exitFullscreen();
        }
    })

    $('.lightbox-tools .tools-item.full-screen').click( function() {
        document.querySelector('.img-lightbox').requestFullscreen();
    });
    $('.lightbox-tools .tools-item.zoom').click(function() {
        var activeImg = $('.img-lightbox .img-container').attr('active-id');
        $('.img-lightbox .img-container').css('transform', 'scale(4)');
        //$(`.img-lightbox .img-container .img-item[data-id=${activeImg}]`).css('transform', 'scale(4)');
    });

    $('.lightbox-nav.next-nav').click(function() {
        scrollLightboxNext();
    })
    $('.lightbox-nav.prev-nav').click(function() {
        scrollLightboxPrev();
    })

    $('.img-lightbox').on('keydown', function(event) {
        //console.log(event.keyCode);
        if (event.keyCode == 39) {
            scrollLightboxNext();
        }
        if (event.keyCode == 37) {
            scrollLightboxPrev();
        }
    })

    $('.gallery-item').click(function() {
        $('.img-lightbox').show().focus();
        $('.img-lightbox').removeClass('hidden');
        $('.img-lightbox .img-container').attr('active-id', $(this).attr('data-control-id'));
        scrollLightbox($(this).attr('data-control-id'));
        var totalImages = $('.img-lightbox .img-container').children().length;
        var currImage = parseInt($('.img-lightbox .img-container').attr('active-id'));
        $('.img-lightbox .lightbox-tools .content').html(currImage+'/'+totalImages);

    })

    //Last Slider Code
    $('.end-section .slider-btn-container.next-btn').click(function() {
        scrollSliderNext();
    })
    $('.end-section .slider-btn-container.prev-btn').click(function() {
        scrollSliderPrev();
    })
  
});

function scrollLightbox(elemId) {
    $('.img-lightbox .img-container').scrollLeft($('.img-lightbox .img-container')[0].clientWidth*(elemId-1));
}
function scrollLightboxNext() {
    var activeId = parseInt($(".img-lightbox .img-container").attr('active-id'));
    var totalImages = $('.img-lightbox .img-container').children().length;
    var currImage = parseInt($('.img-lightbox .img-container').attr('active-id'));

    if (activeId != $('.img-lightbox .img-container').children().length) {
        $(".img-lightbox .img-container").attr('active-id', activeId+1);
        $('.img-lightbox .lightbox-tools .content').html(currImage+1+'/'+totalImages);
    }
    $('.img-lightbox .img-container').animate({scrollLeft: $('.img-lightbox .img-container')[0].clientWidth*activeId}, 500);
}
function scrollLightboxPrev() {
    var activeId = parseInt($(".img-lightbox .img-container").attr('active-id'));
    var totalImages = $('.img-lightbox .img-container').children().length;
    var currImage = parseInt($('.img-lightbox .img-container').attr('active-id'));

    if (activeId != 1) {
        $(".img-lightbox .img-container").attr('active-id', activeId-1);
        $('.img-lightbox .lightbox-tools .content').html(currImage-1+'/'+totalImages);
    }
    $('.img-lightbox .img-container').animate({scrollLeft: $('.img-lightbox .img-container')[0].clientWidth*(activeId-2)}, 500);
}

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


// Swiper
