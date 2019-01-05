var count = 0;

function counter() {
    count += 1;
    return count;
};

//Starting board for Towers of Hanoi
var Board = {
    starting: [
        // ["5", "4", "3", "2", "1"],
        ["3", "2", "1"],
        [],
        []
    ],
    current: [],
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

        //SET BOARD

        //check if this is the 1st move
        if (count === 0) {
            Board.current = Board.starting;
            console.log("The starting board is: ", Board.current);
        }
        else {
            Board.current = Board.current;
            console.log("The board is currently: ", Board.current);
            
        } 


        // //CHECK FOR AVAILABLE MOVES
        
        //Define array of discs on from peg and to peg
        var fromPegDiscs = Board.current[from - 1];
        var toPegDiscs = Board.current[to - 1];
        var pegs = [];

        //Check if there is a disc on the chosen from peg
        if (fromPegDiscs.length !== 0) {

            //Determine which peg #s can take the top disc from the requested peg
            var availPegs = Board.current.filter(function (peg, index) {

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
                }
            });
            availPegs = pegs;
            // console.log('availPegs: ', availPegs);
        } else {
            console.log("That is not a valid peg.  Try again! The board is: ", Board.current);
            return
        };


        //MOVE THE DISC

        // if (availPegs.length !== 0) {
        for (i = 0; i < availPegs.length; i++) {
            //if the chosen to peg matches an available peg, move it
            if (to === availPegs[i]) {
                console.log('availPegs[i] is ', availPegs[i]);
                var disc = Board.current[from - 1].pop();
                Board.current[to - 1].push(disc);
                console.log("Success! Moving the disc now", Board.current);
                counter();

                //AFter every move, check to see if all discs are in order on a peg 

                //calculate the sum of each peg
                var allPegs = [];
                for (i = 0; i < Board.current.length; i++) {
                    var sum = Board.current[i].reduce(function (total, amount) {
                        total = parseInt(total, 10);
                        amount = parseInt(amount, 10);
                        return total += amount;
                    }, 0);

                    allPegs.push(sum);
                }
                // console.log(allPegs);

                //if sum on 1 peg = 15, Winner (6 if testing 3 pegs)
                allPegs.forEach(peg => {
                    if (peg === 6) {
                        console.log("Winner, Winner, Chicken Dinner!!  You won in ", count, "moves.")
                        count = 0;
                        var starting = [
                            // ["5", "4", "3", "2", "1"],
                            ["3", "2", "1"],
                            [],
                            []
                        ];

                        Board.starting = starting;
                        console.log("The board is ready for another game; are you?", Board.starting);
                    }
                });


            } else {
                console.log("No available pegs.  Game over.");
                return
            }
        };






    };

}


//Testing cases
// Board.moveDisc(1, 2);
// Board.moveDisc(3, 1);  //no disc to move
// // Board.moveDisc(1, 3);   // no available pegs, game over
// Board.moveDisc(1, 4);  //no such peg
// Board.moveDisc(1, 2);  //disc too big

//winning moves with 3 pegs
Board.moveDisc(1, 2);
Board.moveDisc(1, 3);
Board.moveDisc(2, 3); //throw no available peg, even though it is available.
Board.moveDisc(1, 2);
Board.moveDisc(3, 1);
Board.moveDisc(3, 2);
Board.moveDisc(1, 2);