//////////////// Towers of Hanoi ////////////////

var towersOfHanoi = {
    boardObj: [
        [5, 4, 3, 2, 1],
        [],
        []
    ],
    totalNumMoves: 0,
    boardState: function () {
        console.log(`The Current Board State is below`);
        const displayBoard = this.boardObj.map(function (peg) {
            return "--- " + peg;
        })

        return displayBoard;
    },
    moveCount: function () {
        var moves = this.totalNumMoves;
        if (moves <= 1) {
            console.log('You have made ' + moves + ' move so far.');

        } else {
            console.log('You have made ' + moves + ' moves so far.');
        }
    },
    moveDisc: function (startPeg, endPeg) {
        //Print the initial state of the board before each move
        this.boardState();
        if (startPeg < 1 || endPeg > 3) {
            throw new Error("Either the starting peg or the ending peg doesn't exist");
        }

        // change inputs to arrays since each peg is an array
        startPeg = this.boardObj[startPeg - 1];
        endPeg = this.boardObj[endPeg - 1];
        // If checkMove and checkPeg returns true then the move is made
        if (checkMove()) {
            endPeg.push(startPeg.pop());
            this.totalNumMoves += 1;
            this.checkWinner();
            console.log(this.boardState());
        } else {
            console.error('You cannot move a larger disc on top of a smaller one, board is still: ');
        }

        // The checkMove fuction validates the move
        function checkMove() {
            var discToMove = startPeg[startPeg.length - 1];
            var topDisc = endPeg[endPeg.length - 1];
            var moveAvailable = false;
            if (discToMove < topDisc || endPeg.length === 0) {
                moveAvailable = true;
            }
            return moveAvailable;
        }


    },
    checkWinner: function () {
        //Changed naming of arguments to more specific varibale names
        var winningPeg = this.boardObj.reduce(function (boardArray, peg, index) {
            if (peg[index] >= 1) {
                return peg.reduce(function (winnerPeg, disc, index) {
                    var nextDisc = peg[index + 1];
                    var lastDisc = peg[peg.length - 1];
                    if (disc > nextDisc || disc === lastDisc) {
                        winnerPeg.push(disc);
                    }

                    return winnerPeg
                }, [])
            }
            return boardArray
        }, [])
        // This function makes sure that the length of boardPeg
        var valWin = function (boardPeg) {
            let youWon = false;

            if (boardPeg.length >= 5) {
                youWon = true;
            }
            return youWon

        }
        //The boolean determines whether you won or not
        if (valWin(winningPeg)) {
            console.log(' You WON! Great Job!!!');
        } else {
            console.error("Sorry this isn't a winner keep playing");
        }
        // throw a debugger to figure out whats wrong
    },
    restBoard: function () {
        console.clear();
        this.boardObj = [
            [5, 4, 3, 2, 1],
            [],
            []
        ];
        this.totalNumMoves = 0;
        console.log(this.boardState());
    }
}

// game moves
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(2, 1);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(2, 1);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(1, 2);