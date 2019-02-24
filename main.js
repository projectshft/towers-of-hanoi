
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

  if(isInvalidMove(selectedDisc, newPeg)){
    console.log(`You cannot place a larger disc onto a smaller one! Board is still:`);
  } else {
    console.log(`That move was successful, board is now:`);
    board[currentPeg].pop(selectedDisc); // take it off the top of currentPeg
    board[newPeg].push(selectedDisc);  // and place it on the top of newPeg
  }
  renderBoard();
}

//*************************************************/

// There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, you MUST use a filter function at least once.

const isInvalidMove = (selectedDisc, newPeg) => {
  // filter out the pegs in which selectedDisc >= the last element of the peg
  const invalid = board.filter(peg => (selectedDisc >= peg[peg.length - 1]));
  // return true if 'some' of the elements in 'invalid' are equal to newPeg
  const result = invalid.some(element => {
    return element === board[newPeg]; 
  });
  return result; 
}

//*************************************************/

//There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

const checkWinner = () => {
  
}

//*************************************************/

renderBoard();






