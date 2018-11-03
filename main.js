const Board = () => {
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
  
    // returns bool whether the move is allowed or not
    const checkMove = (startPeg, endPeg) => {
      // Take disc off starting peg
      let disc = startPeg[startPeg.length - 1];
  
      // Determine possible endPegs disc can move to
      let possibleEndPegs = board.filter(peg => {
        return peg.length === 0 || disc < peg[peg.length - 1];
      });
  
      // if endPeg is a possible endPeg, allow the move
      return possibleEndPegs.includes(endPeg);
    };
  
    // Move a disc
    const moveDisc = (startPeg, endPeg) => {
      // Arrays are zero-base indexed
      startPegArr = board[startPeg - 1];
      endPegArr = board[endPeg - 1];
  
      // Take disc off starting peg
      let disc = startPegArr[startPegArr.length - 1];
  
      // Check if move is allowed
      let moveAllowed = checkMove(startPegArr, endPegArr);
      if(moveAllowed) {
        console.log(`That move was successful, board is now:`);
        startPegArr.pop();
        endPegArr.push(disc);
        numMoves++;
      } else {
        console.log(`You can't move a larger disc on top of a smaller one, board is still:`);
      }
      
      drawBoard(board);
      console.log(`Moves: ${numMoves}`);
      checkWinner(endPegArr); 
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
  
    // Player won, play again?
    let playAgain = prompt(`You won the game in ${numMoves} moves. Would you like to play again? Y/n`);
    if(playAgain === 'Y' || playAgain === 'y') {
      const pegs = parseInt(prompt(`How many pegs would you like?`));
      const discs = parseInt(prompt(`How many discs would you like?`));
      const newBoard = Board();
      newBoard.playGame(pegs, discs);
    } else {
      return;
    }
  
  };

  return {
    playGame: playGame
  };
};

const pegs = parseInt(prompt(`How many pegs would you like?`));
const discs = parseInt(prompt(`How many discs would you like?`));
const myBoard = Board();
myBoard.playGame(pegs, discs);