/*
1. Prompt user for starting peg and ending peg
2. validate move
3. If move is allowed, move disc, otherwise don't and log error
4. After successful move, check to see if game is won
5. Rinse/repeat for each move until the game is won
*/


console.log('Life is a game and you are the player.'+' As you master the game, so you also create it.');
console.log('Usage: board.moveDisc(a,b)');

// create printBoard object
var printBoard = {

  startBoard = [['3', '2', '1'], [], []];
}
printBoard();

//object to maintain state of the state of the board
var board = {

  validMove(){
    if (peg str) = true;
    return something;
  }

  checkWinner(){
    array.reduce
    if (sum = 6){
      return win;
    }
  }



  return {

    moveDisc: function(a,b){
      if validMove(){
        move disc
        array.pop();
        array.push();
      }

    }
  }
};

var playGame = board.moveDisc(a,b);
playGame();

// test
board.moveDisc(1,2);
