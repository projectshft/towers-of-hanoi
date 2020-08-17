//  Eval 01 Towers of Hanoi

//  1.  Game board is a 2D array
//         A board representing 3 pegs, and 5 discs on the first peg in 
//      ascending order.  This is a normal starting position for the game. 
//      [["5", "4", "3", "2", "1"], [], []];

//  2.  Function to print current state of the game board
//         We'll want to be able to print the board horizontally. 
//      You MUST utilize a map function at least once to accomplish this part of 
//      the assignment. The starting board will log the 2D array to the console 
//      like this:  --- 5 4 3 2 1 --- ---
//      (If you'd like a challenge, try printing the board vertically)

//  3.  Log player actions to the console
//         Our game will progress with the player submitting moves to the game 
//      and the game accepting or rejecting the move and updating the board 
//      if the move is allowed. 
//         Remember, you must only move the top disc from the peg and you can't 
//      move a disc on top of another if it is bigger than that disc. For example
//      with moves originating from the above starting board:
//
//      •	board.moveDisc(1,2);  (move the disc from peg 1 to peg 2)               
//      •	That move was successful, board is now: --- 5 4 3 2 --- 1 --- 
// 
//      •	board.moveDisc(1,3); (move disc from peg 1 to peg 3 )                  
//      •	That move was successful, board is now: --- 5 4 3 --- 1 --- 2 
// 
//      •	board.moveDisc(1,2); (move disc from peg 1 to peg 2)                   
//      •	Disc on peg 2 must be larger than your disc, board is still: --- 5 4 3 --- 1 --- 2       

//  4.  An object to maintin game board state
//         There should be an object responsible for maintaining the state of
//      the board and it should control the way the inner state of the board 
//      is mnipulated. The board should maintain the number of moves that the 
//      player has done and output this value when the game completes.

//  5.  A way to move discs from one peg to another. 

//  6.  A function to determine legal moves from a given peg 
//         There should be a function that given a certain peg, determines which 
//      other pegs the top disc from that peg can be moved to. In order to 
//      complete this function, you MUST use a filter function at least once 
//      (HINT: If the user says they want to move a certain disc to another peg, 
//      wouldn't it be nice if you had a function that could take that disc size 
//      and look at all the pegs on the board and only return the ones that the 
//      disc you want to move would fit on?). 

//  7.  A function to determine if the win condition has been met
//         There should be a function checkWinner that checks to see if the player 
//      has won the game. You win the game by putting all the discs back in the 
//      original order but on a new peg. As a part of this function, you MUST 
//      use the reduce function at least once. As a helpful hint, we suggest that 
//      you test this function with only 3 pegs and 3 discs on the board as it 
//      will take significantly less moves to "win".

//  8.  Inform player of win and set up new game.
//         Once a player wins, the game should automatically end by 
//      announcing the winner (through a console log) and reset for a new game.

const pegWeight = (accumulator, currentValue) => (accumulator + currentValue);

let boardState  = [[],["5", "4", "3", "2", "1"], [], []];
let moveNumber  = 0;
let discTotal   = 5;
let pegTotal    = 3;
let startPeg    = 1;
let winPeg      = 0;    // 0 means any peg besides startPeg is valid for a win
let bufferPegWd = 5;
let winWeight   = boardState[1].reduce(pegWeight).length;

function initGame() {
    return;
}

function newGame() {
    console.log("\nPack your bags and grab your visa!  \nIt's time to play... Towers Of Hanoi!\n");
    return;
}

function moveDisc( srcPeg, dstPeg ) {
    if( validMove( srcPeg, dstPeg ) ) {
        let srcDisc = boardState[ srcPeg ].pop();
        boardState[ dstPeg ].push( srcDisc );
        moveNumber++;
        logValidMove(srcPeg, dstPeg);
        printBoard()
        if (checkWinner()) {
            if(winPeg !== 0 && boardState[winPeg].length === 0) {
                logFalseWin(winPeg, dstPeg);
                return;
            }
        logWin();
        return;

        } 
        return true;
    } 
    logInvalidMove(srcPeg, dstPeg);
    return false;
}

// This function needs to use a map function!

function printBoard(){
    for(levelNum=discTotal; levelNum > 0; levelNum--){
        printLine(levelNum-1);
    }
    printXAxis();
    return;
}

function printLine(levelNum) {
    let lineBuffer ='';
    let blank = true;
    for (let i=1; i<=pegTotal; i++) {
        let disc = boardState[i][levelNum];
        if(disc !== undefined) {
            lineBuffer += `   ${disc}   `;
            blank = false;
        } else {
            lineBuffer += `       `;
        }
    }
    if (!blank) console.log(lineBuffer);
    return
}

function printXAxis() {
    let lineBuffer ='';
    for (let i=1; i<=pegTotal; i++) {
        lineBuffer += ` __|__ `; 
    }
   console.log(lineBuffer);
  return
}


function checkWinner() {
    for (let peg=1; peg<=pegTotal; peg++) {
        if (boardState[peg].length !== 0) {
            if (boardState[peg].reduce(pegWeight).length === winWeight) {
                return true;
            }
        }
    }
    return false;
}

function validMove( srcPeg, dstPeg ) {

    if(srcPeg < 1 || srcPeg > pegTotal || dstPeg < 1 || dstPeg > pegTotal) {
        return false;
    }
    let srcDisc = boardState[ srcPeg ].pop();
    if( srcDisc === undefined ) return false;
    boardState[ srcPeg ].push( srcDisc );

    let dstDisc = boardState[ dstPeg ].pop();
    if( dstDisc === undefined ) return true;
    boardState[ dstPeg ].push( dstDisc );

    if( srcDisc < dstDisc ) return true; 
    return false;
}

function logValidMove( srcPeg, dstPeg ) {
    console.log(`\nMove ${moveNumber}: Move the top disc from peg ${ srcPeg } to peg ${ dstPeg }.\n`);
    return;
}

function logInvalidMove( srcPeg, dstPeg ) {

    if (srcPeg < 1 || srcPeg > pegTotal) {
        console.log(`\nThere's no peg ${ srcPeg }, Yo.\n`);
        return;

    } else if (dstPeg < 1 || dstPeg > pegTotal) {
        console.log(`\nI'm afraid there isn't a peg ${ dstPeg } on this board.\n`);
        return;

    } else if (boardState[ srcPeg ].length === 0) {
        console.log(`\nWere you aware that there aren't any discs on peg ${ srcPeg } to move? Would you like to try again?\n`);
        return;

    } else {
        console.log(`\nThat move doesn't work. The disc from peg ${ srcPeg } you're trying to move onto peg ${ dstPeg } is too large for that peg.\n`);
        return;
    }
}

function logWin() {
    console.log( `\nCongratulations! You won in ${ moveNumber } moves.\n`);
    return;    
}

function logFalseWin(winPeg, dstPeg) {
    console.log(`\nYou have succeeded in moving all your discs from peg ${startPeg} to peg ${dstPeg}.`);
    console.log(`Unfortunately, you need to get all the discs onto peg ${winPeg} to win this game.`);
    console.log(`But, hey, don't give up. You're doing great! Keep going. You've got this!\n`);
    return;
}


// MAIN - Move tower fromPeg 1 to Peg 2

initGame();
newGame();
printBoard();
moveDisc(1, 2);

moveDisc(1, 2);     // error case: destination peg has smaller disc
moveDisc(3, 2);     // error case: empty source peg
moveDisc(5, 2);     // error case: invalid source peg #
moveDisc(3, 7);     // error case: invalid destination peg #
moveDisc(0, 2);     // error case: invalid source peg #
moveDisc(3, 0);     // error case: invalid destination peg #

moveDisc(1, 3);
moveDisc(2, 3);
moveDisc(1, 2);
moveDisc(3, 1);
moveDisc(3, 2);
moveDisc(1, 2);
moveDisc(1, 3);
moveDisc(2, 3);
moveDisc(2, 1);
moveDisc(3, 1);
moveDisc(2, 3);
moveDisc(1, 2);
moveDisc(1, 3);
moveDisc(2, 3);
moveDisc(1, 2);
moveDisc(3, 1);
moveDisc(3, 2);
moveDisc(1, 2);
moveDisc(3, 1);
moveDisc(2, 3);
moveDisc(2, 1);
moveDisc(3, 1);
moveDisc(3, 2);
moveDisc(1, 2);
moveDisc(1, 3);
moveDisc(2, 3);
moveDisc(1, 2);
moveDisc(3, 1);
moveDisc(3, 2);
moveDisc(1, 2);     // Winner!
