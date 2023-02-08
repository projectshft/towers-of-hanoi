//make playable in browser console [check]
//2d array for board [check]
//How to win the game: move set of discs from one peg to another
//checkwinner function [check]
//moveDisc function [check]
//maintain state of board object [check]
//game reset after it is won [check]
//no for/while loops bonus [check]
var board = [[5, 4, 3, 2, 1],[],[]]
 console.log('Call the moveDisc() function and enter 2 numbers between 1 and 3 as it\'s arguments')


var startingPeg = board[0];
var peg2 = board[1];
var peg3 = board[2];
var gameWon = false;

var boardState = {
  update: function(){
    console.log('Board status: ')
    setup(board)
  },
  unchanged: function(){
    console.log('You cannot move a larger disc on top of a smaller one, board is still ')
    setup(board)
  }
}

var gameReset = function (){
  console.log('Game will reset in 5 seconds')
  setTimeout(() => {
    location.reload();
    console.log('Board has been reset');
  }, 5000)
}

var checkWinner = function(){
  if(peg2.length === 5 || peg3.length === 5){
    console.log('You won the game!')
    gameWon = true;
    if(gameWon = true){
      gameReset();
    }
  } 
}

var setup = function(array){
  array.map(function(arr){
    console.log(arr)
  })
}

var moveDisc = function (x, y) {
  x -=1;
  y -=1;
  var lastElement = board[x][board[x].length-1];
  var currentElement = board[y][board[y].length-1];
  console.log('lastelement', lastElement);
  if(board[y].length === 0){
    board[y].push(board[x].pop());
    console.log('Successful move!')
    boardState.update()
    checkWinner();
   } else if(lastElement<currentElement){
    board[y].push(board[x].pop());
    console.log('Nice move!')
    boardState.update()
    checkWinner();
   } else {
    boardState.unchanged()
   }
}

boardState.update()

const solution = [];//need recursion for this so prioritize LAST!
//Then store moves into an array called 'solution', or 'moves' and have the button click iterate(helper method?) through those moves
