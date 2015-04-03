angular
	.module('ticTacToeApp')
	.controller('TicTacToeController', TicTacToeController)

	function TicTacToeController(){ 
		var self = this;
		// var ref = new Firebase('https://sarahstictactoe.firebaseio.com')
		self.username; //Stores input from mainpage username;
		self.playerClick = playerClick;
		self.turn = 1;
		self.playerXscore;  //ng-model to gameboard
		self.playerOscore; //ng-model to gameboard

		console.log(self.turn)
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

								console.log(self.turn)
					}; ///END PLAYER CLICK FUNCTION


		function getWinner(){
			if(self.spaces.value[0] + self.spaces.value[1] + self.spaces.value[2] === 'X','X','X'){
				playerXscore++;
			} else if (self.spaces.value[0] + self.spaces.value[1] + self.spaces.value[2] === 'O','O','O')
				playerOscore++;

		};






	} ///////CLOSES TICTACTOE CONTROLLER//////////