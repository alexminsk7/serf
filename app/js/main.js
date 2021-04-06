$(function () {
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow:
			'<img class="slider-arrows slider-arrows__left" src="./images/svg/arrow-left.svg" alt="arrow-left">',
		nextArrow:
			'<img class="slider-arrows slider-arrows__right" src="./images/svg/arrow-right.svg" alt="arrow-right">',
		asNavFor: '.slider__dots',
	});

	$('.slider__dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});
});
