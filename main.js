/**
* 
* Tower of Hanoi evaluation from Project Shift
* Author: Daniel Posse
* 
*/

//later impletement user passing number of discs and pegs, check if it is legal
//1st draft - don't use discs and pegs, create board manually to 3x3
let Board = (pegs=3, discs=3) => {

  if (pegs < 3 || discs < 1) {
    console.log('Enter at least 3 pegs and 1 disc.'); //user can bore themselves if they want to play with 1 or 2 discs
    return;
  }

  let board, numMoves, winSum;

  const setBoard = () => {

    board = [];

    for (let i=0; i<pegs; i++)
      board.push([]);
  
    for (let i=0; i<discs; i++)
      board[0][i] = discs - i;

    numMoves = 0;
    winSum = board[0].reduce( (sum, curr) => {

      sum += +curr;
      return sum;

    },0);

  };

  setBoard();


  /////////////////////////////////////////////////////////////////////////////
  const printBoard = () => {

    let pegString = '\n';
    
    //iterate through pegs, map each peg array to string
    board.forEach( peg => {

      //better with reduce since creating a return string?

      pegString += '--- ';

      peg.map( disc => {

        pegString += `${disc} `;

      });

      pegString += '\n';

    });

    pegString += '\n';

    console.log(pegString);

    return pegString;

  };


  /////////////////////////////////////////////////////////////////////////////
  const moveDisc = (fromPeg, toPeg) => {

    //check for legal values first
    if (fromPeg < 1 || fromPeg > board.length || toPeg < 1 || toPeg > board.length
        || typeof fromPeg !== 'number' || typeof toPeg !== 'number') {
    
      console.log(`Enter peg numbers from 1 to ${board.length}`);
      return false;

    }

    if (board[fromPeg-1].length === 0) {
      console.log('There are no more discs on that peg, board is still:');
      printBoard();
      return false;
    }

    //helper function worth?
    if (board[toPeg-1].length === 0) {
      board[toPeg-1].push( board[fromPeg-1].pop() );
      console.log('That move was successful, board is now:');
      numMoves++;
      printBoard();
      checkWinner(toPeg);
      return true;
    }

    if (board[fromPeg-1][board[fromPeg-1].length-1] > board[toPeg-1][board[toPeg-1].length-1]) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      printBoard();
      return false;
    }

    //else
      board[toPeg-1].push( board[fromPeg-1].pop() );
      console.log('That move was successful, board is now:');
      numMoves++;

    printBoard();
    checkWinner(toPeg);

    return true;

  };

  /////////////////////////////////////////////////////////////////////////////
  const legalMoves = peg => {

    if (peg === undefined || peg > board.length || peg < 1) {
      console.log(`Enter a peg number as argument (1-${board.length})`);
      return;
    }

    if (board[peg-1].length === 0) {
      console.log('There are no discs on this peg');
      return;
    }

    let disc = board[peg-1][board[peg-1].length-1];
    let pegs = [];
    for (let i=0; i<board.length; i++) {
      pegs.push(i+1);
    }

    //save to variable in case we actually use this instead of just displaying

    let legalPegs = pegs.filter( (currArr, index) => {

      let topOfArray = board[index][board[index].length-1];

      if (board[index].length === 0 || topOfArray > disc)
        return true;

    });

    console.log(legalPegs);

    return legalPegs;

  };

  /////////////////////////////////////////////////////////////////////////////
  const checkWinner = peg => {

    //not winning if we're on first peg
    if (peg-1 === 0) 
      return;

    let sumPeg = board[peg-1].reduce( (sum, curr) => {

      sum += +curr;
      return sum

    },0);

    if (sumPeg === winSum) {

      console.log(`You have won in ${numMoves} moves. Good job friend.`);
      //restart game
      setBoard();

      printBoard();

      console.log('Towers reset.\nIf you would like to create new towers enter \"game = Board(pegs, discs)\" below.');

    }

  };

  printBoard();
  /////////////////////////////////////////////////////////////////////////////
  return {

    printBoard,
    moveDisc,
    legalMoves

  };

} //end board


/**
 * 
 * 'Run' game
 * 
 */

// let gameBoard = Board();

// console.log('New game started. Initial board state:');
// gameBoard.printBoard();

console.log('New game started, default 3 pegs and 3 discs.');
console.log('If you would like to create a new tower set, enter \"game = Board(pegs, discs)\" below.');
let game = Board();