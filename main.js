const TowersGameOverlord = function (inputBoard) {
  let gameBoard = inputBoard;
  let tallyOfMoves = 0;
  let startingNumberOfDiscs = gameBoard[0].length; //this value will be reassigned if player creates a new board
  let startingNumberOfPegs = gameBoard.length; //this value will be reassigned if player creates a new board
  const helperMessage =
    "What's next? You can type: board.displayBoard(), board.moveDisc(numInitialPeg, numFinalPeg), board.showAllowableMoves(numFirstPeg), board.resetBoard(), or board.createBoard(numPegs, numDiscs).";

  console.log("***Starting game!***");
  console.log(helperMessage);

  const DisplayBoard = () => {
    // console.log("in the Display Function!");

    /*DECRIPTION:
    Use .map method to log leading dashes and the gameBoard's nested array (aPeg) 
    contents to the console.
    */
    gameBoard.map(function (aPeg) {
      console.log("---" + aPeg);
    });
  };

  const MoveDisc = (startingPeg, endingPeg) => {
    // console.log(`in moveDisc Function!`);
    const initialPeg = gameBoard[startingPeg - 1];
    const finalPeg = gameBoard[endingPeg - 1];
    /* DESCRIPTION:
    1.Check that initialPeg constains discs. Error if empty. Do not add to move tally.
    2.Make sure discs to move are on not on same peg. Error if they are. Do not add to move tally.
    3.If value of last disc on finalPeg is less than value of last disc on initialPeg,
      log error message. Do not add to move tally.    
    4.Check that: a) finalPeg is empty or b) that value of last disc on finalPeg is greater than
      value of last disc on initialPeg.     
    5.If discs are on different pegs (#2) and #4 is true: move is valid! Pop disc (value) from 
      initialPeg and push onto finalPeg.
    6.Add 1 to tally of moves, log a success message, log new board config.
    7.Check for a win
    */
    if (initialPeg.length) {
      if (initialPeg === finalPeg) {
        console.log(`No move. Please enter two different pegs. Board remains:`);
        DisplayBoard();
        console.log(helperMessage);
        // console.log(tallyOfMoves); //confirming that move tally did not increase
      } else if (
        finalPeg[finalPeg.length - 1] < initialPeg[initialPeg.length - 1]
      ) {
        console.log(
          `No move. You cannot place a large disc on top of a smaller one. Board remains:`
        );
        DisplayBoard();
        console.log(helperMessage);
      } else if (
        !finalPeg.length ||
        finalPeg[finalPeg.length - 1] > initialPeg[initialPeg.length - 1]
      ) {
        finalPeg.push(initialPeg.pop());
        tallyOfMoves++;
        // console.log(tallyOfMoves); //confirming that move tally did increase
        console.log(`Move #${tallyOfMoves}`);
        console.log(`That move was successful! Board is now:`);
        DisplayBoard();
        CheckWinner();
        console.log(helperMessage);
      }
    } else {
      console.log(
        `No move. There is no disc on the initial peg. Board remains:`
      );
      DisplayBoard();
      console.log(helperMessage);
    }
  };

  const ShowAllowableMoves = (firstPegWithDiscToCheck) => {
    //console.log("in FindPeg function!")
    const pegToCheckFirst = gameBoard[firstPegWithDiscToCheck - 1];
    let firstDiscValue = pegToCheckFirst[pegToCheckFirst.length - 1];
    let counter = 0;

    /* DESCRIPTION:
    1.Check that initial peg is not empty. Error if so.
    2.Use the .filter method to loop through remaining pegs and select them if:
      a) they are empty or b) their last disc is larger than the disc to be moved.
    3.Increment a counter inside the filter loop as a way to deliver peg (array) position.
    4.Print allowable moves to the console from within the loop.
    5.SUPPORT NEEDED: unable to log error message correctly if there are no moves for a disc.
     */
    if (!pegToCheckFirst.length) {
      console.log(`There are no discs on this peg! Please pick another.`);
    } else {
      gameBoard.filter(function (peg) {
        counter++;
        if (!peg.length || peg[peg.length - 1] > firstDiscValue) {
          // console.log(counter);
          console.log(`You can move your disc to peg ${counter}.`);
        }
      });
    }
  };

  const CheckWinner = () => {
    // console.log("checking winner!");

    /* DESCRIPTION:
    1.Use the .reduce method to reduce the nested (2D) array into a single
      array containing the number of discs per peg.
    2.If there are discs on first peg (a value in [0]), return out.
    3.Use the .find method to check that one peg contains all of the discs.
    4.When true: winner! Log a triumphant victory message & the winning # of moves.
    5.Reset board.
    */
    const arrayOfPegLengths = gameBoard.reduce(function (accumulator, current) {
      return accumulator.concat(current.length);
    }, []);
    // console.log(arrayOfPegLengths);
    if (arrayOfPegLengths[0]) {
      return;
    }
    arrayOfPegLengths.find(function (aPegLength) {
      if (aPegLength === startingNumberOfDiscs) {
        console.log("Winner winner chicken dinner! Great job!! *trumpets*!!");
        console.log(`You won in ${tallyOfMoves} moves.`);
        console.log(
          "The board is being reset so you can play again. Try to beat your previous number of moves."
        );
        console.log(
          "(Min # of moves for: 3pegs x 3discs = 7; 3x4discs = 15; 3x5discs = 31)"
        );
        console.log("--------------------------------");
        ResetBoard();
        // console.log(gameBoard);
      }
    });
  };

  const ResetBoard = () => {
    // console.log("Resetting board!");

    /* DESCRIPTION:
    1.Start with an empty array.
    2.Push in a number of empty arrays to match the starting number of pegs (determined
      by the initial input board at outset of game).
    3.Push the starting number of discs (digits in descending order) into the sub-array 
      at position[0].
    4.Assign theResetBoard to the gameBoard and reset the moves tally.
    */
    const theResetBoard = [];
    for (let i = 0; i < startingNumberOfPegs; i++) {
      theResetBoard.push([]);
    }
    for (let j = startingNumberOfDiscs; j > 0; j--) {
      theResetBoard[0].push(j);
    }
    // console.log(theResetBoard);
    gameBoard = theResetBoard;
    tallyOfMoves = 0;
    console.log("***Starting game!***");
    DisplayBoard();
  };

  const CreateBoard = (numberOfPegs, numberOfDiscs) => {
    // console.log("Building new board!");

    /* DESCRIPTION:
    1.Start with an empty array.
    2.Make sure starting # of pegs is at least 3 and starting # of discs is at least 2.
    3.Push in a number of empty arrays to match the requested number of pegs 
    4.Push the requested number of discs (digits in descending order) into the sub-array 
      at position[0].
    5.Reassign game variables (gameBoard, etc.) and reset the moves tally.
    6.Log success message and display board.
    */
    let yourNewBoard = [];

    if (numberOfPegs < 3) {
      console.log(
        `Error! New board must have at least 3 pegs. Please try again.`
      );
      return;
    }
    if (numberOfDiscs < 2) {
      console.log(
        `Error! New board must have at least 2 discs. Please try again.`
      );
      return;
    }

    for (let i = 0; i < numberOfPegs; i++) {
      yourNewBoard.push([]);
    }
    for (let j = numberOfDiscs; j > 0; j--) {
      yourNewBoard[0].push(j);
    }
    startingNumberOfDiscs = yourNewBoard[0].length;
    startingNumberOfPegs = yourNewBoard.length;
    gameBoard = yourNewBoard;
    tallyOfMoves = 0;
    console.log(
      `Your new board with ${numberOfPegs} pegs and ${numberOfDiscs} discs has been created.`
    );
    console.log("***Starting game!***");
    DisplayBoard();
  };

  return {
    moveDisc: MoveDisc,
    displayBoard: DisplayBoard,
    showAllowableMoves: ShowAllowableMoves,
    InternalCheckWinner: CheckWinner, //not for the user
    resetBoard: ResetBoard,
    createBoard: CreateBoard,
  };
};

// let inputBoardThreeDiscsThreePegs = [[3, 2, 1], [], []];

// let inputBoardFiveDiscsThreePegs = [[5, 4, 3, 2, 1], [], []];
// let board = new TowersGameOverlord(inputBoardFiveDiscsThreePegs);
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 1);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 2);
// board.moveDisc(3, 1);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 3);
