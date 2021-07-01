var HANOI = function (pegAmount, discAmount, startingPeg) {
    this.pegAmount = pegAmount;
    this.discAmount = discAmount;
    this.startingPeg = startingPeg;
    this.board = this.buildBoard(pegAmount, discAmount, startingPeg);

}

//Initializes a new board
HANOI.prototype.buildBoard = function (pegAmount, discAmount, startingPeg) {
    var board = [];
   
    //add an array pegAmount of times
    for (var i = 0; i < pegAmount; i ++){
        //if index is startingPeg, create an array with discs
        if(i + 1 === startingPeg){
            var pegWDiscs = [];

            for(var j = 0; j < discAmount; j ++){
                pegWDiscs.unshift(j + 1).toString();
            }

            board.push(pegWDiscs);
        }else{
            board.push([]);
        }
    }
   
    return board;
}

//Prints game board
HANOI.prototype.printBoard = function () {
    this.board.map(function(peg){
        var pegToPrint = "--- "
    
        peg.map(function(disc){
            pegToPrint += (disc + " ");
        })
    
        console.log(pegToPrint)
    })
};

//Moves disc from one peg to another
HANOI.prototype.moveDisc = function (origin, destination) {
    //get top disc from ea peg
    var orgPeg = this.board[origin - 1];
    var dstPeg = this.board[destination - 1];
    var disc1 = orgPeg.slice(-1)[0];
    var disc2 = dstPeg.slice(-1)[0];
    
    //if there's no disc 1 choose another peg
    if(!disc1){return console.log('No disc on origin peg! Choose another peg.');}

    //check you can place discs on top of each other
    if(disc1 < disc2 || !disc2){
        console.log("That move was successful, board is now:")
        dstPeg.push(orgPeg.pop());
        this.printBoard();
    }else{
        console.log("You CANNOT move a larger disc on top of a smaller disc, board is still:")
        this.printBoard(); 
    }

    //check if there's a winner
    if(this.checkWinner()){
        console.log("Winner! You've won the Towers of Hanoi!");
        this.resetBoard();
        console.log("------- BOARD RESET --------");
    }
};

//Checks if there is a peg with the full amount of discs, that is not the starting peg
HANOI.prototype.checkWinner = function () {
    var dscAmt = this.discAmount;
    var strPeg = this.startingPeg;

   // find the peg with full amount of discs on it
    var fullPeg = this.board.find(function(peg, i){
        //if full peg is same as starting peg, player cannot win
       var isStrPeg = i === strPeg - 1 && peg.length === dscAmt;
        
        if(isStrPeg){
            return false;
        }else{
            return peg.length === dscAmt;
        }
    });

    //if full peg is same as starting peg, player hasn't won
    if(!fullPeg){return false};

    //find out if discs (numbers) on this peg are consecutive 
    var winner = fullPeg.reduce(function(accum, disc, i){
        var difIsOne = disc - fullPeg[i + 1] === 1;
        var lastDisc = i === (dscAmt - 1);

        //if disc - nextDisc = 1, and if this isn't the last disc : true
        if(difIsOne && !lastDisc){
            return true;
        }else if(lastDisc){
            return accum;
        }else{
            return false;
        }
    },false)

    return winner;
}

//Resets board according to given peg/disc amount, and starting location
HANOI.prototype.resetBoard = function(){
    this.board = this.buildBoard(this.pegAmount, this.discAmount, this.startingPeg);
}

//Returns random number between 1 and pegAmount
HANOI.prototype.getRandomPeg = function(){
    //get random number between 1 and pegAmount
    var peg = Math.floor(Math.random() * (this.pegAmount - 1 + 1)) + 1;
    return peg;
}

//Picks a random, legal, move. If that move is illegal, function recurs. 
HANOI.prototype.randomMove = function(){
    var origin;
    var destination;

    //does only one peg have discs? 
    var dscAmt = this.discAmount;
    var onePegHasDscs = this.board.findIndex(function(peg, i){
        return peg.length === dscAmt;
    })

    //Set ORIGIN
    //if only one peg has discs set orign to that peg, not random peg
    if(onePegHasDscs >= 0){
        origin = onePegHasDscs + 1;
    }else{
        origin = this.getRandomPeg();
    }

    //Set DESTINATION
    //get random peg between 1 and pegAmount
    destination = this.getRandomPeg();

    //if move is not legal run a recursive strategy
    if(this.moveIsLegal(origin, destination)){
        this.moveDisc(origin, destination);
    }else{
        this.randomMove();
    }  
}

//Returns true if move is legal, false if not
HANOI.prototype.moveIsLegal = function(origin, destination){
    var orgPeg = this.board[origin - 1];
    var dstPeg = this.board[destination - 1];
    var orgDisc = orgPeg.slice(-1)[0];
    var dstDisc = dstPeg.slice(-1)[0];

    //is this move legal?
    if(origin === destination || //origin and destination are the same
       !orgDisc || //origin has no discs
       orgDisc > dstDisc //trying to move disc ontop smaller disc
        ){
        return false;
    }else{
        return true;
    }
}

//Creats a random, legal, move. Executes that move. Then repeats through recursion, until winning game. 
HANOI.prototype.solveGame = function (moves) {
    if(!moves){moves = 0}

    // debugger;
    // if no winner keep running this function
    if(!this.checkWinner()){
        this.randomMove();
        this.solveGame(moves + 1);
    }else{
        console.log("Winner! The computer has won the Towers of Hanoi!");
        console.log("It took " + moves.toString() + " moves.")
        this.resetBoard();
        console.log("------- BOARD RESET --------");
    }
}


//new game!
var hanoi = new HANOI(3, 5, 2);

