//initial 2d Array of the 'board'
var Game = function(board){
  this.board = board;
  };
  this.board = [[1, 2, 3, 4, 5], [], []];
  var moveCount = 0;
  
  //create a horizontal display of the current board
  Game.prototype.displayBoard = function(){
    this.board.map(tower => {
      //utilize .map at least once
      tower
          .sort(function(a, b){
            if (a > b){
              return -1
            } else {
              return 1;
            }})
          .map(function (disc){
            if(disc === undefined){
              return disc = '';
            } else {
            return disc.toString()}
    });
          //display board in the chrome browser console
          console.log(`Tower ${this.board.indexOf(tower) +1} --- ${tower.join(' ')}`);
        });
      };
      
    //create a move function that moves disc from one tower to another
  Game.prototype.move = function(moveFrom, moveTo){
    var fromIndex = (this.board[moveFrom -1].length -1);
    var fromValue = this.board[moveFrom -1][fromIndex];
    var toIndex = (this.board[moveTo -1].length -1);
    var toValue = this.board[moveTo -1][toIndex];
      if(fromValue === undefined){
        console.log(`That is not a valid move. Please move one of the discs to a new tower.`);
        return this.displayBoard();
      }
      if(fromValue > toValue){
        console.log(`You can only move smaller discs onto larger discs. Please try another move.`);
        return this.displayBoard();
      } else {
        this.board[moveTo -1].push(this.board[moveFrom -1].pop());
        this.moveCount++;
        console.log(`current number of moves: ${this.moveCount}`);
        this.winCheck();
        console.log(`That move was successful. Here is what the board looks like now:`);
        return this.displayBoard();
      };
  };
      
  Game.prototype.winCheck = function(){
    if(this.board[1].length === 5 || this.board[2].length === 5)
        {this.displayBoard();
        console.log(`current number of moves: ${this.moveCount}`)
        alert `You have won the game in ${this.moveCount} moves! Way to go! Game will now reset.`;
        return this.resetGame()
        };
      };
     
  Game.prototype.resetGame = function(){
    this.board = [[1, 2, 3, 4, 5], [], []];
    this.moveCount = 0;
    console.log(`current number of moves: ${this.moveCount}`);
    return this.displayBoard();
  };
  
  var myGame = new Game(board);
  
  myGame.displayBoard();