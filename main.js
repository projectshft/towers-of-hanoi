
testArray = [1, 2, 3]
lastElement = testArray[testArray.length - 1]


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

    if (this.emptyPegTester(this.boardState[moveFromConverted])) {
      return 'There are no discs on that peg. Try another.'
    }

    if (this.smallerPegTester(this.boardState[moveFromConverted], this.boardState[moveToConverted])) {
      return `
      You cannot move a larger disc on top of a smaller one.
      Try again.
      If you need further clarification on the rules, type 'instructions()'.
      `
    }

    let arrayPopped = this.removeTopDisc(this.boardState[moveFromConverted]);
    
    this.addDiscToTop(this.boardState[moveToConverted], arrayPopped)

    return this.renderBoardState()
  },
  renderBoardState () {
    this.boardState.map(index => {
      console.log(`---${index}`);
    })

    return 'Board state rendered'
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
  }, 
  emptyPegTester (array) {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  },
  smallerPegTester (moveFrom, moveTo) {
    if (moveFrom[moveFrom.length - 1] > moveTo[moveTo.length - 1]) {
      return true;
    } else {
      return false;
    }
  },
  arrayEquals (arr1, arr2) {
    if (!arr1 || !arr2) {
      return false
    }
  
    if (arr1.length != arr2.length) {
      return false;
    }
  
    let tester = true;
  
    arr1.map((post, i) => {
      if (post != arr2[i]) {
        tester = false;
      }
    })
  
    if (tester) {
      return true;
    } else {
      return false;
    }
  },
  winTester () {
    const testState = [5, 4, 3, 2, 1];
    if (this.arrayEquals(this.boardState[1], testState) || this.arrayEquals(this.boardState[2], testState)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(gameMethods.renderSmallInstructions())

const move = (num1, num2) => {
  console.log(gameMethods.moveController(num1, num2))
  if (!winTester()) {
    return 'Move again.';
  } else {
    return 'You win!'
  }
  
}

const instructions = () => {
  console.log(gameMethods.renderFullInstructions())
  return 'Good luck!';
}

const seeState = () => {
  gameMethods.renderBoardState();
  return 'Choose your next move carefully!';
}
 /*

 $$$ 1) object that will hold all of the methods, called gameMethods
 $$$ 2) a function that pops the last index of an item from an array
 $$$ 3) a function that places an index on the back of an array
 $$$ 4) a function that controls which arrays within boardState execute #s 2 & 3
 $$$ 5) a function that renders the board state to the console
 $$$ 6) a function that renders the game instructions to the console
 $$$ 7) a function that checks whether a move was legal and chooses to rerender  the move
  $$$ a) whether there is a peg there to move
  $$$ b) checks to be sure that the peg it is moving to isn't smaller
    $$$ *should return true if so (it will be a test), false if not
 8) create a function that tests for a winner
  b) make it a true false logic
  c) insert into move()
  a) add an if statement in move() to either say 'Move again.' or announce a win
 9) create a function should reset after it checks (change gameMethods.boardState)
 9) create a move() function that executes the game for the user
 */