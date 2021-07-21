var Board = function(numPegs=3, numDiscs=5) {
  this.numPegs = numPegs,
  this.numDiscs = numDiscs,
  this.layout = [];
  for (let index = 0; index < numPegs; index++) {
    this.layout.push([]);    
  };
  for (let index = 0; index < numDiscs; index++) {
    this.layout[0].push(index + 1);    
  };  
  
}; //change so that user can specify number of pegs.

var board = new Board;

Board.prototype.printBoard = function() {
  this.layout.map(function (peg) {      
    console.log('--- ' + peg.join(' '));
  });
};

Board.prototype.checkWinner = function() { 
  var discs = this.numDiscs; 
  var win = false
  this.layout.forEach(function(peg) {
    if (peg.length === discs && peg[0] === discs) {      
      win = true;
    };
  });
  return win;
};


Board.prototype.moveDisc = function(startPeg, endPeg) {  
  if ((startPeg <= this.numPegs) && (endPeg <= this.numPegs)) {//check to see if peg is on board

    startPeg -=1;//adjust for 0 index
    endPeg -= 1;    

    var start = this.layout[startPeg][this.layout[startPeg].length - 1];
    var end = this.layout[endPeg][this.layout[endPeg].length - 1];//are these variables readable? Lot of indexing going on...

    if ((end > start) || (typeof end === 'undefined')) {
      this.layout[endPeg].push(this.layout[startPeg].pop());
      console.log('That move was successful, board is now: ');
      this.printBoard();
    } else {
      console.log('You cannot move a larger disc on top of a smaller one. Board is still: ');
      this.printBoard();
  }
    
  } else {
    console.log('No such peg. Board is still: ');
    this.printBoard();
  };

  if (this.checkWinner()) {
    var again = prompt('You win! Play again? Enter y or n.');
    if (again === 'y') {
      board = new Board;
    } else {
      console.log('See ya later!')
    };
  };  
};




/*Attempting to make this more like an actual game with user input..
//
//
var playGame = function() {
  var board = new Board;//asks user for number of pegs and initializes new board 
  
  var playing = true; 

  while (playing) {
    board.printBoard();
    var startPeg = prompt('Move from');
    var endPeg = prompt('Move to');
    board.moveDisc(startPeg, endPeg);
    if (checkWinner(board)) {
      playing = false;
      var again = alert('You win! Play again? Enter y or n.');
      if (again === 'y') {
        playGame();
      } else {
        break;
      }
      //print winner message, ask if they want to start over.
    }
  }    
};

playGame() */
