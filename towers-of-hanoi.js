console.log("Hello! Welcome to the Towers of Hanoi!")
console.log("The goal is to move all 5 discs, represented by numbers, from the first peg to another. ")
console.log("According to legend this will end the world, so it's up to you if you want to succeed!")
console.log("Let's start with 3 pegs and 5 discs. Access it using the 'game' object.")
console.log("Start by making a move with:'game.moveDisc(from, to)' For example: 'game.moveDisc(1, 3)' will move the top disc from peg 1 to peg 3.")
console.log("At any time, you can use the 'resetBoard()' method to restart the game with the current configuration.")
console.log("Use more than 3 pegs to not mess everything up! It's pretty easy!")

var startingBoard = function (numberOfPegs, numberOfDiscs, beginningPeg) {
    this.numberOfPegs = numberOfPegs;
    this.numberOfDiscs = numberOfDiscs;
    this.beginningPeg = beginningPeg;
    this.board = this.createBoard(numberOfPegs, numberOfDiscs, beginningPeg);
}

startingBoard.prototype.createBoard = function (numberOfPegs, numberOfDiscs, beginningPeg) {
    var board = [];
    var emptyPeg;
    this.numberOfPegs = numberOfPegs;
    this.numberOfDiscs = numberOfDiscs;
    this.beginningPeg = beginningPeg;
    if (numberOfPegs > 2 && numberOfDiscs > 0) {
        for (var i = 0; i < numberOfPegs; i++) {
            if (beginningPeg === i + 1) {
                emptyPeg = [];
                for (var j = 0; j < numberOfDiscs; j++) {
                    emptyPeg.unshift(j + 1);
                }
                board.push(emptyPeg);
            } else {
                board.push([]);
            }
        }
        return board;
    } else {
        console.log("This isn't a valid game! Sorry! Try again!")
    }
}


startingBoard.prototype.moveDisc = function (from, to) {
    var fromPeg = this.board[from - 1];
    var toPeg = this.board[to - 1];
    var disc1 = fromPeg.slice(-1)[0];
    var disc2 = toPeg.slice(-1)[0];
    
    if (from === to) {
        console.log("That's probably not going to do much.")
    } else {
        if (!disc1) {
            return console.log("Starting peg has no disc! Please try another peg.")
        } else if (!disc2 || disc1 < disc2) {
            console.log("Great Move! (Maybe?) Current Board: ");
            toPeg.push(fromPeg.pop())
            this.printBoard();
        } else {
            return console.log("You're trying to put a larger disc on a smaller disc! Didn't you read the rules??.")
        }
        
        if (this.winnerCheck()) {
            console.log("Congratulations! You ended the world! Time to start over!");
            console.log("To change the board use game.createBoard, if you would like to try with different values!");
            this.resetBoard();
        }

    }
    
}

startingBoard.prototype.printBoard = function () {
    this.board.map(function (peg) {
        var printedPeg = "--- ";
       
        peg.map(function (disc) {
            printedPeg += (disc + " ");
        })

        console.log(printedPeg);
    }) 
}

startingBoard.prototype.resetBoard = function () {
    this.board = this.constructBoard(this.pegAmount, this.discAmount, this.originPeg);
    this.moves = 0;
    this.printBoard();
}


startingBoard.prototype.winnerCheck = function () {
    var discQuantity = this.discAmount;
    var startingPeg = this.originPeg;

    var completedPeg = this.board.find(function(peg, k){
       var isCompletedPeg = k === startingPeg - 1 && peg.length === discQuantity;
        
        if(isCompletedPeg){
            return false;
        }else{
            return peg.length === discQuantity;
        }
    });

    if (!completedPeg) {
        return false;
    }

    return true;
}

var game = new startingBoard(3, 5, 1);




//Winning Moves





