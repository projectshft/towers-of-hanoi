// //original start to project 
// //First of all it will need a board. We'll utilize a 2D array to do this:
let array = [
  [5, 4, 3, 2, 1],
  [],
  []
  ];

// // transform arrays to object
function fromArrToObj(array) {
  var board = {};
 
 for (var i = 0; i < array.length; i++) {
   const element = array[i];

   element[0];
   element[1];

   board[element[0]] = element[1];
 }
 return board;
 }

// // set up format for peg display
let gameBoard; 

// //define # of discs on each peg

const Peg = class {
  constructor(length) {
    this.length = length;
  }
};

let peg1 = new Peg(5);
let peg2 = new Peg(5);
let peg3 = new Peg(5);


// // redefine starting position for each peg 
gameBoard = [
  peg1 = [5, 4, 3, 2, 1],
  peg2 = [],
  peg3 = [],
  ];
 
  

// // // assign peg name to each object key 
gameBoard['peg1'] = gameBoard['0'];
gameBoard['peg2'] = gameBoard['1'];
gameBoard['peg3'] = gameBoard['2'];
delete gameBoard['0'];
delete gameBoard['1'];
delete gameBoard['2'];

let getPlayerChoice = function (fromPeg, toPeg) {
  if (toPeg.length ===0 || toPeg.length-1 > fromPeg.length-1) {
     toPeg.push(fromPeg.pop()), console.log("Good move! Board is now:") 
     console.log(`--- ${peg1.join(' ')}`);
     console.log(`--- ${peg2.join(' ')}`);
     console.log(`--- ${peg3.join(' ')}`);
 } else if (fromPeg.length === 0 || toPeg.length-1 < fromPeg.length-1 || toPeg === fromPeg) {
     console.log("Move cannot be made. Try again");
 }
 return gameBoard
  };
     
getPlayerChoice(peg1, peg3);

let playGame = function(getPlayerChoice) {
  return gameBoard;

}
console.log(playGame(getPlayerChoice));


 












// const checkWinner = function () {
//   if gameBoard = peg2[5,4,3,2,1] || peg3[5,4,3,2,1] {
//     console.log("You won the game!");
//   }
// }


 
