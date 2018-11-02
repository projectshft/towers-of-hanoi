// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game. Take off keys
var board = [
    ["5", "4", "3", "2", "1"],
    [],
    []
];

//We'll want to be able to print the board horizontally. You MUST utilize a map function at least once 
//start with copying startboard to currentboard and use it through out game??????

// Move the disc from peg 1 to peg 2 AND game accepts or rejects move
//Is there a disc on the peg, if Yes what is its value
var checkPeg = function (fromPeg, toPeg) {
    if (board[fromPeg - 1].length != 0) {
        var topDisc = board[fromPeg - 1][board[fromPeg - 1].length - 1];
        return topDisc;
    } else {
        console.log("This peg does not have a disc; try again.");
    }
};
checkPeg(1, 3);
checkPeg(2, 3);



//which pegs can take that disc value (num<top num) array[array.length -1] = top item 
/*var whichPeg = function (fromPeg, toPeg) {
    if (board[toPeg - 1])
}
board.filter(function (peg) {
//     if (peg[peg.length - 1] > )
// }



/*board.moveDisc(1, 2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---*/

