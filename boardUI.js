const BoardUI = function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext("2d");
  const x = canvas.width;
  const y = canvas.height;
  const pegWidth = 20;
  const pegHeight = 200;

  const drawPegs = function() {
    ctx.beginPath();
    ctx.rect(x / 2 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect(x /4 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.rect((x / 4) * 3 - pegWidth / 2, y - pegHeight, pegWidth, pegHeight);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath()
  }

  const drawBoard = function() {
    drawPegs();
  }

  return {
    drawBoard: drawBoard
  }
}

const newBoard = new BoardUI();
newBoard.drawBoard();