
var msgMinBoardSpecReqd = "Game requires a minimum of 3 pegs and 3 discs: Using default board (3 pegs/3 discs).";
var msgWinner = "Game WON! Congratulations";

var announceMsg = function (msg){
    console.log (msg);

}; // end announceMsg

// var TowersGame = function(){

// }; //end TowersGame
//var gameBoard = [[],[],[]];
 //===================================================================
var Board = function(){
    //Board 'class' to manipulate the game board.
    //Inputs: 
    //      numPegs - how many pegs to use (default to 3)
    //      numDiscs - how many discs to play with (default to 3)
    //gameBoard = [[],[],[]]; //hard code for 3 pegs/3discs

    var gameBoard = [[],[],[]];
    var nextMove = [];             //stores the move coordinates [fromPeg, toPeg]

    var attributes = {
        numPegs: 3,      // number of pegs on the board
        numDiscs: 3,    // number of discs to use
        numMoves: 0                 // track number of moves made thus far
    }; //end attributes

//-------------------------------------------------------------------

    var displayBoard=function(){
        // Display the board (horizontally) to user so they know what it looks like
        // For example:
        //          --- 3 2 1
        //          --- 
        //          ---
        //
        // INPUTS: none
        // OUTPUTS: none
        // *** MUST use 'map' function. ***
        
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in displayBoard ***");

        var totalPegs = attributes["numPegs"];  //total pegs in game
        var discNum;                            //
        //var duplicateGameBoard = [];            //copy of the peg array so that it can be manipulated.
        var currPeg = [];                       //copy of the current peg array--gameBoard.[i]
        var currDisc;                           //current disc to displa                                                                                y
        var pegImage = "--- ";
        var pegToDisplay = pegImage;              //define the way the peg should look when displayed.
        var space = " ";                        //helpful for displaying the peg's discs
        var numDiscsOnPeg; //= gameBoard[0].length;  //number of pegs on a particular disc

        console.log("DEBUG: totalPegs ", totalPegs);
        for (i=0; i < totalPegs; i++) {   //for each peg
            
            currPeg = gameBoard[i].map(function(elem){
                return elem;
            });
            numDiscsOnPeg = currPeg.length;
            // console.log("DEBUG: i loop - currPeg.length is: ", numDiscsOnPeg);
            // console.log("DEBUG: i loop - currPeg is: ", currPeg);
                 //the number of discs found on the peg.
           

            for (j=0; j< numDiscsOnPeg; j++)  {      //only display the peg--no discs;  
                newPeg = currPeg.shift();
                pegToDisplay=pegToDisplay + space + newPeg;
                
            } // end for j

            console.log (pegToDisplay);
            currPeg = [];
            numDiscsOnPeg = 0;
            pegToDisplay= pegImage;
        } // end for i

    }; //end DisplayBoard
    //------------------------------------------------------------------- 

    var initGameBoard = function(){
        //initializes the gameBoard array as follows to the original default state:
        //numPegs = default of 3
        //numDiscs = default of 3
        //numMoves = 0 (default)
        // Thus: gameBoard = [[3,2,1],[],[]]
        //INPUTS:
        //      initNumPegs: numPegs defined by user
        //      initNumDiscs: numDiscs defined by user
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in initGameBoard ***");
        console.log("DEBUG: numPegs is ", attributes["numPegs"]);
        console.log("DEBUG: numDiscs is ", attributes["numDiscs"]);
        console.log("DEBUG: numMoves in obj is ", attributes["numMoves"]);
        
        var totalPegs = attributes["numPegs"];
        var totalDiscs = attributes["numDiscs"];
        var discNum = totalDiscs;
        console.log("DEBUG: discNum = ", discNum);
        for (i=0; i<totalPegs; i++){
            if (i === 0) {      //initialize the first array, gameboard[0][x...y] to contain all the discs (x thru y)
                for (j=0; j < totalDiscs; j++){
                    gameBoard[i].push (discNum);
                    console.log("DEBUG: gameBoard[",i,"][",j,"] is: ", gameBoard[i][j]);
                    console.log("DEBUG: discNum = ", discNum);
                    discNum--;
                    console.log("DEBUG: discNum = ", discNum);
                }// end for j
            } //end if i
            //the remaining peg arrays should be empty (no pegs on them);
            //gameBoard[i] = [];
        } //end for i
        
        displayBoard()
        console.log("DEBUG: *** LEAVING initGameBoard ***");
    }; //end initBoard
//------------------------------------------------------------------- 
    var resetBoard = function (initNumPegs, initNumDiscs){
        // Resets the game as defined by user input (numPegs/numDiscs)
        // INPUTS: 
        //      initNumPegs - number of pegs for this game
        //      initNumDiscs - number of discs for this game
        // OUTPUTS: none
        
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in resetBoard ***");

        if ((initNumPegs<=3 || initNumPegs === undefined) && (initNumDiscs<=3 || initNumDiscs == undefined)){   
            //must begin with a minimum of 3 pegs/3 discs
            announceMsg(msgMinBoardSpecReqd);     //tell user that we will be using the min requirements (3pegs/3discs)
            initNumPegs = 3;    //use default of 3 pegs
            initNumDiscs = 3;   //use default of 3 discs
        } // end if
        // assign Board specs
        attributes["numPegs"] = initNumPegs;
        attributes["numDiscs"] = initNumDiscs;
        attributes["numMoves"] = 0;

        // console.log("DEBUG: initNumPegs is ", initNumPegs);
        // console.log("DEBUG: initNumDiscs is ", initNumDiscs);
        // console.log("DEBUG: NumMoves in obj is ", attributes["numMoves"]);

        initGameBoard();
       

        console.log("DEBUG: numPegs is ", attributes["numPegs"]);
        console.log("DEBUG: numDiscs is ", attributes["numDiscs"]);
        console.log("DEBUG: numMoves is ", attributes["numMoves"]);

        console.log("DEBUG: *** LEAVING resetBoard ***");

    }; //end Reset
    
//-------------------------------------------------------------------
    
   var setState = function(attribute, value){
        // Set the specified attribute to the value given
        //Inputs:
        //      attribute: attribute to set
        //      value: value to assign to the attribute given
        console.log("DEBUG: =============================");
        console.log ("DEBUG: *** in setState ***");

        if (attributes.hasOwnProperty(attribute)){
            attributes[attribute] = value;
        }

    }; // end setState
//-------------------------------------------------------------------
        
    var isMoveValid = function(fromPeg, targetPeg){
        // Is the desired move valid:
        // INPUTS: 
        //      fromPeg: the peg from which you want to move a disc (array)
        //      toPeg: the peg to which you want to move a disc (array)
        // OUTPUTS: boolean
        //      true: if the move is good
        //      false: if the move does not fulfill the following requirements
        //          1) the fromPeg MUST have discs
        //          2) the disc on the fromPeg MUST be SMALLER than the disc on the toPeg
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in isMoveValid ***");

        if (fromPeg.length !==0){     //peg has discs
            if (targetPeg.length===0){    //target disc is empty...any disc can be moved here.
                return true;
            } //end if

            fromIndex = fromPeg.length-1;
            targetIndex = targetPeg.length-1;          //value of disc at the top of the fromPeg

            console.log("DEBUG: fromIndex is: ", fromIndex);
            console.log("DEBUG: targetIndex is: ", targetIndex);

            for (i=0; i<fromPeg.length; i++){
                console.log("DEBUG: fromPeg[",i,"] is: ",fromPeg[i]);
            };
            console.log("DEBUG: fromPeg[fromIndex]: ", fromPeg[fromIndex]);
            console.log("DEBUG: targetPeg[targetIndex]: ", targetPeg[targetIndex]);

            fromTopDisc = fromPeg[fromIndex];   //value of disc at the top of the targetPeg
            targetTopDisc = targetPeg[targetIndex];   //value of disc at the top of the targetPeg

            console.log("DEBUG: fromTopDisc is: ", fromTopDisc);
            console.log("DEBUG: targetTopDisc is: ", targetTopDisc);

            if (fromTopDisc < targetTopDisc){
                return true;
            } //end if
            else {
                return false;
            } //end else
        } //end if
    };// isMoveValid
//-------------------------------------------------------------------
   var whichPegs = function (currPeg) {
        // Determines which other pegs the disc on the given peg can move to
        // INPUTS: peg - the peg from which you want to move a disc
        // OUTPUTS: pegs that can be used to move the given disc to
        // *** MUST use filter function ***
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in whichPegs ***");

        //var 

    }; //end whichPegs

//-------------------------------------------------------------------
    var moveDisc = function (fromPeg, toPeg) {
        // move a disc from the fromPeg to the toPeg
        //INPUTS:
        //      fromPeg - the peg from which you want to take a disc
        //      toPeg   - the peg to which you want to move the disc.
        // Don't forget to validate move
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in moveDisc ***");


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
        console.log("DEBUG: =============================");
        console.log("DEBUG: *** in checkWinner *** ");
    }; // end checkWinner

//-------------------------------------------------------------------
    var getMove = function() {
        //Get the user input regarding the move.
        //Want to get the following:
        //      fromPeg: the peg from which you want to move a disc
        //      toPeg: the peg to which you want to move the disc
        // 
        // OUTPUTS: moveArray [fromPeg, toPeg]
        console.log("DEBUG: =============================");
        console.log ("DEBUG: *** in getMove ***");
        // var fromPeg = window.prompt("Move peg FROM: (top, middle, bottom)");
        // var toPeg = window.prompt("Move peg TO: (top, middle, bottom");

    }; //end getMove

    return {
        resetBoard: resetBoard,
        getMove: getMove,
        isMoveValid: isMoveValid,
        moveDisc: moveDisc,
        checkWinner: checkWinner
      
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
//              check if game won
//                  if game won
//                      announce the winner via console.log
//                      reset the board
//          if !valid
//              notify user that the move is invalid (and keep looping)
//

gameBoard = Board();
//

announceMsg("hello");
gameBoard.resetBoard();
console.log(gameBoard.isMoveValid([3, 2], [1]));    //false
console.log(gameBoard.isMoveValid([3, 2], [4]));    //true
console.log(gameBoard.isMoveValid([3, 2], []));     //true
console.log(gameBoard.isMoveValid([5, 2], [4]));    //true

