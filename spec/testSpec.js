
let pegs = [];
let steps = 0;
let winnerSize = 0;
function moveDisc(src, dest) {
  let winner = false;
  //get the source array and the disc size of the last element
  let srcArr = pegs[src - 1];
  let srcDisc = parseInt(srcArr[srcArr.length - 1]);
  // let temp = this.pegs[src - 1][this.pegs[src - 1].length - 1]
  // console.log(temp)

  //check the last element size of the destination if any
  //getDiscSize will return 0 if peg is empty
  let existingDiscSize = getDiscSize(dest - 1);

  //if src size bigger, report a console.error();
  if (existingDiscSize > 0 && existingDiscSize < srcDisc) {
    console.log("Can't move a disc on top of another if it is bigger ");
  }
  else {
    //else update the board
    pegs[dest - 1].push(srcDisc);
    pegs[src - 1].pop(srcDisc);
    winner = checkWinner(winnerSize);
  }
  //increment number of moves
  steps++;

  if(winner) {
    //print final board and reset the game
    printBoard();
    resetGame(pegs);
  }
};

function getDiscSize(dest) {
  //use filter
  let discs = Array.from(pegs[dest]);

  if(discs.length > 0) {
    let size = discs.filter(item => {
      if((discs.length - 1) === discs.indexOf(item))
      return parseInt(item);
    });
    return size[0];
  } else return 0;
};

function checkWinner() {
  //use reduce
  let result = 0;
  pegs.forEach((item, index) => {
    if(index > 0 && item.length > 0) {
      result = item.reduce((acc, currentValue) => {
        return acc + currentValue;
      })
    }
  })
  //return true if we moved all the discs to a new peg false otherwise
  if(winnerSize === result) return true;
  else return false;
};

 function resetGame(result) {
  //announce the winner and initialize pegs array for a new game
  console.log('You WIN!');
  console.log('Number of moves: ' + this.steps + '. Illegal moves included.');
  //reset for a new game
  this.steps = 0;
  //init state
  this.initialize([]);
}
//create a new game before each testSpec
beforeEach(function () {
  pegs = [[["3", "2", "1"],[],[]]];
  steps = 0;
  winnerSize = board.pegs[0].reduce((total, currentValue) => {
    return total + parseInt(currentValue);
  }, 0);
  jasmine.addCustomEqualityTester(moveDisc(1,2));
  jasmine.addCustomEqualityTester(moveDisc(1,2));
});

afterEach(function() {
  //reset Board
  pegs = [];
  steps = 0;
  winnerSize = 0;
});

describe("move Disc to a different peg", function () {
  it("changes pegs array, moves last element of the first array to a new destination", function () {
    expect(pegs).toEqual([["3", "2"],["1"],[]]);
  });
});

describe("move larger Disc to the same peg", function () {
  it("only allows you to move the disc if it's smaller than one on the peg or peg is empty", function () {
    expect(pegs).not.toEqual([["3"],["2","1"],[]]);
  });
});
