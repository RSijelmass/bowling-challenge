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
	//	bowling.convertFrames();
		for(var i=0; i<bowling.framesNumbers.length; i++) {
			$('ul').append("[" +  bowling.framesNumbers[i] + "]")
			//debugger
		};
	};

});



