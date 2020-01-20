//towersOfHanoi is an object that contains my board (an array of arrays),
// and all my functions in addition to my counters.
const towersOfHanoi = {
  // log the number of player moves
  movesCount: movesCount = 1,
  // create an initialize function for resetting the game
  initializeBoard: initializeBoard = function(){
    //resets the board by returning the original board
    return [[3, 2, 1],
      [],
      []
    ]
    //resets moves 1 for counter
    this.movesCount = 1;
  },
//the board
  board: [[3, 2, 1],
    [],
    []
  ],
  //a function that prints a copy of the board with the pegs
  printBoard: function(){
     //uses map function to create a new array
     this.board.map(function(element){
       //console logs the pegs with the map function
       console.log('--- ' + element);
       //to seperate for readibility
       console.log(' ');
     });
   },
   //moveDisc function moves the topDiscOnStartPeg from startPeg to an endPeg if the
   //endPeg is empty or topDiscOnEndPeg is the correct size
 moveDisc: moveDisc = function (startPeg, endPeg) {
   //below represents the last peg in the start position
  const topDiscOnStartPeg = this.board[startPeg-1][this.board[startPeg-1].length-1];
      console.log(topDiscOnStartPeg + ' = topDiscOnStartPeg');
  //defines the topDiscOnEndPeg as a number for comparison
  const topDiscOnEndPeg = this.board[endPeg-1][this.board[endPeg-1].length-1];
      console.log(topDiscOnEndPeg + ' = topDiscOnEndPeg');
    //checks if a disc at endPeg (if it's empty) & if (topDiscOnStartPeg < topDiscOnEndPeg)
  if (!([endPeg-1].length === 0) && (topDiscOnStartPeg > topDiscOnEndPeg) ){
        // return the original array before you moved it
      console.log('you have made an illegal move!')
      //if the move is allowed it will occur as outlined below
  } else {
    // this removes the last value on startPeg or topDiscOnStartPeg
  this.board[startPeg-1].pop(topDiscOnStartPeg);
    // this pushes that topDiscOnStartPeg to the endPeg if the conditions(empty array or biggerDisc) are met
  this.board[endPeg-1].push(topDiscOnStartPeg)
};
  //logs the number of moves
    console.log('you have made ' + this.movesCount++ +' move(s).');
},
//in order to use filter and check for myDisc the pegs are put it in array (for 4 o 5 add more);
//** i know it's hard coded but I couldn't figure out how else to properly use the filter function
  suitablePeg: suitablePeg = function (){
    //the suitablePeg function usese the filter method to return an object showing available peg
    let suitablePegObjectInArray = [
      { pegName: 1, index:0, length: this.board[0].length, topDisc: this.board[0][this.board[0].length-1] },
      { pegName: 2, index:1, length: this.board[1].length, topDisc: this.board[1][this.board[1].length-1] },
      { pegName: 3, index:2, length: this.board[2].length, topDisc: this.board[2][this.board[2].length-1] }
    ];
  //the suitablePeg filter function returns the Pegs that suitable in the form of an object
  const suitablePegFilterFunction = suitablePegObjectInArray.filter(function(peg){
    return  peg.length===0 || peg.topDisc > this.myDisc;
  });
  //logs the suitable pegs object when you invoke the suitablePeg function.
  console.log (suitablePegFilterFunction)},
  //userInput for what disc they want to put in the suitable Peg function
  myDisc: 2, //userInput; try for all 3 values;
//this function uses the reduce function twice to log a single array and then a sum
//** I don't think it's doing what it's supposed to but it works
  checkWinner: function () {
    //logs the board once the player has completed to see if they won.
    let winningBoard = this.board; //set reasons [has to be on pegs 2-x] && sum = 6
    //using the reduce method to turn an array of arrays into a single array
    let oneArray = winningBoard.reduce((total, amount) => {
      return total.concat(amount);
    }, []);
    console.log(oneArray);
    // if it looks like on [3,2,1 on peg2 or peg3]
    if(oneArray = [3,2,1]){
        console.log('you have won the game!')
    }
    //using the reduce method to turn arrays into a sum
    let sum = oneArray.reduce((total, amount) => total + amount, 0);
    console.log(sum);
  },

//if the player wins, it should automatically reset the board to its original status
  resetGame: resetGame = function (){
      //this resets the & movesCount board to it's original status
     this.board = this.initializeBoard () ;
     //once the player wins. it should announce it and console.log() & reset the game
  //   // also when the player loses should be able to reset the game
   }
};
