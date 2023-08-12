var Board = function (pegs, discs){
   this.pegs = pegs
   this.discs = discs
  }

Board.prototype.makeBoard = function () {
  let pegArray = []
    for (let i = 0; i < this.pegs; i++) {
      pegArray.push([]);
    }
    for (let i = this.discs; i > 0; i--) {
      pegArray[0].push(i);
      
    }
    this.pegArray = pegArray;
}

Board.prototype.checkWinner = function(){
  {
    if(this.pegArray[this.pegs-1].length === this.discs)
    {
      {alert('Congrats, you win! Click OK to start a new game')
      startGame();
      }
      return true
    }
    else {return false}
  }
}

Board.prototype.logBoard = function(){
  this.pegArray.map(
      function (peg){
        var pegString = peg.toString();
        var pegNoCommas = pegString.replaceAll(',', ' ')
        console.log(`---${pegNoCommas}`)})}
  
        
Board.prototype.moveDisc = function (peg1, peg2){
    const sourcePeg = this.pegArray[peg1-1]
    const targetPeg = this.pegArray[peg2-1]
    if(sourcePeg[sourcePeg.length-1] > targetPeg[targetPeg.length-1])
      {console.error('You cannot put a larger disc on top of a smaller one!');}
    else {
     this.pegArray[peg2-1].push(this.pegArray[peg1-1].pop());
  
      this.logBoard();}
      this.checkWinner();
     
  }

var startGame = function(pegs, discs){
  pegs = Number(prompt('How many pegs?'))
  discs = Number(prompt ('How many discs?'))
  var gameBoard = new Board (pegs, discs)
  gameBoard.makeBoard();
  gameBoard.logBoard();
  while (gameBoard.checkWinner() === false)
    {gameBoard.moveDisc(prompt('What peg do you want to move the disc from?'), prompt('And what peg are you moving it to?'))
    }
}