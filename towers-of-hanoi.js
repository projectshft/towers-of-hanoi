var HanoiBoard = function (pegAmount, discAmount, originPeg) {
    this.pegAmount = pegAmount;
    this.discAmount = discAmount;
    this.originPeg = originPeg;
    this.board = this.constructBoard(pegAmount, discAmount, originPeg);
}

HanoiBoard.prototype.constructBoard = function (pegAmount, discAmount, originPeg) {
    var board = [];
    var initialFullStack;
    this.pegAmount = pegAmount;
    this.discAmount = discAmount;
    this.originPeg = originPeg;
    if (pegAmount > 2 && discAmount > 0) {
        for (var i = 0; i < pegAmount; i++) {
            if (originPeg === i + 1) {
                initialFullStack = [];
                for (var j = 0; j < discAmount; j++) {
                    initialFullStack.unshift(j + 1);
                }
                board.push(initialFullStack);
            } else {
                board.push([]);
            }
        }
        return board;
    } else {
        console.log("This isn't a valid game! Sorry! Try again!")
    }
}


HanoiBoard.prototype.moveDisc = function (from, to) {
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
            console.log("To change the board you can use the prototype method constructBoard, if you would like to try with different values!");
            this.resetBoard();
        }

    }
    
}

HanoiBoard.prototype.printBoard = function () {
    this.board.map(function (peg) {
        var printedPeg = "--- ";
       
        peg.map(function (disc) {
            printedPeg += (disc + " ");
        })

        console.table(printedPeg);
    }) 
}

HanoiBoard.prototype.resetBoard = function () {
    this.board = this.constructBoard(this.pegAmount, this.discAmount, this.originPeg);
    this.moves = 0;
    this.printBoard();
}


HanoiBoard.prototype.winnerCheck = function () {
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



var game = new HanoiBoard(3, 5, 1);
console.log("Hello! Welcome to the Towers of Hanoi!")
console.log("The goal is to move all 5 discs, represented by numbers, from the first peg to another. ")
console.log("According to legend this will end the world, so it's up to you if you want to succeed!")
console.log("Let's start with 3 pegs and 5 discs. Access it using the 'game' object.")
console.log("Start by making a move with:'game.moveDisc(from, to)' For example: 'game.moveDisc(1, 3)' will move the top disc from peg 1 to peg 3.")
console.log("At any time, you can use the 'resetBoard()' method to restart the game with the current configuration.")
console.log("Make your own board with 'constructBoard(pegQuantity, discQuantity, originPeg)', and using the values you would like!")
console.log("Use more than 3 pegs to not mess everything up! It's pretty easy!")

//Winning Moves

game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)


