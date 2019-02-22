var gameBoard = [[],[],[]];
var top = 0;
var middle = 1;
var bottom = 2;


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

    var attributes = {
        numPegs: numPegs || 3,
        numDiscs: numDiscs || 3,
        numMoves: 0                 //how many moves made thus far
    }; //end attributes
//-------------------------------------------------------------------
    var initBoard = function(){
        //initializes the board as follows:
        //numPegs = default
        //numDiscs = default
        //numMoves = 0 (default)
        // Define the gameBoard array
       


    }; //end initBoard
//-------------------------------------------------------------------  
    var setState = function(attribute, value){
        // Set the specified attribute to the value given
        //Inputs:
        //      attribute: attribute to set
        //      value: value to assign to the attribute given


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

    };// isMoveValid
//-------------------------------------------------------------------
   var whichPegs = function (peg) {
        // Determines which other pegs the disc on the given peg can move to
        // INPUTS: peg - the peg from which you want to move a disc
        // OUTPUTS: pegs that can be used to move the given disc to
        // *** MUST use filter function ***


    }; //end whichPegs

//-------------------------------------------------------------------
    var moveDisc = function (fromPeg, toPeg) {
        // move a disc from the fromPeg to the toPeg
        //INPUTS:
        //      fromPeg - the peg from which you want to take a disc
        //      toPeg   - the peg to which you want to move the disc.
        // Don't forget to validate move

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
        
    } // end checkWinner
//-------------------------------------------------------------------
    var Reset = function (){
        // Resets the game to a default state.
        // INPUTS: none
        // OUTPUTS: none
      
    } //end Reset
//-------------------------------------------------------------------
    var DisplayBoard=function(){
        // Display the board (horizontally) to user so they know what it looks like
        // For example:
        //          --- 3, 2, 1
        //          --- 
        //          ---
        //
        // INPUTS: none
        // OUTPUTS: none
        // *** MUST use 'map' function. ***

    }; //end DisplayBoard
//-------------------------------------------------------------------
    var getMove = function() {
        //Get the user input regarding the move.
        //Want to get the following:
        //      fromPeg: the peg from which you want to move a disc
        //      toPeg: the peg to which you want to move the disc
        // 
        // OUTPUTS: fromPeg and toPeg

        var fromPeg = prompt("Move peg FROM: (top, middle, bottom)");
        var toPeg = prompt("Move peg TO: (top, middle, bottom");
    } //end getMove
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
//                  announce winner through console.log
//                  reset the board
//