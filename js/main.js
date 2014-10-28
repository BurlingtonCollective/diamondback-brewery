$(function(){

	function getUrlParameter(sParam)
	{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++) 
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam) 
			{
				return sParameterName[1];
			}
		}
	}
	
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

		switch (getUrlParameter('theme')){
			case 'forest':
				$hero.backstretch([
					"images/downed-tree.png",
					"images/stump.png",
					"images/moss.png",
					"images/sky.png"
				], {fade: 500});
				break;
			case 'other':
				$hero.backstretch([
					"images/bridge.png",
					'images/stock/harbor-wide.jpg', //other
					'images/stock/road-truck.jpg', //looks good, not sure what saying
					'images/stock/brick-city.jpg', //loud
					'images/stock/gold-bridge.jpg',  //odd placement
					'images/stock/historic-ship.jpg'  //odd placement
				], {fade: 500});
				break;
			case 'color':
				$hero.backstretch([
					"images/bridge.png",
					'images/stock/crabs.jpg',  //loud
					'images/stock/dusk-city.jpg', //color
					'images/stock/city-neon.jpg', //loud
					'images/stock/sunset-grass.jpg', //color
				], {fade: 500});
				break;
			default:
				$hero.backstretch([
					'images/stock/under-dock.jpg', //great
					'images/stock/rocky-shore.jpg', //good
					'images/stock/arial-island.jpg', //great
					'images/stock/bridge-go.jpg', //looks good, not sure what saying
					'images/stock/gold-bridge-framed.jpg',  //great
					'images/stock/gold-bridge-side.jpg', //great
				], {fade: 500});
				break;
		}

	}

});