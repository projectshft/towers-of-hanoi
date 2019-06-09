var towersOfHanoi = function() {


    //There should be an object responsible for maintain the state of the board and it
    //should control the way to manipulate the inner state of the board.
    var state = {
        moves: 0,
        //board should maintain the number of moves a player has completed - outputs value with endGame
        board: [
            [3, 2, 1],
            [],
            []
        ],
        winState: [3, 2, 1],
        gameStarted: true
    };

    //game will progress by a player using a function to submit moves to the game
    var moveDisc = function(pegFrom, pegTo) {

        if (this.state.gameStarted == false) {
            this.startGame();
        };

        //function will check if a move is possible (i.e. ensuring a smaller disc is being moved onto a bigger)
        if (this.possibleMove(pegFrom, pegTo)) {
            let discMoving = this.state.board[pegFrom - 1].pop();
            this.state.board[pegTo - 1].push(discMoving);
            this.updateMoves();
            console.log(`Moved disc ${discMoving} from Peg ${pegFrom} to Peg ${pegTo}.`);
            if (this.checkWinner()) {
                this.endGame();
            }
        } else {
            console.log(`The disc you are moving cannot be placed onto Peg ${pegTo}, please try another move.`);
        }

        this.displayBoard();

    };

    var displayBoard = function() {
        //must be able to print the board horizontally using **map** (and on cmd line print)
        console.log(this.state.board.map((peg, pegIndex) => {
            return `Peg (${pegIndex+1}): --- ` + peg.join(" ");
        }).join("\n"));

    };

    //update number of moves a player has completed
    var updateMoves = function() {
        this.state.moves++;
    };

    //outputs value with endGame
    var displayMoveTotal = function() {
        console.log(`User has completed ${this.state.moves} moves.`);
        //this.displayBoard();
    };


    var possibleMove = function(pegFrom, pegTo) {

        //check if peg is a number
        if (typeof pegFrom === "number" && typeof pegTo === "number") {

            //check if pegFrom/To exists
            if (pegFrom > 0 && pegFrom <= this.state.board.length && pegTo > 0 && pegTo <= this.state.board.length) {

                //check for actual top Disc
                if (this.state.board[pegFrom - 1].length !== 0) {

                    //check if pegTo is empty
                    if (this.state.board[pegTo - 1].length === 0) {
                        return true;
                    }

                    //check topDisc of pegFrom against pegTo 
                    if (this.state.board[pegFrom - 1].length !== 0) {
                        //debugger
                        //find the numbers of the top discs on the pegs
                        let pegFromTopDisc = this.state.board[pegFrom - 1][(this.state.board[pegFrom - 1].length - 1)];
                        let pegToTopDisc = this.state.board[pegTo - 1][(this.state.board[pegTo - 1].length - 1)];

                        if (pegFromTopDisc < pegToTopDisc) {

                            //console.log(`Moving disc ${pegFromTopDisc} on Peg ${pegFrom} to Peg ${pegTo} is totally possible.`);
                            return true;
                        } else {
                            return false;
                        }

                    } else {
                        return true;
                    }

                    //console output if selected peg is empty
                } else {
                    console.log(`The peg you are attempting to move a disc from is empty, please try another peg!`);
                    return false;
                }
                //console output if either from peg or to peg does not exist
            } else {
                console.log(`One of the selected pegs does not exist, please try another peg number!`);
                return false;
            }
        }
        //console output if peg is not a number
        else {
            console.log(`One of the selected pegs is not a number, please enter an integer and try again.`);
            return false;
        }


    };

    //function that's given a peg, determines which other pegs that peg's top disc can be moved to
    //this function must use filter() at least once
    var possibleMoves = function(pegNumber) {
        //grab the pegs available

        //debugger
        let currentBoard = this.state.board;

        if (typeof pegNumber === "number" && ((pegNumber-1) < currentBoard.length) && (pegNumber > 0)) {
            if (currentBoard[(pegNumber - 1)].length !== 0) {
                let discValue = currentBoard[(pegNumber - 1)][currentBoard[(pegNumber - 1)].length];
                let allowedMoves = currentBoard.filter(function(peg, pegIndex) {
                    if ((pegIndex + 1) !== pegNumber) {

                        if (peg.length === 0 || peg[peg.length] < discValue) {
                            console.log(`You could move the disc from the top of Peg ${pegNumber} to Peg ${(pegIndex + 1)}.`);
                        } else if (peg[peg.length] > discValue) {
                            console.log(` `);
                        } else {
                            console.log(`There are no current possible moves from Peg ${pegNumber}, please try another peg!`);
                        }
                    }

                });
            } else {
                console.log(`The peg you are checking moves from is empty, please try another peg!`);
            }
        } else {
            console.log(`The peg you are checking moves from does not exist, please try another peg!`);
        }
    };

    var startGame = function() {

        //check if we've started this thing already
        if (this.state.gameStarted === false) {

            //annoying introduction
            alert("Hello! Let's play Towers of Hanoi. I can already tell it's your new favorite game.");
            alert("To get started, we will first need to determine how many pegs and discs you'll play with...");
            let discs = parseInt(window.prompt("Please enter the number of disc(s) (minimum 1): "));

            //grab number of discs
            // do {
            if (typeof discs === "number") {
                //check if discs is greater than 3
                if (discs < 1) {
                    alert("Apologies, we will need at least one disc to begin...");
                    let discs = window.prompt("Please enter the number of disc(s) (minimum 1): ");
                }
            } else {
                alert("Apologies, we will need a number to determine how many discs to begin...");
                let discs = window.prompt("Please enter the number of disc(s) (minimum 1): ");
            }
            // } while (typeof discs !== "number");


            discs = Math.floor(discs);
            alert(`Thanks, ${discs} discs it is! Please input the number of pegs you'll play with...`);

            //grab number of pegs
            // do {
            let pegs = parseInt(window.prompt("Please enter the number of pegs (minimum 3): "));
            if (typeof pegs === "number") {
                //check if pegs is greater than 3
                if (pegs < 3) {
                    alert("Apologies, we will need at least three pegs to begin...");
                    let pegs = window.prompt("Please enter the number of pegs (minimum 3): ");
                }
            } else {
                alert("Apologies, we will need a number to determine how many pegs to begin...");
                let pegs = window.prompt("Please enter the number of pegs (minimum 3): ");
            }
            // } while (typeof pegs !== "number");

            pegs = Math.floor(pegs);

            this.createBoard(discs, pegs);
            alert(`We have ${pegs} Towers and ${discs} discs! Best of luck, please use the console below to play.`);

        } else {
            console.log(`The game has already begun with a default of 3 Pegs and 3 Discs.\nOnce you beat this first round, you will have the option to change the number of Pegs/Discs... \nGood Luck! Below is the current board.\nTry towersOfHanoi.possibleMoves(1) in your console to begin.`);
        }
    };

    var createBoard = function(discs, pegs) {
        // count discs for win state
        for (let i = discs; i > 0; i--) {
            this.state.winState.push(i);
        }
        // create initial board

        for (let j = 0; j < pegs; j++) {
            if (j === 0) {
                this.state.board.push([]);
                for (let k = discs; k > 0; k--) {
                    this.state.board[j].push(k);
                }
            } else {
                this.state.board.push([]);
            }
        }

        this.state.gameStarted = true;
    };

    var endGame = function() {

        if (this.checkWinner()) {
            this.displayMoveTotal();
            //game should announce that there has been a winner to the console.
            console.log(`Well done! You've won the game.`);
            this.state.moves = 0;
            this.state.board = [];
            this.state.winState = [];
            this.state.gameStarted = false;

            //game should automatically reset to a new game.
            this.startGame();
        }
        // let response = confirm("Would you like to play again?");
        // if response ? this.startGame() : alert("Thanks for playing!");

    };

    var checkWinner = function() {

        //function checkWinner that determines if the game has been won
        //this function must use reduce at least once
        magicNum = this.state.winState.length;
        //use find to see if there's a peg with enough discs to potentially win
        let winningPeg = this.state.board.findIndex(function(peg) {
            return (peg.length == magicNum);
        });

        //create array to check each disc vs. win State array
        // let winArray = [];
        //debugger
        if (winningPeg !== -1 && winningPeg !== 0) {

            //debugger
            let magicArray = this.state.winState;
            return this.state.board[winningPeg].reduce(function(accumulator, disc, discIndex) {
                accumulator.push(disc === magicArray[discIndex]);
                return accumulator;
            }, []).every(compareToWin => {
                return compareToWin === true;
            });

            // for (let i = 0; i < winningPeg.length; i++) {
            //     if (winningPeg[i] == this.winState[i]) {
            //         winArray.push(true);
            //     } else {
            //         winArray.push(false);
            //     }
            // }
        } else {
            return false
        }

        //do I even need this?
        // else {
        //     winArray.push(false);
        // }

        // return winArray.every(compareToWin => {
        //     return compareToWin === true;
        // });

    };

    return {
        state,
        moveDisc,
        displayBoard,
        updateMoves,
        displayMoveTotal,
        possibleMove,
        possibleMoves,
        startGame,
        createBoard,
        endGame,
        checkWinner

    };

};

var towersOfHanoi = towersOfHanoi();
towersOfHanoi.startGame();
towersOfHanoi.displayBoard();