//defining the players and board//

let player1 = {
          firstName: 'firstPlayer',
          character: 'x'
      };
let player2 = {
            firstName: 'secondPlayer',
            character: 'o'
};

var board = [['1','2','3'], ['4','5','6'], ['7','8','9']];

var printBoard = function () {
          for(var i = 0; i < board.length; i++) {
            console.log(board[i].join(' | '));
          }
  };
//var row1 = board[0];
//var row2 = board[1];
//var row3 = board[2];
printBoard();
player1.firstName = prompt('Player 1, Please type name');
player2.firstName = prompt('Player 2, type name');
//need to get input from players?//
player1 = prompt('Player 1, Enter Number');


                      //Building the board//
var printBoard = function () {
          for(var i = 0; i < board.length; i++) {
            console.log(board[i].join(' | '));
          }
  };

printBoard();

console.log(player1.firstName);
console.log(player2.firstName);

var winCombinations = [
                      [1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9],
                      [1, 4, 7],
                      [2, 5, 8],
                      [3, 6, 9],
                      [7, 5, 3],
                      [1, 5, 9]];

var mark = function (player, input) {
          for(var i = 0; i < board.length; i++) {
              for(var j = 0; j < board[i].length; j++)
              if(board[i][j] == input)
              board[i][j] = player.character;
      }
};

mark(player1, '5');
//Each player would need to invoke function with their player1/2 and the spot they wanted to choose by number in second paremeter.//

printBoard();

var testInput = function(position, letter) {
        // If it's an invalid number
        if (position > 9) {
            console.log('Please enter a number between 1 and 9');
            return;
        // If it's already taken
        } else if (placement[position] !== ' ') {
            console.log('That position is taken!');
            return;
        }
        // Accept upper and lower case
        if (letter === 'x' || letter === 'X') {
            placement[position] = 'X';
        } else if (letter === 'o' || letter === 'O') {
            placement[position] = 'O';
        // Handle unexpected inputs
        } else {
            console.log('Please enter a valid letter! (X or O)');
        }
    }

//function addUserInput (player) {


/* Not sure how to get this to work

function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}
*/
//var gamers = function (players) {


//addUserInput(player1);
