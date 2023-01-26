//Requirements: 
//We will need a board and will tilize a 2D array

//Must utilize a map function at least once to accomplish this part of the assignment.  The starting board will log the 2D array to the console like:

// --- 5 4 3 2 1
// ---
// ---

//There should be an object maintaining the state of the board
//There shoul be a way to move discs form one peg to another
//There should be a behckWinner function that checks to see if the player has won the game(disc in original order but on different peg)
//once game is won the game should automatically end by announcing the winner(though console.log) and reset for a new game
//BONUS:  any tiem you iterate through the array, try and refrain from using for or while loops - try using helper methods

// var line1 = ['-', '-', '-', 5, 4, 3, 2, 1];
// var line2 = ['-', '-', '-'];
// var line3 = ['-', '-', '-'];

// console.log(line1, line2, line3);

// var gameBoard = [
//   { title: "---", five: 5, four: 4, three: 3, two: 2, one: 1},
//   { title: "---", five: number, four: number, three: number, two: number, one: number },
//   { title: "---", five: number, four: number, three: number, two: number, one: number},
  
// ];

// console.log(map.gameBoard())

// var gameBoard2 = [
//   {  line: [5, 4, 3, 2, 1]},
//   {  line: new Array(5)},
//   {  line: new Array(5)},
  
// ];

// // var officialBoard = gameBoard2.map(function (key) {
// //   console.table(key.title && key.line);

// var mapped = gameBoard2.map(function(select) {
//  return select.line;
// });

//I need 3 array
var line1 = [5, 4, 3, 2, 1];
var line2 = new Array();
var line3 = new Array();

var board = [line1, line2, line3];

// var game = board.map(function (array) {
//   return array;
// });

console.table(board);
// console.table(game[0]);

// var moveFunction = function(array, index, )

// game[1].push(game[0].pop(1));

//when mod args that are sent insdie func you can have uninted side effect could change board
//arr and obj are pass by reference

function arrMove(arr, oldIndex, newIndex) {
  var newBoard = arr.map( function (someVar){
    return someVar.map(function(arr2) {
      return arr2;
    });
  });

  newBoard[newIndex].push(newBoard[oldIndex].pop(1));

  board  = newBoard;
};

//To add function for win


//To add func to resetBoard Helpful to have gameboard and original board arrMov

arrMove(board, 0, 1)
arrMove(board, 0, 1)
console.table(board);


//need to create a way to move numbers from one index to the other without putting a larger number on top of a smaller one


//I need a function to check winner and reset game 