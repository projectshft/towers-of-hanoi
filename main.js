var destinations = [
  [3, 2, 1],//3 is first because the largest value has to be the first to be in the new destination, followed by the next highest value 2
  [],
  []
];

//above is the array for the gameBoard
//there has to be an object that keeps track of the state of the board with player moves
var gameBoard = { //gameBoard is the name of the main object
  destinations, //puts the whole array inside the gameboard object
  count: 0,//should track how many times it took the user to win
  winner: false//result if the input user won the game or not
};
//need to display the board in the console using a .map function to create a whole new array each time it checks for a winner
var printBoard = function(){
  return gameBoard.destinations.map(function(destination, i){
    console.log(printBoard)//console log it to display the result
  })
};

//need to create a function to determine if each move works or not
//have to use the filter method to access the main array
var decider = function(begPeg){
  var openPegs = destinations.filter(function(destination){
    if(destination.length == 0){
      return destination; //big # can't go after smaller number in the 3 inner arrays
    }else if(destination[destination.length -1] > begPeg){
      return destination;
  }
})
return openPegs;
};

//need to create a function that moves the discs to the different destinations
function discMover(beginning, end){//function that moves a disc from one destination to the next
  var {destinations} = gameBoard;//connects the gameboard status to the destinations array to keep trackof moves
  gameBoard.count += 1;//adds one each time the disc moves to a different destination
  var discMoving = destinations[beginning][destinations[beginning].length-1];
  var endDestination = destinations[end];
  checkWinner();//will check to see if the current status already is a winning array
  printBoard();//if it is it should print to the console, if not it would move on to the if statement
  if(endDestination.length == 0){
    destinations[beginning].pop();//disc is leaving where the array it began on
    endDestination.push(discMoving);//disc is being added on to the new array
    checkWinner();//will then run to see if the array is the winning order on a new peg
    printBoard();//will print to the console if it is
  }else if (discMoving > endDestination[endDestination.length-1]){//this will run if the disc move wasn't valid
  return console.log("This move is invalid")//as a result it will return "This move is invalid"
} else {//will try to move the disc again if the previous move was invalid
  destinations[beginning].pop();//the disc will move from where it currently is
  endDestination.push(discMoving);//the disc will be added to one of the other destinations
  checkWinner();//will then run the function to see if the new array is the correct order to win the game
  printBoard();//if it is a new array in the correct disc order then it will print to the console
}
}

//have to create a check winner function that will check the status once the disc mover function runs
//have to use .reduce
//needs to have the same 3, 2, 1 order on a different inner array than the first
function checkWinner(){
  return gameBoard.destinations.reduce(function(totalMoves, destination, index){
    if (destination.length == 3 && index !== 0){//if the new array has the three values and its not the original 0 array
      gameBoard.winner = true; //it will change the winner property from false to true in the gameboard object
      console.log("You did it! You are the winner!")//it should log "You did it! You are the winner as a result"
    };
  }, 0);

};
