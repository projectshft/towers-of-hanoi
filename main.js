
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
    console.log(`That is an invalid move! Board is still:`);
  } else {
    console.log(`That move was successful! Board is now:`);
    board[currentPeg].pop(selectedDisc); // take it off the top of currentPeg
    board[newPeg].push(selectedDisc);  // and place it on the top of newPeg
  }
  renderBoard();
}

//*************************************************/

const isInvalidMove = (selectedDisc, newPeg) => {
  // 'filter' out the pegs of 'board' in which selectedDisc >= the last element of the peg then check if 'some' of the elements of the filtered array are equal to the newPeg
  return board.filter(peg => (selectedDisc >= peg[peg.length - 1])).some(element => element === board[newPeg]);
}

//*************************************************/

//There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

const checkWinner = () => {

}

//*************************************************/

renderBoard();
