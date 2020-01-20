// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
var defaultBoard=[["5", "4", "3", "2", "1"],[],[]];
let boardStatus = {
  inPlay:false,
  pegs:[],
  moves:0
}

function moveDisk() {
    //If firwt or new game reset variables
    if (boardStatus.inPlay == false) {
      boardStatus.inPlay = true;
      boardStatus.pegs = defaultBoard.map(function (disk) {
        return disk;
      })
      boardStatus.moves = 0
    };
    let moveFrom = document.getElementById("moveDiskFrom").value -1; //subtract 1 to set the storage array index value
    let moveTo = document.getElementById("moveDiskTo").value -1; //subtract 1 to set the storate array index value
    
    let validationError = checkForValidMove(moveFrom,moveTo)
    if (validationError != 'true') {
      alert(validationError)
      return 
    }

    var movedisk = boardStatus.pegs[moveFrom].pop()
    boardStatus.pegs[moveTo].push(movedisk)

    console.log('moving disk from: ' + moveFrom + ' to: ' + moveTo )
    boardStatus.moves ++

    displayBoard()    //update display with new tower moves
    document.getElementById("boardMessage").innerHTML = "That move was successful, board is now"

    //check to see if the game has been won
    if (checkGameStatus() == 'Winner') {
      console.log('winner winner chicken dinner')
      boardStatus.inPlay = false;
      document.getElementById("boardMessage").innerHTML = "Congraulations - you won the game in " + boardStatus.moves + " moves.";
      alert('You have won the game')
    }
}


function checkForValidMove(moveFrom,moveTo) {
  //Test to make sure pegs are within in range of number of pegs on board
  if ((moveFrom + 1 == 0) || (moveTo +1 ==0)  || (moveFrom > 2) || (moveTo > 2)) {
    return 'You entered a tower out of range, must be 1, 2 or 3'
  }
 
  //Test to make sure tower numbers are not the same
 if (moveFrom  == moveTo ) {
  return 'Tower numbers can not be the same'
}
  //Test to make sure pegs are within in range of number of pegs on board
  if ((moveFrom +1 == 0) || (moveTo +1 ==0)  || (moveFrom > 2) || (moveTo > 2)) {
   return 'Invalid tower number specified'
  }

  //Test to make sure there are disk on the move from peg
  if (boardStatus.pegs[moveFrom].length  == 0) {
    return 'No disk to move on the move from tower you selected'
  }

  //Test to make sure the move to peg can accept the disk from the movefrom peg
  var pegTest = boardStatus.pegs[moveTo].length
  if (pegTest > 0  && boardStatus.pegs[moveTo][pegTest-1] < boardStatus.pegs[moveFrom][boardStatus.pegs[moveFrom].length -1]) {
    return 'You cannot move a larger disk on top of a smaller one, board is still:'
  }
  return 'true'
  

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


function checkGameStatus() {      // since starting point is tower one, only need to check tower 2 and 3
  //check tower 2
  //var tower1Cnt = boardStatus.pegs[1].reduce(function (tower1Cnt, disk) {
  //  return tower1Cnt + disk;
  //},);
  //console.log(tower1Cnt)
  //if (tower1Cnt = 15) {
  //  return 'Winner'
  //}

  // check tower 3
  //var tower2Cnt = boardStatus.pegs[2].reduce(function (tower2Cnt, disk) {
  //  return tower2Cnt + disk;
  //},);
  //console.log(tower2Cnt)
  //if (tower2Cnt = 15) {
  //  return 'Winner'
  //}

  // Tried to use reduce function above, but if array is empty, it produces an error!!!
  // this is a simpilar solution

  if (boardStatus.pegs[1].length == 5 || boardStatus.pegs[2].length == 5) {
     //winner
     return 'Winner'
  }
}

function resetGame() {
  boardStatus.inPlay = false;
  document.getElementById("boardMessage").innerHTML = "Game - Reset";
 
  alert('Game has been reset')
 // boardStatus.pegs = defaultBoard.map(function (disk) {
 //   return disk;
 // })  
 //the above does not set boardStatus.pegs back to the defaultboard, I don't understand why
 // if you console defaultBoard,  it shows the same values as boardStatus.pegs,  I haeve no idea
 //why, so had to resort to cheating by setting back this way
 boardStatus.pegs = [["5", "4", "3", "2", "1"],[],[]];
 
 displayBoard()
}