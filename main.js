//build game board for towers of hanoi
//1. board has to be 2D array
//2. must utilize MAP to print board HORIZONTALLY at least once

//3. player submits moves to game --> function called moveDisc(sp, ep)
  // and updates board if allowed
//4. an object is responsible for maintaining the board
//5. should be a way to move discs from one peg to another
//6. should be a checkWinner function
//7. if winner--> game resets automatically and prints the win (use console.log)
//8. NO for or while loops to iterate througn an array
  //must use array helper methods except forEach




//var board = towersOfHanoi.board;

var towersOfHanoi = {
  board: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],

  //prints board to console horizontally
  printBoard: function() {
    var gameBoard = this['board'].map(function (pegs) {
      return console.log('--- ' + pegs.join(' '))  
    });
  
    return gameBoard; 
  },

  moveDisc: function(startPeg, endPeg) {
    //adjusts parameters so they can act as indexes
    startPeg -= 1;
    endPeg -= 1; 
    
    var board = this.board; 
  
    if(board[endPeg].length === 0) {
      board[endPeg].push(board[startPeg].pop());
  
    };
  
    towersOfHanoi.printBoard();
  },

};



towersOfHanoi.moveDisc(1, 3);






  
 

