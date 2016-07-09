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
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
	})
	
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
			.animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			   }
			);
		})
		
		.mouseup(function() {
			console.log('mouseup');
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
			// $('.hadouken').hide();
			
			//ryu goes back to his ready position
		});
});

function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}