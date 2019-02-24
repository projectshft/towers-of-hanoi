
/*need board - 2d array
need moveDisc function
    takes in whichdisk to move and which peg to move to
    checks if the disk is smaller than the disk its moving to
print board horizontally - must use map (array method) at least once for this

*/

/* maybe use this to ensure that prompts are numbers between 1 and 3?`
function promptForDisc( text)
{
    if(text == '' ){
     text = "Please enter a number from 1 to 100";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(number){

    if (number <= 3 && number >= 1) {
    document.write("Your number (" + number + ")  matches requirements", "");
} else if (isNaN(number)) {
    promptForNumber("It is not a number. Please enter a number from 1 to 3", "");
} else {
    promptForNumber("Your number (" + number + ") is not between 1 and 3", "");
}

}
*/
// BoardModule = function(){
    var board = [ // this is my board! a 2d array
        ["3","2","1"],
        [],
        []
    ];
    var moves = 0; // this is my counter that will keep track of the 

    var printBoard = function(){ //this function prints the board to the console using the map helper method to duplicate size and uses the spread operator to print horizontally and with spaces 
        return board.map(function (peg) { 
            console.log( "---",...peg); 
        });
    };

console.log(printBoard()); //will delete later, need for checking functionality

var moveDisc = function(sourcepeg, targetpeg){ 
    sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation
    targetpeg -= 1;
// var possibleMoves = function(){ need to make the below fit inside a function? also use FILTER
    if (board[targetpeg].length === 0) {
        var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets var disc equal to the return element
        board[targetpeg].push(disc); //adds var disc to the target peg
        moves += 1; //this is a move!
        checkWinner();
        printBoard();
  } else if (board[sourcepeg] < board[targetpeg]) {
        var disc = board[sourcepeg].pop(); //this code is repeated from above . . . how to DRY?
        board[targetpeg].push(disc);
        moves += 1;
        printBoard();
        checkWinner();
  } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: "); 
      console.log(printBoard());
  };
};

var checkWinner = function() { //these 12 lines work!
    if (board[1].includes("1","2","3") || board[2].includes("1", "2","3")) {
        console.log("You've won Towers of Hanoi! " + "in " + moves + " moves! Play again?"); //this lets the player know when they've won
        newBoard = [ // this resets the game board . ..if I name it "moves' and "board", then the logic above will be based on it because of scope. if i make it new names, the game won't work again
            ["3", "2", "1"],
            [],
            []
        ];
        newMoves = 0; //this resets the counter
        console.log(printBoard());
    }
}
// if (sourcepeg.length-1 < targetpeg.length-1) { attempting to see if the last index of sourcepeg is less than the last index of targetpeg

// var moveDisc = function(sourcepeg, targetpeg){ //these 8 lines work!
//     sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation
//     targetpeg -= 1;
//     //this is likely where I will add the function that checks potential moves, and validation
//     var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets var disc equal to the return element
//     board[targetpeg].push(disc); //adds var disc to the target peg
//     moves += 1; //this is a move!
//     printBoard();
// }

// var checkWinner = function() { //these 12 lines work!
//     if (board[1].includes("1","2","3") || board[2].includes("1", "2","3")) {
//         console.log("You've won Towers of Hanoi! " + "in " + moves + " moves! Play again?"); //this lets the player know when they've won
//         newBoard = [ // this resets the game board . ..if I name it "moves' and "board", then the logic above will be based on it because of scope. if i make it new names, the game won't work again
//             ["3", "2", "1"],
//             [],
//             []
//         ];
//         newMoves = 0; //this resets the counter
//         console.log(printBoard());
//     }
// }

console.log(moveDisc(1,2));
console.log(moves);
console.log(moveDisc(1,3));


        // function moveDisc(chooseDisc, choosePeg) {
        //     var moves = 0;

        //     function possibleMoves(chooseDisc, choosePeg) { //use filter function at least once
        //         var possibleMove = null;

        //         for (var i = 0; i > shoes.length; i--) { //this is using some but iterates backwards so that if the first idex in 
        //             if (board[choosePeg] < chooseDisc) {
        //             posssibleMove = false;
        //             break;
        //             } else {
        //             possibleMove = true;
        //             }
        //         }
        //     forEach(board[whichpeg]) 
        //         if (board[whichpeg.length - 1] > whichdisc) {
        //             console.log("You cannot move a larger disk on top of a smaller one; board is still: " + printBoard);
        //         } else {
        //             board.pop("whichdisc");
        //             board.push = whichdisc; 
        //             moves += 1;
        //             printBoard();
        //             // checkWinner();?
    
        //     } // needs to loop through the peg array that the user wants to move to, looking to see if it is a possible move or not 
    
        // };
            
    //  x
    //         var checkWinner = board.find(function(peg){  // must use reduce function at least once
    //             if (peg.includes("1") && peg.includes("2") && peg.includes("3")) {
    //                  return true;
    //             };
    //             if (checkWinner === true) {
    //                 console.log("You won in " + counter + "moves! Play again?");  //if win, this logs. and also the game resets to the starting board
    //                 var resetBoard = function() {
    //                     return board.map(function (peg) {
    //                         ["3","2","1"];
    //                     });
    //             }
    //         }
        // });
        // return {
        //     printBoard: printBoard,
        //     moveDisc: moveDisc
        //   };
        // };
    
     
      
    
    // var TowerOfHanoi = BoardModule();
    // TowerOfHanoi.moveDisc(2,1);

