
let winner
let board = [[],[],[]]
function newGame (){
  console.log("Let's play Towers of Hanoi, make your first move. Here is a starting position of the board : ")
  winner=false
  board = [
    [5,4,3,2,1],[],[]
  ]
  displayBoard()
}

newGame()
function displayBoard(){
  board.map(function(peg,i) {
   return console.log(i+1+ ' --- '+`${peg.join(' ')}`)
  } )
}
function moveDisc(from,to){
  if (winner==false){
  const arrayFrom=board[from-1]
  const disc =arrayFrom[arrayFrom.length-1]
  
  function checkDisc(){
    const discTo=board[to-1][board[to-1].length-1]
    if (!discTo || discTo>disc) {
      return true
    }
    else {
      console.log(`Disc ${disc} is bigger then disc ${discTo}, you can't move a bigger disc on top of a smaller one. The board is still:`)
      displayBoard()
      return false
    }
  }
  
  function checkPeg(){
    if (arrayFrom.length==0){
      console.log('There is no disc on this peg. The board is still:')
      displayBoard()
      return false
    }
      else return true
  }

  if (checkPeg() && checkDisc()){
    board[from-1].pop()
    board[to-1].push(disc)
    console.log('That move was sucssesful, the board is now :')
    displayBoard()
  }
}
checkWinner()
  function checkWinner(){
    if (board[1].length===5 || board[2].length===5){
      console.clear()
      console.log("Congrads! You win! Let's play again")
      return newGame()
    }
    else { 
     return !winner
    }
  }
}

moveDisc(1,2)
moveDisc(1,2)
moveDisc(2,3)
moveDisc(1,2)
moveDisc(3,2)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(2,3)
moveDisc(1,3)
moveDisc(1,2)
moveDisc(3,2)
moveDisc(3,1)
moveDisc(2,1)
moveDisc(3,2)
moveDisc(1,3)
moveDisc(1,2)
moveDisc(3,2)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(2,3)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(3,2)
moveDisc(3,1)
moveDisc(2,1)
moveDisc(2,3)
moveDisc(1,3)
moveDisc(1,2)
moveDisc(3,2)
moveDisc(1,3)
moveDisc(2,1)
moveDisc(2,3)
moveDisc(1,3)
