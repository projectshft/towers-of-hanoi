/*
1. Prompt user for starting peg and ending peg
2. Validate move
3. If move is allowed, move disc, otherwise don't and log error
4. After successful move, check to see if game is won
5. Rinse/repeat for each move until the game is won
*/


console.log('Life is a game and you are the player.'+' As you master the game, so you also create it.');
console.log('Usage: board.moveDisc(a,b)');


//object to print current state of the board
var boardState = function() {

  var startBoard = [['3', '2', '1'], [], []];

  //do something private
  var printStartBoard = startBoard.map(function(peg){
    console.log('---' + peg)
  });

  var printCurrentBoard = function(){
    array.push(disc element returned from moveDisc);
    console.log();
  }

  // return an object exposed to the public
  return {
    printStartBoard: printStartBoard,
    printCurrentBoard: printCurrentBoard
  }
};


//object to maintain inner state of the board
var playGame = function(a,b) {

  //create object from user input
  var pegInput = {
    start: a,
    end: b
  }

  //do something private
  var pegStart = function(){
    if(pegInput[pegPosition])...
    convert peg input to zero-index
    array.pop();
    return value;
  }

  //do something private
  var pegEnd = function(){
    like above...
    take return value;
    array.push();
    return value;
  }

  //do something else private
  var validMove = function(){
    if (peg str) = true;
    array.filter();
    return something;
  }

  //do something else private
  var checkWinner = function(){
    array.reduce();
    if (sum = 6){
      return win;
      printStartBoard();
    }
  }

  // return an object exposed to the public
  return {
    moveDisc: function(a,b){
      if validMove(){
        move disc
        array.pop();
        array.push();
      }
      console.log('error');
    }

    **functions to return/call: pegStart, pegEnd, validMove, checkWinner
  };
};

var something = boardState(); 
var board = playGame();


// test
board.moveDisc(1,2);
