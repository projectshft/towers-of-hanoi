// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game. 
//BOARD MODULE
var Set = function (moves, currentState) {
    var board = [
        ["5", "4", "3", "2", "1"],
        [],
        []
    ];
    var Board = {
        moves: function () {
            var counter = 0;
            counter += 1;
            return counter;
        },
        state: board.map(function () {
            return moveDisc();
        })
    };
};





//MOVES MODULE 
var Moves = function (fromPeg, toPeg) {
    //generic board
    var pegs = {
        fromPeg: fromPeg,
        toPeg: toPeg
    };

    //1. which pegs are not the fromPeg
    var availPeg = Board.state.filter(function (pegs) {
        return Board[state][i] !== fromPeg;
    });

    //2. Which availPegs can take the fromDisc?
    var checkPeg = function () {
        if (Board.state[fromPeg - 1].length == 0) {
            console.log("This peg does not have a disc. Try again.  The board is still:" + Board.state);
        } else if (toPeg == availPeg && Board[state][fromPeg - 1][Board[state][fromPeg - 1].length - 1] < Board[state][toPeg - 1][toPeg - 1].length - 1) {
            moveDisc();
        } else {
            console.log("Remember that you can only move a disc onto a larger disc." + "The board is still :" + Board.state);

        }
    };

    //3. move the discs
    var moveDisc = function () {
        Board.state[fromPeg - 1].pop();
        Board.state[toPeg - 1].push();
        Board.moves();

    }
    return moveDisc;
};

var setUpBoard = Set();

var guess1 = Moves(1, 2);

