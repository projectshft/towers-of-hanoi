
testArray = [1, 2, 3]

const gameMethods = {
  boardState: [[5, 4, 3, 2, 1], [],[]],
  removeTopDisc (array) {
    return array.pop()
  },
  addDiscToTop (array, property) {
    array.push(property);
  },
  numberChecker (num) {
    if (num != 1 && num != 2 && num != 3) {
      return false;
    } else {
      return true;
    }
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
  moveController (moveFrom, moveTo) {

    if (!this.numberChecker(moveFrom) || !this.numberChecker(moveTo)) {
      return 'Numbers inserted into the argument of gameMethods.moveController must be either 1, 2, or 3.' 
    }

    const moveFromConverted = this.indexConverter(moveFrom)
    const moveToConverted = this.indexConverter(moveTo)

    let arrayPopped = this.removeTopDisc(this.boardState[moveFromConverted]);

    this.removeTopDisc(this.boardState[moveFromConverted]);
    
    this.addDiscToTop(this.boardState[moveToConverted], this.boardState[arrayPopped])

  

    return 'good so far'
  }
}

console.log(`moveController return: ${gameMethods.moveController(1, 3)}`)
console.log(gameMethods.boardState)

 /*

 $$$ 1) object that will hold all of the methods, called gameMethods
 $$$ 2) a function that pops the last index of an item from an array
 $$$ 3) a function that places an index on the back of an array
 $$$ 4) a function that controls which arrays within boardState execute #s 2 & 3
 5) a function that renders the board state to the console
 6) a function that renders the game instructions to the console
 7) a function that checks whether a move was legal and chooses to rerender  the move
  a) whether the peg has a place to move
  b) checks to be sure that the peg it is moving to isnt' smaller
 8) create a function that checks for a winner
  a) this should reset after it checks
 9) create a move() function that executes the game for the user
 */