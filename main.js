//initial 2d Array of the 'board'
var Game = function(board){
  this.board = board;
  this.startBoard = startBoard;
  this.moveCount = moveCount;
  this.toTower = toTower;
  this.defaultBoard = defaultBoard;
};

var defaultBoard = [[5, 4, 3, 2, 1], [], []];
var board = [];
var startBoard = [];
var moveCount = 0;
var toTower = null;
  
  //create a horizontal display of the current board
Game.prototype.displayBoard = function(){
  var printedBoard = this.board.map(tower=>{
    return `Tower ${this.board.indexOf(tower) +1} --- ${tower.map(disc =>{return `${disc}`}).join(' ')}`;
   });
  var loggedBoard = printedBoard.reduce(function (acc, arr){
     var str = acc;
     return (str += `${arr}\n`)
  }, "")
  console.log(loggedBoard);
  };
      
    //create a move function that moves disc from one tower to another
Game.prototype.move = function(moveFrom, moveTo){
  var fromIndex = (this.board[moveFrom -1].length -1);
  var fromValue = this.board[moveFrom -1][fromIndex];
  var toIndex = (this.board[moveTo -1].length -1);
  var toValue = this.board[moveTo -1][toIndex];
  toTower = moveTo -1;
    if(fromValue === undefined){
      moveCount++;
      console.log(`That is not a valid move. Please move one of the discs to a new tower.`);
      return this.displayBoard();
    }
    if(fromValue > toValue){
      moveCount++;
      console.log(`You can only move smaller discs onto larger discs. Please try another move.`);
      return this.displayBoard();
    } else {
      this.board[moveTo -1].push(this.board[moveFrom -1].pop());
      moveCount++;
      this.winCheck();
      console.log(`current number of moves: ${moveCount}`);
      console.log(`That move was successful. Here is what the board looks like now:`);
      return this.displayBoard();
    };
};
      
Game.prototype.winCheck = function(){
  if(this.startBoard[0].length === this.board[this.board.length-1].length) {
    alert `You have won the game! Way to go! Game will now reset.`;
    this.displayBoard();
    return this.resetGame();
    } else {
      return 'Keep going!'
    };
};
       
Game.prototype.resetGame = function(){
  this.moveCount = 0;
  this.board = this.startBoard;
  console.log(`current number of moves: ${this.moveCount}`);
  this.displayBoard();
};

Game.prototype.generateBoard = function(userInputTowers, userInputDiscs){
  userInputTowers = prompt `Please enter the number of towers you would like to play with:`;

  for(i = 0; i < userInputTowers; i++){
    this.board.push([]); 
  };

  userInputDiscs = prompt `Please enter the number of discs you would like to play with:`;
  var totalDiscs = Array.from({length:parseInt(userInputDiscs)}, (_,i) => i + 1 );
  var orderedDiscs = totalDiscs.sort((a,b) => {
    if(a > b){
      return -1
    } else {
      return 1;
    };
  });

  board[0] = orderedDiscs;
 
  this.board = board;
  this.startBoard = this.createStartBoard();
};

Game.prototype.createStartBoard = function(){
  return this.board.map(tower =>{
    return tower.map(disc => {
      return disc;
    })
  })
};

Game.prototype.startGame = function () {
  userInputStart = prompt `Would you like to set your own number of towers and discs? Please Type 'yes' or 'no'.`;
  if(userInputStart === 'yes'){
  this.generateBoard();
  return this.displayBoard()
  } else if(userInputStart === 'no') {
    this.moveCount = 0;
    this.board = this.defaultBoard;
    this.startBoard = this.defaultBoard;
    return this.displayBoard();
  }
};
  
var my = new Game(this.board);

my.startGame();