var myBoard = [["3", "2", "1"],[],[]]; //each nested array myBoard[0], myBoard[1], and myBoard[2] represent
//the pegs of the board. The index of the subarrays represent discs, and their values represent the disc's diameter.

// We'll want to be able to print the board horizontally.
// You MUST utilize a map function at least once to accomplish this part of the assignment.
// The starting board will log the 2D array to the console like this
// (if you'd like a challenge, try printing the board vertically):
//
// --- 5 4 3 2 1
// ---
// ---
//
//-------- example of moving a disc ----------
// myBoard.moveDisc(1,3);
// That move was successful, board is now:
// --- 5 4 3
// --- 1
// --- 2

var boardState = { //records and manipulates the state of the board, and how many moves have been made.
  checkWinner: function(){  //must have a reduce function
      if (myBoard[1].reduce(function(acc, cV) {return parseInt(acc) + parseInt(cV)}, 0) === 6
       || myBoard[2].reduce(function(acc, cV) {return parseInt(acc) + parseInt(cV)}, 0) === 6) {
        console.log("Winner!");
      }
  },
  checkIfLegal: function(giver, receiver){
    if (myBoard[receiver] == 0) {  // if receiving peg has not discs, the move is valid.
      return true;
    } else if (myBoard[receiver].filter(function(value){return value > myBoard[giver][myBoard[giver].length - 1]}, []) != 0) {
      return true; // if the receiving peg has a disc that is larger than the top disc of the giving peg, move is legal
    } return false; // otherwise, move is illegal
  },
  numOfMoves: 0,
  moveDisc: function(give, receive){
    if (checkIfLegal(give, receive) === false) {
      console.log("Illegal move, try again");
      boardState.moveDisk();
    } else myBoard[receive - 1].push(myBoard[give - 1].pop()); // moves the "disc" from the give peg to the receive peg.

      boardState.numOfMoves += 1; // logs that a move was made.

      myBoard.map(function (element) {
      console.log("---" + element.join());
      }); // prints the updated board to console.log. RETURNS THE SAME ARRAY THAT WAS PASSED IN.

      console.log("Number of moves: " + boardState.numOfMoves); // logs the number of moves

      boardState.CheckWinner();
  },
};


// var checkWinner = function(){
// //must have a reduce function
//   if (reducerPeg2 === 6 || reducerPeg3 === 6) {
//     console.log("Winner!");
//   }
// }
//
// var reducerPeg2 = myBoard[1].reduce(function(acc, cV) {
//   return parseInt(acc) + parseInt(cV);
// }, 0);
//
// var reducerPeg3 = myBoard[2].reduce(function(acc, cV) {
//   return parseInt(acc) + parseInt(cV);
// }, 0);
