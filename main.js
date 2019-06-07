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

    else if (board[toPeg-1].length === 0)
      board[toPeg-1].push( board[fromPeg-1].pop() );

    else if (board[fromPeg-1][board[fromPeg-1].length-1] > board[toPeg-1][board[toPeg-1].length-1])
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');

    else
      board[toPeg-1].push( board[fromPeg-1].pop() );

    printBoard();

    //TODO
    // check winner after every move

  };

  /////////////////////////////////////////////////////////////////////////////
  return {

    printBoard,
    moveDisc

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