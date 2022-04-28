var Game = function(board) {
    this.board = board;
    this.displayBoard = function () {
        return this.board.map(disc => '--- ' + disc);
    };
    this.reset = function () {
        if (confirm('Do you want to play again?')) {
            location.reload();
        } else {
            return;
        }
    };
    this.checkWinner = function () {
        if (board[0].length === 5) {
            console.log('Move the discs from the starting peg to one of the other pegs!');
        }
        if (board[1].length === 5 || board[2].length === 5) {
            console.log('You Win!!! Unfortunately now the world is ending :(');
            this.reset();
        }
    };
    this.moveDisc = function (sourcePeg, targetPeg) {
        if (sourcePeg === 1 && targetPeg === 2) {
            let disc = board[0][board[0].length - 1];
            if (!board[1][board[1].length - 1] || disc < board[1][board[1].length - 1]) { 
                disc = board[0].pop();
                board[1].push(disc);
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            }
            if (board[1][board[1].length - 1] || disc > board[1][board[1].length - 1]) {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        }

        if (sourcePeg === 1 && targetPeg === 3) {
            let disc = board[0][board[0].length - 1];
            if (!board[2][board[2].length - 1] || disc < board[2][board[2].length - 1]) {   
                disc = board[0].pop();  
                board[2].push(disc);   
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            } else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        }

        if (sourcePeg === 2 && targetPeg === 1) {
            let disc = board[1][board[1].length - 1]
            if (!board[0][board[0].length - 1] || disc < board[0][board[0].length - 1]) {     
                disc = board[1].pop();  
                board[0].push(disc);
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            } else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        }

        if (sourcePeg === 2 && targetPeg === 3) {
            let disc = board[1][board[1].length - 1]
            if (!board[2][board[2].length - 1] || disc < board[2][board[2].length - 1]) {     
                disc = board[1].pop();
                board[2].push(disc);
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            } else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        }

        if (sourcePeg === 3 && targetPeg === 1) {
            let disc = board[2][board[2].length - 1]
            if (!board[0][board[0].length - 1] || disc < board[0][board[0].length - 1]) {     
                disc = board[2].pop();
                board[0].push(disc);    
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            } else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        }

        if (sourcePeg === 3 && targetPeg === 2) {
            let disc = board[2][board[2].length - 1]
            if (!board[1][board[1].length - 1] || disc < board[1][board[1].length - 1]) {     
                disc = board[2].pop();
                board[1].push(disc);
                console.log('That move was successful, board is now:');
                game.checkWinner();
                return this.displayBoard();
            } else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still');
                return this.displayBoard();
            }
        };
    };
};

var startingBoard = [[5, 4, 3, 2, 1], [], []];

var game = new Game(startingBoard);