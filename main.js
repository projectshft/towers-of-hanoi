//var board = [[5,4,3,2,1],
//            [],
//            []];
//
//var moveDisc = function (pos1, pos2) {
//    var startingPeg = board[pos1-1];
//    var endingPeg = board[pos2-1];
//    var disc = startingPeg[startingPeg.length -1];
//    endingPeg.push(disc);
//    startingPeg.pop(disc);
//    console.log(board);
//};

var board = {
                state: [[],[],[]],
                start: [[3,2,1],[],[]],
                
                printBoard: function() {
                    this.state.forEach(function(peg) {
                        console.log(`--${peg}`);
                    });
                },

                startGame: function() {
                    var copyOfStart = this.start.map(function(peg) {
                        return peg;
                    });
                    this.state = copyOfStart;
                },
                
                winGame: function() {
                    console.log("Congratulations! You won!\nHere's a fresh board to start over with:");
                    this.startGame();
                    this.printBoard();
                },

                //checkWinner: function() {
                //    var winningPeg = this.start[0];
                //    console.log(winningPeg);
                //    this.state.forEach(function(peg) {
                //        if (peg === winningPeg) {
                //            board.winGame();
                //        }
                //    });
                //}
            };

var moveDisc = function(pos1, pos2) {
    var startingPeg = board.state[pos1-1];
    var targetPeg = board.state[pos2-1];
    var disc = startingPeg[startingPeg.length - 1];

    if (!disc) {
        console.log("Move was unsuccessful. There's no disc there!");
    } else if (disc > targetPeg[targetPeg.length - 1]) {
        console.log("Move was unsuccessful. You can't move a disc onto a smaller disc.")
    } else {
        targetPeg.push(disc);
        startingPeg.pop(disc);
    }

    board.printBoard();
    //board.checkWinner();
}

board.startGame();

board.printBoard();