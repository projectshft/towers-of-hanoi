const boardState = [[5, 4, 3, 2, 1], [],[]]

testArray = [1, 2, 3]

const gameMethods = {
  removeTopDisc (array) {
    array.pop()
  },
  addDiscToTop (array, property) {
    array.push(property);
  },
  indexConverter (num) {
    let newNum;

    if (num === 1) {
      newNum = 0
    } else if (num === 2) {
      newNum = 1
    } else if (num === 3) {
      newNum = 2
    } else {
      newNum = 'Must insert either 1, 2, or 3 into argument gameMethods.indexConverter';
    }

    return newNum
  },
  moveController (baseArray, moveFrom) {
  /*
    $$$ a) what is the array in concern?
    b) on which index of that array are we calling removeTopDisc?
      $$$ *) check to see if num1 is 1, 2, or 3
      *) create an index converter function
    c) on which index are we calling addDiscToTop?
      *) check to see if it is 1, 2, or 3 (create a function for it)
  */

    if (moveFrom != 1 && moveFrom != 2 && moveFrom != 3) {
      return 'number must be either 1, 2, or 3'
    }

    //index converter here, after if statements

    this.removeTopDisc(baseArray[moveFrom])

    return 'good so far'
  }
}



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