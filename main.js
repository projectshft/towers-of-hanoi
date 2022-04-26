const ToHModule = () => {
  let currentState = {};

  const resetState = (diskNum = 5, pegNum = 3) => {
    const disks = [...Array(diskNum).keys()].map((a) => a + 1).reverse();
    const pegs = [...Array(pegNum - 1)].map((a) => a = []);
    const newBoard = [[...disks], ...pegs];

    currentState = {
      board: newBoard,
      disks: disks.length,
      pegs: pegs.length,
      movesMade: 0
    };

    console.log('The board is ready!');

    viewBoard();
  }

  const viewBoard = () => {
    if (!currentState.board) {
      console.log('Type \'start()\' to begin.\n')
      return undefined;
    }
    console.log(currentState.board
      .map(peg => '--- ' + peg.join(' '))
      .join('\n')
    );
  };

  const viewMovesMade = () => {
    if (!currentState.movesMade) {
      console.log('Type \'start()\' to begin.\n')
      return undefined;
    }
    console.log(currentState.movesMade);
  };

  const changeState = (prop, propChangeFunction) => {
    const newState = { ...currentState, [prop]: propChangeFunction() };
    currentState = { ...newState };
  };

  const moveDisk = (from, to) => {
    const topDisk = currentState.board[from - 1].at(-1);
    const bottomDisk = currentState.board[to - 1].at(-1);

    const move = () => currentState.board.map((peg, index) => {
      if (index === (from - 1)) { return peg.slice(0, -1) };
      if (index === (to - 1))   { return peg.concat(topDisk) };
      return peg;
    });

    const tally = () => currentState.movesMade + 1;

    const checkWinner = () => {
      const winner = currentState.board.some((value, index) => {
        return value.at(-1) === 1 && (value.length === currentState.disks) && index > 0
      })
      if (winner) {
        console.log(
          'Congratulations!\n' +
          `You completed the tower in ${currentState.movesMade} moves.\n` +
          'Type \'start()\' play again!'
          );
        currentState = {}
        // resetState();
      }
    }

    if (!topDisk) {
      console.log(`Move invalid. Peg ${from} has no disk to move.`)
    } else if (topDisk > bottomDisk) {
      console.log('Move invalid. A larger disk may not be placed on top of a smaller disk.')
    } else {
      changeState('board', move);
      changeState('movesMade', tally);
      console.log(`Move successful. Moved disk ${topDisk} from peg ${from} to peg ${to}.`)
    }

    viewBoard()
    
    return checkWinner()
  }

  console.log(
    'Welcome to Towers of Hanoi!\n\n' +

    'OBJECTIVE\n' +
    'Move the stack of disks from the start peg to another peg.\n\n' +
    
    'CONSTRAINTS\n' +
    '1. Only one disk is moved at a time.\n' +
    '2. The top disk is moved from one stack and placed on top of another stack or on an empty peg.\n' +
    '3. A larger disk can not not be placed on top of a smaller disk.\n\n' +
    
    'COMMANDS\n' +
    '\'start()\'       Starts or resets gameplay\n' +
    '\'move(a, b)\'    Moves top disc from peg \'a\' to peg \'b\',\n' +
    '                e.g. \'move(1, 2)\' moves the top disk from peg 1 to peg 2\n' +
    '\'numMoves()\'    Displays current number of moves taken\n' +
    '\'gameBoard()\'   Displays current gameboard\n\n' +

    'CHALLENGE MODE\n' +
    'Once you\'ve mastered the default board, move on to solving your\n' +
    'own custom board setups in CHALLENGE MODE by typing \'start(discs, pegs)\', \n' +
    'where \'discs\' and \'pegs\' equal the numbers entered, \n' +
    'e.g. \'start(7, 5)\' will create a board with 7 discs and 5 pegs.\n\n' +

    'Good luck!\n\n' +
    
    'Type \'start()\' to begin.\n'
  )

  return {
    viewBoard: viewBoard,
    viewMovesMade: viewMovesMade,
    resetState: resetState,
    moveDisk: moveDisk
  }
}

towersOfHanoi = ToHModule();
move = towersOfHanoi.moveDisk;
start = towersOfHanoi.resetState;
numMoves = towersOfHanoi.viewMovesMade;
gameBoard = towersOfHanoi.viewBoard;
// start()
// start()
// move(1, 2);
// move(1, 3);
// move(2, 3);
// move(1, 2);
// move(3, 2);
// move(3, 1);
// move(2, 3);
// move(1, 2);
// move(3, 2);
// move(1, 3);
// move(2, 3);
// move(2, 1);
// move(3, 1);
// move(2, 3);
// move(1, 2);
// move(1, 3);
// move(2, 3);
// move(1, 2);
// move(3, 1);
// move(3, 2);
// move(1, 2);
// move(3, 1);
// move(2, 3);
// move(2, 1);
// move(3, 1);
// move(3, 2);
// move(1, 3);
// move(1, 2);
// move(3, 1);
// move(2, 3);
// move(1, 3);
// move(1, 2);
// move(3, 1);
// move(3, 2);
// move(1, 2);

start(2, 3)
move(1, 2)
move(1, 3)
move(2, 3)