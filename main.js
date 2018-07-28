//Paul's Tic-Tac-Toe!
//This file must be executed by node.js to properly accept user input
//ex: "node main.js"
//node.js needs lodash installed:  npm install lodash --save
//maybe i don't need lodash?

//import lodash
var _ = require('lodash');

//define the basic 2D board array
var board = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

//this function will convert and console log the board array to the desired output style using methods and RegEx
function boardDisplay(array) {
  console.log("Here's the current board:")
  console.log(array.join("\n").replace(/,/g, ""));
  console.log("");
}

//create a player object
const Player = function (name) {
  return {
    name: name
  }
}

//create a move Object
const Move = function (moveNumber) {
  return {
    moveNumber: moveNumber
  }
}

//the next section runs with readline (requiring node.js) to accept user input:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

//define game functions
function createPlayer(number, callback){
  console.clear();
  rl.question("Welcome, player " + number + ", enter your name: \n", function(answer) {
    var player = new Player(answer);
      callback(player);
  });
}

function makeMove(number, callback){
console.clear();
  boardDisplay(board);
  rl.question("Player " + number + ", make your move: \n", function(answer) {
    var moving = new Move(answer);
    callback(moving);
  });
}
//
// function game(moveNumber, callback){
//   boardDisplay(board);
//   rl.question("Take turns making moves by entering a move number: \n", function(answer) {
//     var move = new Move(answer);
//     callback(move);
//   })
// }

function moveAction(position){
  var updatedBoard = _.clone(board);
    for (position in updatedBoard) {
      for (i=0; i<10; i++) {
        if (updatedBoard[i] === position) {
          updatedBoard.replace([i]);
      }
    }
  }
}

//The game
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

//now: figure out how to clone the array and change the index number selected to the player's letter.
//does all of this happen inside of this readline section? yes it does i think -- nothing seems to work after rl.close()
//can i use a factory function or something to eliminate duplicate move vars?
