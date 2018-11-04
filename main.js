const Board = () => {

  let setUp = [
    ['5', '4', '3', '2', '1'],
    [],
    []
  ];

  let moveCounter = {
    moves: 0
  }

  const printBoard = () => {
    let result = setUp.map(peg => {
      console.log('--- ' + peg.join(' '));
    }).join('');
    return result;
  }

  const moveDisc = (startingPeg, endingPeg) => {
    startingPeg = startingPeg - 1;
    endingPeg = endingPeg - 1;
    if (Number(setUp[startingPeg][setUp[startingPeg].length - 1]) < Number(setUp[endingPeg][setUp[endingPeg].length - 1]) || setUp[endingPeg].length === 0) {
      setUp[endingPeg].push(setUp[startingPeg][setUp[startingPeg].length - 1]);
      setUp[startingPeg].pop();
      moveCounter['moves']++;
      console.log(`That move was successful, board is now:`);
      checkWinner();
    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still`)
    }
    return printBoard()
  };

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

  const checkWinner = () => {
    let numberOfDiscs = setUp.reduce((sum, instance) => {
      sum += instance.length;
      return sum;
    }, 0);
    if (setUp[setUp.length - 1].length === numberOfDiscs) {
      console.log(`Congratulations, it took you ${moveCounter['moves']} moves to win! Board is reset if you'd like to play again.`);
      setUp = [
        ['5', '4', '3', '2', '1'],
        [],
        []
      ];
      moveCounter['moves'] = 0;
    }
  };

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    checkMoves: checkMoves,
    checkWinner: checkWinner
  };
};


let board = Board();
