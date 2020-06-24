var board = [
  ['3', '2', '1'],
  [],
  []
];

console.log (board);

var moves = 0;

var resetBoard = function() {
  board = [['3', '2', '1'],[],[]];
  moves = 0;
};


var checkWinner = function() {

  var winningBoard = board.reduce(function(accumulator, peg, currentIndex) {

    if ((currentIndex >= 1) && (peg.length === 3)) {
      accumulator = true;
      }
    return accumulator;
  },false)

  if (winningBoard === true) {
    console.log("you win! Play again?");
    resetBoard();
  }
};



var moveDisk = function (fromPeg, toPeg) {

  var startPeg = board[fromPeg - 1];
  var endPeg = board[toPeg - 1];

  if (startPeg.length) {
    console.log('Your disc can be moved to these peg(s):');

    possiblePegs = board.filter(function(peg) {
      return (startPeg[startPeg.length -1] < peg[0] || peg[0] === undefined);
    });

    possiblePegs.forEach(function(peg) {
      if (board.indexOf(peg) !== board.indexOf(startPeg)) {
        console.log(board.indexOf(peg) + 1);
      }
    });


      if (endPeg[endPeg.length -1] > startPeg[startPeg.length -1] || endPeg.length === 0){



        endPeg.push(startPeg.pop());

        moves ++;

        console.log(`You have made ${moves} move(s)`)

        board.map(function (pegs) {

        console.log ('--- ' + pegs.join(' '))
        });

        checkWinner();

      } else {
        console.log("cannot move a bigger disc onto a smaller disc");

      }
  } else console.log("There's no disc on that peg");
}


moveDisk(1, 3);
moveDisk(1, 2);
moveDisk(3, 2);
moveDisk(1, 3);
moveDisk(2, 1);
moveDisk(2, 3);
moveDisk(1, 3);
console.log (board);
