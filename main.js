alert("Welcome to Towers of Hanoi! Good luck!");
//must have object that maintains the state of the board
//needs to be a way to move discs from one peg to another
//checkWinner function will check to see if the player has won the game, which means putting all the discs back in the original order but on a new peg
//once a player ends the game should automatically win by announcing a winner (through console.log) and reset for a new game;

//create game-creating module so the board is only accessible via the functions explicitly defined to interact with it
const TowersOfHanoiGame = () => {
    let board = [
        ["5", "4", "3", "2", "1"],
        [],
        []
    ];
    return {
        logBoard: function() {
            //create an array of three strings that hold the '--- ' prefix and the disc numbers
            let pegStrings = board.map(peg => {
                return '--- ' + peg.join('');
            });
            //print each of the peg strings to the console individually
            pegStrings.forEach(peg => console.log(peg));
        },
        moveDisc: function(peg1, peg2) {
            //peg indexes in board are one less than the peg args provided
            let peg1Idx = peg1 - 1;
            let peg2Idx = peg2 - 1;
            //if peg1 is empty move is unsuccessful
            if(!board[peg1Idx].length) {
                console.log(`You cannot move a disc from ${peg1} because it doesn't have any pegs`);
              //if peg1 has a disc and peg2 doesn't or if the disc on peg1 is smaller the move is successful
            } else if(!board[peg2Idx].length || Number(board[peg1Idx][board[peg1Idx].length - 1]) < Number(board[peg2Idx][board[peg2Idx].length - 1])) {
                board[peg2Idx].push(board[peg1Idx].pop());
                console.log('That move was successfull; board is now:');
            } else {
                //otherwise (if peg2 has a smaller disc than peg1) the move is unsuccessful
                console.log('You cannot move a larger disc on top of a smaller one; board is still:');  
            }
            //log the post-moveDisc state of the board
            this.logBoard();
            //check to see if moving the disc to the new peg is a winning move
            this.checkWinner(peg2);
        },
        checkWinner(peg) {
            //player wins if a peg other than peg 1 contains five discs; unnecessary to check order of discs because they can never be placed out of increasing order
            if(peg !== 1 && board[peg - 1].length === 5) {
                console.log("Congratulations, you win! I hope there weren't 64 discs!")
            }
        }
    }
}

//create an instance of the game
let game = TowersOfHanoiGame();

//log the starting position
game.logBoard();
