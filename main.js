
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
                            peg.pop();
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
    var startPeg = board.state[pos1-1];
    var targetPeg = board.state[pos2-1];
    var disc = startPeg[startPeg.length - 1];

    if (!disc) {
        console.log("Move was unsuccessful. There's no disc there!");
    } else if (disc > targetPeg[targetPeg.length - 1]) {
        console.log("Move was unsuccessful. You can't move a disc onto a smaller disc.")
    } else {
        targetPeg.push(disc);
        startPeg.pop(disc);
    }

    board.printBoard();
    board.checkWinner();
}

//let's plan to use an html form to limit user input
var setupGame = function(discs, pegs) {
    if (discs > board.startingPeg.length) {
        for (i=board.startingPeg.length+1; i <= discs; i++) {
            board.startingPeg.unshift(i);
        }
    } else if (discs < board.startingPeg.length) {
        while (board.startingPeg.length > discs) {
            board.startingPeg.shift();
        }
    }
    
    while (board.state.length < pegs) {
        board.state.push([]);
    }
    while (board.state.length > pegs) {
        board.state.pop();
    }

    board.startGame();
}

board.startGame();