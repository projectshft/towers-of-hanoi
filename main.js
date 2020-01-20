//The Challenge - Towers of Hanoi

function Game(pegs, steps, height) {
  this.pegs = pegs
  //the number of moves that the player has done
  this.steps = steps
  //the size of the winner peg array
  this.height = height
}

Game.prototype.initialize = function(array) {
  this.pegs = Array.from(array) || [];
  height = (array.length > 0 ? this.pegs[0].length : 0);
}

Game.prototype.moveDisc = function(source, destination) {
  let winner = false;
  //get the source array and the disc size of the last element
  let srcArr = this.pegs[source - 1];
  let srcDisc = parseInt(srcArr[srcArr.length - 1]);

  //check the last element size of the destination if any
  //getDiscSize will return 0 if peg is empty
  let existingDiscSize = this.getDiscSize(destination - 1);

  //if src size bigger, report a console.error();
  if (existingDiscSize > 0 && existingDiscSize < srcDisc) {
    console.log("Can't move a disc on top of another if it is bigger ");
  }
  else {
    //else update the Game
    this.pegs[destination - 1].push(srcDisc);
    this.pegs[source - 1].pop(srcDisc);
    winner = this.checkWinner(this.height);
  }
  //increment number of moves
  this.steps++;

  if(winner) {
    //print final Game and reset the game
    this.printGame();
    this.resetGame(this.pegs);
  }
}

Game.prototype.getDiscSize = function(dest) {
  //use filter
  let discs = Array.from(this.pegs[dest]);

  if(discs.length > 0) {
    let size = discs.filter(item => {
      if((discs.length - 1) === discs.indexOf(item))
      return parseInt(item);
    });
    return size[0];
  } else return 0;
}

Game.prototype.checkWinner = function() {
  let result = 0;
  this.pegs.forEach((item, index) => {
    if(index > 0 && item.length > 0) {
      result = item.length;
    }
  })
  //return true if we moved all the discs to a new peg false otherwise
  if(this.height === result) return true;
  else return false;
}

Game.prototype.resetGame = function(result) {
  //announce the winner and initialize pegs array for a new game
  console.log('You WIN!');
  console.log('Number of moves: ' + this.steps + '. Illegal moves included if any.');
  //reset for a new game
  this.steps = 0;
  //init state
  this.initialize([]);
}

Game.prototype.printGame = function() {
  this.pegs.map((peg) => {
    console.log('--- ' + peg);
    console.log('\n');
  })
}

let test = new Game([["3", "2", "1"],[],[]], 0, 3);
test.printGame();
test.moveDisc(1,2);
test.moveDisc(1,2);//illegal move
test.moveDisc(1,3);
test.moveDisc(2,3);
test.moveDisc(1,2);
test.moveDisc(3,1);
test.moveDisc(3,2);
test.moveDisc(1,2);
