// Initial Board of 3,2,1 

var startBoard = [[3, 2, 1],[],[]];
var boardArray= [];

//Setting up messages via variables for the console to minimize noise in the code

var goodMove= "Good Job.  You made a successful move.  The board is now "
var badMove= "Houston, we have a problem!  You know the rules, so why are you trying to move a larger disc on top of a small one.  Board remains "
var winnerChickenDinner= "You are a rockstar every day, but even more today.  You won the game in "
var startingGame= "Welcome to the Towers of Hanoi.  The world's most fun game.  Please use board.moveDisc (x,y) to make a move.   This is your starting board: "

// Setting up the board for the first Use //

var displayBoard = function(setup) {
  startBoard.forEach(function(set) {
    var newset = set.map(function(num) {
      return Number(num);
    })
    setup.push(newset);
  });
}

displayBoard(boardArray);




// This displays the board after each turn to the console
var showBoard = function() {
    console.log("--- " + boardArray[0].join(" "));
    console.log("--- " + boardArray[1].join(" "));
    console.log("--- " + boardArray[2].join(" "));
};


var checkWinner = function(){
  // The checkWinner function works through an array to determine if a Winner has been found
    boardArray.map(function(item){
      var sumArray = item.reduce(function(sum, currentItem){ //use reduce to keep track of sum of each array
        return parseInt(sum + currentItem);
      }, []);
      if(sumArray === 6){ //winning threshold would be a sum of 6
        console.log(winnerChickenDinner + board.totalMoves +
        " moves! The Board will now be reset.");
        displayBoard(boardArray);
      };
    });
};







// Display Welcome message and opening placement of the pegs
console.log(startingGame);
showBoard();

// moveDisc is truly the engine of the game.  The user will use moveDisc to interact with the console and the game map.

var board = {

  totalPegs: 3,

  totalMoves: 0,

  moveDisc: function(start, finish) {
//Make the move if it is within the confines of the rules.  IF not, show error messages.
    if (typeof start === 'number' && typeof finish === 'number') {
      if (start > 0 && start < board.totalPegs + 1 && finish > 0 && finish < board.totalPegs + 1) {
        if (boardArray[start - 1][boardArray[start - 1].length - 1] < boardArray[finish - 1][boardArray[finish - 1].length - 1] || boardArray[finish - 1].length === 0) {
          boardArray[finish - 1].push(boardArray[start - 1].pop());
          board.totalMoves += 1;
          console.log("Total Moves: " + board.totalMoves);
          console.log(goodMove);
          showBoard();
          checkWinner();

        } else {
          console.log(badMove);
          showBoard();
        }
      } else {
        throw "Both numbers must be between 1-" + board.totalPegs
      }
    } else {
      throw "Please enter 2 actual numbers.";
    }

  },
// Function to assist user if they are entering invalid moves
  helper: function(num) {
    if (boardArray.every(function(line) {
        return boardArray[num - 1][boardArray[num - 1].length - 1] >= line[line.length - 1]
      })) {
      console.log("You cannot move from peg " + num + ".");
      return;
    } else {
      var possiblesetups = boardArray.filter(function(set) {
        return boardArray[num - 1][boardArray[num - 1].length - 1] < set[set.length - 1] || set.length === 0;
      });
      var possiblePegs = [];
      boardArray.forEach(function(num, i) {
        if (possiblesetups.includes(num)) {
          possiblePegs.push(i + 1)
        }
      })
      console.log("Here is a list of the possible places you can move from peg " + num + ": " + possiblePegs.join(" or "))
    }
  },
}
