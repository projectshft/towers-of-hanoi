const Board = () => {
  //set up the initial positions of the discs
  let setUp = [
    ['5', '4', '3', '2', '1'],
    [],
    []
  ];

  //set object to assign a value that increments with each move
  let moves = 0;

  //function to display current positions of discs
  const printBoard = () => {
    let result = setUp.map(peg => {
      console.log('--- ' + peg.join(' '));
    }).join('');
    return result;
  }

  //function to move discs to other pegs
  const moveDisc = (startingPeg, endingPeg) => {
    startingPeg = startingPeg - 1;
    endingPeg = endingPeg - 1;
    if (Number(setUp[startingPeg][setUp[startingPeg].length - 1]) < Number(setUp[endingPeg][setUp[endingPeg].length - 1]) || setUp[endingPeg].length === 0) {
      setUp[endingPeg].push(setUp[startingPeg][setUp[startingPeg].length - 1]);
      setUp[startingPeg].pop();
      moves++;
      console.log(`That move was successful, board is now:`);
      checkWinner();
    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still`)
    }
    return printBoard()
  };

  //function to check which pegs a disc may move to
  const checkMoves = (peg) => {
    let result = [];
    peg = peg - 1;
    let potentialMoves = setUp.filter(nextMove => {
      return Number(nextMove[nextMove.length - 1] > setUp[peg][setUp[peg].length - 1]) || nextMove.length === 0;
    });
    for (let i = 0; i < setUp.length; i++) {
      for (let j = 0; j < potentialMoves.length; j++) {
        if (setUp[i] === potentialMoves[j]) {
          result.push(i + 1);
        }
      }
    }
    if (result.length > 0) {
      return console.log(`You may move to the following pegs: ${result.join(' or ')}`);
    } else {
      return console.log(`You cannot move this disc this round.`)
    }
  };

  //function that allows the game to check if conditions have been met for winning and resets the board accordingly
  const checkWinner = () => {
    let numberOfDiscs = setUp.reduce((sum, instance) => {
      sum += instance.length;
      return sum;
    }, 0);
    if (setUp[setUp.length - 1].length === numberOfDiscs) {
      console.log(`Congratulations, it took you ${moves} moves to win! Board is reset if you'd like to play again.`);
      setUp = [
        ['5', '4', '3', '2', '1'],
        [],
        []
      ];
      moves = 0;
    }
  };

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    checkMoves: checkMoves,
    checkWinner: checkWinner
  };
};

//creates a new game in the console. Player may invoke functions to play

let board = Board();
