
const board = [["3", "2", "1"],
[],
[]];

const pegPlaceHolder = "---"

//*************************************************/

const renderBoard = () => board.map(peg => {
  console.log(`${pegPlaceHolder} ${peg.join('')}`);
});

//*************************************************/

const moveDisc = (currentPeg, newPeg) => {

  currentPeg -= 1; // so it indexes the board array properly
  newPeg -= 1;

  const selectedDisc = board[currentPeg][board[currentPeg].length - 1];
  
  if(isValidMove(selectedDisc, newPeg)){
    board[currentPeg].pop(selectedDisc); // take it off the top of currentPeg
    board[newPeg].push(selectedDisc);  // and place it on the top of newPeg
  }

  renderBoard();
}

//*************************************************/

// There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, you MUST use a filter function at least once.

const isValidMove = (selectedDisc, newPeg) => {
  // if the last element of the newPeg is > selectedDisc then "true"
  const discOnNewPeg = board[newPeg][board[newPeg].length - 1];

  if(discOnNewPeg > selectedDisc || discOnNewPeg === undefined){
    console.log(`That move was successful, board is now:`);
    return true;
  } else {
    console.log(`You cannot place a larger disc onto a smaller one! Board is still:`);
    return false;
  }
  // return true;
  // return (board[newPeg][board[newPeg.length - 1]] < selectedDisc)
}

//*************************************************/

//There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

const checkWinner = () => {

}

//*************************************************/

renderBoard();
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(1, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);





