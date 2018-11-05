/*
there are Moves, board(Pegs), Discs, Occupied Pegs, Vacant Pegs 
Objects:
board 
moveDisc

[["5", "4", "3", "2", "1"],
[],
[]]


*/


var board = function() {
    var state = {
        pegs: [["5", "4", "3", "2", "1"],
        [],
        []]

    }
   
        var printBoard = function() {
            for (var i = 0; i < state.pegs.length; i++)
                console.log(state.pegs[i]);
    }

    var moveDisc = function(startPeg, endPeg) {
        var move = Object.keys(pegs);
        for (var i = 0; i < state.pegs.length; i++) {
        if (pegs[i].moveDisc === state){
        }
        }
           
    }
    return {
        moveDisc: moveDisc,
        printBoard: printBoard 
    };


var board = Board();