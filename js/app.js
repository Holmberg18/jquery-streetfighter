var readyShow = false;
var soundLoop = false;

$(document).ready(function(){
	$('.ryu,.ryu-hulk').mouseenter(function() {
		readyShow = true;
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();

	})
		// alert('mouse entered .ryu div');
		.mouseleave(function(){
			// alert('mouse left');
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			readyShow = false;
	})
	
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
			$('.ryu-still').hide();
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
			
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
			// $('.hadouken').hide();
			
			//ryu goes back to his ready position
		});
		
		$(document).keydown(function(event) {
			
			if (event.keyCode == 88){
				console.log('x key down!');
				
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();
				playVenom();
				
				
				
			}
				
			
		}).keyup(function(event){
			console.log('key up!');
			if (event.keyCode ==88){
				$('.ryu-cool').fadeOut(50, function(){
					if (readyShow){
					$('.ryu-ready').show();
					}
					else {
					$('.ryu-still').show();
					}
				});
				
				
				// $('.ryu-still').show();
				// $('.ryu-ready').hide();
				// $('.ryu-throwing').hide();
					soundLoop = false;
			}
			
		});
});

function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

function playVenom () {
	
	if (soundLoop == false){
		document.getElementById("venom-sound").loop = false;
		console.log('sound playing');
		$('#venom-sound')[0].volume = 0.5;
		$('#venom-sound')[0].load();
		$('#venom-sound')[0].play();
		soundLoop = true;
	}
}