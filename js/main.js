$(function(){
	
	var $hero = $('#home-hero');

	if($hero.length > 0){
		
		var $window = $(window),
				$body = $('body');

		$body.addClass('on-home');

		$hero.css({
			height: $(window).height() + 'px'
		});
		
		$window.on('resize', function(){
			$hero.css({
				height: $(window).height() + 'px'
			});
		});
		$window.scroll(function(){
			if(!$body.is('.transitional')){
				$body.addClass('transitional');
			}
			if($window.scrollTop() > ($hero.height() / 2)){
				$body.addClass('show-nav');
			}else{
				$body.removeClass('show-nav');
			}
		});

		if($hero.is('.example')){
			$hero.backstretch([
				"images/will2.jpg",
				"images/carly2.jpg"
			], {fade: 500});
		}

	}

});