const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween:10
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	},
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
    }
});