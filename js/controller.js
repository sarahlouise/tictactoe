angular
	.module('ticTacToeApp')
	.controller('TicTacToeController', TicTacToeController)

	function TicTacToeController(){ 
		var self = this;
		// var ref = new Firebase('https://sarahstictactoe.firebaseio.com')
		self.username; //Stores input from mainpage username;
		self.beginPlay = beginPlay;
		self.submit = false;
		self.playerClick = playerClick;
		self.turn = 1;
		self.playerXscore = 0;  //ng-model to gameboard
		self.playerOscore = 0; //ng-model to gameboard
		self.tieGame = 0;
		self.getWinner = getWinner;
		//Start spaces
		self.spaces = [
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false},
			{value: '', playerX: false, playerO: false}
				]; 

		function playerClick($index){
			if (self.spaces[$index].value === 'X'){
				console.log("no no, this space is taken");
					} else if(self.spaces[$index].value === 'O'){
						console.log("no no, this space is taken");
							} else if(self.turn === 1) {
								self.spaces[$index].value = 'X', self.spaces[$index].playerX = true, self.turn = 2;
								} else if(self.turn === 2){
									self.spaces[$index].value = 'O', self.spaces[$index].playerO = true, self.turn = 1;
								};
					// getWinner();

			}; ///END PLAYER CLICK FUNCTION

		//BEGIN GET WINNER FUNCTION
		function getWinner(){
			if(self.spaces.value[0] + self.spaces.value[1] + self.spaces.value[2] === 'X','X','X'){
				return playerXscore++;
			} else if (self.spaces.value[0] + self.spaces.value[1] + self.spaces.value[2] === 'O','O','O')
				return playerOscore++;

		};
		//END GET WINNER FUNCTION//

		//BEGIN NEW GAME//
		function beginPlay(){
			self.submit = true};
		//END BEGINPLAY FUNCTION//





	} ///////CLOSES TICTACTOE CONTROLLER//////////