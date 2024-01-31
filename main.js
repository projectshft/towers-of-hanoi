// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  
// This is a normal starting position for the game.


var board = {
pegs: [
[5, 4, 3, 2, 1],
[],
[]
]
}

var peg1 = board.pegs[0]
var peg2 = board.pegs[1]
var peg3 = board.pegs[2]

console.log(board.pegs.map(function (peg, index) {
    var pegString = `---`;

    if (peg.length > 0) {
        pegString += ` ${peg.join(' ')}`;
    }

    return pegString;
}).join('\n'));

// Board looks good (I think). Onto the discs!

var moveDisc = function (pegOn, pegNew) {
    if (pegOn > 3 || pegOn < 1 || pegNew <0 || pegNew > 3) {
        return 'Move rejected! Must move disc to a valid peg.'
    }
    
pegOn = board.pegs[pegOn -1]
pegNew = board.pegs[pegNew-1] // Peg we're moving disc on top of
var pegOnTop = pegOn.length > 0 ? pegOn[pegOn.length - 1] : null;
    var lastOnNextPeg = pegNew.length > 0 ? pegNew[pegNew.length - 1] : null;


if (pegOnTop < lastOnNextPeg || !lastOnNextPeg) {
    pegNew.push(pegOn.pop())
    console.log(`That move was successful! The board is now:'\n ${peg1.join}\n ${peg2.join}\n ${peg3.join}'`
    )
} else if (lastOnNextPeg < pegOnTop){
    return `Move Rejected! Discs can't be placed on discs of smaller size. Board is still: \n ${peg1.join}\n ${peg2.join}\n ${peg3.join}`;
}
}



// var pegOnTop = pegOn.slice(-1)[0]
// var lastOnNextPeg = pegNew.slice(-1)[0]

// if (pegOnTop < lastOnNextPeg || !lastOnNextPeg) {
    // pegNew.push(pegOn.slice(-1))
    // pegOn.pop();