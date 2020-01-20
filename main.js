//////////////// Towers of Hanoi ////////////////

var towersOfHanoi = {
    boardObj: [[5, 4, 3, 2, 1], [], []],
    totalNumMoves: 0,
    boardState: function() {
       this.boardObj.map(function(item) {
           console.log("--- " + item);
       })
    },
    moveCount: function() {
        var moves = this.totalNumMoves;
        if (moves <= 1) {
            console.log('You have made ' + moves + ' move so far.');

        } else {
            console.log('You have made ' + moves + ' moves so far.');
        }
    },
    moveDisc: function(startPeg, endPeg) {
        // change inputs to arrays since each peg is an array
        startPeg = this.boardObj[startPeg - 1];
        endPeg = this.boardObj[endPeg - 1];
        // If checkMove returns true then the move is made
        if (checkMove()) {
            endPeg.push(startPeg.pop());
            this.totalNumMoves += 1;
        } else {
            console.error('You cannot move a larger disc on top of a smaller one, board is still: ');
        } 
        this.boardState();
        // The checkMove fuction validates the move
        function checkMove() {
            var discToMove = startPeg[startPeg.length - 1];
            var topDisc = endPeg[endPeg.length - 1];
            var moveAvailable = false;
            if(discToMove < topDisc || endPeg.length === 0) {
                moveAvailable = true;
            }
            return moveAvailable;
        }
        towersOfHanoi.checkWinner();
    },
    checkWinner: function() {
        var winningPeg = this.boardObj.reduce(function(arr1, peg, index) {
            if (peg[index] >= 1) {
                return peg.reduce(function(arr2, disc, index) {
                        var nextDisc = peg[index + 1];
                        var lastDisc = peg[peg.length - 1];
                        if (disc > nextDisc || disc === lastDisc) {
                            arr2.push(disc);
                        }
                
                        return arr2
                    }, [])
            }
            return arr1
        }, [])
        // This function makes sure that the length of the array is 3
        var valWin = function(arr3) {
            if (arr3.length >= 5) {
                return true
            } else {
                return false
            }
        } 
        //The boolean determines whether you won or not
        if (valWin(winningPeg)) {
            console.log(' You WON! Great Job!!!' );
        } else {
            console.error("Sorry this isn't a winner keep playing");
            // this.boardState()
        }
        // throw a debugger to figure out whats wrong
    },
    restBoard: function() {
        console.clear();
        this.boardObj = [[5, 4, 3, 2, 1], [], []];
        this.totalNumMoves = 0;
        this.boardState();
    }
}

towersOfHanoi.moveDisc(1,2);
towersOfHanoi.moveDisc(1,3);
towersOfHanoi.moveDisc(2,3);
towersOfHanoi.moveDisc(1,2);
towersOfHanoi.moveDisc(3,1);
towersOfHanoi.moveDisc(3,2);
towersOfHanoi.moveDisc(1,2);
towersOfHanoi.moveDisc(1,3);
// towersOfHanoi.restBoard();
// towersOfHanoi.moveDisc(1,2);
// towersOfHanoi.moveDisc(1,3);
towersOfHanoi.moveCount();







