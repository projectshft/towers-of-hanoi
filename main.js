
var towersOfHanoi = {

  board: [
    ['5', '4', '3', '2', '1'],
    [],
    []
  ],
  
  moveDisc: function(startPeg, endPeg) {
    //adjusts parameters so they can act on the correct index
    startPeg -= 1;
    endPeg -= 1; 
    
    var board = this.board; 
    var start = board[startPeg]; //board[0] (peg 1) for move 1
    var end = board[endPeg]; //board[1] (peg 3) for move 1
  
    //logic to moveDisc based on legal vs illegal moves
    if(end.length === 0 || start[start.length-1] < end[end.length-1]) {

      end.push(start.pop());
      printBoard(board);

      //checks for winner after each move
      checkWinner(); 

    } else {
      console.log('That move is not allowed! Try again.');
    };

  }
};

//prints board to console horizontally
var printBoard = function(b) {
  var gameBoard = b.map(function (pegs) {
    return console.log('--- ' + pegs.join(' '));  
  });

  console.log('_____________');
  
  return gameBoard; 
};

//checks winning condition and resets board if met
var checkWinner = function() {
  var board = towersOfHanoi['board'];
  var win = board.find(function() {
    return board[1].length === 5 || board[2].length === 5
  });

  if(win) {
    console.log('You won! Play again?')
    reset();
  };
};

//resets board to starting position
var reset = function () {
  towersOfHanoi['board'] = [
    ['5', '4', '3', '2', '1'],
     [],
     []
  ];
  var resetBoard = towersOfHanoi['board'];
  
  return printBoard(resetBoard);
};

/*
//play
reset(); //startingBoard
//moves to win
towersOfHanoi.moveDisc(1,2);//1
towersOfHanoi.moveDisc(1,3);//2
towersOfHanoi.moveDisc(2,3);//3
towersOfHanoi.moveDisc(1,2);//4
towersOfHanoi.moveDisc(3,1);//5
towersOfHanoi.moveDisc(3,2);//6
towersOfHanoi.moveDisc(1,2);//7
towersOfHanoi.moveDisc(1,3);//8
towersOfHanoi.moveDisc(2,3);//9
towersOfHanoi.moveDisc(2,1);//10
towersOfHanoi.moveDisc(3,1);//11
towersOfHanoi.moveDisc(2,3);//12
towersOfHanoi.moveDisc(1,2);//13
towersOfHanoi.moveDisc(1,3); //14
towersOfHanoi.moveDisc(2,3);//15
towersOfHanoi.moveDisc(1,2);//16
towersOfHanoi.moveDisc(3,1);//17
towersOfHanoi.moveDisc(3,2);//18           
towersOfHanoi.moveDisc(1,2);//19
towersOfHanoi.moveDisc(3,1);//20
towersOfHanoi.moveDisc(2,3); //21
towersOfHanoi.moveDisc(2,1); //22
towersOfHanoi.moveDisc(3,1); //23
towersOfHanoi.moveDisc(3,2);//24
towersOfHanoi.moveDisc(1,2); //25
towersOfHanoi.moveDisc(1,3); //26
towersOfHanoi.moveDisc(2,3);//27
towersOfHanoi.moveDisc(1,2); //28
towersOfHanoi.moveDisc(3,1); //29
towersOfHanoi.moveDisc(3,2); //30
towersOfHanoi.moveDisc(1,2); //31 solution
*/ 







  
 

