
//set up an object that controls the board
const board = {

// create a 2d array to store values
  defaultTowers: [
    [3, 2, 1],
    [],
    [],
  ],

  towers: [
    [3, 2, 1],
    [],
    [],
  ],

// create an object key to store counted moves
  moves:0,

// print the board using .map according to style requirements
  printBoard: function() {
    var displayBoard = this.towers.map(function(array) {
       return '--- ' + array.join() + ' '
    })
       displayBoard.forEach(function(tower) {
        console.log(tower.toString());
      })
  },

// create a function that moves the disc
  moveDisc: function(startTower, endTower) {
    let lastDiscOnStartTower = this.towers[startTower - 1][this.towers[startTower - 1].length - 1]
    let lastDiscOnEndTower = this.towers[endTower - 1][this.towers[endTower - 1].length - 1]

    if (this.towers[startTower - 1].length < 1 || this.towers[startTower - 1] == undefined) {
      console.log("Invalid move. Start tower has no discs to move.")

      // checks if player tries to move disc to start tower
    } else if (this.towers[startTower - 1] == this.towers[endTower - 1]) {
      console.log("Invalid move. You can't put the same disc where you got it from.")

      // checks if last disc on end tower is bigger than last disc on start tower
    } else if (!(this.towers[endTower - 1] === 0) && (lastDiscOnStartTower > lastDiscOnEndTower)) {
      console.log("Invalid move. You can't place a bigger disc on top of a smaller one.")
    } else {

      this.checkPotentialDiscMoves(lastDiscOnStartTower)

      // removes last disc on start tower array and pushes it into end tower array
      this.towers[startTower - 1].pop(lastDiscOnStartTower);
      this.towers[endTower - 1].push(lastDiscOnStartTower);

      // count after each move
      board.moves++
      this.checkWinner();
      this.printBoard();
    }
  },

                       
checkPotentialDiscMoves: function (lastdisc) {
    var potentialmove = board.towers.filter(function(m) {
      if(m[m.length-1] > lastdisc) {
        return m
    }
  })
},

checkWinner: function() {

  for (i = 1; i < board.towers.length; i++) {
    if (board.towers[i].length == 3) {
      console.log('You won the game!')
      console.log('It took you ' + board.moves + ' moves!');
      this.resetGame();
    }
  }
},

resetGame: function() {
  board.towers = board.defaultTowers
  moves = 0
  }
}

board.printBoard()
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);
