//build game board for towers of hanoi
//1. board has to be 2D array
//2. must utilize MAP to print board HORIZONTALLY at least once
//3. player submits moves to game --> function called moveDisc(sp, ep)
  // and updates board if allowed
//4. an object is responsible for maintaining the board
//5. should be a way to move discs from one peg to another
//6. should be a checkWinner function
//7. if winner--> game resets automatically and prints the win (use console.log)
//8. NO for or while loops to iterate througn an array
  //must use array helper methods except forEach


var towersOfHanoi = {
  board: [['5', '4', '3', '2', '1'],
    [],
    []]
};

console.log(towersOfHanoi.board)
 

