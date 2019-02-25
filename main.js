/* EVAL TO DO LIST:
-refactor possibleMoves function to use FILTER
*/

BoardModule = function(){  //object to wrap game in so that only moveDisc is accessible by the user in the global variable. Other variables and functions are protected by scope
    var board = [ // this is my board! a 2d array
        ["3","2","1"],
        [],
        []
    ];

    var moves = 0; // this is my counter that will keep track of the number of moves the player takes to win

    var printBoard = function(){ //this function prints the board to the console using the map helper method to duplicate size and uses the spread operator to print horizontally and with spaces 
        return board.map(function (peg) { 
            console.log( "---",...peg); 
        });
    };

    console.log(printBoard()); //will delete later, need for checking functionality

    var moveDisc = function(sourcepeg, targetpeg){ //function to moveDisc
        sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation
        targetpeg -= 1;
   
        function isLegalMove() { //refactor to use filter
            if (board[targetpeg].length === 0) { //if the target peg is an empty array, the top disc of the source peg can legally move there
                return true;
            } else if (board[sourcepeg] < board[targetpeg]) { // if the target peg is not an empty array, but the disc on the source peg is smaller than the disc on the target peg, the disc can legally move there also
                return true;
            } else { // illegal move
                return false;
            };      
        };

        if (isLegalMove() == true) { // create constant and use some helper method?
            var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets var disc equal to the return element
            board[targetpeg].push(disc); //adds var disc to the target peg
            moves += 1; //this is a move!
            checkWinner();
            printBoard();
        } else {
            console.log("You cannot move a larger disc on top of a smaller one, board is still: "); 
            console.log(printBoard());
        };
    };

    var checkWinner = function () {
        const winner = board.reduce((accumulator, peg) => { //uses reduce to check if the length of the peg is equal to 3. if it is, it returns the indexOf the peg that has 3 elements in it 
            if (peg.length == 3) return board.indexOf(peg);
            return accumulator
        });
    
        if (winner === 1 || winner === 2) { //if winner returns index 2 or 3, the player has won!
            console.log("You've won Towers of Hanoi! " + "in " + moves + " moves! Play again?");
            board = [ // this resets the game board
                ["3", "2", "1"],
                [],
                []
            ];
            moves = 0; // this resets the move counter
            printBoard(); // this shows the user the reset playing board if they want to play again
        };
    };
return {
    moveDisc : moveDisc // this makes moveDisc public and no longer private
  };
};

var TowersOfHanoi = BoardModule();
 //test code and minimum number of moves to win
console.log(TowersOfHanoi.moveDisc(1,2));
console.log(TowersOfHanoi.moveDisc(1,2));
console.log(TowersOfHanoi.moveDisc(1,3));
console.log(TowersOfHanoi.moveDisc(2,3));
console.log(TowersOfHanoi.moveDisc(1,2));
console.log(TowersOfHanoi.moveDisc(3,1));
console.log(TowersOfHanoi.moveDisc(2,1));
console.log(TowersOfHanoi.moveDisc(3,2));
console.log(TowersOfHanoi.moveDisc(1,2));

// var moveDisc = function(sourcepeg, targetpeg){ - NONWORKING final attempt at using filter
//     sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation        
// 	   targetpeg -= 1;

//   var isLegalMove = function() { //this filters the board for empty pegs
// 		var emptyPegs = board.filter(function (peg) {
//   			return peg.length === 0;
// 		});
		
// 	if (emptyPegs.includes(targetpeg) || disc < board[targetpeg]) {	//this doesn't work
// 		var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets var disc equal to the return element
//         board[targetpeg].push(disc); //adds var disc to the target peg
//         moves += 1; //this is a move!
//         //checkWinner();
//         printBoard();
// 	} else {
// 		console.log("You cannot move a larger disc on top of a smaller one, board is still: "); 
//         console.log(printBoard());
// 	};
//   };
//   return isLegalMove();
// };
// --------------------------------------------------------
// var checkWinner = function() { // prior to incorporating reduce
//     if (board[1].includes("1","2","3") || board[2].includes("1", "2","3")) {
//         console.log("You've won Towers of Hanoi! " + "in " + moves + " moves! Play again?"); //this lets the player know when they've won
//     //  newBoard = [ // this resets the game board . ..if I name it "moves' and "board", then the logic above will be based on it because of scope. if i make it new names, the game won't work again
//     //        ["3", "2", "1"],
//     //        [],
//     //        []
//     //  ];
//     //  newMoves = 0; //this resets the counter
//         console.log(printBoard());
//     }
// }
//---------------------------------------------------------
// if (sourcepeg.length-1 < targetpeg.length-1) { attempting to see if the last index of sourcepeg is less than the last index of targetpeg
//---------------------------------------------------------
// var moveDisc = function(sourcepeg, targetpeg){ //these 8 lines work!
//     sourcepeg -= 1; //because array index starts at 1, we need to decrease the number so the peg numbers passed are logical for the user, but still work for array manipulation
//     targetpeg -= 1;
//     //this is likely where I will add the function that checks potential moves, and validation
//     var disc = board[sourcepeg].pop(); //removes top disc from source peg and sets var disc equal to the return element
//     board[targetpeg].push(disc); //adds var disc to the target peg
//     moves += 1; //this is a move!
//     printBoard();
// }
//---------------------------------------------------------
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
//---------------------------------------------------------

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
            
    //---------------------------------------------------------
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
 

