//function to create game object - module design pattern
var Game = function(){
  //private attributes
  var board = [[3, 2, 1],[],[]]; //starting array configuration, accessible to functions w/i game object
  var counter = 0; //increments with each successful moveDisc
  var indexArray = []; //location to store valid peg moves, will be updated with each checkPeg call and accessed in moveDisc

  //game display messages
  var successMessage = "The move was successful.  Board is now "
  var failedMessage = "You cannot move a larger disc on top of a smaller one.  Board is still"
  var emptyPegMessage = "There are no discs on this peg.  Try again."
  var invalidPegMessage ="You entered an invalid peg. The board is still: "

//private functions
//start displayBoard function, only accessible via moveDisc
  var displayBoard = function(){
    board.map(function(item){
      console.log("--- " + item.join(" ")); //displays board to console after each move
    });
};
//end displayBoard

//start of checkPeg function, only accessible via moveDisc
  var checkPeg = function(startPeg){
    board.filter(function(item){
      if (item.length === 0 || parseInt(item[item.length-1]) > parseInt(board[startPeg][board[startPeg].length-1])){
        indexArray.push(board.indexOf(item));
      };
    });  return indexArray; //return indexArray to be available to moveDisc function
  };
//end checkPeg

//start checkWinner function, only available via moveDisc
var checkWinner = function(){
  //iterate through board array using map
    board.map(function(item){
      var sumArray = item.reduce(function(sum, currentItem){ //use reduce to keep track of sum of each array
        return parseInt(sum + currentItem);
      }, []);
      if(sumArray === 6){ //winning threshold would be a sum of 6
        console.log("You've won in " + counter + " moves!");
      };
    });
};
//end checkWinner

//start moveDisc function, only function that needs to be directly accessed by instances of game objects
var moveDisc = function(startPeg, destinationPeg){
    //update startPeg and destinationPeg values to account for arrays being indexed at 0
    startPeg = startPeg -1;
    destinationPeg = destinationPeg - 1;
    //account for invalid user input(enter a peg number greater than number of pegs or enter a negative number)
		if(startPeg >= board.length || startPeg < 0 || destinationPeg >= board.length || destinationPeg < 0){
     console.log(invalidPegMessage);//let user know what happened by logging invalid message
     return displayBoard();//remind user what current board is
    }
    //call checkPeg function
    checkPeg(startPeg);
    var found = indexArray.some(function(peg){ //iterate through indexArray updated in checkPeg, returns true if destination peg is found in indexArray
      return peg === destinationPeg;
    });
    //checks are made, start moving disc
    if(board[startPeg].length === 0){ //if user entered a peg that didn't have a disc
      console.log(emptyPegMessage);
      displayBoard();
    } else if(!found){ //if user entered a destination peg that wasn't found in indexArray (of valid peg moves)
        console.log(failedMessage);
    } else { //otherwise make the requested move
        var discToMove = board[startPeg].pop(); //isolate last item in the array at the index of the startPeg
        board[destinationPeg].push(discToMove); //add that item to the end of the array at the index of the destinationPeg
        console.log(successMessage); //user message
        displayBoard(); //display updated board
        counter++; //increment counter to track number of moves
        checkWinner(); //check if the move resulted in a winning status
    };
  };

  return{ //moveDisc only way to access other portions of game
    moveDisc: moveDisc,
  };
};

//testing
var newGame = Game();
newGame.moveDisc(1,4);
newGame.moveDisc(1,3);
newGame.moveDisc(1,2);
newGame.moveDisc(3,2);
newGame.moveDisc(1,3);
newGame.moveDisc(2,1);
newGame.moveDisc(2,3);
newGame.moveDisc(1,3);
