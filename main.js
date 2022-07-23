
var board = {
                state: [[],[],[]],
                startingPeg: [3,2,1],
                
                printBoard: function() {
                    this.state.forEach(function(peg) {
                        console.log(`--${peg}`);
                    });
                },

                startGame: function() {
                    //clear board
                    this.state.forEach(function(peg) {
                        while (peg[peg.length-1]) {
                            peg.pop(peg[peg.length-1]);
                        }
                    });
                    //"clone" starting peg onto the first peg of the board state
                    this.state[0] = this.startingPeg.slice();
                    this.printBoard();
                },
                
                winGame: function() {
                    console.log("Congratulations! You won!\nHere's a fresh board to start over with:");
                    this.startGame();
                },

                checkWinner: function() {
                    this.state.forEach(function(peg, i) {
                        //assuming starting position is always the first peg
                        if (peg.length === board.startingPeg.length && i) {
                            var check = peg.every(function(disc, i) {
                                return disc === board.startingPeg[i];
                            });
                            if (check) {
                                board.winGame();
                            }
                        }
                    });
                    return false;
                }
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
    board.checkWinner();
}

board.startGame();