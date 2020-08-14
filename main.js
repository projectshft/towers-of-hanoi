// We'll want to be able to print the board horizontally. 
// You MUST utilize a map function at least once to accomplish this part of the assignment.
let boardState = [   // a basic 3x3 board
  ['3', '2', '1'],
  [],
  []
];
let startingPeg = 1;  // peg we start on (1 in human-readable form, 0 in index)

var BoardController = function () {
  var startRound = function () {
    if (!moves){
      console.log('Welcome. Here is the game start configuration.');
    }
    //console.log(boardState);
    console.log(outputBoard(boardState));    
  }
  var outputBoard = function(boardArray) {    // REQs = use MAP at least once
    let output = '';
    for (let i = 0; i < boardArray.length; i++) {  //common loop through elements in array
      //console.log('i loop ' + i);
      if (!boardArray[i].length){   // too clever? length is the only param that works
        output += '---\n';
      } else {
        output += '--- ';  // start with the post
        output += boardArray[i].map(function(disc){  // add bits of (hopefully formatted) results to post
          //console.log('disc ', disc);
          //disc = disc.replace(/,/g , '');
          return (disc += ' ') //.replace(/,/g , '');
        });
        output = output.replace(/,/g , '');  // clean out the commas before returning. But where do they come from?
        output += '\n';
      }
      
      }
      return output;
  }
  var moveDisc = function(start, dest) {
    console.log('moveDisc() called');
  }
  var incrementMoves = function() {
    return moves++;
  }
  var testProcess = function() {
    console.log('see, it works');
  }
  return {
    startRound : startRound,
    outputBoard : outputBoard,
    moveDisc : moveDisc,
    incrementMoves : incrementMoves,
    testProcess : testProcess
  }      
}

 


    
var board = BoardController();
let moves = 0;
board.startRound();
board.incrementMoves();

// console.log(moves);


/* winning moves on a 3x3 board
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);
*/

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