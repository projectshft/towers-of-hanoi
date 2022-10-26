var board = [
    [5, 4, 3, 2, 1],
    [],
    [],
]






function moveDisc(disc, peg){
if(isNaN(peg) || peg<1 || peg>3){
    console.log('Peg must be a value between 1-3.')
    logGame()
    return
}
if(isNaN(disc) || disc<1 || disc>6){
    console.log('Disc must be a value between 1-5.')
    logGame()
    return
}
var pegNum = peg-1
var pegArr = board[pegNum]
var topDisc = pegArr[pegArr.length-1]
var trueIndex;
emptyArr = [];
function findDiscArr() {
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
findDiscArr()
if (disc !== discArr[discArr.length-1]){
    console.log('you can only move the last ring on each peg')
    return
}
if(topDisc===undefined || topDisc>disc){
    pegArr.push(disc)
    discArr.splice(discArr.length-1,1)
    logGame()
    return
}

else if(topDisc<=disc){
    console.log('You cannot move a larger disc on top of a smaller one, board is still:')
    logGame()
    return
}
else {
    console.log('What did you even just do? No..')
    logGame()
    return
}
}


function logGame(){
var viz = board.map((a)=>{
    return '---' + a
})
console.log(viz)
}


