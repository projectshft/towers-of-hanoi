var TowersofHanoi = function() {
  //starting playing board: 3pegs 3discs
  var board = [
    [3, 2, 1],
    [],
    []
  ];

  var counter = 0;

  //takes last element of an array and pushes it onto another
  var moveDisc = function(currentPeg, desiredPeg) {
    let element = board[currentPeg].pop();
    board[desiredPeg].push(element);
    counter += 1;
    //updating the board
    var displayBoard = board.map(function(elem) {
      return "---" + elem + "\n";
    });
    console.log(displayBoard);
    //seeing if the move won the person the game
    var checkWinner1 = board[desiredPeg].reduce(function(sum, number) {
      if (board[desiredPeg] !== board[0]) {
        return sum + number;
      }
    }, 0);
    if (checkWinner1 === 6) {
      console.log("Congratulations, You Won in " + counter + " moves!! The playing Board will now be reset");
      reset(board);
    }


  };
//logs the specific arrays one can move to given a certain peg
//I wanted to combine this in the move function but was unable to figure out a way to do so effeciently
//Since this function can remove certain arrays if they don't meet requirements, I would have liked to added a way to identify each array easily, since the only way currently to identify each array is if you know its contents.
  var checkMove = function(currentPeg) {
    board.filter(function(array) {
      if (array.length == 0 || array[array.length - 1] > board[currentPeg][board[currentPeg].length - 1]) {
        console.log(array);
      }
    })
  };
// funtion to reset the board after a win
  var reset = function(array) {
    array[0] = [3, 2, 1];
    array[1] = [];
    array[2] = [];
  };



//exporting functions to external environment
  return {
    board: board,
    moveDisc: moveDisc,
    checkMove: checkMove
  }

}

//starting a new game
var play = TowersofHanoi();


//steps to win the game
play.moveDisc(0,2);
play.checkMove(0);//chekcing to see what array the top disc on index[0] can move to
play.moveDisc(0,1);
play.moveDisc(2,1);
play.moveDisc(0,2);
play.checkMove(1);
play.moveDisc(1,0);
play.moveDisc(1,2);
play.moveDisc(0,2);
//^this last move wins the Game and the board is reset
//I make my first move again to show the board is reset
play.moveDisc(0,2);
