
//get some game pieces
const discs = [
  { name: "Disc 1", value: 1  },
  { name: "Disc 2", value: 2  },
  { name: "Disc 3", value: 3  },
];


//3 pegs for discs
let gameBoard = {
  peg1:[discs[2],discs[1],discs[0]],
  peg2:[ , , ],
  peg3:[ , , ]
};


// There should be a function checkWinner that checks to see if the player has won the game.
// You win the game by putting all the discs back in the original order but on a new peg. As a part of this function,
// you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only
// 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

const checkWinner = gameBoard.reduce(function (peg, n){
  let gameMoves = 0
  if (disc.value < a){
    console.log("Can't do that!");
  } else if (disc.value > a){
    gameMoves+=
    gameBoard.pop(peg1, disc[n])
    gameBoard.push(peg2, disc[n])
    return;
  }

});

// my brain hurts

console.log(checkWinner(1,0));
