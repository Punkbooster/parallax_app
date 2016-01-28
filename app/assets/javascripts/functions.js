$(window).scroll(function() {

	var wScroll = $(this).scrollTop();
	
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll / 2 +'%)' //make logo to scroll 2 times slower
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll / 4 +'%)' //make back-bird to scroll 4 times slower
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+ wScroll / 40 +'%)' //make fore-bird to scroll up, 4 times slower
	});

	if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2 )) {
		$('.clothes-pics figure').each(function(i) {

			setTimeout(function() {
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});
	}


	if(wScroll > $('.large-window').offset().top - $(window).height()){

    	$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
	
	var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)

	$('.window-tint').css({ 'opacity': opacity})

	}


	if(wScroll > $('.blog-posts').offset().top - $(window).height()){ 

	var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

	$('.post-1').css({ 'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.4) +'px)' });

	$('.post-3').css({ 'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.4) +'px)' });

	}

})
