// We'll want to be able to print the board horizontally. 
// You MUST utilize a map function at least once to accomplish this part of the assignment.
let boardState = [ // a basic 3x3 board 
  ['3', '2', '1'],
  [],
  []
];
let startingPeg = 1; // peg we start on (1 in human-readable form, 0 in index)
let winSum;
var BoardController = function () {
  var startRound = function () {
    // console.log('startRound() called');
    if (!moves) {
      winSum = 0;
      boardState = [ // a basic 3x3 board // is this the best way to reset the game?
        ['3', '2', '1'],
        [],
        []
      ];

      console.log('Welcome. Here is the game start configuration.');
      console.log(outputBoard(boardState));
      for (let i = 0; i < boardState.length; i++) {
        winSum = (boardState[i].reduce(function (sum, element) {
          return sum + parseInt(element)
        }, 0));
        if (winSum > 0) { // assumes valid board, so returns once it gets a good count
          //console.log('winSum = ' + winSum);
          return winSum;
        }
      }
    } else {
      console.log('Moves taken: ' + moves);
      console.log(outputBoard(boardState)); // need to determine if I'm sending the array to the function, or if it's just getting it itself
    }

  }

  var outputBoard = function (boardArray) { // REQs = use MAP at least once **achieved**
    // console.log('outputBoard() called');
    let output = ''; // in scope of boardArray()
    for (let i = 0; i < boardArray.length; i++) { //common loop through elements in array - could be double .map I think
      if (!boardArray[i].length) { // too clever? length is the only param that works
        output += '---\n';
      } else {
        output += '--- '; // start drawing the peg
        output += boardArray[i].map(function (disc) { // add bits of (hopefully formatted) results to peg
          return (disc += ' ') // output is dirty - run .replace(/,/g , '');
        });
        output = output.replace(/,/g, ''); // clean out the commas before returning. But where do they come from?
        output += '\n'; // add a newline at end of peg with discs
      }
    }
    return output;
  }
  var moveDisc = function (start, dest) {
    // console.log('calling testMove with start peg ('+start+') returns-->' + testMove(start));
    // console.log('and now does it include dest? '+ testMove(start).includes(dest));

    /* NOTE reduce input val's by 1 to equal array index
    test if ok to make move with .testMove(), else bounce with error -  send bad message
    if ok, update board array, increment moves - send good message
    call startRound() - startRound renders board 
    call checkWinner()*/
    // console.log('---- the arrays we are look at. start, dest')
    // console.log(boardState[start - 1]);
    // console.log(boardState[dest - 1]);
    if (testMove(start).includes(dest)) { // expecting array of valid pegs returned
      let movingDisc = boardState[start - 1].pop(); // store disc from start peg in var
      boardState[dest - 1].push(movingDisc); // push disc onto board 
      incrementMoves();
      if (checkWinner(boardState)) {
        resetGame();
        return;
      }
      startRound(boardState);
      return;
    } else {
      console.log('Sorry, that move is not allowed. Rules is rules.');
      // I don't know if this counts as a move, so for now, it doesn't
      // board.incrementMoves();
      return;
    }
  }
 /* var testMove = function (start) { // REQs: use FILTER -- tried.... something
    let currentDiscSize = boardState[start - 1][(boardState[start - 1].length) - 1];
    //console.log(currentDiscSize + ' : currentDiscSize detected');
    let validMoves = []; // return this filled with valid pegs to move to
    for (let boardIndex = 0; boardIndex < boardState.length; boardIndex++) {
      if (start - 1 === boardIndex) {
        validMoves.push(0);
      } else if (boardState[boardIndex].reduce(function (sum, index, arr) {
          return sum === sum[arr.length - 1]
        }, 0) > currentDiscSize || !boardState[boardIndex][boardState[boardIndex].length - 1]) {
        validMoves.push(boardIndex + 1);
      } else {
        validMoves.push(0);
      }
    }
    return validMoves;
  } */


  var testMove = function (start) { // REQs: use FILTER
    let currentDiscSize = boardState[start - 1][(boardState[start - 1].length) - 1];
    //console.log(currentDiscSize + ' : currentDiscSize detected');
    let validMoves = []; // return this filled with valid pegs to move to
    for (let boardIndex = 0; boardIndex < boardState.length; boardIndex++) { // loop through main array
      if (start - 1 === boardIndex) { // moving to current peg not valid, so skip it
        validMoves.push(0); // could be '' or anything not a peg number, or skip it :-)
        /* next line goes into the second dimension of the board, looks at last entry, compares
           to currentDiscSize. If larger or empty peg, allows and pushes peg to output array */
      } else if (boardState[boardIndex][boardState[boardIndex].length - 1] > currentDiscSize || !boardState[boardIndex][boardState[boardIndex].length - 1]) {
        validMoves.push(boardIndex + 1); // +1 because human readable peg number
      } else { // peg not allowed due to disc in play being larger than destination disc
        validMoves.push(0); // could be '' or anything not a peg number
      }
    }
    return validMoves;
  }

  var incrementMoves = function () {
    // console.log('incrementMoves() called');
    return moves++; // easy enough, it seems
  }

  var checkWinner = function (boardArray) {
    //console.log('checkWinner() called');  // REQ's = use REDUCE at least once **achieved**
    for (let i = 0; i < boardArray.length; i++) { //common loop through elements in array - could be double .map I think
      //console.log('reducing to ' + boardArray[i].reduce(function(sum, element){return sum + element}, 0));

      /* a repeat of one of the setup functions. Find the sum of all disc sizes 
        on each peg that is not the starting peg. If the sum === what we had at the
        beginning of the game, we have winner. */
      // testing for number, disc size numbers are stored as strings. use parseInt
      // -1 to turn human-friendly peg to index number
      //  console.log('testing if' + boardArray[i].reduce(function(sum, element){return sum + parseInt(element)}, 0) + '=' + winSum);
      if (boardArray[i].reduce(function (sum, element) {
          return sum + parseInt(element)
        }, 0) === winSum && ((startingPeg - 1) != i)) {
        console.log(outputBoard(boardArray));
        console.log('WINNER IN ROW ' + [i + 1]);
        console.log('Total moves taken: ' + moves + '\n\n');

        return true;
      } else {
        // console.log('Sorry, no win yet.');  // is this obvious enough?
      }
    }
    return false;
  }
  /* legal moves should already be accounted for, so...
     I think we can check just for total number of discs
     and see that they are all on one index
     AND that index is not the same as the starting peg
     starting peg defined manually at game start = startingPeg
     NOTE subtract 1 from peg to equal index of array */


  var resetGame = function () {
    // console.log('resetGame() called');
    moves = 0; // reset the move counter -- this is the real magic to this function
    winSum = 0; // will be reset by startRound(), but just covering all bases
    startRound();
    return;
  }
  // send all functions in Object to global
  return {
    startRound: startRound,
    outputBoard: outputBoard,
    moveDisc: moveDisc,
    testMove: testMove,
    incrementMoves: incrementMoves,
    checkWinner: checkWinner,
    resetGame: resetGame
  }
}

var board = BoardController();
let moves = 0;
board.startRound(); // set up game first run

//sample winning moves 
board.moveDisc(1,2); 
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);  
//
// now we should be ready for console commands


/* actions to perform when calling moveDisc
 1 - call function to FILTER what pegs are compatible
 2 - move there
 3 - print board
 4 - count moves++
 5 - check if win REDUCE
*/
// There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board

// The board should maintain the number of moves that the player has done and output this value when the game completes.
//There should be a way to move discs from one peg to another.  board.moveDisc()
// There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, you MUST use a filter function at least once (filter HINT: If the user says they want to move a certain disc to another peg, wouldn't it be nice if you had a function that could take that disc size and look at all the pegs on the board and only return the ones that the disc you want to move would fit on?).
// There should be a function checkWinner that checks to see if the player has won the game. As a part of this function, you MUST use the reduce function at least once. 
// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.