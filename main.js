
let winner
function newGame (){
  console.log("Let's play Towers of Hanoi, make your first move. Here is a starting position of the board : " + "\n 1 --- 5 4 3 2 1 \n 2 --- \n 3 --- ")
  winner=false
  return board = [
  [5,4,3,2,1],[],[]]
}
newGame()
function displayBoard(){
  board.map(function(peg,i) {
   return console.log(i+1+ ' --- '+`${peg.join(' ')}`)
  } )
}
function moveDisc(from,to){
  if (winner==false){
  const disc =board[from-1][board[from-1].length-1]
  const discTo=board[to-1][board[to-1].length-1]
  const arrayFrom=board[from-1]

  function checkDisc(){
    if (!discTo || discTo>disc) {
      return true
    }
    else {console.log(`Disc ${disc} is bigger then disc ${discTo}, you can't move a bigger disc on top of a smaller one. The board is still:`)
    displayBoard()
    return false}}
  
  function checkPeg(){
    if (arrayFrom.length==0){
      console.log('There is no disc on this peg. The board is still:')
      displayBoard()
      return false}
      else return true
  }
  var playing = checkDisc()
  var playing1 = checkPeg()
  if (playing&&playing1){
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
     return winner=false
    }
  }
}


