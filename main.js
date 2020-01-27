//The Challenge - Towers of Hanoi

function Game(pegs) {
  this.pegs = pegs
  //the number of moves that the player has done
  this.steps = 0
  //the size of the winner peg array
  this.height = pegs.length;

  this.score = this.pegs[0].reduce((acc, value) => {
    return parseInt(acc) + parseInt(value);
  })
}

Game.prototype.initialize = function(array) {
  this.pegs = Array.from(array) || [];
  //height = (array.length > 0 ? this.pegs[0].length : 0);
}

Game.prototype.moveDisc = function(source, destination) {
  let winner = false;
  let valid = false;
  //get the source array and the disc size of the last element
  let srcArr = this.pegs[source - 1];
  let srcDisc = parseInt(srcArr[srcArr.length - 1]);
  //console.log('Source disc: ' + srcDisc);

  //check if the disc is a valid size to move
  if(this.pegs[destination - 1].length > 0) {
    valid = this.validMove(this.pegs[destination - 1], srcDisc);
  }
  else valid = true;

  //if src size bigger, report a console.error();
  if (valid) {
    this.pegs[destination - 1].push(srcDisc);
    this.pegs[source - 1].pop(srcDisc);
    //console.log('Initial score: ' + this.score);
    winner = this.checkWinner(this.pegs[destination - 1]);
    //console.log('Winner check return: ' + winner);
    console.log("That move was successful, board is now:");
  }
  else {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:");
  }
  //increment number of moves
  this.steps++;
  this.printGame();

  if(winner) {
    //reset the game
    this.resetGame();
  }
}

Game.prototype.validMove = function(dest, srcDiscSize) {
  //use filter
  //debugger;
  let result = dest.filter(function(item) {
      return item > srcDiscSize;
  });
  //console.log('Return from filter: ' +result);

  if(result[result.length - 1] > srcDiscSize) return true;
  else return false;
}

Game.prototype.checkWinner = function(dest) {
  let result = dest.reduce((acc, value) => {
      return parseInt(acc) + parseInt(value);
    }, 0 );

  //console.log('checkWinner result var:' + result);
  if(result === this.score) return true;
  else return false;
}

Game.prototype.resetGame = function() {
  //announce the winner and initialize pegs array for a new game
  console.log('You WIN!');
  console.log('Number of moves: ' + this.steps + '. Illegal moves included if any.');
  //reset for a new game
  this.steps = 0;
  //init state
  this.initialize([]);
}

Game.prototype.printGame = function() {
  const pegDisplay = this.pegs.map((peg) => {
    return '--- ' + peg;
  })
  pegDisplay.forEach(item => {
    console.log(item);
  })
}

let test = new Game([["3", "2", "1"],[],[]]);
test.printGame();
test.moveDisc(1,2);
test.moveDisc(1,2);//illegal move
test.moveDisc(1,3);
test.moveDisc(2,3);
test.moveDisc(1,3); //illegal move
test.moveDisc(1,2);
test.moveDisc(3,1);
test.moveDisc(3,1); //illegal move
test.moveDisc(3,2);
test.moveDisc(1,2);
