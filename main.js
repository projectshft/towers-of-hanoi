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
  peg1: myBoard[0], //points to the first array of MyBoard. CANNOT BE USED TO MANIPULATE BOARD, ONLY A REFERNCE.
  peg2: myBoard[1], //points to the second array of MyBoard. CANNOT BE USED TO MANIPULATE BOARD, ONLY A REFERNCE.
  peg3: myBoard[2], //points to the third array of MyBoard. CANNOT BE USED TO MANIPULATE BOARD, ONLY A REFERNCE.
  numOfMoves: 0,
  moveDisc: function(give, receive){
  //  if (checkIfLegal(give, receive) === false) {
  //    console.log("Illegal move, try again");
  //    moveDisk();
    } else myBoard[receive - 1].push(myBoard[give - 1].pop()); // moves the "disc" from the give peg to the receive peg.

      boardState.numOfMoves += 1; // logs that a move was made.

      myBoard.map(function (element) {
      console.log("---" + element.join());

      console.log("Number of moves: " + boardState.numOfMoves); // logs the number of moves
    }); // prints the updated board to console.log. RETURNS THE SAME ARRAY THAT WAS PASSED IN.
  },
};

var checkIfLegal = function(theGiver, theReceiver){
//must have a filter function

//--------------- filter example -------------------
//var tweets = posts.filter(function (post) {
// if (post.platform === 'twitter') {
//   return true;
// }
// });


};

var checkWinner = function(){
//must have a reduce function

}
