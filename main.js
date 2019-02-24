const TowersOfHanoi = () => {
  const board = [["5", "4", "3", "2", "1"],
  [],
  []];
  const numberOfDiscs = board[0].length;
  const pegPlaceHolder = "---"
  let counter = 0;
  //*************************************************/

  const renderBoard = () => board.map(peg => console.log(`${pegPlaceHolder} ${peg.join('')}`));

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
      board[newPeg].push(selectedDisc); // and place it on the top of newPeg
    }
    counter++;
    renderBoard();
    isWinner(board);
  }

  //*************************************************/

  // 'filter' out the pegs of 'board' in which selectedDisc >= the last element of the peg then check if 'some' of the elements of the filtered array are equal to the newPeg
  const isInvalidMove = (selectedDisc, newPeg) => board.filter(peg => (selectedDisc >= peg[peg.length - 1])).some(element => element === board[newPeg]);

  //*************************************************/

  const isWinner = board => {
    const checkWin = board.reduce((result, peg) => {
    // make sure it's not the original peg
      if(peg.length === numberOfDiscs && board.indexOf(peg) > 0){   // the starting peg 
          result.push(peg);
      }
      return result;
      }, []); 
    // reduce down to pegs that contain all discs, if it returns a non-empty output = 👍
    if(checkWin.length === 1){
      console.log(`Congratulations! You won in ${counter} moves! Refresh to play again.`);
    } else {
      console.log(`Next move please.`);
    }
  }
  return {
    move: moveDisc,
    startGame: renderBoard
  };
}
//*************************************************/

const game = TowersOfHanoi();
