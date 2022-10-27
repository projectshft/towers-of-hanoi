let TowersGame = function (pegs, disks, gameName) {
  //A class function that expects a number of pegs, a number of disks
  //and the name of the variable used to reference the new game.
  //Starts a new game of Towers of Hanoi
  //Play by using the move disk function
  this.pegs = pegs;
  this.disks = disks;
  this.gameName = gameName;
  this.startGame(this.createFreshBoard, this.displayBoard);
};

TowersGame.prototype.createFreshBoard = function (pegs, disks) {
  //creates a board with specified # of pegs and disks.
  //disks are all on the first peg to start
  let gameboard = [];
  let startingArray = [];

  for (let i = disks; i > 0; i--) {
    startingArray.push(i);
  }

  gameboard = [startingArray];
  for (let i = 1; i < pegs; i++) {
    gameboard.push([]);
  }

  return gameboard; //2D array of length === pegs
};

TowersGame.prototype.displayBoard = function (gameboard) {
  //expects a 2D array and logs it in a readable way to the console
  let pegNum = 1;
  gameboard.map((peg) => {
    let outputStr = "Peg" + pegNum + "-- ";
    pegNum++;

    peg.forEach((disk) => {
      outputStr += disk + " ";
    });

    console.log(outputStr);
    return outputStr;
  });
};

TowersGame.prototype.startGame = function (createFreshBoard, displayBoard) {
  //Expects 2 functions:
  //One that creates the board, and another that displays the board.
  console.log("Welcome to the Towers of Hanoi!");
  console.log("The rules of the game are simple: ");
  console.log("   1. You can only move one disk at a time.");
  console.log(
    "   2. Disks must be largest on the bottom, smallest on the top. You cannot put larger disks on top of smaller ones."
  );
  console.log(
    "   3. The goal of the game is to move the tower, one disk at a time, from one peg to another."
  );
  console.log(
    `The name of your game is "${this.gameName}". Move disks by typing "${this.gameName}.move(from, to)".`
  );
  console.log(
    "   'from' represents the peg you are moving from, and 'to' represents the peg you are moving to."
  );
  console.log(
    "    Disks are denoted by numbers. Larger numbers represent larger disks."
  );
  console.log("LET THE GAMES BEGIN");

  this.gameboard = createFreshBoard(this.pegs, this.disks); //sets gameboard to a freshly created board
  displayBoard(this.gameboard); //log the gamebaord
  totalMoves = 0; //starts a counter for toatl moves
};

TowersGame.prototype.isMoveValid = function (from, to, gameboard) {
  //tests whether the disk is being moved to a valid position
  //expects the pegs being moved from and to as well as the current position of the gameboard.
  if (from === to) {
    //cannot move a disk to the same peg
    console.log("INVALID MOVE :(");
    console.log("You must move from one disk to another");
    console.log("Make sure you only put smaller disks on top of larger ones");
    return false;
  }

  if (
    gameboard[from].length !== 0 && //if peg that is being moved from has disks and
    gameboard[to].length === 0 //the peg we are moving to has no disk its automatically valid
  ) {
    return true;
  }

  if (gameboard[from].length === 0) {
    //the peg we are moving from is empty
    console.log("INVALID MOVE :(");
    console.log("The peg you are trying to move from is currently empty.");
    return false;
  }

  let diskFrom = gameboard[from].at(gameboard[from].length - 1);
  let diskTo = gameboard[to].at(gameboard[to].length - 1);
  if (diskFrom < diskTo) {
    //size of disk we are moving is smaller then the disk that is on top of the peg we are moving to
    return true;
  } else {
    console.log("INVALID MOVE :(");
    console.log("You can only put smaller disks on to larger disks");
    return false;
  }
};

TowersGame.prototype.updateBoard = function (from, to, gameboard) {
  //Expects the pegs being moved from and to as well as the current position of the gameboard.
  let diskMoved = gameboard[from].pop();
  gameboard[to].push(diskMoved);
};

TowersGame.prototype.checkWinner = function (gameboard, disks) {
  //Expects a gameboard, and the number of disks used in the game
  //Returns true if the first peg is empty and all the disks are on another peg
  let winner = false;
  let firstPegEmpty = gameboard[0].length === 0;

  if (firstPegEmpty) {
    winner = gameboard.some((peg) => {
      return peg.length === disks;
    });
  }
  return winner;
};

TowersGame.prototype.resetBoard = function () {
  //Prompts the player if they want to play again
  //If they do, another game is started
  let playAgain = prompt('Would you like to play again? \n "Y" or "N"');
  if (
    playAgain === "Y" ||
    playAgain === "y" ||
    playAgain === "Yes" ||
    playAgain === "yes"
  ) {
    this.startGame(this.createFreshBoard, this.displayBoard);
    console.log("The gameboard has been reset");
  } else {
    console.log("Thanks for playing!");
  }
};

TowersGame.prototype.moveDisk = function (from, to) {
  //expects the peg to be moved from and the peg to be moved to.
  totalMoves++;
  console.clear();
  console.log("Total Moves: " + totalMoves);
  if (this.isMoveValid(from - 1, to - 1, this.gameboard)) {
    //check to make sure move is valid and updates board if valid
    this.updateBoard(from - 1, to - 1, this.gameboard);
  }

  if (this.checkWinner(this.gameboard, this.disks)) {//checks for a winner
    console.log("Winner, winner, chicken dinner!");
    this.resetBoard();
  } else {
    console.log("Please make another move.");
    this.displayBoard(this.gameboard);
  }
};

let g = new TowersGame(3, 3, "g"); //starts a new game
