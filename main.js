//defined function to check if each row was equal to a winning state
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Loop through arr1 and see if each item is equal to arr2
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

//Since printBoard() inserts new HTML elements each time, an addListeners() function is defined to easily add listeners back to the new elements
function addListeners() {
  var pegs = document.querySelectorAll('.peg')

  pegs.forEach(function(peg) {
    peg.addEventListener('click', handlePegClick)
  })
}

var game = {
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
    [],
    []
  ],
  winningStack: [5, 4, 3, 2, 1],
  visualBoard: [],
  firstPegSelect: false,
  firstPegVal: 0,
  printBoard: function() {
    newBoard = []
    //Loop thorugh each row on the board
    for(let i = 0; i < this.board.length; i++) {
      //map it to a new array which turns the numbers to strings then joins them with a space
      const rowString = this.board[i].map(num => num.toString()).join(' ');
      //push p element to newBoard and set id to i and class to pet
      newBoard.push(`<p class='peg' id=${i}>--- ${rowString}</p>`);
      //set the visual board to the new board outside the for loop
      this.visualBoard = newBoard;
    };
    //update the HTML to reflect the new board
    document.querySelector(".towers-container").innerHTML = this.visualBoard.join('')
    addListeners()
  },
  //function to log a message with the new board
  displayMove: function() {
    document.querySelector('.message').innerHTML = 'That move was successful, the board is now:'
    this.printBoard()
  },
  resetBoard: function() {
    //loop through the board and add an empty array for each item based on the current length
    for(let i = 0; i < this.board.length; i++) {
     this.board[i] = [] 
    }
    //set the first peg equal to the winning stack
    this.board[0] = this.winningStack
    message('Board reset.')
    this.printBoard()
  },
  //checks if the board is in a winning state
  checkWinner: function() {
    let winner = false;
    //loop through each array in the board 2D array. Skip the first array (set i = 1) because you cannot win if they are lined up on the starting peg
    for(let i = 1; i < this.board.length; i++) {
      //if its equal to the winning stack, reset the game, otherwise run display move
      if(arraysEqual(this.board[i], this.winningStack)) {
      winner = true;
      this.printBoard()
      message("you win! resetting...");
      setTimeout(() => this.resetBoard(), 2000)
    }
    }
  if(winner === false) {
    this.displayMove()
  }
  },
  //function to change number of pegs in the board
  changePegNumber: function(num) {
    //if the number passed is already the length of the board, alert the user
    if (num === this.board.length) {
      message(`There are already ${num} pegs`);
      return;
      //only except a peg number between 2 and 10
    } else if (num <= 2 || num > 10) {
      message("Please choose a number of pegs between 3 and 10");
      return;
    } else {
      //while loop that says as long as the board length is not equal to the passed number, if the number is greater push empty arrays, and if it's less .pop()
      while(num !== this.board.length) {
        if(num > this.board.length) {
          this.board.push([])
        } else if(num < this.board.length) {
          this.board.pop()
        }  
    }
    this.resetBoard()
    message(`Board now has ${num} pegs`)
    }
  },
  //function to change the number of discs in the game
  changeDiscNumber: function(num) {
    //if the number passed is already the amount of discs, alert the user
    if (num === this.board[0].length) {
      message(`There are already ${num} discs`);
      //only except numbers between 3 and 20 discs
    } else if (num < 3 || num > 20) {
      message("Please choose a number of pegs between 3 and 20");
    } else {
      let discArr = []
      //push numbers in order to discArr then reverse it
      for(let i = 0; i < num; i++) {
        discArr.push(i + 1)
      }
      this.board[0] = discArr.reverse()
      //set the winning stack by resetting its value (empty array) then .push() based on num
      this.winningStack = []
      for(let i = num; i > 0; i--) {
        this.winningStack.push(i)
      }
      
      this.resetBoard()
      message(`Board now has ${num} discs`)

    }
  }
};

//define a function that allows user to move disc from one peg to another
var moveDisc = function(peg1, peg2) {

  //define variables to make it easier
  let fromPeg = game.board[peg1];
  let toPeg = game.board[peg2];

  //if the top disc on the fromPeg is larger than the top disc on the to peg, message the user
  if (fromPeg[fromPeg.length - 1] > toPeg[toPeg.length - 1]) {
    message("You cannot move a larger disc on top of a smaller one.");
    game.printBoard();
  } else {
    //pop the disc from the one peg and push it to the to Peg, then check if the user won
    const disc = fromPeg.pop();
    toPeg.push(disc);
    game.firstPegSelect = false;
    game.checkWinner();
  }
  addListeners();
}

//define message function so alerting user is easier and less intrusive than alert()
function message(arg) {  
  document.querySelector('.message').innerHTML = arg
}

//handle click to the change peg button
function handleChangePegClick () {
  //select value entered in the input
  numPegs = document.querySelector('.change-pegs-num').value
  //checks if its blank before parsing to integer
  if(numPegs === '') {
    message("Please enter a number")
    return;
  }
  //parse to integer then pass to changePegNumber function within game
  numPegs = parseInt(numPegs)
  game.changePegNumber(numPegs)
  //change number of discs displayed to user
  document.querySelector('.num-pegs').innerHTML = `Number of Pegs: ${numPegs}`
  document.querySelector('.change-pegs-num').value = '';
}

function handleChangeDiscClick () {
  numDiscs = document.querySelector('.change-discs-num').value
  if(numDiscs === '') {
    message("Please enter a number")
    return;
  }
  numDiscs = parseInt(numDiscs)
  game.changeDiscNumber(numDiscs)
  document.querySelector('.num-discs').innerHTML = `Number of Discs: ${numDiscs}`
  document.querySelector('.change-discs-num').value = ''
}

//handle clicking a peg in the game
function handlePegClick (e) {

  //convert id of the selected peg to an integer
  let pegNum = parseInt(e.target.id);
  
  //if this is the first peg the user has selected
  if(game.firstPegSelect === false) {
    //then check if that peg is empty and give an error if it is
    if(e.target.innerHTML == '--- ') {
      message(`There are no discs on peg ${pegNum + 1}`)
      return;
    }
    //if not empty, set state of game so that the first peg has been selected, set the game's firstPegVal to the peg selected, and message the user
    game.firstPegSelect = true;
    game.firstPegVal = pegNum
    message(`Peg ${pegNum + 1} selected, select peg to move to.`)
  } else {
    //If game state shows first peg has been selected, move the disc from firstPegVal to the selected peg and set the state back so first peg selected has a false value 
    moveDisc(game.firstPegVal, pegNum)
    game.firstPegSelect = false;
  }


}

document.addEventListener("DOMContentLoaded", function() {
  game.printBoard()
  message('Good Luck!')

  addListeners()
  document.querySelector('.change-pegs-btn').addEventListener('click', handleChangePegClick)
  document.querySelector('.change-discs-btn').addEventListener('click', handleChangeDiscClick)
})

