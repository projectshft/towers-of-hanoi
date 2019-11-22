// Towers of Hanoi

BoardModule = function () {
  //object to wrap game in so that moveDisc is accessible by the user in the global scope
  var board = [ // Begin board using a 2d array
    ["3", "2", "1"],
    [],
    []
  ];

  var moves = 0; // counter to track total moves to win

  var printBoard = function () {
    //Print board horizontally using .map()
    return board.map(function (peg) {
      console.log("---", ...peg);
    });
  };

  var moveDisc = function (sourcepeg, targetpeg) { //function to moveDisc
    sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation
    targetpeg -= 1;

    function isMoveLegal() { // use filter
      if (board[targetpeg].length === 0) { //if the target peg is an empty array, the top disc of the source peg can legally move there
        return true;
      } else if (board[sourcepeg] < board[targetpeg]) { // if the target peg is not an empty array, but the disc on the source peg is smaller than the disc on the target peg, the disc can legally move there
        return true;
      } else { // illegal move
        return false;
      };
    };

    if (isMoveLegal() == true) {
      var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets disc equal to the return element
      board[targetpeg].push(disc); //adds disc to the target peg
      moves += 1; //this is a move!
      checkWinner();
      printBoard();
    } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
      console.log(printBoard());
    };
  };

  var checkWinner = function () {
    const winner = board.reduce((accumulator, peg) => { //uses reduce to check if the length of the peg is equal to 3. if it is, it returns the indexOf the peg that has 3 elements in it 
      if (peg.length == 3) return board.indexOf(peg);
      return accumulator
    });

    if (winner === 1 || winner === 2) { //if winner returns index 2 or 3, the player has won!
      console.log("You've won Towers of Hanoi! " + "in " + moves + " moves! Play again?");
      board = [ // this resets the game board
        ["3", "2", "1"],
        [],
        []
      ];
      moves = 0; // this resets the move counter
      printBoard(); // this shows the user the reset board if they want to play again
    };
  };
  return {
    moveDisc: moveDisc // this makes moveDisc public and no longer private
  };
};

var TowersOfHanoi = BoardModule();
//test code and minimum number of moves to win
console.log(TowersOfHanoi.moveDisc(1, 2));
console.log(TowersOfHanoi.moveDisc(1, 2));
console.log(TowersOfHanoi.moveDisc(1, 3));
console.log(TowersOfHanoi.moveDisc(2, 3));
console.log(TowersOfHanoi.moveDisc(1, 2));
console.log(TowersOfHanoi.moveDisc(3, 1));
console.log(TowersOfHanoi.moveDisc(2, 1));
console.log(TowersOfHanoi.moveDisc(3, 2));
console.log(TowersOfHanoi.moveDisc(1, 2));

