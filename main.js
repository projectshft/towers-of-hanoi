
var board = {

  state: [[5, 4, 3, 2, 1],[],[]],

  moveDisc: function(move,target){
  //move: base peg, target: target peg
  var newPeg = this.state[target-1];
  var oldPeg = this.state[move-1]

  if (newPeg.length == 0 || newPeg[newPeg.length-1] > oldPeg[oldPeg.length-1]){
    // if new peg is empty OR current disc larger than incoming disc
    this.state[target-1].push(this.state[move-1].pop());
    console.log('That move was successful, board is now:')
  } else {
    // if incoming disc larger than current disc, raise error
    console.log('You cannot move a larger disc on top of a smaller one, board is still:')
  }
  
  this.printBoard();
  this.checkWinner();
  
  },

  printBoard: function(){
  this.state.map(function (peg) {
  console.log('--- ' + peg.join(' '));
    });

  },

  checkWinner: function(){
    winningState = '54321';

    if (this.state[1].join('') == winningState || this.state[2].join('') == winningState){
      console.log('You win! Congrats, game has been reset.');
      this.state = [[5, 4, 3, 2, 1],[],[]];
    };

  }

};



//moves to test winning state
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(3, 1);
// board.moveDisc(2, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 3);
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
