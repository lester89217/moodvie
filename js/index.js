$(document).ready(function () {
	$(".movie-card-area-slick").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024, // 螢幕小於 1024px 時
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 768, // 螢幕小於 768px 時
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					arrows: false,
				},
			},
		],
	});

	$(".horizontal-scroll-area-slick").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		centerMode: false,
		responsive: [
			{
				breakpoint: 768, // 螢幕小於 768px 時
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480, // 螢幕小於 480px 時
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: false,
				},
			},
		],
	});
});
