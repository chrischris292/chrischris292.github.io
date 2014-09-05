jQuery(document).ready(function($){
	if($(window).width()<1000)
	{
		console.log("hi")
		$(".thirdsColumn").each(function(){
			$(this).removeClass("hide")
		})
		$(".additionalText").removeClass("hide")
	}
	var $timeline_block = $('.cd-timeline-block');
	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		if($(window).width()>1000)
		{
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
			$(".thirdsColumn").each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).hasClass('hide') ) {
					$(this).removeClass('hide').addClass('animated fadeInDown');
				}
			});
			if( $(".additionalText").offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(".additionalText").hasClass('hide') ) {
				$(".additionalText").removeClass("hide").addClass("animated fadeInDown");
			}
		}

	});
});
