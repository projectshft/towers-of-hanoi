//THIS IS THE FILE TO BE GRADED.  
/*I am so overwhelmed.  I thought I knew what I was doing, but obviously not. Tried lots of different things.  This is as far as I could get. */

//ADD a var XX = board.map....to make a new array


var Board = function (fromPeg, toPeg) {
    var board = [
        ["5", "4", "3", "2", "1"],
        [],
        []
    ];
    //available pegs (index #) are NOT board[fromPeg-1] !board[fromPeg - 1] OR have toDisc with value > fromDisc top value;
    //tried and tried to do filter, but couldnt get it to work here
    var availPeg = function () {
        var toDiscValue = board[toPeg - 1][board[toPeg - 1].length - 1];
        var fromDiscValue = board[fromPeg - 1][board[fromPeg - 1].length - 1];
        for (var i = 0; i < board.length; i++) {
            if (fromDiscValue < toDiscValue || toDiscValue == undef) {
                return board[i];   //expect board = [1, 2] for pegs with [i] = 1 and 2
            };
        }; console.log(availPeg);
    };
    //
    var checkPeg = function () {
        if (board[fromPeg - 1].length == 0) {
            console.log("This peg does not have a disc. Try again.  The board is still:" + board);
        } else if ((toPeg - 1) == availPeg) {
            moveDisc();
        } else {
            console.log("Remember that you can only move a disc onto a larger disc." + "The board is still :" + board);
        }
    };

    var moveDisc = function () {
        board[fromPeg - 1].pop();
        board[toPeg - 1].push();
    };

    return {
        availPeg: availPeg,
        checkPeg: checkPeg
    };
}


    //Board.moveDisc(1, 3); 
