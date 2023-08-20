var boards = [
  [5, 4, 3, 2, 1],
  [],
  [] 
  
];
//Storing the boards array inside a new variable so when resetGame is invoked, boards is reassinged to its initial state. This variable will create a deep copy of the array.
var initState = JSON.parse(JSON.stringify(boards));


//Changed the printing of the gameboard from foreach to map.
 var gameBoard = function (){
  
  this.boards = boards.map(function(board){
  
     console.log(board);

    return board;
  });
};


 //Added a startGame function that uses a prompt to start the game based on the users input. 
var startGame = function(){
  var gameInit = prompt("Welcome to Towers of Hanoi! In this game you will have three pegs and five rings. The rings will start on the first peg and your objective is to move all five rings to another peg. You can't place larger rings on to smaller rings which makes this more challenging. To play the game you will need to invoke the moveRing function for each move inside the console. Please type yes or no if you are ready to play to start the game. (Please do not refresh the console while playing or you will lose all progress)")
  
  gameInit = gameInit.toLowerCase();
  if (gameInit === 'yes'){
    
    console.log("Awesome, lets get started. Make your first move!")
    gameBoard();
  };

  if (gameInit === 'no'){
    console.log("See you next time!")
  };

}
startGame();
 
// Invoking the checkWinner function inside of the moveRing function to log if the game has been won after every move. Subtracting one from user input to make use friendly
var moveRing = function(current, target){
  
  var current = current - 1;
  var target = target - 1;
  
  var currentPeg = boards[current];
  var targetPeg = boards[target];

  if (currentPeg.length === 0){
    console.log("Invalid move, no rings on peg. The board is still:");
    gameBoard();
    return;
  };

  var movingRing = currentPeg[currentPeg.length - 1];

  if (targetPeg.length === 0 || movingRing < targetPeg[targetPeg.length - 1]){
    targetPeg.push(currentPeg.pop());
    console.log("Successful move, the board is now:")
  
  } else {
    console.log("Larger Rings can't be placed onto smaller rings, the board is still:")
  };

  gameBoard();
  checkWinner();
};


var checkWinner = function(){
 
if( boards[1].length === 5 || boards[2].length === 5){
 console.log("Game Over, you win!")

var userInput = prompt("Would you like to play again?");

userInput = userInput.toLowerCase();
};
 
if (userInput === 'yes'){
  resetGame();
};

if (userInput === 'no'){
  console.log("Thanks for playing! See you next time!")
};

return checkWinner;
};
  


var resetGame = function (){
var confirm = prompt("Are you sure you want to reset your progress?")

confirm = confirm.toLowerCase();

if (confirm === 'yes'){
  boards = JSON.parse(JSON.stringify(initState))
console.log("Your progress has been reset, let's play!")
gameBoard();
};

if (confirm === 'no'){
  console.log("Awesome, let's keep playing!")
  gameBoard();
};

};



checkWinner();