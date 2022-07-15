//DEVELOPER LOGIC
const gameMethods = {
  boardState: [[5, 4, 3, 2, 1], [],[]],
  resetBoardState () {
    this.boardState = [[5, 4, 3, 2, 1], [],[]];
    this.renderBoardState()
    return 'Board reset'
  },
  removeTopDisc (array) {
    return array.pop()
  },
  addDiscToTop (array, property) {
    array.push(property);
  },
  moveController (moveFrom, moveTo) {

    if (!this.numberTester(moveFrom) || !this.numberTester(moveTo)) {
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
  numberTester (num) {
    if (num != 1 && num != 2 && num != 3) {
      return false;
    } else {
      return true;
    }
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
  winTester () {
    const testState = [5, 4, 3, 2, 1];
    if (this.arrayEquals(this.boardState[1], testState) || this.arrayEquals(this.boardState[2], testState)) {
      return true;
    } else {
      return false;
    }
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
    
    There are 3 pegs and 5 discs. The disks are represented by the numbers. The pegs are represented by three horizontal lines. Each disc is relative in size to the others based on it's number. 
    
    (For example, 2 is larger than 1, but smaller than 3. 3 is larger than 2, but smaller than 4. etc.)
    
    The goal is to re-stack the discs from the first peg so that they are all on the same peg, but a different one than the one on which they started. 
    
    The catch is that a larger peg can never go on top of a smaller peg. 
    
    To move, type 'move()' with two arguments. The first argument will be the peg you are moving from, the second will be the peg you are moving to. You can only move the topmost disc.
    
    For example, 'move(1, 2)' will move the topmost disc from the first peg to the second peg. 'move(3, 1)' will move from the third peg to the first peg.
    
    To view the game's starting point, type 'seeState()'.

    If you need to start over, type 'gameMethods.resetBoardState()'.

    *** cheat code: gameMethods.winWithoutTrying() ***
    `
  },
  renderSmallInstructions () {
    return `
    TOWERS OF HANOI
    
    Enter 'move()' with the pegs to want to move to and from as arguments.
    
    To see the starting state, type 'seeState()'.

    For for detailed instructions, type 'instructions()'.
    `
  },
  winWithoutTrying () {
    this.boardState = [[1], [5, 4, 3, 2],[]];
    this.moveController(1, 2);
  }
}

//USER LOGIC 
//according to user instructions and commands
console.log(gameMethods.renderSmallInstructions())

const move = (num1, num2) => {
  console.log(gameMethods.moveController(num1, num2))
  if (!gameMethods.winTester()) {
    return 'Move again.';
  } else {
    gameMethods.resetBoardState();
    return 'You win! Play again below!'
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