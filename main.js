/**
* 
* Tower of Hanoi evaluation from Project Shift
* Author: Daniel Posse
* 
*/

//later impletement user passing number of discs and pegs, check if it is legal
//1st draft - don't use discs and pegs, create board manually to 3x3
let Board = () => {

  let board = [
    ['3','2','1'],
    [],
    []
  ];

  let numMoves = 0;
  const winSum = board[0].reduce( (sum, curr) => {

    sum += +curr;
    return sum;

  },0);


  /////////////////////////////////////////////////////////////////////////////
  let printBoard = () => {

    console.log('\n');
    //iterate through pegs, map each peg array to string
    board.forEach( peg => {

      //better with reduce since creating a return string?

      let pegString = '--- ';

      peg.map( disc => {

        pegString += `${disc} `;

      });

      console.log(`${pegString}\n`);

    });

    console.log('\n');

  };


  /////////////////////////////////////////////////////////////////////////////
  let moveDisc = (fromPeg, toPeg) => {

    if (board[fromPeg-1].length === 0) 
      console.log('There are no more discs on that peg.');

    //helper function worth?
    else if (board[toPeg-1].length === 0) {
      board[toPeg-1].push( board[fromPeg-1].pop() );
      console.log('That move was successful, board is now:');
      numMoves++;
    }

    else if (board[fromPeg-1][board[fromPeg-1].length-1] > board[toPeg-1][board[toPeg-1].length-1])
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');

    else {
      board[toPeg-1].push( board[fromPeg-1].pop() );
      console.log('That move was successful, board is now:');
      numMoves++;
    }

    printBoard();
    checkWinner(toPeg);

    //TODO
    // check winner after every move

  };

  /////////////////////////////////////////////////////////////////////////////
  let legalMoves = peg => {

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

  };

  /////////////////////////////////////////////////////////////////////////////
  let checkWinner = peg => {

    //not winning if we're on first peg
    if (peg-1 === 0) 
      return;

    let sumPeg = board[peg-1].reduce( (sum, curr) => {

      sum += +curr;
      return sum

    },0);

    if (sumPeg === winSum) {

      console.log('You have won. Good job friend.');

    }

  };


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

let gameBoard = Board();

console.log('New game started. Initial board state:');
gameBoard.printBoard();