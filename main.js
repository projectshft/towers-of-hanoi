const playGame = (pegs, discs) => {

  // ********** INITIALIZE GAME ********** //

  // Setup empty board, move counter, and if the game has been won or not
  let gameWon = false;
  const board = [];
  let numMoves = 0;

  // Push pegs onto board and record firstPeg
  for(let i = 0; i < pegs; i++) {
    board.push([]);
  }
  const firstPeg = board[0];  

  // Put discs onto first peg and sum discs to check against winning (end) peg
  let winningPegVal = 0;
  for(let i = discs; i > 0; i--) {
    firstPeg.push(i);
    winningPegVal += i; // 6
  }
  

  // ************** FUNCTIONS ***************** //

  // Draw board
  const drawBoard = () => {
    board.map(peg => {
      let drawPeg = `----- `;
  
      peg.map(disc => {
        drawPeg += `${disc} `;
      });
  
      console.log(drawPeg);
    });
  };

  drawBoard(board);

  // Move a disc
  const moveDisc = (startPeg, endPeg) => {
    // Arrays are zero-base indexed
    startPeg = board[startPeg - 1];
    endPeg = board[endPeg - 1];

    // Take disc off starting peg
    let disc = startPeg[startPeg.length - 1];

    // if endPeg is empty, or if disc from startPeg is smaller than last disc on endPeg, move disc from startPeg onto endPeg
    if(endPeg.length === 0 || (disc < endPeg[endPeg.length - 1])) {
      console.log(`That move was successful, board is now:`);
      startPeg.pop();
      endPeg.push(disc);
      numMoves++;
    } else {
      console.log(`You can't move a larger disc on top of a smaller one, board is still:`);
    }
    
    drawBoard(board);
    console.log(`Moves: ${numMoves}`);
    checkWinner(endPeg); 
  };

  // Check to see if the game has been won
  const checkWinner = (endPeg) => {
    //Calc val of endPeg discs to compare against winning val
    let endPegVal = endPeg.reduce((acc, disc) => {
      acc += disc;
      return acc;
    }, 0);

    if(endPeg !== firstPeg && endPegVal === winningPegVal) {
      gameWon = true;
    }

    return gameWon;    
  };


  // ***************** PLAY THE GAME ********************* //
  while (!gameWon) {
    let startPeg = parseInt(prompt(`Which peg would you like to remove a disc from?`));
    let endPeg = parseInt(prompt(`Which peg would you like to move the disc to?`))

    moveDisc(startPeg, endPeg);
  }

  // Play won
  alert(`YOU WON! It took you ${numMoves} moves to win the game.`);

};

const pegs = parseInt(prompt(`How many pegs would you like?`));
const discs = parseInt(prompt(`How many discs would you like?`));
playGame(pegs, discs);