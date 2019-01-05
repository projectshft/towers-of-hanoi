var count = 0;

function counter() {
    count += 1;
    return count;
};

//Starting board for Towers of Hanoi
var Board = {
    starting: [
        ["5", "4", "3", "2", "1"],
        [],
        []
    ],
    current: [],
    numberOfMoves: count,
    moveDisc: moveDisc()
};


//Display board horizontally (USE MAP)
// function logArrayElements(element, index, array){
//     return ("---" + element);
// };

// var displayBoard = Board.current.forEach(logArrayElements);
// console.log('Displaying Current Board ', displayBoard);



function moveDisc() {
    return function (from, to) {
        console.log("Move #", count, "From peg is: ", from, " and the To peg is: ", to);
        //check if this is the 1st move
        if (count === 0) {
            Board.current = Board.starting;
            console.log("The starting board is: ", Board.current);
        }
        else {
            Board.current = Board.current;
            console.log("The board is currently: ", Board.current);
        }


        //Define array of discs on from peg and to peg
        var fromPegDiscs = Board.current[from - 1];
        var toPegDiscs = Board.current[to - 1];
        // console.log("fromPegDiscs: " + fromPegDiscs);
        // console.log("toPegDiscs: " + toPegDiscs);


        var pegs = [];
        //Check if there is a disc on the chosen from peg
        if (fromPegDiscs.length !== 0) {

            //Determine which peg #s can take the top disc from the requested peg
            var availPegs = Board.current.filter(function (peg, index, array) {
                //the value of the top disc on that peg's array
                var fromDiscValue = fromPegDiscs[fromPegDiscs.length - 1];
                var toDiscValue = peg[peg.length - 1];

                //Discs can only move on top of smaller discs or empty space
                if (fromDiscValue < toDiscValue || toDiscValue == undefined) {
                    //for every peg that is not the chosen from peg
                    if (peg !== fromPegDiscs) {

                        //return peg numbers
                        index = index + 1
                        pegs.push(index);
                    }
                    // } else {
                    //     console.log("Discs can only be moved on top of a larger one or an empty space. The board is: " + Board.current);
                    //     return
                    // };
                }
            });
            availPegs = pegs;
            console.log('availPegs: ', availPegs);
        } else {
            console.log("That is not a valid peg.  Try again! The board is: ", Board.current);
            return
        }

        //Move the disc
        if (availPegs.length !== 0) {
            for (i = 0; i < availPegs.length; i++) {
                //if the chosen to peg matches an available peg, move it
                if (to === availPegs[i]) {
                    var disc = Board.current[from - 1].pop();
                    Board.current[to - 1].push(disc);
                    console.log("Success! The board is now: ", Board.current);
                    counter();
                    // checkWinner();
                    return
                }
            };
        } else {
            console.log("No available pegs.  Game over.");
            return
        }
    };



}


// };

// if (availPegs !== 0) {

// } 


// function checkWinner() {

// };
//5 Function to checkWinner (if all discs in order on new peg) (REDUCE)
// if no, send message
//6.  if yes, anounce winner and number of movers and reset board



Board.moveDisc(1, 2);
Board.moveDisc(3, 1);  //no disc to move
Board.moveDisc(1, 3);
Board.moveDisc(1, 4);  //no such peg
Board.moveDisc(1, 2);  //disc too big

