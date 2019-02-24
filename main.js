/*
1. Prompt user for starting peg and ending peg
2. validate move
3. If move is allowed, move disc, otherwise don't and log error
4. After successful move, check to see if game is won
5. Rinse/repeat for each move until the game is won
*/


console.log('Life is a game and you are the player.'+' As you master the game, so you also create it.');
console.log('Usage: board.moveDisc(a,b)');


//object to maintain state of the state of the board
var board = function() {

  startBoard = [['3', '2', '1'], [], []];

  //do something private
  var printBoard = startBoard.map(function(peg){
    console.log('---' + peg)
  });


  //do something else private
  function validMove(){
    if (peg str) = true;
    return something;
  }

  //do something else private
  checkWinner(){
    array.reduce
    if (sum = 6){
      return win;
    }
  }


  // return an object exposed to the public
  return {

    printBoard: printBoard,

    moveDisc: function(a,b){
      if validMove(){
        move disc
        array.pop();
        array.push();
      }
    }
  };
};

var board = boardState();
board.printBoard();


// test
board.moveDisc(1,2);
