$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
		// alert('mouse entered .ryu div');
		.mouseleave(function(){
			// alert('mouse left');
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		
	});
});