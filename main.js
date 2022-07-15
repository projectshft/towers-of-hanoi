
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
    
    this.addDiscToTop(this.boardState[moveToConverted], arrayPopped)

    return this.renderBoardState()
  },
  renderBoardState () {
    this.boardState.map(index => {
      console.log(`---${index}`);
    })

    return 'Choose your next move carefully?'
  },
  renderFullInstructions () {
    return `
    Welcome to Towers of Hanoi! 
    
    There are 3 pegs and 5 discs. The disks are represented by the numbers. Each disc is relative in size to the others based on it's number. 
    
    (For example, 2 is larger than 1, but smaller than 3. 3 is larger than 2, but smaller than 4. etc.)
    
    The goal is to re-stack the discs so that they are all on the same peg, but a different one than the one on which they started. 
    
    The catch is that a larger peg can never go on top of a smaller peg. 
    
    To move, type 'move()' with two arguments. The first argument will be the peg you are moving from, the second will be the peg you are moving to. You can only move the topmost disc.
    
    For example, 'move(1, 2)' will move the topmost disc from the first peg to the second peg. 'move(3, 1)' will move from the third peg to the first peg.`
  },
  renderSmallInstructions () {
    return `
    Enter 'move()' with the pegs to want to move to and from as arguments.
    
    To see the starting state, type 'seeState()'.

    For for detailed instructions, type 'instructions()'.
    `
  }
}

console.log(gameMethods.renderSmallInstructions())

const move = (num1, num2) => {
  console.log(gameMethods.moveController(num1, num2))
  return 'Move again.';
}

const instructions = () => {
  console.log(gameMethods.renderFullInstructions())
  return 'Good luck!';
}


//find a way to render initial state ("type seeState() to see the initial state")

 /*

 $$$ 1) object that will hold all of the methods, called gameMethods
 $$$ 2) a function that pops the last index of an item from an array
 $$$ 3) a function that places an index on the back of an array
 $$$ 4) a function that controls which arrays within boardState execute #s 2 & 3
 $$$ 5) a function that renders the board state to the console
 $$$ 6) a function that renders the game instructions to the console
 7) a function that checks whether a move was legal and chooses to rerender  the move
  a) whether there is a peg there to move
  b) checks to be sure that the peg it is moving to isnt' smaller
 8) create a function that tests for a winner
 9) create a function should reset after it checks (change gameMethods.boardState)
 9) create a move() function that executes the game for the user
 */