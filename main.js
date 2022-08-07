//initial 2d Array of the 'board'
var Game = function(board){
  this.board = board;
  this.discs = discs;
  };
this.board = [[], [], []];
var moveCount = 0;
var discs = null;
var toTower = null;
  
  //create a horizontal display of the current board
Game.prototype.displayBoard = function(){
  this.board.forEach(tower => {
      //utilize .map at least once
    tower
        .sort(function(a, b){
          if (a > b){
            return -1
          } else {
            return 1;
          }})
        .forEach(function (disc){
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
  toTower = moveTo -1;
    if(fromValue === undefined){
      console.log(`That is not a valid move. Please move one of the discs to a new tower.`);
      return this.displayBoard();
    }
    if(fromValue > toValue){
      console.log(`You can only move smaller discs onto larger discs. Please try another move.`);
      return this.displayBoard();
    } else {
      this.board[moveTo -1].push(this.board[moveFrom -1].pop());
      moveCount++;
      this.winCheck();
      console.log(`current number of moves: ${moveCount}`);
      console.log(`That move was successful. Here is what the board looks like now:`);
      console.log(this.board[toTower].length);
      console.log(this.discs);
      return this.displayBoard();
    };
};
      
Game.prototype.winCheck = function(){
  if(this.board[toTower].length === this.discs && toTower !== 0) {
    alert `You have won the game! Way to go! Game will now reset.`;
    this.displayBoard();
    return this.resetGame();
    } else {
      return 'Keep going!'
    };
};
       
Game.prototype.resetGame = function(){
  this.moveCount = 0;
  this.board = [[],[],[]];
  console.log(`current number of moves: ${this.moveCount}`);
  this.startGame();
};
  
Game.prototype.changeTowers = function(userInputTowers){
  userInputTowers = prompt `Please enter the number of towers you would like to play with:`;
  while(this.board.length < userInputTowers){
    this.board.push([]);
    if(this.board.length === userInputTowers){
      break;
    }
  };
  while(this.board.length > userInputTowers){
    this.board.pop();
    if(this.board.length === userInputTowers){
      break;
    }
  }
};
  
Game.prototype.changeDiscs = function(userInputDiscs){
  userInputDiscs = prompt `Please enter the number of discs you would like to play with:`;
  while(this.board[0].length < userInputDiscs){
    this.board[0].push(this.board[0].length +1);
    if(this.board[0].length === userInputDiscs){
      break;
    }
  };
  while(this.board[0].length > userInputDiscs){
    this.board[0].shift();
    if(this.board[0].length === userInputDiscs){
      break;
    }
  }
  this.discs = parseInt(userInputDiscs);
};

Game.prototype.startGame = function () {
  this.changeTowers();
  this.changeDiscs();
  return this.displayBoard();
};
  
var myGame = new Game(board);
  
myGame.startGame();
