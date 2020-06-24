//To play, invoke board.moveDisc(x, y) with x being the starting peg
// containing the disc you want to move, and y being the peg you want to move to.
//  You cannot move a larger disc on top of a smaller disc. The goal is to move the
//  stack of 3 discs to a new peg (either peg 2 or 3). Once you win, your total number
//  of moves is printed and the board is reset automatically.

var defaultBoard = [[3, 2, 1],[],[]];

var gameBoard = defaultBoard.map(function(peg){
  return peg.map(function(disc){
    return disc;
    })
  });

var numOfMoves = [];//Tally for each time a move is made

var board = {

//function that takes two arguments, the peg of the disc being moved, and the location it is to be moved to.
  moveDisc : function(start, end){
    var startIndex = start - 1;
    var endIndex = end - 1;
    var discStart = gameBoard[startIndex]; 
    var discDestination = gameBoard[endIndex]; 
    var lastIndexStart = discStart[discStart.length - 1];
    var lastIndexEnd = discDestination[discDestination.length - 1];

    if(lastIndexStart < lastIndexEnd || lastIndexEnd === undefined){
      numOfMoves.push(1);
      var removedDisc = discStart.pop();
      discDestination.push(removedDisc);
      // console.log('The Board is now...')
      // console.log(gameBoard)
      // return gameBoard;
      
  } else {      
      numOfMoves.push(1);//adds 1 to an empty array each time a move is made
      console.log('You cannot move a larger disc on top of a smaller one, the board is still:');
      console.log(gameBoard);
      // return gameBoard;
      
    }
  },


//function that prints the current board
  printBoard : function(){
    console.log('The Board is now...')
    console.log(gameBoard)
  },

//resets the board to the default board
  resetBoard : function(){
    gameBoard = defaultBoard
    console.log('The board is reset ')
    console.log(gameBoard)
  },


  //function that checks to see if the 2 possible winning conditions are met(if peg one and two are empty OR if peg one and three are empty)
  checkWinner : function(){
      //checks to see if the winning conditions are met yet.
      var checkPegOne = gameBoard[0].reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
        }, 0);//the sum of discs in peg one

      var checkPegTwo = gameBoard[1].reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
        }, 0);//the sum of discs in peg two

      var checkPegThree = gameBoard[2].reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
        }, 0);//the sum of discs in peg three

      
      if (checkPegOne === 0 && checkPegTwo === 0){//if peg one and two are empty OR...
        gameBoard = defaultBoard; //reset the board

        console.log("You Win! You used " + numOfMoves.length + "moves. The board is reset:");
        numOfMoves = [];//resets the number of moves
        console.log(gameBoard);
      } else if (checkPegOne === 0 && checkPegThree === 0){// OR if peg one and three are empty
        gameBoard = defaultBoard;//reset the board

        console.log("You Win! You used " + numOfMoves.length + " moves. The board is reset:");
        numOfMoves = [];//resets the number of moves
        console.log(gameBoard);
      } else {
        console.log("You haven't won yet. The board is still...");
        console.log(gameBoard);
        }
  },

  //filters the game board and returns all pegs where the last peg is larger than the disc being moved
  checkMoves : function(pegToMove){
    var startIndex = pegToMove - 1;
    var discStart = gameBoard[startIndex]; 
    var lastIndexStart = discStart[discStart.length - 1];//returns the last disc on the pegToMove

    const result = gameBoard.filter(function(peg) {
    return peg[peg.length-1] > lastIndexStart || peg.length === undefined
      });
    console.log(result)
  }

};


// The following moves test/win the game:
board.moveDisc(1, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(2, 3);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.checkWinner();
