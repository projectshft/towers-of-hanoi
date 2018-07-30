//Paul's Tic-Tac-Toe
//This file must be executed by node.js to properly accept user input
//ex: "node main.js"

//define an immutable object for the board
//this replaced 2d array -- easier to manipulate
const boardObject = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

//convert from object to array to string
var boardObjectPropArray = Object.values(boardObject);
var boardArray = boardObjectPropArray.join('');

//create mutable board object and arrays, used for the actual game
let mutableBoard = boardObject;
var mutableBoardObjectPropArray = Object.values(mutableBoard);
var mutableBoardArray = mutableBoardObjectPropArray.join('');

//create a player object... (...but why?)
const Player = function (name) {
  return {
    name: name
  }
}

//this function will take an array convert and console log the board object to the desired output style using methods and RegEx
//call this during the game to show the current board
function boardDisplay(array) {
  console.clear();
  console.log("Here's the current board:")
  console.log(array.slice(0,3));
  console.log(array.slice(3,6));
  console.log(array.slice(6,9));
};

//define game functions
//this makes a new player using the Player class
//it's kind of pointless right now but ultimately would help determine moves and who wins?
function createPlayer(number, callback){
  console.clear();
  rl.question("Welcome, player " + number + ", enter your name: \n", function(answer) {
    var player = new Player(answer);
      callback(player);
  });
}

//this makes a new object for each move
//i think this was the wrong way to go - i should be updating the properties in mutableBoard and then displaying it
function makeMove(number, callback){
console.clear();
  boardDisplay(mutableBoardArray);
  rl.question("Player " + number + ", make your move: \n", function(answer) {
    var move = (answer);
    callback(number);
    // moveAction(moving);
  });
}

//variation of makeMove
// function game(moveNumber, callback){
//   boardDisplay(board);
//   rl.question("Take turns making moves by entering a move number: \n", function(answer) {
//     var move = (answer);
//     callback(move);
//   })
// }

function moveAction(move){
  // var updatedBoard = _.clone(board); //Turned this off to eliminate lodash dependency
    for (move in board) {
      for (i=0; i<10; i++) {
        if (board[i] === move) {
          board.replace([i], "O");
      }
    }
  }
}

//the next section invokes readline (requiring node.js) to accept user input:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

//The game, referencing functions above
//So this requires a line for basically each turn -- the nested functions would get out of control if I kept going like this
//I would need to make it more reliant on just calling functions and iterating through the moves using a counter of some kind
//For now I stopped at two turns
createPlayer(1, function(player1){
  createPlayer(2, function(player2){
    console.log("Okay " + player1.name + ", you're X and take the odd moves.\n");
      console.log("And " + player2.name + ", you're O and take the even moves.\n");
        makeMove(1, function(move1){
          makeMove(2, function(move2){
          });
      });
  });
});

//From here:
//I hit a wall on taking the user input via readline and turning that into a move
//Did not get to defining win conditions or checking for them
//Need to take in a move position and have that update the mutableBoard properties

//My ultimate goal would be to make this work without mutating anything.  Ideally using map so there's no need for lodash?
