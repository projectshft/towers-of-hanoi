var board = [
    [5, 4, 3, 2, 1],
    [],
    [],
]

function findDiscArr(disc, trueIndex) {
    //find which array the users disc comes from
    emptyArr = [];
    board.forEach((arr)=>{
    var index = arr.indexOf(disc)
    emptyArr.push(index)
    if (index !== -1){
        trueIndex = index
    }   
    })
    var discArrIndex= emptyArr.indexOf(trueIndex)
    discArr=board[discArrIndex]
    }

function isValidMove(disc, peg, discArr, topDisc) {
    // Determining if the move is valid 
    if(isNaN(peg) || peg<1 || peg>3){ 
       return false
    }
    if(isNaN(disc) || disc<1 || disc>5){
        return false
    }
    if (disc !== discArr[discArr.length-1]){
        return false
    }
    if(topDisc<=disc){
        return false
    }
    return true 
}

function moveDisc(disc, peg){
    var pegNum = peg-1
    var pegArr = board[pegNum]
    var topDisc = pegArr[pegArr.length-1]
    var trueIndex;
    findDiscArr(disc, trueIndex)
    var isValid = isValidMove(disc, peg, discArr, topDisc);
    if (!isValid) { 
    console.log('Invalid move!! ILLEGAL ')
    logGame()
    return
    // continue
}
    pegArr.push(disc)
    discArr.splice(discArr.length-1,1)
    console.log('Succesful move. The board is now:')
    logGame()
    checkWinner()
}


function logGame(){
var viz = board.map((a)=>{
    return '---' + a
})
console.table(viz)
}

function checkWinner(){
    if(board[2].length === 5 || board[1].length === 4){
        alert('You won! Omg so good! Wow..')
        location.reload()
    }
}

console.log('Welcome to the Towers of Hanoi. Use the moveDisc(disc, peg) function to play. Good luck.. ')
logGame();