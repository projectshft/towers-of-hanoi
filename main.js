var HanoiGame = function (pegs, discs) {
    this.pegs = pegs;
    this.discs = discs;
    this.board;
};

HanoiGame.prototype.initialize = function () {
    this.board = new Array(this.pegs);

    for(var i = 0; i < this.pegs; i++) {
        if(i === 0) {
            this.board[i] = new Array(this.discs);
            for(var j = 0; j < this.discs; j++) {
                this.board[i][j] = this.discs - j;
            }
        } else {
            this.board[i] = [];
        }
    }

    console.log('The starting board is: ');
    this.readBoard();
};

HanoiGame.prototype.checkWinner = function (discs) {
    var isWinner = false;

    this.board.forEach(function (peg, index) {
        if(index != 0 && peg.length === discs) {
            if(peg.every( (disc, index) => disc === discs - index)) {
                console.log('You have won the round!');
                isWinner = true;
            }
        }
    });
    return isWinner;
};

HanoiGame.prototype.moveDisc = function (targetPeg, destinationPeg) {
    targetPeg = this.board[targetPeg - 1];
    destinationPeg = this.board[destinationPeg - 1];

    if (!targetPeg) {
        console.log('There is no disc to move on that peg! The board is still: ');
        this.readBoard();
    } else if (!destinationPeg) {
        console.log('There is no peg to move that disc onto! The board is still: ');
        this.readBoard();
    } else if (targetPeg[targetPeg.length - 1] > destinationPeg[destinationPeg.length - 1]) {
        console.log('You cannot move a larger disc on to a smaller disc! The board is still: ');
        this.readBoard();
    } else {
        console.log('Your move was successful! The board is now: ');
        destinationPeg.push(targetPeg.pop());
        if (this.checkWinner(this.discs)) {
            this.initialize();
        } else {
            this.readBoard();
        }
    }
};

HanoiGame.prototype.readBoard = function () {
    mappedBoard = this.board.map((peg) => peg);
    mappedBoard.forEach(function (peg, index) {
        console.log(`Peg ${index + 1} --- ${peg.join(' ')}`);
    });
}

var hanoiGameInstance = new HanoiGame(3, 5);
hanoiGameInstance.initialize();
