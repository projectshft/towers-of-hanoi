var myBoard = [["3", "2", "1"],[],[]]; //each nested array myBoard[0], myBoard[1], and myBoard[2] represent
//the pegs of the board. The index of the subarrays represent discs, and their values represent the disc's diameter.

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
    if (boardState.checkIfLegal(give - 1, receive - 1) === false) {
      console.log("Illegal move, try again");
    } else {
      myBoard[receive - 1].push(myBoard[give - 1].pop()); // moves the "disc" from the give peg to the receive peg.

      boardState.numOfMoves += 1; // logs that a move was made.

      myBoard.map(function (element) {
      console.log("---" + element.join());
      }); // prints the updated board to console.log. RETURNS THE SAME ARRAY THAT WAS PASSED IN.

      console.log("Number of moves: " + boardState.numOfMoves); // logs the number of moves

      boardState.checkWinner();
    };
  }
};

//Invoke boardState.moveDisc(give, receive); below to play the game.
//The give argument is the peg you want to remove the disc from.
//The receive argument is the peg you want to place the disc on.
