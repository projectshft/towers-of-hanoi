
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


// if I put in start tower it takes the top disc on the start tower and compares it to
// other arrays to find possible moves
// array of the possible towers it can move to
      // legal move checks
      // checks if the start tower is empty
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

// work on this                           1
checkPotentialDiscMoves: function (lastdisc) {
    var potentialmove = board.towers.filter(function(m) {
      if(m[m.length-1] > lastdisc) {
        return m
    }
  })
},
// There should be a function that given a certain peg, determines which other pegs
// the top disc from that peg can be moved to. In order to complete this function, you
// MUST use a filter function at least once


// (HINT: If the user says they want to move a
//   certain disc to another peg, wouldn't it be nice if you had a function that could take
//   that disc size and look at all the pegs on the board and only return the ones that
//   the disc you want to move would fit on?).


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
