$(document).ready(function() {
	var player1 = {
		top: $("#player1").offset().top,
		left: $("#player1").offset().left,
		keyCode: 74 //j

	}

	var player2 = {
		top: $("#player2").offset().top,
		left: $("#player2").offset().left,
		keyCode: 68 //d
	}

	var finish = {
		top: $("#finish").offset().top,
		left: $("#finish").offset().left
	}

	//Keydown event: When player1 presses j key or player2 presses d key, their left position will increase by 20px
	$(document).keydown(function move(e) {
			if (e.keyCode == player1.keyCode) {
				$("#player1").offset({top: player1.top, left: player1.left += 20});
			} 
			if(e.keyCode == player2.keyCode) {
				$("#player2").offset({top: player2.top, left: player2.left +=20});
			}

			//Winning Conditions

		 if (player1.left >= finish.left){
				playAudio();
				$(".winner").addClass("animated bounce infinite").text("Congratulations, Player 1! You Won!");
				setTimeout(startNewGame, 6000)
			} else if (player2.left >= finish.left) {
				playAudio();
				$(".winner").addClass("animated bounce infinite").text("Congratulations, Player 2! You Won!");
				setTimeout(startNewGame, 6000)
			}
	})

	$("button").click(startNewGame);


	function playAudio() {
		var audio = document.querySelector('audio');
		audio.play();
	}

	function startNewGame() {
		$("#player1").offset({top: 250, left: 0});
		player1.top = 250;
		player1.left = 0;
		$("#player2").offset({top: 400, left: 0})
		player2.top = 400;
		player2.left = 0;

		$(".winner").removeClass("animated bounce infinite").text("");
	}
	
})