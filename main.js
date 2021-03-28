var towersGame = {
  board:
  [
    ["5", "4", "3", "2", "1"],
    [],
    []
  ],
  
  startingBoard:
  [
    ["5", "4", "3", "2", "1"],
    [],
    []
  ],

  moveDisc: function (arr1, arr2) {
    var lastElArr1 = this.board[arr1][this.board[arr1].length-1];
    var lastElArr2 = this.board[arr2][this.board[arr2].length-1];
  
    if (lastElArr1 < lastElArr2 || this.board[arr2].length === 0) {
      this.board[arr2].push(this.board[arr1].pop());
      console.log('That move was successful, board is now:')
    } else if (lastElArr1 > lastElArr2) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
    }
  
    var newBoard = this.board.map(function (element){
      return element.join(' ');
    });
     
    console.log(newBoard);
  
    var checkWinner = function () {
      if (towersGame.board[1][0] === "5" && towersGame.board[1].length === 5 || towersGame.board[2][0] === "5" && towersGame.board[2].length === 5) {
      console.log('Congratulations! You won! How about another try?')
      towersGame.board = towersGame.startingBoard;
      }
    };
  
    checkWinner();
  
  }
};

// Complete solution
towersGame.moveDisc(0, 1);
towersGame.moveDisc(0, 2);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(2, 1);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(0, 2);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(1, 0);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(0, 2);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(2, 1);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(1, 0);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(2, 1);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(0, 2);
towersGame.moveDisc(1, 2);
towersGame.moveDisc(0, 1);
towersGame.moveDisc(2, 0);
towersGame.moveDisc(2, 1);
towersGame.moveDisc(0, 1);

// New game
towersGame.moveDisc(0, 2);
