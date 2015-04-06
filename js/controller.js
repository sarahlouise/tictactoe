angular
    .module('App')
    .controller('TicTacToeController', TicTacToeController);

    TicTacToeController.$inject = ['$firebaseObject'];

    function TicTacToeController($firebaseObject){
        var self = this;  

        self.game = syncGameWithFirebase();
        self.playerClick = playerClick; //sets playerClick() function as a property of the controller
        self.tieTally = tieTally;
        //begin and end popups and functions
        self.beginPlay = beginPlay;
        self.getWinner = getWinner;
        self.clearboard = clearboard; //resets spaces for game
        self.gameOver = gameOver;

        self.submit = false; //tied to login button and beingPlay function
        
        function syncGameWithFirebase(){
            var ref = new Firebase('https://sarahstictactoe.firebaseio.com');
            var gameObject = $firebaseObject(ref);

            //initialize values in the gameObject once it's loaded
            gameObject.$loaded(function(){
                gameObject.turn = 1;
                gameObject.playerXscore = 0; //ng-model to gameboard
                gameObject.playerOscore = 0; //ng-model to gameboard
                gameObject.tieGame = 0;
                gameObject.occupierTally = 0;
                gameObject.username; //Stores input from mainpage username;
                gameObject.playAgain = false;  //false = gameover sceen is hidden, tied to 
                gameObject.spaces = [];
                for(var i = 0; i < 9; i++){
                    gameObject.spaces.push({occupier: '', playerX: false, playerO: false});
                }

                gameObject.$save();
            });

            return gameObject;
        }

        //called using ng-click directive in the view
        function playerClick($index){
            console.log('playerClick Initiated')
            if (self.game.spaces[$index].occupier === 'X'){
                console.log("no no, this space is taken");
            } else if(self.game.spaces[$index].occupier === 'O'){
                console.log("no no, this space is taken");
            } else if(self.game.turn === 1) {
                self.game.spaces[$index].occupier = 'X', self.game.occupierTally++, self.game.spaces[$index].playerX = true, self.game.turn = 2; self.game.$save();
            } else if(self.game.turn === 2){
                self.game.spaces[$index].occupier = 'O', self.game.occupierTally++, self.game.spaces[$index].playerO = true, self.game.turn = 1; self.game.$save();
                };
            tieTally();
            getWinner();

            }; ///END PLAYER CLICK FUNCTION

  //BEGIN NEW GAME
        function beginPlay(){
            self.submit = true};

        function gameOver(){
            console.log('gameOver initiated');
            self.game.playAgain = false;
            self.game.$save();
            };//hides gameover screen

        function tieTally(){
            console.log(self.game.occupierTally);

            if(self.game.occupierTally == 9){
                console.log("It's a tie!");
                self.game.tieGame++;
                self.game.$save();
                };
            }; //closes TieTally

        //BEGIN GET WINNER FUNCTION
        function getWinner(){
            var row1 =[self.game.spaces[0].occupier + self.game.spaces[1].occupier + self.game.spaces[2].occupier];
            var row2 = [self.game.spaces[3].occupier + self.game.spaces[4].occupier + self.game.spaces[5].occupier];
            var row3 = [self.game.spaces[6].occupier + self.game.spaces[7].occupier + self.game.spaces[8].occupier];
            var diag1 = [self.game.spaces[6].occupier + self.game.spaces[4].occupier + self.game.spaces[2].occupier];
            var diag2 = [self.game.spaces[0].occupier + self.game.spaces[4].occupier + self.game.spaces[8].occupier];
            var column1 = [self.game.spaces[0].occupier + self.game.spaces[3].occupier + self.game.spaces[6].occupier];
            var column2 = [self.game.spaces[1].occupier + self.game.spaces[4].occupier + self.game.spaces[7].occupier];
            var column3 = [self.game.spaces[2].occupier + self.game.spaces[5].occupier + self.game.spaces[8].occupier]

            if(row1 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++; 
                self.game.$save();
            }else if (row2 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++; 
                self.game.$save();
            }else if (row3 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++; 
                self.game.$save();
            }else if (diag1 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++;
                self.game.$save();
            }else if (diag2 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++;
                self.game.$save();
            }else if (column1 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++;
                self.game.$save();
            }else if (column2 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++;
                self.game.$save();
            }else if (column3 == 'XXX'){
                console.log("X won!"); 
                self.game.playerXscore ++;
                self.game.$save();
            //assess O win
            }else if(row1 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (row2 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (row3 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (diag1 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (diag2 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (column1 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (column2 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }else if (column3 == 'OOO'){
                console.log("O won!"); 
                self.game.playerOscore ++;
                self.game.$save();
            }
        };//END GET WINNER FUNCTION//

        function clearboard(){
            self.game.spaces = [
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
            self.game.occupierTally = 0;
            self.game.$save();

            //Game to 5//
            if(self.game.playerOscore + self.game.tieGame + self.game.playerXscore == 5){
                console.log('Well Played! Game Over');
                self.game.playerXscore = 0;
                self.game.playerOscore = 0;
                self.game.tieGame = 0; 
                self.game.playAgain = true;
                self.game.$save();
            }
        };
        //End Clearboard functioon 

    } ///////CLOSES TICTACTOE CONTROLLER//////////

