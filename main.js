var Game = function() { 
  var makeBoard = [[5,4,3,2,1],[],[],[],[]]; //board array
  var movesCounter = 0; //tracks number of successful moves by the player

function drawBoard() { //function to handle rendering the board to the console
  makeBoard.map(function(peg) {
     console.log('---', ...peg) //Edwards solution
  });
  }

  
  var moveDisc = function(input, output) { //Function that controls all peg movement once user input is received
      if (input !== null && output !== null) { //to check for cancel press to end game. input = home peg, output = destination peg.
      var test = validMoves(makeBoard[input-1]);
      var asdf = test.find(a => a == makeBoard[output-1])
    //  console.log(test);
      if (asdf) {
        tempDisc = makeBoard[input-1].pop();
        makeBoard[output-1].push(tempDisc);
        console.clear();
        movesCounter += 1;
        userSelection();
      } else {
        console.clear();
        console.log("Invalid move");
        userSelection();
        }
    } else {
        alert("Ending Game. Goodbye!");
    }
 }
//There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, 
//you MUST use a filter function at least once.
// 
  function validMoves(peg) { //peg is the index of the peg in the makeBoard array
    return makeBoard.filter(function(pegs) {
     if (peg[peg.length-1] < pegs[pegs.length-1] || pegs[pegs.length-1] == undefined)
      {
        return pegs;
      }
    });
}

  var userSelection = function() { //prompts user for movements 
    drawBoard();
    checkWinner();
    input = window.prompt("start peg");
    output = window.prompt("end peg");
    moveDisc(input, output);
  }
  
  function checkWinner() { //evaluates the board to see if it is in a victory state
    makeBoard.forEach(peg => {
       var win = peg.reduce(function(sum, val){
        return sum + val;
      },0);
      if (win == 15 && makeBoard[0] == false) {
        winning();
      }
    });
   
  }
function winning() {
      alert("You win!! It took you " + movesCounter + " moves to win.");
      movesCounter = 0; //Resets move counter
      makeBoard = [[5,4,3,2,1],[],[],[],[]]; //Resets board for next game
      console.clear();
      drawBoard();
}
  return {
    userSelection: userSelection, //Exposes a method to our gameLoop object to initiate the game.
  }
}

 var gameLoop = Game();

 gameLoop.userSelection(); //gameLoop is the object responsible for maintaining the state of the board
