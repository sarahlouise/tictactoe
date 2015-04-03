angular
	.module('ticTacToeApp')
	.controller('TicTacToeController', TicTacToeController)

	function TicTacToeController(){ 
		var self = this;
		// var ref = new Firebase('https://sarahstictactoe.firebaseio.com')
		self.username; //Stores input from mainpage username;
		self.submit = false; //tied to login button and beingPlay function
		self.turn = 1;
		self.playerXscore = 0;  //ng-model to gameboard
		self.playerOscore = 0; //ng-model to gameboard
		self.tieGame = 0;
		self.playerClick = playerClick;
		self.beginPlay = beginPlay;
		self.getWinner = getWinner;
		self.clearboard = clearboard; //resets spaces for game
		//Start spaces
		self.spaces = [
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false}
				]; 

		function playerClick($index){
			if (self.spaces[$index].occupier === 'X'){
				console.log("no no, this space is taken");
			} else if(self.spaces[$index].occupier === 'O'){
				console.log("no no, this space is taken");
			} else if(self.turn === 1) {
				self.spaces[$index].occupier = 'X', self.spaces[$index].playerX = true, self.turn = 2;
			} else if(self.turn === 2){
				self.spaces[$index].occupier= 'O', self.spaces[$index].playerO = true, self.turn = 1;
				};
			getWinner();

			}; ///END PLAYER CLICK FUNCTION

		//BEGIN GET WINNER FUNCTION
		function getWinner(){
			var row1 =[self.spaces[0].occupier + self.spaces[1].occupier + self.spaces[2].occupier];
			var row2 = [self.spaces[3].occupier + self.spaces[4].occupier + self.spaces[5].occupier];
			var row3 = [self.spaces[6].occupier + self.spaces[7].occupier + self.spaces[8].occupier];
			var diag1 = [self.spaces[6].occupier + self.spaces[4].occupier + self.spaces[2].occupier];
			var diag2 = [self.spaces[0].occupier + self.spaces[4].occupier + self.spaces[8].occupier];
			var column1 = [self.spaces[0].occupier + self.spaces[3].occupier + self.spaces[6].occupier];
			var column2 = [self.spaces[1].occupier + self.spaces[4].occupier + self.spaces[7].occupier];
			var column3 = [self.spaces[2].occupier + self.spaces[5].occupier + self.spaces[8].occupier]

			if(row1 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (row2 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (row3 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (diag1 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (diag2 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (column1 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (column2 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			}else if (column3 == 'XXX'){
				console.log("X won!"); 
				self.playerXscore ++;
			//assess O win
			}else if(row1 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (row2 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (row3 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (diag1 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (diag2 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (column1 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (column2 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}else if (column3 == 'OOO'){
				console.log("O won!"); 
				self.playerOscore ++;
			}

			// console.log('row1 =' + row1);
			// console.log('row2 =' + row2);
			// console.log('row3 =' + row3);
			// console.log('diag1 =' + diag1);
			// console.log('diag2 =' + diag2);
			// console.log('column1 =' + column1);
			// console.log('column2 =' + column2);
			// console.log('column3 =' + column3);
			// console.log(row1 == 'XXX')

		};//END GET WINNER FUNCTION//

		function tieGame(){
			if(self.spaces.occupier === !'')
				console.log('tie game!');
				self.tieGame++;
				clearboard();
		}

		//BEGIN NEW GAME//
		function beginPlay(){
			self.submit = true};
		//END BEGINPLAY FUNCTION//

		function clearboard(){
			// for(i=0; i<9; i++){
			// 	self.spaces = {occupier: '', playerX: false, playerO: false};
			self.spaces = [
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false},
			{occupier: '', playerX: false, playerO: false}
				];
			console.log('clearboard');

			//tally total game score

			if(self.playerOscore + self.tieGame + self.playerXscore == 10){
				console.log('Well Played! Game Over');
				self.playerXscore = 0;
				self.playerOscore = 0;
				self.tieGame = 0; 
			}

		};
		//End Clearboard functioon 
		


	} ///////CLOSES TICTACTOE CONTROLLER//////////