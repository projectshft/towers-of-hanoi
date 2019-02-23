const BoardUI = function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext("2d");
  const x = canvas.width;
  const y = canvas.height;
  const pegWidth = 20;
  const pegHeight = 200;
  pegMiddle1 = x / 4;
  pegMiddle2 = x / 2;
  pegMiddle3 = (x / 4) * 3;
  const numOfDiscs = board.discsStart;
  const discHeight = 20;
  const discWidth = 60;

  const drawPegs = function() {
    ctx.beginPath();
    ctx.rect(pegMiddle2 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect(pegMiddle1 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect(pegMiddle3 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.fillStyle = '#850007';
    ctx.fill();
    ctx.closePath();
  }

  const drawDiscs = function(boardState) {
    for(let i = 0; i < boardState.length; i++){
      for(let j = boardState[i].length; j > 0; j--) {
        ctx.beginPath();
        ctx.rect((window[('pegMiddle' + (i + 1))]  - (discWidth / 2) * (boardState[i][j - 1])), y - discHeight * (boardState[i].length - (j - 1)), discWidth * boardState[i][j - 1], discHeight);
        ctx.fillStyle = '#00FF00';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  const drawBoard = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPegs();
    drawDiscs(board.getBoardState());
    requestAnimationFrame(drawBoard);
  }

  return {
    drawBoard: drawBoard
  }
}

const newBoard = new BoardUI();
newBoard.drawBoard();