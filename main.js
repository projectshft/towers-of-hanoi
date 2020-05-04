//To play, invoke board.moveDisc(x, y) with x being the starting peg
// containing the disc you want to move, and y being the peg you want to move to.
//  You cannot move a larger disc on top of a smaller disc. The goal is to move the
//  stack of 3 discs to a new peg (either peg 2 or 3). Once you win, your total number
//  of moves is printed and the board is reset automatically.

var defaultBoard = [[3, 2, 1],[],[]];

//stores the game board seperate from the default board. Should change the layout?
var gameBoard = defaultBoard.map(function(peg){
  return peg.map(function(disc){
    return disc;
    })
  });

var numOfMoves = [];//Tally for each time a move is made


var board = {
  
  moveDisc : function (start, end){
    var startIndex = start - 1;
    var endIndex = end - 1;
    var discStart = gameBoard[startIndex];
    var discDestination = gameBoard[endIndex];
    var lastIndexStart = discStart[discStart.length - 1];
    var lastIndexEnd = discDestination[discDestination.length - 1];

    if(lastIndexStart < lastIndexEnd || lastIndexEnd === undefined){//checks to see if a move is legal. If the disc being moved is smaller than the last disc on the desitnation peg OR the peg is empty.

      numOfMoves.push(1);//adds 1 to an empty array each time a move is made
      var removedDisc = discStart.pop();//removes the last disc from the start postion and stores in in removedDisc variable
      discDestination.push(removedDisc);//pushes the removed disc to the disc destination



      //if a move is legal, this if statement checks to see if the winning conditions are met yet.
      var checkPegOne = gameBoard[0].reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
      }, 0);//the sum of discs in peg one

      var checkPegTwo = gameBoard[1].reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
      }, 0);//the sum of discs in peg two

      var checkPegThree = gameBoard[2].reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
      }, 0);//the sum of discs in peg three

      function checkWinner (){//checks to see if the 2 winning conditions are met:
      if (checkPegOne === 0 && checkPegTwo === 0){//if peg one and two are empty OR...
        gameBoard = defaultBoard;
        console.log("You Win! You used " + numOfMoves.length + "moves. The board is reset:");
        numOfMoves = [];//resets the number of moves
        console.log(gameBoard);
      } else if (checkPegOne === 0 && checkPegThree === 0){// OR if peg one and three are empty
        gameBoard = defaultBoard;
        console.log("You Win! You used " + numOfMoves.length + " moves. The board is reset:");
        numOfMoves = [];//resets the number of moves
        console.log(gameBoard);
      }

    };
      //if the winning conditions are not yet met, but the move is legal:
      console.log('That move was successful, board is now:')
      console.log(gameBoard);
      return checkWinner();

    } else {//if the disc being moved is bigger than the top disc on the destination peg

      numOfMoves.push(1);//adds 1 to an empty array each time a move is made
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
      console.log(gameBoard);
    }
  },

//   availMoves : function (peg){//doesn't work. My thought is that I need to check the last disc in each array and if it is bigger than the peg passed in as an argument, then we add it to a new array.

//     var pegIndex = peg - 1;
//     var pegLocation = gameBoard[pegIndex];
//     var lastDisc = pegLocation[pegLocation.length - 1];

//     var moves = gameBoard.filter(function (peg) {
//      if (lastDisc < peg){
//      return true;
//       }
//     })
//     console.log(moves)
//   }
};


// The following moves test/win the game:
// board.moveDisc(1, 2);
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(2, 3);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 2);
