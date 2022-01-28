//create game-creating module so the board is only accessible via the functions explicitly defined to interact with it
const TowerOfHanoiGame = (numDiscs) => {
    if(numDiscs < 3) {
        numDiscs = 3;
        console.log('This game must be played with at least 3 discs. Starting game with 3 discs');
    }
    if(numDiscs === 64) {
        numDiscs = 65;
        console.log('Playing this game with 64 discs could cause the world to end; you can play with 65 instead');
    }

    //discCount defaults to 5 if no numDiscs value passed
    let discCount = numDiscs || 5;

    let board = [
        //build array of size 5 prefilled with null values then map over it to give each element a string value of the index plus one
        Array.apply(null, Array(discCount)).map((element, idx) => {
            return (idx + 1).toString();
        }).reverse(),
        [],
        []
    ];
    //Logging function defined outside of module return object so the board can be logged immediately upon creation of a game instance
    let logBoard = function() {
        //create an array of three strings that hold the '--- ' prefix and the disc numbers
        let pegStrings = board.map(peg => {
            return '--- ' + peg.join('');
        });
        //print each of the peg strings to the console individually
        pegStrings.forEach(peg => console.log(peg));
    }

    //log the board's state upon intialization of game
    logBoard();

    return {
        checkWinner: function(peg) {
            //player wins if a peg other than peg 1 contains five discs; unnecessary to check order of discs because they can never be placed out of increasing order
            if(peg !== 1 && board[peg - 1].length === discCount) {
                console.log("Congratulations, you win!");
                this.resetBoard();
                return true;
            }
            return false;
        },
        //return value of discount (for testing purposes only)
        getDiscCount: function() {
            return discCount;
        },
        //return value of top disc of selected peg (for testing and code readability purposes only)
        getTopDisc: function(peg) {
            if(peg < 1 || peg > 3) {
                console.log("This peg doesn't exist. The only peg options are 1, 2 & 3");
                return undefined;
            }
            return board[peg - 1][board[peg - 1].length - 1];
        },
        moveDisc: function(peg1, peg2) {
            //peg indexes in board are one less than the peg args provided
            let peg1Idx = peg1 - 1;
            let peg2Idx = peg2 - 1;
            //if peg1 is empty move is unsuccessful
            if(!this.getTopDisc(peg1)) {
                console.log(`You cannot move a disc from ${peg1} because it doesn't have any pegs`);
              //if peg1 has a disc and peg2 doesn't or if the disc on peg1 is smaller the move is successful
            } else if(!this.getTopDisc(peg2)|| Number(this.getTopDisc(peg1)) < Number(this.getTopDisc(peg2))) {
                board[peg2Idx].push(board[peg1Idx].pop());
                console.log('That move was successfull; board is now:');
            } else {
                //otherwise (if peg2 has a smaller disc than peg1) the move is unsuccessful
                console.log('You cannot move a larger disc on top of a smaller one; board is still:');  
            }
            //log the post-moveDisc state of the board
            logBoard();
            //return result of checking winner to allow testing of the checkWinner function
            return this.checkWinner(peg2);
        },
        resetBoard: function() {
            board = [
                Array.apply(null, Array(discCount)).map((element, idx) => {
                    return (idx + 1).toString();
                }).reverse(),
                [],
                []
            ];
        }
    }
}



