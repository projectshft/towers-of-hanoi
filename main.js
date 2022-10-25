function NewGameToH(pegs, disks) {
  function getNumberOfPegs() {
    console.log(this.pegs);
    return this.pegs;
  }

  function getNumberOfDisks() {
    console.log(this.disks);
    return this.disks;
  }

  let gameboard;
  function createFreshBoard() {
    let startingArray = [];
    for (let i = disks; i > 0; i--) {
      startingArray.push(i);
    }
    gameboard = [startingArray];
    for (let i = 1; i < pegs; i++) {
      gameboard.push([]);
    }
    console.log(gameboard);
  }

  let totalMoves;
  function startGame() {
    console.log("Welcome to the Towers of Hanoi!");
    console.log("The rules of the game are simple: ");
    console.log("   1. You can only move one disk at a time.");
    console.log(
      "   2. Disks must be smallest on the bottom, largest on the top. ie you cannot put larger disks on top of smaller ones."
    );
    console.log(
      "   3. The goal of the game is to move the tower, one disk at a time, from one peg to another."
    );
    console.log("LET THE GAMES BEGIN");

    createFreshBoard();
    displayBoard();
    totalMoves = 0;

    console.log(
      `The name of your game is 'g1'. Move disks by typing g1.move(from, to).`
    );
    console.log(
      "   'from' represents the peg you are moving from, and 'to' represents the peg you are moving to."
    );
    console.log(
      "    Disks are denoted by numbers. Larger numbers represent larger disks."
    );
  }

  function displayBoard() {
    gameboard.forEach((peg) => {
      let outputStr = "----- ";
      peg.forEach((disk) => {
        outputStr += disk + " ";
      });
      console.log(outputStr);
      console.log(""); //so that the console does not group outputs
    });
  }

  function isMoveValid(from, to) {
    if (from === to) {
      console.log("INVALID MOVE :(");
      console.log("You must move from one disk to another");
      console.log("Make sure you only put smaller disks on top of larger ones");
      return false;
    }

    if (
      gameboard[from].length !== 0 && //if peg that is being moved from has disks and
      gameboard[to].length === 0
    ) {
      //the peg we are moving to has no disk its valid
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
      return true;
    } else {
      console.log("INVALID MOVE :(");
      console.log("You can only put smaller disks on to larger disks");
      return false;
    }
  }

  function resetBoard() {
    let playAgain = prompt('Would you like to play again? \n "Y" or "N"');
    if (
      playAgain === "Y" ||
      playAgain === "y" ||
      playAgain === "Yes" ||
      playAgain === "yes"
    ) {
      startGame();
      console.log("The gameboard has been reset");
    } else {
      console.log("Thanks for playing!");
    }
  }

  function checkWinner() {
    let winner = null;
    let firstPegEmpty = gameboard[0].length === 0;

    if (firstPegEmpty) {
      winner = gameboard.some((peg) => {
        return peg.length === disks;
      });
    }

    return winner;
  }

  function updateBoard(from, to) {
    let diskMoved = gameboard[from].pop();
    gameboard[to].push(diskMoved);
  }

  function moveDisk(from, to) {
    totalMoves++;
    console.log("Total Moves: " + totalMoves);
    if (isMoveValid(from - 1, to - 1)) {
      updateBoard(from - 1, to - 1);
    } else {
      displayBoard();
    }

    if (checkWinner()) {
      console.log("Winner, winner, chicken dinner!");
      resetBoard();
    } else {
      console.log("Please make another move.");
      displayBoard();
    }
  }

  startGame();

  return {
    getNumberOfDisks: getNumberOfDisks,
    getNumberOfPegs: getNumberOfPegs,
    moveDisk: moveDisk,
  };
}

let TowersGame = function (pegs, disks) {
  this.pegs = pegs;
  this.disks = disks;
  this.gameboard = this.createFreshBoard(pegs, disks);
  this.startGame(this.createFreshBoard, this.displayBoard);
};

TowersGame.prototype.createFreshBoard = function (pegs, disks) {
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
  let pegNum = 1;
  gameboard.forEach((peg) => {

    let outputStr = pegNum + "----- ";
    pegNum++;
    peg.forEach((disk) => {
      outputStr += disk + " ";
    });
    console.log(outputStr, "\n");
    // console.log(""); //so that the console does not group outputs
  });
};

TowersGame.prototype.startGame = function (createFreshBoard, displayBoard) {
  console.log("Welcome to the Towers of Hanoi!");
  console.log("The rules of the game are simple: ");
  console.log("   1. You can only move one disk at a time.");
  console.log(
    "   2. Disks must be smallest on the bottom, largest on the top. ie you cannot put larger disks on top of smaller ones."
  );
  console.log(
    "   3. The goal of the game is to move the tower, one disk at a time, from one peg to another."
  );
  console.log("LET THE GAMES BEGIN");

  createFreshBoard(this.pegs, this.disks);
  displayBoard(this.gameboard);
  totalMoves = 0;

  console.log(
    `The name of your game is 'g1'. Move disks by typing g1.move(from, to).`
  );
  console.log(
    "   'from' represents the peg you are moving from, and 'to' represents the peg you are moving to."
  );
  console.log(
    "    Disks are denoted by numbers. Larger numbers represent larger disks."
  );
};

TowersGame.prototype.isMoveValid = function (from, to, gameboard) {
  if (from === to) {
    console.log("INVALID MOVE :(");
    console.log("You must move from one disk to another");
    console.log("Make sure you only put smaller disks on top of larger ones");
    return false;
  }

  if (
    gameboard[from].length !== 0 && //if peg that is being moved from has disks and
    gameboard[to].length === 0
  ) {
    //the peg we are moving to has no disk its valid
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
    return true;
  } else {
    console.log("INVALID MOVE :(");
    console.log("You can only put smaller disks on to larger disks");
    return false;
  }
};

TowersGame.prototype.updateBoard = function (from, to, gameboard) {
  let diskMoved = gameboard[from].pop();
  gameboard[to].push(diskMoved);
};

TowersGame.prototype.checkWinner = function (gameboard, disks) {
  let winner = null;
  let firstPegEmpty = gameboard[0].length === 0;
  console.log(firstPegEmpty);

  if (firstPegEmpty) {
    winner = gameboard.some((peg) => {
      return peg.length === disks;
    });
  }
  console.log("Is winner? " + winner);
  return winner;
};

TowersGame.prototype.moveDisk = function (from, to) {
  totalMoves++;
  console.log("Total Moves: " + totalMoves);
  if (this.isMoveValid(from - 1, to - 1, this.gameboard)) {
    this.updateBoard(from - 1, to - 1, this.gameboard);
  } else {
    this.displayBoard(this.gameboard);
  }

  if (this.checkWinner(this.gameboard, this.disks)) {
    console.log("Winner, winner, chicken dinner!");
    this.resetBoard();
  } else {
    console.log("Please make another move.");
    this.displayBoard(this.gameboard);
  }
};

let gameObj = new TowersGame(3, 3);
