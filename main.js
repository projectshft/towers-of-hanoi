var towersOfHanoi = {

    //board should maintain the number of moves a player has completed - outputs value with endGame
    moves: 0,

    //object must contain the state of the board
    //use 2D array to represent the board
    // board: [],

    // winState: [],

    // gameStarted: false,

    board: [
        [3, 2, 1],
        [],
        []
    ],

    winState: [3, 2, 1],

    gameStarted: true,

    //game will progress by a player using a function to submit moves to the game
    moveDisc: function(pegFrom, pegTo) {

        if (this.gameStarted == false){
            this.startGame();
        };

        //function will check if a move is possible (i.e. ensuring a smaller disc is being moved onto a bigger)
        if (this.possibleMove(pegFrom, pegTo)) {
            let discMoving = this.board[pegFrom - 1].pop();
            this.board[pegTo - 1].push(discMoving);
            this.updateMoves();
            console.log(`Moved disc ${discMoving} from Peg ${pegFrom} to Peg ${pegTo}.`);
            if (this.checkWinner()) {
                this.endGame();
            }
        } else {
            console.log(`The disc you are moving cannot be placed onto Peg ${pegTo}, please try another move.`);
        }

        this.displayBoard();

    },

    displayBoard: function() {
        //must be able to print the board horizontally using **map** (and on cmd line print)


        console.log(this.board.map(peg => {
            return "--- " + peg.join(" ");
        }).join("\n"));


    },

    //update number of moves a player has completed
    updateMoves: function() {
        this.moves++;
    },

    //outputs value with endGame
    displayMoveTotal: function() {
        console.log(`User has completed ${this.moves} moves.`);
        //this.displayBoard();
    },


    possibleMove: function(pegFrom, pegTo) {

        //check if peg is a number
        if (typeof pegFrom === "number" && typeof pegTo === "number") {

            //check if pegFrom/To exists
            if (pegFrom > 0 && pegFrom <= this.board.length && pegTo > 0 && pegTo <= this.board.length) {

                //check for actual top Disc
                if (this.board[pegFrom - 1].length !== 0) {

                    //check if pegTo is empty
                    if (this.board[pegTo - 1].length === 0) {
                        return true;
                    }

                    //check topDisc of pegFrom against pegTo 
                    if (pegFrom.length !== 0) {
                        //debugger
                        //find the numbers of the top discs on the pegs
                        let pegFromTopDisc = this.board[pegFrom - 1][(this.board[pegFrom - 1].length - 1)];
                        let pegToTopDisc = this.board[pegTo - 1][(this.board[pegTo - 1].length - 1)];

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


    },

    //function that's given a peg, determines which other pegs that peg's top disc can be moved to
    //this function must use filter() at least once
    possibleMoves: function(pegNumber) {
        //grab the pegs available

        //debugger
        let currentBoard = this.board;
        if (currentBoard[(pegNumber - 1)].length !== 0) {
            let discValue = currentBoard[(pegNumber - 1)][currentBoard[(pegNumber - 1)].length];
            let allowedMoves = currentBoard.filter(function(peg, pegIndex) {
                if ((pegIndex + 1) !== pegNumber) {

                    if(peg.length === 0 || peg[peg.length] < discValue){
                        console.log(`You could move the disc from the top of Peg ${pegNumber} to Peg ${(pegIndex + 1)}.`);
                    } else {
                        console.log(`There are no current possible moves from Peg ${pegNumber}, please try another peg!`);
                    }
                }

            });
        } else {
            console.log(`The peg you are checking moves from is empty, please try another peg!`);
        }

    },

    startGame: function() {

        //check if we've started this thing already
        if (this.gameStarted == false) {

            //annoying introduction
            alert("Hello! Let's play Towers of Hanoi. It's your new favorite game.");
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

        }
    },

    createBoard: function(discs, pegs) {
        // count discs for win state
        for (let i = discs; i > 0; i--) {
            this.winState.push(i);
        }
        // create initial board

        for (let j = 0; j < pegs; j++) {
            if (j === 0) {
                this.board.push([]);
                for (let k = discs; k > 0; k--) {
                    this.board[j].push(k);
                }
            } else {
                this.board.push([]);
            }
        }

        this.gameStarted = true;
    },

    endGame: function() {
        this.displayMoveTotal();
        //game should announce that there has been a winner to the console.
        console.log(`Well done! You've won the game.`);
        this.moves = 0;
        this.board = [];
        this.winState = [];
        this.gameStarted = false;

        //game should automatically reset to a new game.
        this.startGame()

        // let response = confirm("Would you like to play again?");
        // if response ? this.startGame() : alert("Thanks for playing!");

    },

    checkWinner: function() {

        //function checkWinner that determines if the game has been won
        //this function must use reduce at least once
        magicNum = this.winState.length;
        //use find to see if there's a peg with enough discs to potentially win
        let winningPeg = this.board.find(function(peg) {
            return (peg.length == magicNum);
        });

        //create array to check each disc vs. win State array
        // let winArray = [];
        //debugger
        if (winningPeg !== undefined) {

            //debugger
            let magicArray = this.winState;
            return winningPeg.reduce(function(accumulator, disc, discIndex) {
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

    }

};