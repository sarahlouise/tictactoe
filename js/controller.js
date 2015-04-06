angular
	.module('TicTacToeApp')
	.controller('TicTacToeController', TicTacToeController)

	//Firebase//
	// .controller("TicTacToeController", function($scope, $firebaseObject) {
 //  	var ref = new Firebase("https://sarahstictactoe.firebaseio.com/");
  	
  	// download the data into a local object
	// TicTacSyncObj = $firebaseObject(ref);

    // synchronize the object with a three-way data binding
 // 	 TicTacSyncObj.$bindTo($scope, "TicTacSyncObj");
	
	// });

	///Firebase initiation end//

	function TicTacToeController(){ 
		var self = this;
		// var ref = new Firebase('https://sarahstictactoe.firebaseio.com')
		self.username; //Stores input from mainpage username;
		self.turn = 1;
		self.playerXscore = 0; //ng-model to gameboard
		self.playerOscore = 0; //ng-model to gameboard

		self.tieGame = 0;
		self.occupierTally = 0;
		self.tieTally = tieTally;

		self.playerClick = playerClick;
		self.beginPlay = beginPlay;

		self.getWinner = getWinner;
		self.clearboard = clearboard; //resets spaces for game

		self.submit = false; //tied to login button and beingPlay function
		self.playAgain = false;  //false = gameover sceen is hidden, tied to 
		self.gameOver = gameOver;

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
				self.spaces[$index].occupier = 'X', self.occupierTally++, self.spaces[$index].playerX = true, self.turn = 2;
			} else if(self.turn === 2){
				self.spaces[$index].occupier = 'O', self.occupierTally++, self.spaces[$index].playerO = true, self.turn = 1;
				};
			tieTally();
			getWinner();

			}; ///END PLAYER CLICK FUNCTION


		//BEGIN NEW GAME
		function beginPlay(){
			self.submit = true};

		function gameOver(){
			console.log('gameOver initiated');
			return self.playAgain = false;};//hides gameover screen

		function tieTally(){
			console.log(self.occupierTally);

			if(self.occupierTally == 9){
				console.log("It's a tie!");
				self.tieGame++;
				};
			}; //closes TieTally

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
		};//END GET WINNER FUNCTION//

		function clearboard(){
			
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
			console.log('board clearboard');
			self.occupierTally = 0;

			//Game to 5//
			if(self.playerOscore + self.tieGame + self.playerXscore == 5){
				console.log('Well Played! Game Over');
				self.playerXscore = 0;
				self.playerOscore = 0;
				self.tieGame = 0; 
				gameOver = true;
			}
		};
		//End Clearboard functioon 

	} ///////CLOSES TICTACTOE CONTROLLER//////////


