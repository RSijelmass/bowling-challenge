function Score(frameNumbers) {
	this.scoreBoard = frameNumbers; 
	this.points = [];

	for(var i=0; i<frameNumbers.length; i++) {
		this.points[i] = this.scoreBoard[i][0] + this.scoreBoard[i][1];
	};		

	this.checkAdditionalPoints = function() {
		var board = this.scoreBoard;
		for(var i=0; i< board.length; i++) {
			if(this.points[i+1]) {
				if(board[i][0] === 10) {
					console.log('strike!');
					this.points[i] += this.points[i+1];
				} else if(this.points[i] === 10) {
					this.points[i] += board[i+1][0];
					console.log('frame number 2: ' + board[i+1][0]);
				};
			};
		};
	};

};

/*
var numbers = [[5,2],[10,0],[2,4],[4,6],[2,4]];
score = new Score(numbers);
console.log(score.points);
score.checkAdditionalPoints();
console.log(score.points);

console.log('round 2')
numbers.push([2,8])
numbers.push([2,0])
score = new Score(numbers);
console.log(score.points);
score.checkAdditionalPoints();
console.log(score.points);
*/