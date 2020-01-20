
function Game(height, source, destination, helper) {
  this.source = source
  this.destination = destination
  this.helper = helper
  this.height = height
}

Game.prototype.initialize = function(array) {
  this.pegs = Array.from(array) || [];
  height = (array.length > 0 ? this.pegs[0].length : 0);
}
Game.prototype.playGame = function() {
    if (this.height >= 1) {
      this.moveDisc(this.height-1, this.source, this.helper, this.destination);
      this.printGame();
      this.moveDisc(this.height-1, this.helper, this.destination, this.source);
    }
}

Game.prototype.moveDisc = function(height, source, destination, helper) {
  console.log( height + ' ' + source + ' ' + destination);
  let winner = false;
  let steps = 0;
  //get the source array and the disc size of the last element
  let srcDisc = parseInt(source.length - 1);

  //check the last element size of the destination if any
  //getDiscSize will return 0 if peg is empty
  let existingDiscSize = this.getDiscSize(destination);

  //if src size bigger, report a console.error();
  if (existingDiscSize > 0 && existingDiscSize < srcDisc) {
    console.log("Can't move a disc on top of another if it is bigger ");
  }
  else {
    //else update the Game
    destination.push(srcDisc);
    source.pop(srcDisc);
    winner = this.checkWinner(height, destination);
  }
  //increment number of moves
  steps++;

  if(winner) {
    //print final Game and reset the game
    this.printGame(source, destination, helper);
    this.resetGame(this.pegs, steps);
  }
  return;
}

Game.prototype.getDiscSize = function(dest) {
  //use filter
  if(dest.length > 0) {
    let size = dest.filter(item => {
      if((dest.length - 1) === dest.indexOf(item))
      return parseInt(item);
    });
    return size[0];
  } else return 0;
}

Game.prototype.checkWinner = function(h, dest) {
  let result = 0;
  dest.forEach((item, index) => {
    if(index > 0 && item.length > 0) {
      result = item.length;
    }
  })
  //return true if we moved all the discs to a new peg false otherwise
  if(h === result) return true;
  else return false;
}

Game.prototype.resetGame = function(result, num) {
  //announce the winner and initialize pegs array for a new game
  console.log('You WIN!');
  console.log('Number of moves: ' + num + '. Illegal moves included if any.');
  //reset for a new game
  this.steps = 0;
  //init state
  this.initialize([]);
}

Game.prototype.printGame = function(s,d,h) {
    console.log('--- ' + s);
    console.log('\n');
    console.log('--- ' + d);
    console.log('\n');
    console.log('--- ' + h);
    console.log('\n');
}

let test = new Game(3,["3", "2", "1"],[],[]);
test.playGame();
// test.moveDisc(1,2);
// test.moveDisc(1,2);//illegal move
// test.moveDisc(1,3);
// test.moveDisc(2,3);
// test.moveDisc(1,2);
// test.moveDisc(3,1);
// test.moveDisc(3,2);
// test.moveDisc(1,2);
//console.log("New Game: ");
//let test2 = new Game([["7", "5", "3", "2", "1"],[],[]], 0, 5);
//test2.printGame();
// test2.moveDisc(1,2);
// test2.moveDisc(1,3);
// test2.moveDisc(2,3);
// test2.moveDisc(1,2);
// test2.moveDisc(3,1);
// test2.moveDisc(3,2);
// test2.moveDisc(1,2);
