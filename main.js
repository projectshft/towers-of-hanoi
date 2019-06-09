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
    return null;
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
  /**
   * use legalMoves to get array
   * if undefined - illegal input
   * [] - no legal moves
   * [some items] - legal moves
   * so if [].find(toPeg) then move
   * else no move
   * @param {*} fromPeg 
   * @param {*} toPeg 
   */
  const moveDisc = (fromPeg, toPeg) => {

    const returnObj = {
      moveSuccessful: false,
      gameWon: false
    };

    //check for legal values first
    if (fromPeg < 1 || fromPeg > board.length || toPeg < 1 || toPeg > board.length
        || typeof fromPeg !== 'number' || typeof toPeg !== 'number') {
    
      console.log(`Enter two peg numbers from 1 to ${board.length} like so: "game.moveDisc(1,2)"`);
      return false;

    }

    if (legalMoves(fromPeg).includes(toPeg)) {
      board[toPeg-1].push( board[fromPeg-1].pop() );
      returnObj.moveSuccessful = true;
      numMoves++;

      console.log('That move was successful, board is now:');
      printBoard();

      returnObj.gameWon = checkWinner(toPeg);

      return returnObj;
    }

    //else
    console.log('Illegal move, board is still:');
    printBoard();

    return returnObj;

  };

  /////////////////////////////////////////////////////////////////////////////
  const legalMoves = peg => {

    //don't need this validation if legalMoves only called by moveDisc
    if (peg === undefined || peg > board.length || peg < 1 || typeof peg !== 'number') {
      console.log(`Enter a peg number as argument (1-${board.length})`);
      return;
    }

    if (board[peg-1].length === 0) {
      console.log('There are no discs on this peg');
      return [];
    }

    let disc = board[peg-1][board[peg-1].length-1];
    let pegs = []; //want [1,2,...,n] for n pegs
    for (let i=1; i<=board.length; i++) {
      pegs.push(i);
    }

    //save to variable in case we actually use this instead of just displaying
    //if not console.log, replace 'let legalPegs = ' with 'return'

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
      return false;

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

      return true;

    }

    return false;

  };

  const solveGame = () => moveTowers(discs, 1, 2, 3);

  printBoard();
  /////////////////////////////////////////////////////////////////////////////
  return {

    printBoard,
    moveDisc,
    solveGame

  };

} //end board


/**
 * 
 * 'Run' game
 * 
 */

console.log('New game started, default 3 pegs and 3 discs.');
console.log('If you would like to create a new tower set, enter \"game = Board(pegs, discs)\" below.');
let game = Board();