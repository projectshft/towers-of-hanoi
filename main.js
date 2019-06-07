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

      console.log(`${pegString} \n`);

    });

    console.log('\n');

  };


  /////////////////////////////////////////////////////////////////////////////
  let moveDisc = (fromPeg, toPeg) => {

    board[toPeg-1].push( board[fromPeg-1].pop() );

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

let board = Board();

console.log('New game started. Initial board state:');
board.printBoard();