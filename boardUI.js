const BoardUI = function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext("2d");
  const x = canvas.width;
  const y = canvas.height;
  const pegWidth = 20;
  const pegHeight = 200;
  const discHeight = 20;
  const discWidth = 180 / board.getNumDiscs(); // Used as multiplier for disc size
  pegMiddle1 = x / 4;  
  pegMiddle2 = x / 2;  // Determines middle of each peg on x axis
  pegMiddle3 = (x / 4) * 3;

  // Draws the pegs and peg number labels to the canvas
  const drawPegs = function() {
    ctx.beginPath();
    ctx.rect(pegMiddle1 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect(pegMiddle2 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect(pegMiddle3 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.fillStyle = '#850007';
    ctx.fill();
    ctx.font = '30px Arial';
    ctx.fillText(1, pegMiddle1 - 10, y - pegHeight - 15);
    ctx.fillText(2, pegMiddle2 - 10, y - pegHeight - 15);
    ctx.fillText(3, pegMiddle3 - 10, y - pegHeight - 15);
    ctx.closePath();
  }

  // Draws the discs to the canvas based on the current board state
  const drawDiscs = function(boardState) {
    for(let i = 0; i < boardState.length; i++){
      let peg = 'pegMiddle'.concat(i + 1);
      for(let j = 0; j <= boardState[i].length; j++) {
        ctx.beginPath();
        ctx.rect(window[peg] - ((discWidth / 2) * boardState[i][j]), y - discHeight * (j + 1), discWidth * boardState[i][j], discHeight);
        ctx.fillStyle = '#00FF00';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  // Draws the move total to top left of canvas
  const drawTotalMoves = function() {
    ctx.font = "17px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Total Moves: " + board.getTotalMoves(), 8, 20);
  }

  // Main function to draw all components of the board
  const drawBoard = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPegs();
    drawDiscs(board.getBoardState());
    drawTotalMoves();
    requestAnimationFrame(drawBoard);
  }

  // Returns object that allows the board to be drawn
  return {
    drawBoard: drawBoard
  }
}

const newBoard = new BoardUI();
newBoard.drawBoard();
