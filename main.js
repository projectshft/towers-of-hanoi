//// TOWERS OF HANOI - MODULE 1 PROJECT ////

/// 1: Game Board Initilization ///
  var TowersOfHanoi = {
    GameBoard: [
      [5, 4, 3, 2, 1], // PEG 1 //
      [],              // PEG 2 //
      []               // PEG 3 //
    ]
  }

/// 1.5: Game Instructions ///
  TowersOfHanoi.ShowInstructions = function () {
    alert("Welcome to Towers of Hanoi!\n\nInstructions:\n- Move all discs from Peg 1 to either Peg 2 or Peg 3.\n- You can only move one disc at a time.\n- A larger disc cannot be placed on top of a smaller disc.\n- Use TowersOfHanoi.MoveDisc(fromPeg, toPeg) to make a move.\n\nExample: TowersOfHanoi.MoveDisc(1, 2) moves a disc from Peg 1 to Peg 2.\n\nGood luck!");
  }
  // Shows Instructions //
    TowersOfHanoi.ShowInstructions();

/// 2: Print Board ///
  TowersOfHanoi.PrintBoard = function () {
    console.clear();
    this.GameBoard.map((peg, index) => console.log(`--- ${index + 1}: ${peg.join(" ")}`));
  } 
  // Prints the Board //
    TowersOfHanoi.PrintBoard();

/// 3: Move Disc ///
  TowersOfHanoi.MoveDisc = function (fromPeg, toPeg) {
    fromPeg -= 1;
    toPeg -= 1;

  // Checks if fromPeg has a disc to move //
    if (this.GameBoard[fromPeg].length === 0) {
      console.log(`Move from Peg ${fromPeg + 1} to Peg ${toPeg + 1} failed: No disc to move.`);
      return;
    }

    let movingDisc = this.GameBoard[fromPeg].slice(-1)[0]; // Gets the top disc //
    let targetDisc = this.GameBoard[toPeg].slice(-1)[0]; // Gets the top disc of the target peg //

  // Checks if the move is valid (larger discs cannot go on smaller discs) //
    if (targetDisc !== undefined && movingDisc > targetDisc) {
      console.log(`Move from Peg ${fromPeg + 1} to Peg ${toPeg + 1} failed: Cannot place a larger disc on a smaller one.`);
      return;
    }

  // Moves the disc //
    this.GameBoard[toPeg].push(this.GameBoard[fromPeg].pop());

  // Prints success message //
    console.log(`Move from Peg ${fromPeg + 1} to Peg ${toPeg + 1} was successful.`);

  // Prints the updated board //
    this.PrintBoard();

  // Checks for win //
    this.CheckWinner();
  }


/// 4: Checks for Win ///
  TowersOfHanoi.CheckWinner = function () {
    let winningState = [5, 4, 3, 2, 1];

  // Checks if a peg matches the winning state //
    function isWinningPeg(peg) {
      return peg.length === winningState.length && peg.every((val, index) => val === winningState[index]);
    }

  // Checks if Peg 2 or Peg 3 matches the winning state //
    if (isWinningPeg(this.GameBoard[1]) || isWinningPeg(this.GameBoard[2])) {
      console.log("You won!");
      alert("You won!");
      console.log("Game will reset now...");

  // Resets the game automatically if won //
    this.ResetGame();
    }
  }

/// 5: Game Reset ///
  TowersOfHanoi.ResetGame = function () {
    console.log('Game reset!');
    this.GameBoard = [
      [5, 4, 3, 2, 1], // Peg 1 //
      [],              // Peg 2 //
      []               // Peg 3 //
    ]
    this.PrintBoard();
  }


/// Commands ///
  // TowersOfHanoi.PrintBoard(); ----> Print the current board state //
  
  // TowersOfHanoi.MoveDisc(fromPeg, toPeg); ----> Move a disc from one peg to another //
    // Example: TowersOfHanoi.MoveDisc(1, 3); //

  // TowersOfHanoi.CheckWinner(); ----> Checks if the user has won //

  // TowersOfHanoi.ResetGame(); ----> Resets the game //

  // TowersOfHanoi.ShowInstructions(); ----> Shows the game instructions //
