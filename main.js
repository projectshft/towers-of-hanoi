//Paul's Tic-Tac-Toe
//This file must be executed by node.js to properly accept user input
//ex: "node main.js"

//import lodash
//Note: I wanted to use lodash to do a shallow clone but I think using the map function is all I need
//Didn't get this to work, so I've turned it off to eliminate the dependency
//node.js needs lodash installed:  npm install lodash --save
// var _ = require('lodash');

//define the basic 2D board array
//why did i use strings?
const board = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

//what about separate simple arrays for each row?
//might be easier to work with
const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];

//Ultimately the arrays/rows were too clunky to work with
//I think I should've made an object with a key for each board location and an empty property
//The empty property could've been updated with which player took that spot, ie, "5: X"

//create a player object
const Player = function (name) {
  return {
    name: name
  }
}

//create a move Object
//Ended up not using this but each move could have its own object?  Not needed if I used object for the board.
// const Move = function (moveNumber) {
//   return {
//     moveNumber: moveNumber
//   }
// }

//this function will convert and console log the board array to the desired output style using methods and RegEx
//call this during the game to show the current board
function boardDisplay(array) {
  console.log("Here's the current board:")
  console.log(array.join("\n").replace(/,/g, ""));
  console.log("");
}

//define game functions
//this makes a new player using the Player class
function createPlayer(number, callback){
  console.clear();
  rl.question("Welcome, player " + number + ", enter your name: \n", function(answer) {
    var player = new Player(answer);
      callback(player);
  });
}

//this makes a new object for each move
//i think this was the wrong way to go
function makeMove(number, callback){
console.clear();
  boardDisplay(board);
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

//My ultimate goal would be to make this work without mutating anything.  Ideally using map so there's no need for lodash?
