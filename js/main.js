$(function(){
	$('#home-hero').css({
		height: $(window).height() + 'px'
	});
	$(window).on('resize', function(){
		$('#home-hero').css({
			height: $(window).height() + 'px'
		});
	});
});