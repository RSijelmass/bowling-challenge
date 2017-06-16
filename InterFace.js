$(document).ready(function() {
	var bowling = new Bowling();
	var score = new Score(bowling.framesNumbers)

	$('#roll').click(function() {
		bowling.roll();
		var score = new Score(bowling.framesNumbers)
		$('#throw').text("You threw: " + bowling.rollPoints);
			updateScore(score);
	});
	
	function updateScore(score) {
		score.checkAdditionalPoints();
		$('#points').text(score.points);
		score.convertFrames();

			if(bowling.isFullFrame) {
				$('ul').append("[" +  score.scoreSymbols[score.gameSize - 1] + "]")
			};
	};

});



