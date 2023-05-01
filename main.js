const TowersOfHanoi = function() {
    this.board = [];
    this.discs = 0;
    this.pegs = 0;

    this.createBoard = function(pegs, discs){
        var initialBoard = [];
        for (i = 0; i < pegs; i++) {
            initialBoard.push([])
        }

        for (i = discs; i >= 1; i--){
            initialBoard[0].push(i.toString());
        }
        this.board = initialBoard;
        this.discs = discs;
        this.pegs = pegs;
        console.log('The Board is:')
    }

    this.displayBoard = function() {
        this.board.map(function(peg){
            console.log ('--- ' + peg.join(' '));
        });
    }

    this.moveDisc = function(currentPeg, newPeg) {
        if(this.checkMove(currentPeg, newPeg)) {
            var moved = this.board[currentPeg-1].pop();
            this.board[newPeg-1].push(moved);
            if(this.checkWinner()) {
                this.displayBoard();
                console.log('You have Won!')
                this.createBoard(this.pegs, this.discs);
            }
        }
        this.displayBoard();
    }

    this.checkMove = function(currentPeg, newPeg) {
        var topDisc = this.board[newPeg-1][this.board[newPeg-1].length-1];
        var movingDisc = this.board[currentPeg-1][this.board[currentPeg-1].length-1];
        
        if(parseInt(movingDisc) > parseInt(topDisc)) {
            console.log ('You cannont move a larger disc onto  a smaller disc. Board is still:');
            return false
        }

        if(this.board[currentPeg-1].length === 0) {
            console.log('There is no disc there. Board is still:');
            return false
        }

        if(currentPeg < 1 || currentPeg > this.board.length || newPeg < 1 || newPeg > this.board.length){
            console.log('There is no peg there. Board is still:');
            return false
        }

        console.log('That move was successful. Board is now:');
        return true
    }

    this.checkWinner = function() {
        var numberOfDiscs = this.discs;
        var won = this.board.some(function(peg, index) {
            return peg.length === numberOfDiscs && index !== 0
        })
        return won
    }
}

var program = new TowersOfHanoi();
program.createBoard(3, 5);
program.displayBoard();