var board = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];
var player1Array = new Array ();
var player2Array = new Array ();
var move = 0;
var winningConditions = [[1, 2, 3],
                         [4, 5, 6],
                         [7, 8, 9],
                         [1, 4, 7],
                         [2, 5, 8],
                         [3, 6, 9],
                         [1, 5, 9],
                         [3, 5, 7]];

function printBoard(){
  for(i=0; i < board.length; i++) {
    console.log(board[i] + "\n");
  }
}

function isNumber(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function markBoard(position, mark) {
    board[position] = mark.splice(0,1, player1 || player2);
    console.log(board);
}


function clearBoard(){
  move = 0;
  player1Array = new Array();
  player2Array = new Array():
}

function nextMove (){
    var move = 0
    if (move = 0) {
      console.log("Game start. Player 1 make a move");
      this.printBoard();
}
    else if (move % 2 === 0) {
        player1 = "X";
        move++;
}
    else {
        player2 = "O";
        move++;
      }
}

function checkWinner(player) {
    for (var j = 0; j < winCombinations.length; j++) {
        var markCount = 0;
        for (var k = 0; k < winCombinations[j].length; k++) {
            if (board[winCombinations[j][k]] === player1Array || player2Array) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false ;
}

function winAlert (player){
  if(checkWinner() === true){
    alert("congrats!");

  }
}

function checkDraw (){
  if(player1Array.length + player2Array.length == 9){
    console.log('Tie! Start over!');
    clearBoard();
  }
}
