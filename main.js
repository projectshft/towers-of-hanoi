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
    ['4'],
    ['6','5']
  ];

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

  return {

    printBoard

  };

} //end board