// A board representing 3 pegs, with 5 discs on the first peg in ascending order
let towersOfHanoi = [
  [5, 4, 3, 2, 1],
  [], 
  []
];

// Define the contents of each peg
let peg1 = towersOfHanoi[0];
let peg2 = towersOfHanoi[1];
let peg3 = towersOfHanoi[2];

// A function to track the game status
const gameStatus = (game) => {
  let board = game.map((pegs) => console.log("- - - " + pegs.join(" ")));
  return board;
};

// A function to check if the player has won the game. This also calls the gameReset function to reset the board
const checkWinner = () => {
  if (peg2.length === 5 || peg3.length === 5) {
    console.log("You won!");
    gameReset();
    console.log("Play again?");
  }
};

// A function to reset the game
const gameReset = () => {
  towersOfHanoi = [
    [5, 4, 3, 2, 1], 
    [], 
    []
  ];

  peg1 = towersOfHanoi[0];
  peg2 = towersOfHanoi[1];
  peg3 = towersOfHanoi[2];
};

// The game itself
const moveDisc = (peg, newPeg) => {
  let disc;

  // Conditionals
  if (newPeg.length === 0) {
    disc = peg.pop([]);
    newPeg.push(disc);
    console.log("That move was successful. The board is now:");

   } else if (newPeg[newPeg.length - 1] > peg[peg.length - 1]) {
    disc = peg.pop([]);
    newPeg.push(disc);
    console.log("That move was successful. The board is now:");

  } else if (newPeg[newPeg.length - 1] < peg[peg.length - 1]) {
    console.log("You cannot move a larger disc on top of a smaller one. The board is still:");
  }

  // These run every time moveDisc is called
  checkWinner();
  gameStatus(towersOfHanoi);
};

// A fun and informational welcome message
alert(
  "Welcome to Jill's Towers of Hanoi Game!\n \n There are three pegs, in order from left to right: \n peg1, peg2, peg3 \n \n To play, type the following into the console:\n moveDisc(from, to); \n \n Ex:  moveDisc(peg1, peg2);"
);
console.log("Here's the starting board:");
gameStatus(towersOfHanoi);
console.log("Good luck!");
