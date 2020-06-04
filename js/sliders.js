// 

$(document).ready(function(){
	$('.slider-inner').slick({
		arrows: true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		infinite:false,

		responsive:[
			{
				breakpoint: 940,
				settings: {
					arrows: false
				}
			}
			
		]
	});
});

