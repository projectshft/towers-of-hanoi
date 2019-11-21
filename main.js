// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  
var game = {
    pegs: [
        [5, 4, 3, 2, 1],
        [],
        []
    ]
};

// function that prints board to console using map
function printBoard() {
    var printedBoard = game.pegs.map(function (peg) {
        return " --- " + peg.join('');
    });

    printedBoard.forEach(function (i) {
        console.log(i);

    });
};

// This function give the value of the last disc of an array 
function lastDisc(peg) {
    return peg[peg.length - 1];
}
//This function checks to see if the disc were moving 
//is smaller than the disc we're placing it on
function isSmallerThan(disc1, disc2) {
    return disc1 < disc2
}

// startPegIndex represents the first peg index from where your moving the disc from
var legalMoves = function (startPegIndex) {
    var startPeg = game.pegs[startPegIndex];
    var startDisc = lastDisc(startPeg);

    var isStartEmpty = startPeg.length === 0
    if (isStartEmpty) {
        return [];
    };

    var availablePegs = game.pegs.filter(function (currentPegThatWeAreLookingAt, currentPegIndex) {
        //if this peg is the start peg then moving it to the same peg is illegal
        var isStartPeg = startPegIndex === currentPegIndex;
        if (isStartPeg) {
            return false;
        }
        // if the peg that were moving to is empty then that move is legal 
        var isPegEmpty = currentPegThatWeAreLookingAt.length === 0
        if (isPegEmpty) {
            return true;
        }
        //if disc to move is larger than where we're moving it to, then it is not allowed 
        var currentDisc = lastDisc(currentPegThatWeAreLookingAt);
        var canPutDiscOnTopOfCurrentDisc = isSmallerThan(startDisc, currentDisc);
        if (canPutDiscOnTopOfCurrentDisc) {
            return true;
        }
        return false;
    })
    return availablePegs;
};

// function that takes in the starting peg and ending peg information 
var move = function (startPegIndex, endPegIndex) {
    var availablePegsToMoveTo = legalMoves(startPegIndex);
    var pegToMoveFrom = game.pegs[startPegIndex];
    var pegToBeMovedTo = game.pegs[endPegIndex];

    // console.log("Move: " + startPegIndex + " to " + endPegIndex);
    if (availablePegsToMoveTo.includes(pegToBeMovedTo)) {
        // move disc from pegToMoveFrom to pegToMoveTo
        var discToMove = pegToMoveFrom.pop();
        pegToBeMovedTo.push(discToMove)
        checkMove()
        console.log('Move is successful');

        printBoard()

    } else {
        console.log('Your move is illegal, please try again');

    }
};

// This function checks the board every move that is made to see if there win
function checkMove() {
    var totalArray = [];

    for (let i = 0; i < game.pegs.length; i++) {
        var totals = game.pegs[i].reduce((acc, curr) => {
            return acc + curr
        }, 0)
        totalArray.push(totals);
    }

    if (totalArray.includes(15) && totalArray[0] == 0) {
        console.log('Winner, Winner, chicken Dinner! Lets play again')
        game = {
            pegs: [
                [5, 4, 3, 2, 1],
                [],
                []
            ]
        };
        printBoard()
    };

}
printBoard();






