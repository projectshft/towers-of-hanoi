// was having issue with setting up a originalBoardState property at the beginning so set the initialBoard variable as a placeholder in order to check a win condition for the 5 rings.... after getting to extension to update rows and discs added the wincondition property and used Object assign to make a copy of the original board so that my board property could be manipulated with moveDisc without affecting the winCondition property
// plan was to add a changeBoard method that would loop through and assign based on numbers passed into it similar to how I reset the board in my checkWinner() function

//set an object back to initial state if winning game

// when game is instantiated want to assign the initial board to board object.assign(initialBoard, this.board)  can use this to later accept more pegs and discs
var Game = function () {
  this.board = [[5, 4, 3, 2, 1], [], []];
  this.originalBoardState = [[5, 4, 3, 2, 1], [], []];
  this.displayBoard = function () {
    var display = this.board.map(function (row) {
      return "---" + " " + row.join(" ");
    });
    display.forEach(function (row) {
      console.log(row);
    });
  };
  this.moveDisc = function (currentPeg, newPeg) {
    if (
      typeof currentPeg === "number" &&
      typeof newPeg === "number" &&
      currentPeg <= this.board.length &&
      currentPeg > 0 &&
      currentPeg !== newPeg &&
      newPeg <= this.board.length &&
      newPeg > 0
    ) {
      var currentPegPlacement = this.board[currentPeg - 1];
      var topDisc = this.board[currentPeg - 1].length - 1;
      var newPegPlacement = this.board[newPeg - 1];
      var newTopDisc = this.board[newPeg - 1].length - 1;
      var discToMove = currentPegPlacement[topDisc];
      var topOfNewPeg = newPegPlacement[newTopDisc];

      if (currentPegPlacement.length === 0) {
        console.log("you can not make a disc appear out of thin air");
      }
      if (topOfNewPeg === undefined || discToMove < topOfNewPeg) {
        //store the current pegs top disc in a var
        // console.log(discToMove);
        var savedDisc = currentPegPlacement.pop();
        newPegPlacement.push(savedDisc);
        // var discBeingMoved = discToMove.pop();
        // topOfNewPeg.push(discBeingMoved);
        console.log("That Move was successful, board is now:");
      } else {
        console.log(
          "You cannot move a larger disc on top of a smaller one, board is still:"
        );
      }
      this.displayBoard();
      this.checkWinner();
    } else {
      console.log("please only use the available pegs");
    }
  };
  //did not have time to add constraints to this  like the movedisc function ..no error handling
  this.changePlayStyle = function (pegs, discs) {
    var boardArray = [];
    for (let i = 1; i <= pegs; i++) {
      const peg = [];
      boardArray.push(peg);
    }
    console.log(boardArray);
    for (let index = discs; index >= 1; index--) {
      console.log();
      boardArray[0].push(index);
    }

    Object.assign(this.board, boardArray);
    Object.assign(this.originalBoardState, boardArray);
  };
  this.checkWinner = function () {
    var winner = false;
    var originalBoardState = this.originalBoardState[0];
    this.board.forEach(function (peg, index) {
      if (peg.toString() === originalBoardState.toString() && index != 0) {
        winner = true;
      }
      // loop through and reset the game
      // forEach on the board array  take the peg and an index
      // if index == 0 this.board[index] = [5, 4, 3, 2, 1] else []
    });
    if (winner) {
      console.log("nice win, the game will now be reset");
      this.board = this.originalBoardState;
    }
    this.displayBoard = function () {
      var display = this.board.map(function (row) {
        return "---" + " " + row.join(" ");
      });
      display.forEach(function (row) {
        console.log(row);
      });
    };
  };
};
// var player = new Game([[5, 4, 3, 2, 1], [], []]);
//   return "---" + " " + row.join(" ");
// });

// // will show the display in the terminal without appearing as an array or string
// display.forEach(function (row) {
//   console.log(row);
// });
// var board = [[5, 4, 3, 2, 1], [], []];
// var board = [[5, 4, 3, 2], [1], []];
// var board = [[5, 4, 3, , ], [2], [1]];

//moveDisc function  moveDisc(1,2)

// var moveDisc = function (currentPeg, newPeg) {
//   //subract 1 bc index starts at 0 not 1  ... the first element would be 0 due to 0 being the first index
//   var currentPegPlacement = board[currentPeg - 1];
//   var topDisc = board[currentPeg - 1].length - 1;

//   var newPegPlacement = board[newPeg - 1];
//   var newTopDisc = board[newPeg - 1].length - 1;

//   // where we want to push the disc onto the peg if able
//   // var newOne = board[newPeg - 1];
//   // newOne.push(current);
//   var discToMove = currentPegPlacement[topDisc];
//   var topOfNewPeg = newPegPlacement[newTopDisc];

//   if (topOfNewPeg === undefined || discToMove < topOfNewPeg) {
//     //store the current pegs top disc in a var
//     // console.log(discToMove);
//     var savedDisc = currentPegPlacement.pop();
//     newPegPlacement.push(savedDisc);
//     // var discBeingMoved = discToMove.pop();
//     // topOfNewPeg.push(discBeingMoved);
//     console.log("That Move was successful, board is now:");
//     console.log(board);
//   } else {
//     console.log(
//       "You cannot move a larger disc on top of a smaller one, board is still:"
//     );
//     console.log(board);
//   }
// };

// moveDisc(1, 2);
// moveDisc(1, 3);

// want to pop this number off the stack and push it to the new peg if it is smaller than the last item in the array on that peg

// will take 2 arguments (the top disk on the peg of the particular peg, peg to move it to)
// moveDisc(1, 2);
// That move was successful, board is now:
// --- 5 4 3 2
// --- 1
// ---
// // Move disc from peg 1 to peg 3
// moveDisc(1, 3);
// That move was successful, board is now:
// --- 5 4 3
// --- 1
// --- 2

//pop the end of the array off and save it to a variable to push to another array(ring on top of the discs ) prior to removing last # from the array check if the peg you plan to move the ring to's last # is a higher number....if its not a higher number dont move the ring and console log :
//"You cannot move a larger disc on top of a smaller one, board is still:"
// console.log the boards current state "
// if the move is able to be made console log :
//"That move was successful, board is now:"
// console log the boards current state

// there should be an object responsible for maintaining the state of the board
