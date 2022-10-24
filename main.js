//Goal: Create a game that can be played in the console using the following rules:
  //1. There are 3 pegs, one peg starts with all the disks from largest at the bottom to smallest at the top
  //2. The player can only move one disk at a time
  //3. larger disks can only exist under smaller disks

//Instruction:
  //A board that utilizes a 2D Array
    // [
    //   [5, 4, 3, 2, 1],
    //   [],
    //   []
    // ]
  //be able to print the board horizontally in the console
    //this should utilize a map function
  //move function
    //accepts disk to move from and to move to
    //checks if move is valid
      //if valid updates gameboard
      //if invalid logs message to the user, but does not update the board
  //There should be an object that maintains the state of the board
  //There should be a way to move discs from one peg to another.
  // There should be a checkWinner function
   // You win the game by putting all the discs back in the original order but on a new peg.
  //  Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.

  let gameboard = [
      [5, 4, 3, 2, 1],
      [],
      []
    ];
  
  function displayBoard(board) {
    //accepts the current state of the board and logs it in a readable form
    //map the gameboard to something like this:
      //----array1
      //----array2
      //----array3
  }

  function isMoveValid(from, to, board) {
    //accepts the move that was made and the current state of the board.
    //return true/false

    //make sure that the value of the last item in the array that is coming FROM is smaller than the array its going TO
      //if true return true
      //else return false
  }

  function resetBoard() {
    //sets the gameboard back to the initial value
  }

  function checkWinner(board) {
    //if won
      //console.log("Yay you win");
      //resetBoard();
    //else do nothing? return false?
  }

  function moveDisk(from, to) {
    if(isMoveValid(from, to, board)){
      //console.log any important messages ie success
      updateBoard(from, to, board);
      checkWinner(board);
    } else {
      console.log("Invalid Move");
      displayBoard(board)
    }
  }

//constuctor function to put it all into and make instances of the game

function NewGameToH (pegs, disks) {
  function getNumberOfPegs() {
    console.log(this.pegs);
    return this.pegs;
  }

  function getNumberOfDisks() {
    console.log(this.disks);
    return this.disks;
  }

  let startingArray = [];
  for (let i = disks; i > 0; i--) {
    startingArray.push(i);
  }

  let gameboard = [startingArray];

  for (let i = 1; i < pegs; i++) {
    gameboard.push([]);
  }

  function displayBoard() {
    gameboard.forEach((peg) => {
      let outputStr = '----- ';
      peg.forEach((disk) => {
        outputStr += disk + ' ';
      })
      console.log(outputStr)
      console.log('')//so that the console does not group outputs
    })
 }

  function isMoveValid(from, to, board) {
    // console.logl errors and successe
    if(from === to) {
      console.log("INVALID MOVE :(")
      console.log("You must move from one disk to another")
      console.log("Make sure you only put smaller disks on top of larger ones")
      return false;
    }

    if( (gameboard[from].length !== 0) && //if peg that is being moved from has disks and 
        (gameboard[to].length === 0) ){   //the peg we are moving to has no disk its valid
      return true;
    }

    if (gameboard[from].length === 0) { //the peg we are moving from is empty
      console.log("INVALID MOVE :(");
      console.log("The peg you are trying to move from is currently empty.")
      return false;
    }

    let diskFrom = gameboard[from]
                                  .at(gameboard[from].length - 1);
    let diskTo = gameboard[to]
                              .at(gameboard[to].length - 1);
    if(diskFrom < diskTo) {
      return true;
    }else {
      console.log("INVALID MOVE :(");
      console.log("You can only put smaller disks on to larger disks")
      return false;
    }
    }
    
    function resetBoard() {
      //sets the gameboard back to the initial value
    }

  function checkWinner(board) {
    //if won
      //console.log("Yay you win");
      //resetBoard();
      //else do nothing? return false?
  }

  function updateBoard(from, to, board) {
    let diskMoved = gameboard[from].pop()
    gameboard[to].push(diskMoved);
  }

  function moveDisk(from, to) {
    if(isMoveValid(from - 1, to - 1, board)){
      console.log("This move is allowed.");
      updateBoard(from - 1, to - 1, board);
      checkWinner(board);
    } else {
      console.log("Invalid Move");
      displayBoard(board)
    }
  }

  return {
    getNumberOfDisks: getNumberOfDisks,
    getNumberOfPegs: getNumberOfPegs,
    moveDisk: moveDisk
  }
}


let newGame = NewGameToH(3, 5);