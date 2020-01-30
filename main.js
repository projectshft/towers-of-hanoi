// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
var defaultBoard=[["5", "4","3", "2", "1"],[],[]];
var numberOfPegs = 2;  // remember number of pegs is 0 basee so really 1 more 
var numberOfDisks = 5;
var startingPeg = 0;

// calculate winning disk total
var winDiskCount = defaultBoard[0].reduce(function (winDiskCount, disk) {
  return (winDiskCount + parseInt(disk, 10));
},0 );

var boardStatus = {
  pegs: [["5", "4","3", "2", "1"],[],[]],
  moves: 0
}


function playGame() {
  // Get the move values from input elements
  var moveFrom = document.getElementById("moveDiskFrom").value - 1
  var moveTo = document.getElementById("moveDiskTo").value - 1
  var validMove = checkForValidMove(moveFrom,moveTo)

  if (validMove == 'true') {
    movedisk(moveFrom,moveTo)
    displayBoard()
    var winner = checkForWinner()
    if (winner == 'Winner') {
      document.getElementById("boardMessage").innerHTML = "Congraulations - you won the game in " + boardStatus.moves + " moves.";
      resetGame()
  } }
  else {
    document.getElementById("boardMessage").innerHTML = ""
    alert(validMove)
  }
}

function movedisk(moveFrom,moveTo) {
  //save top disk from peg and remove from peg
  var movedisk = boardStatus.pegs[moveFrom].pop()
  //add disk to move to peg
  boardStatus.pegs[moveTo].push(movedisk)

  //increment the move counter
  boardStatus.moves ++
  document.getElementById("boardMessage").innerHTML = "That move was successful, board is now"
}

function checkForWinner() {
  //loop through pegs if  disk cout = 15 then all disks moved winner
  for (i = 0; i <= numberOfPegs; i++) { 
    if (typeof boardStatus.pegs[i]  != 'undefined') {
      var diskCount = boardStatus.pegs[i].reduce(function (diskCount, disk) {
        return (diskCount + parseInt(disk, 10));
      },0 );
      if (diskCount == winDiskCount && startingPeg != i) {
        alert('You have won the game in ' + boardStatus.moves + ' moves')
        return ("Winner")
    } }
  }
  return("No Winner")
}    

function checkForValidMove(moveFrom,moveTo) {
  //Test to make sure pegs are within in range of number of pegs on board
  if ((moveFrom < 0) || (moveTo < 0) || (moveTo > numberOfPegs) || (moveFrom > numberOfPegs)) {
    return ('You entered a tower out of range, must be 1 to ' + numberOfPegs + 1)
  }

  //Test to make sure tower numbers are not the same
  if (moveFrom  == moveTo ) {
    return ('Tower numbers can not be the same')
  }
   //Test to make sure there are disk on the move from peg
  if (boardStatus.pegs[moveFrom].length  == 0) {
    return ('No disk to move on the move from tower you selected')
  }

  //Test to make sure the move to peg can accept the disk from the movefrom peg
  if (boardStatus.pegs[moveTo][boardStatus.pegs[moveTo].length - 1] < boardStatus.pegs[moveFrom][boardStatus.pegs[moveFrom].length - 1]) {
   return ('You cannot move a larger disk on top of a smaller one, board is still:')
  }

 return ('true')
}

function displayBoard() {           //update screen with new tower configuration
  //update tower 1
  var displayPeg1 = '1--- '
  var pegdisks1 =  boardStatus.pegs[0].forEach(function(disk){
    displayPeg1 = displayPeg1.concat(disk + ' ')
  })
  document.getElementById("peg1").innerHTML = displayPeg1;

  //update tower 2
  var displayPeg2 = '2--- '
  var pegdisks2 =  boardStatus.pegs[1].forEach(function(disk){
    displayPeg2 = displayPeg2.concat(disk + ' ')
  })
  document.getElementById("peg2").innerHTML = displayPeg2;

  //update tower 3
  var displayPeg3 = '3--- '
  var pegdisks3 =  boardStatus.pegs[2].forEach(function(disk){
    displayPeg3 = displayPeg3.concat(disk + ' ')
  })
  document.getElementById("peg3").innerHTML = displayPeg3;

    //clear input fields
  document.getElementById("moveDiskFrom").value = "";
  document.getElementById("moveDiskTo").value = "";
}


function resetGame() {
  //reseit move counter
  boardStatus.moves = 0;

  //clear pegs
  boardStatus.pegs = []
  
  //reset pegs
   for(i = 0; i <= numberOfPegs; i++) {
    boardStatus.pegs[i]  = []
  }
  
  for (i = 0; i <= numberOfPegs; i++ ) {
    if (i == startingPeg) {
      for (j = 0; j < numberOfDisks; j++) {
        var disk = numberOfDisks - j
        boardStatus.pegs[i].push(disk)
      }
    }
  }

  document.getElementById("boardMessage").innerHTML = "Game - Reset";

  displayBoard()
}
