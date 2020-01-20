
//set up an object that controls the board
const board = {

// create a 2d array to store values
  towers: [
    [3, 2, 1],
    [],
    [],
  ],

// store counted moves
  moves:0,

// print the board using .map according to style requirements
  printBoard: function() {

    var displayBoard = this.towers.map(function(item) {
      console.log('*** ' + item)
      console.log(' ')
    })
  },

//
  moveDisc: function(startTower, endTower) {

    let lastDiscOnStartTower = this.towers[startTower - 1][this.towers[startTower - 1].length - 1]
    let lastDiscOnEndTower = this.towers[endTower - 1][this.towers[endTower - 1].length - 1]

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

      // removes last disc on start tower array and pushes it into end tower array
      this.towers[startTower - 1].pop(lastDiscOnStartTower);
      this.towers[endTower - 1].push(lastDiscOnStartTower);

      // count after each move
      board.moves++
    }
  },

  // checks if there is a winner
  // filter function checks if length of tower is 3
  checkWinner: function() {
    this.towers.filter(function(item) {
      if (item.length === 3) {
        console.log('You won!')
      } else if (item.lenth < 3) {
        console.log('Sorry, you lost.')
      }
    });
    // tell player how many moves it took to win
    console.log(board.moves)
    // reset the board
    debugger;
    console.log(board.resetGame())
  },
  // function used to reset game board invoked in checkWinner function
  resetGame: function() {
    let resetTowers = [[3, 2, 1],[],[],]
    var displayBoard2 = resetTowers.map(function(item) {
      console.log('*** ' + item)
      console.log(' ')
    return resetTowers
    })
  }
}


// moves to win game
board.moveDisc(1,3);
board.moveDisc(1,2);
board.moveDisc(3,2);
board.moveDisc(1,3);
board.moveDisc(2,1);
board.moveDisc(2,3);
board.moveDisc(1,3);

// check for winner; logs moves & resets board
board.checkWinner();
