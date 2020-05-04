const board = [
  ['3', '2', '1'],
  [],
  []
];

var moves = 0

board.map(function (pegs) {

    console.log ('--- ' + pegs.join(' '))
    });

var moveDisk = function (fromPeg, toPeg) {

  var startPeg = board[fromPeg - 1];
  var endPeg = board[toPeg - 1];


  var options = board.filter(function (post) {
    // post = []
    return board.indexOf(post)

    if (!startPeg && (startPeg[startPeg.length -1] < post[post.length -1]  || post.length === 0)) {
      // return board.indexOf(post)
    }
  })

  console.log ('You can move to peg ' + options)
        // board.map((pegs) => console.log (pegs))

  if (endPeg[endPeg.length -1] > startPeg[startPeg.length -1] || endPeg.length === 0){

    endPeg.push(startPeg.pop())

    board.map(function (pegs) {

      console.log ('--- ' + pegs.join(' '))
    });

    var numMoves = moves += 1

    console.log ('You have performed ' + numMoves + ' move(s)')

    var checkWinner = board.reduce(function (accumulator, peg) {
      if (board[0].length !== peg && peg.length === 3) {
      console.log ('You win! Play again')

      };

    // return accumulator.concat(peg)

  });

  } else {
    console.log ('You cannot move a larger disc on top of a smaller one')
  };



};
