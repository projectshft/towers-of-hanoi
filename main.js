


// var Towers = function(){
// //functions users have access to
//
//  }; //end Towers

 //===================================================================
var Board = function(numPegs, numDiscs){
    //functions only available to manipulate Board.
    //Inputs: 
    //      numPegs - how many pegs to use (default to 3)
    //      numDiscs - how many discs to play with (default to 3)
    
    // var top = 0;
    // var middle = 1;
    // var bottom = 2;
    var moveArray = [];             //stores the move coordinates [fromPeg, toPeg]

    var attributes = {
        numPegs: numPegs || 3,                        // number of pegs on the board
        numDiscs: numDiscs || 3,                      // number of discs to use
        numMoves: 0,                                  // how many moves made thus far
        gameBoard = [[],[],[]] || [[3, 2, 1],[],[]]   // current state of the discs on pegs
    }; //end attributes
//-------------------------------------------------------------------
    var initBoard = function(){
        //initializes the board as follows to the original default state:
        //numPegs = default of 3
        //numDiscs = default of 3
        //numMoves = 0 (default)
        // Define the gameBoard array
        
        console.log("DEBUG: in initBoard");
        
        attributes[numPegs] = 3;
        attributes[numDiscs] = 3;
        attributes[numMoves] = 0;
        attributes[gameboard] = [[3, 2, 1],[],[]];
    
   }; //end initBoard
//-------------------------------------------------------------------  
    var resetBoard = function (numPegs, numDiscs){
        // Resets the game as defined by input.
        // NOTE: do not need to check for valid property--
        // INPUTS: 
        //      pegs - number of pegs for this game
        //      discs - number of discs for this game
        // OUTPUTS: none

        console.log("DEBUG: in resetBoard");
            // if (pegs>3 && discs>3){
            //     attributes[numPegs] = numPegs;
            //     attributes[numDiscs] = numDiscs;
            //     attributes[numMoves] = 0;
            // }; // end if
            // else {
            //     initBoard();
            // }; // end else
    }; //end Reset

//-------------------------------------------------------------------
   var setState = function(attribute, value){
        // Set the specified attribute to the value given
        //Inputs:
        //      attribute: attribute to set
        //      value: value to assign to the attribute given
        console.log ("DEBUG: in setState");

    }; // end setState
//-------------------------------------------------------------------
        
    var isMoveValid = function(fromPeg, toPeg){
        // Is the desired move valid:
        // INPUTS: 
        //      fromPeg: the peg from which you want to move a disc
        //      toPeg: the peg to which you want to move a disc
        // OUTPUTS: boolean
        //      true: if the move is good
        //      false: if the move does not fulfill the following requirements
        //          1) the fromPeg MUST have discs
        //          2) the disc on the fromPeg MUST be SMALLER than the disc on the toPeg
        console.log("DEBUG: in isMoveValid");
    };// isMoveValid
//-------------------------------------------------------------------
   var whichPegs = function (peg) {
        // Determines which other pegs the disc on the given peg can move to
        // INPUTS: peg - the peg from which you want to move a disc
        // OUTPUTS: pegs that can be used to move the given disc to
        // *** MUST use filter function ***
        console.log("DEBUG: in whichPegs");

    }; //end whichPegs

//-------------------------------------------------------------------
    var moveDisc = function (fromPeg, toPeg) {
        // move a disc from the fromPeg to the toPeg
        //INPUTS:
        //      fromPeg - the peg from which you want to take a disc
        //      toPeg   - the peg to which you want to move the disc.
        // Don't forget to validate move
        console.log("DEBUG: in moveDisc");
    }; //end move disc
//-------------------------------------------------------------------
    var checkWinner = function (){
        //determine if player has won the game
        //INPUTS: none
        //OUTPUTS: boolean
        //      false: the game has not been won
        //      true: the game has been won determined by these criteria:
        //          1) peg on which the discs sit is NOT the original peg ("1")
        //          2) the discs on the peg are in the proper order (largest disc on 'bottom')
        //
        // *** MUST use the reduce function ***
        console.log("DEBUG: in checkWinner");
    }; // end checkWinner
//-------------------------------------------------------------------

    var displayBoard=function(){
        // Display the board (horizontally) to user so they know what it looks like
        // For example:
        //          --- 3, 2, 1
        //          --- 
        //          ---
        //
        // INPUTS: none
        // OUTPUTS: none
        // *** MUST use 'map' function. ***
        console.log("DEBUG: in displayBoard");
    }; //end DisplayBoard
//-------------------------------------------------------------------
    var getMove = function() {
        //Get the user input regarding the move.
        //Want to get the following:
        //      fromPeg: the peg from which you want to move a disc
        //      toPeg: the peg to which you want to move the disc
        // 
        // OUTPUTS: moveArray [fromPeg, toPeg]
        console.log ("DEBUG: In getMove");
        var fromPeg = prompt("Move peg FROM: (top, middle, bottom)");
        var toPeg = prompt("Move peg TO: (top, middle, bottom");

    }; //end getMove

    return {
        getMove: getMove,
        isMoveValid: isMoveValid,
        moveDisc: moveDisc,
        checkWinner: checkWinner,
        announceWinner: announceWinner,
    };// end return
//-------------------------------------------------------------------
}; //end Board
//===================================================================
// 1) Initialize the game board
// 2) playGame
//      Loop while not 'won'
//          getMove from the player
//          check to see if the move is valid
//          if valid, move disc
//          check if game won
//              if game won
//                  announce the winner via console.log
//                  reset the board
//

myBoard = Board();
myBoard.getMove();
