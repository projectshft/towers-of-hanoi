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
        console.log("Sorry, those values would make the game impossible. Please try again with different values.")
    }
}


HanoiBoard.prototype.moveDisc = function (from, to) {
    var fromPeg = this.board[from - 1];
    var toPeg = this.board[to - 1];
    var disc1 = fromPeg.slice(-1)[0];
    var disc2 = toPeg.slice(-1)[0];
    
    if (from === to) {
        console.log("Origin and destination pegs cannot be the same. Please try again.")
    } else {
        if (!disc1) {
            return console.log("Starting peg has no disc! Please try another peg.")
        } else if (!disc2 || disc1 < disc2) {
            console.log("That was a valid move! Current Board: ");
            toPeg.push(fromPeg.pop())
            this.printBoard();
        } else {
            return console.log("Larger discs cannot be placed on smaller discs! Please try again.")
        }
        
        if (this.forTheWinCheck()) {
            console.log("Congratulations! You've won the game! Resetting board with previous settings now.");
            console.log("To play with a different configuration, either create a new board using the construct board prototype method, or generate a random board using the random board prototype method.");
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

        console.log(printedPeg);
    }) 
}

HanoiBoard.prototype.resetBoard = function () {
    this.board = this.constructBoard(this.pegAmount, this.discAmount, this.originPeg);
    this.moves = 0;
    this.printBoard();
}

HanoiBoard.prototype.randomBoard = function (min, max) {
    if (min >= 3 && max > min) {
        var rand1 = Math.floor(Math.random() * (max - min + 1) + min);
        var rand2 = Math.floor(Math.random() * (max - min + 1) + min);
        var rand3 = Math.floor(Math.random() * rand1) + 1;
        this.board = this.constructBoard(rand1, rand2, rand3);
        this.printBoard();
    } else {
        console.log("Sorry, you've either entered values that would make the game impossible, or mixed up your min and max arguments. Please try different values.")
    }
}

HanoiBoard.prototype.forTheWinCheck = function () {
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
console.log("Hello! Welcome to Tower of Hanoi!")
console.log("A standard game(3 pegs, 5 discs, peg 1 as starting peg) has been created for you. Access it using the 'game' object.")
console.log("To begin playing, utilize the method 'moveDisc(from, to)' For example: 'game.moveDisc(1, 3)' will move the top disc from peg 1 to peg 3.")
console.log("At any time, you can use the 'resetBoard()' method to restart the game with the current configuration.")
console.log("You can also construct a board of your own configuration using the method 'constructBoard(pegQuantity, discQuantity, originPeg)', and substituting your own valid arguments.")
console.log("Note that using less than 3 pegs will break the game.")
console.log("Finally, you can play a completely random configuration using the method 'randomBoard(min, max)' and inputting any positive integer (of atleast 3 or more) you'd like as the argument.")
console.log("Have Fun!")