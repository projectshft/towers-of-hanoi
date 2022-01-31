// board with 3 pegs, 5 total discs
var pegs = [
  ["5", "4", "3", "2", "1"],
  [],
  []
];

// will change depending on move
var message = '';

// object to maintain board state
var stateOfBoard = {
  showBoard: function() {
    var fullPegs = pegs.map(function(peg) {
      return '--- ' + peg.toString().split(',').join(' ');
  });
    var fullPegView = fullPegs.reduce(function(returnString, fullPeg) {
      return returnString + `
      ` + fullPeg + `
      `;
    }, '');
  console.log(message + fullPegView); 
  },
  resetBoard: function() {
    console.log(`
    Use the following functions to play:

      1. boad.moveDisc(number, number) to move disc from one peg to another

      2. stateOfBoard.showBoard() to view board

      3. stateOfBoard.resetBoard() to reset game

      4. board.help() to see these instructions again
      `);
    message = '';
    pegs = [
      ["5", "4", "3", "2", "1"],
      [],
      []
    ];
    this.showBoard();
  }
};

// function to check for winner
var checkWinner = function() {
  var checkFirstPeg = pegs[1].toString().split(',').join(', ');
  var checkSecondPeg = pegs[2].toString().split(',').join(', ');
  if ((checkFirstPeg === '5', '4', '3', '2', '1' || checkSecondPeg == '5', '4', '3', '2', '1') & pegs[0].length === 0) {
    console.log('You won the game, congratulations! Play again below:');
    stateOfBoard.resetBoard();
  }
};

// board object which has a moveDisc and checkWinner function
var board = {
  moveDisc: function(currentPeg, newPeg) {
    // console.log('This will be a moveDisc function');
    var currentTop;
    var newTop;
    var currentPegNum;
    var newPegNum;
    if (currentPeg >= 4 || newPeg >= 4) {
      message = 'You can only enter a peg number between 1 and 3, board is still:';
      stateOfBoard.showBoard();
    } else if (currentPeg <= 3 || newPeg <= 3) {
        currentTop = (pegs[currentPeg - 1][pegs[currentPeg - 1].length - 1]);
        newTop = (pegs[newPeg - 1][pegs[newPeg - 1].length - 1]);
        currentPegNum = pegs[currentPeg - 1];
        newPegNum = pegs[newPeg - 1];
      if (currentPegNum !== newPegNum) {
        // console.log('Pegs are not the same');
        if (currentTop > newTop) {
          message = 'You cannot move a larger disc on top of a smaller one, board is still:';
          stateOfBoard.showBoard();
        } else if ((currentTop < newTop || newPegNum.length === 0)) {
            // console.log('Peg is small enough');
            newPegNum.push(currentTop);
            // console.log(newPegNum);
            currentPegNum.pop();
            // console.log(pegs);
            message = 'That move was successful, board is now:';
            stateOfBoard.showBoard();
            checkWinner();
        }
      }
    }
  },
  help: function() {
    console.log(`
    Use the following functions to play:

      1. boad.moveDisc(number, number) to move disc from one peg to another

      2. board.checkWinner() to see game status

      3. stateOfBoard.showBoard() to view board

      4. stateOfBoard.reset() to reset game
      
      5. board.help() to see these instructions again
      `);
  }
};

stateOfBoard.resetBoard();
