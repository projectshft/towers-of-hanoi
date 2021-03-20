var towersOfHanoi = {
  gameboard: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],
  moveDisc: function (onePeg, twoPeg){
    if(!this.checkIllegal(onePeg, twoPeg)){;
    this.gameboard[twoPeg-1].push(this.gameboard[onePeg-1].pop());
    this.printBoard();
    this.checkWinner();
  }
  },
  checkWinner: function (){
    if (this.gameboard[0].length === 0 && this.gameboard.filter(function (peg) {
      return peg.length === towersOfHanoi.gameConditions.numDiscs;
    }).length === 1) {
      console.log('You\'re a winner!');
      this.reset()
    }
  },
  checkIllegal: function (onePeg, twoPeg){
    if(this.gameboard[onePeg-1][this.gameboard[onePeg-1].length-1] > this.gameboard[twoPeg-1][this.gameboard[twoPeg-1].length-1]){
      console.log('Illegal move! Think of something else!')
      return true;
    }
  },
  reset: function (){
    this.changeFormat(this.gameConditions.numPegs, this.gameConditions.numDiscs);
    console.log('The game has been reset. Best of luck!')
    this.printBoard()
  },
  changeFormat: function (numPegs, numDiscs) {
    this.gameboard = [];
    this.gameConditions.numDiscs = numDiscs;
    this.gameConditions.numPegs = numPegs;
    function addArray (){
      if (towersOfHanoi.gameboard.length === numPegs){
        return
      } else {
        towersOfHanoi.gameboard.push([]);
        addArray();
      }
    };
    function addDisc (){
      if (numDiscs === 0){
        return
      } else {
        towersOfHanoi.gameboard[0].push(numDiscs);
        numDiscs --;
        addDisc();
      }
    }
    addArray();
    addDisc();
    this.printBoard();
  },
  printBoard: function () {
    this.gameboard.map(function (peg) {
      console.log(peg.join('--'));
    })
  },
  gameConditions: {
    numDiscs: 5,
    numPegs: 3
  }
}

