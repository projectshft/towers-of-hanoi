const boardState = [[5, 4, 3, 2, 1], [],[]]

testArray = [1, 2, 3]

const gameMethods = {
  removeTopDisc (array) {
    array.pop()
  },
  addDiscToTop (array, property) {
    array.push(property);
  }
}

const moveController = (baseArray) => {
  /*
    a) what is the array in concern?
    b) on which index of that array are we calling removeTopDisc?
    c) on which index are we calling addDiscToTop?
  */

  console.log(baseArray)
}

moveController(boardState)

 /*

 $$$ 1) object that will hold all of the methods, called gameMethods
 $$$ 2) a function that pops the last index of an item from an array
 $$$ 3) a function that places an index on the back of an array
 4) a function that controls which arrays within boardState execute #s 2 & 3
 5) a function that renders the board state to the console
 6) a function that renders the game instructions to the console
 7) a function that checks whether a move was legal and chooses to rerender  the move

 
 function for moving pegs
 function for checking for valid moves
 function for checking winner checkWinner
 functino for resetting the game

 */