/*There is a board with 3 pegs.  1 peg is holding 5 discs decreasing in size up the peg.*/
var board = [
    ["5", "4", "3", "2", "1"],
    [],
    []
];

//User submits to move the disc from 1 peg to another
/*Check to see if the fromPeg has a disc to move. If Yes, check to toPeg.  If no, ask the user to choose again and show them the board.*/
/*Check to see if the toPeg can take that disc.  You can only put the disc on a smaller disc. If yes,  move the peg and add to the move count. If no, ask user to choose the pegs again and show them the board.*/
// Repeat steps
/*Win when all 5 discs are in order on a different peg than they started. Check if they won after every move.  If yes, end the game by announcing the winner (console.log) and reset the board.*/

