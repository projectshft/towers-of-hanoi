var count = 0;

// function counter () {
//     count += 1;
//     return count;
// };

//Starting board for Towers of Hanoi
var Board = {
    starting: [
        ["5", "4", "3", "2", "1"].join(' '),
        [],
        []
    ],
    current: [],
    // numberOfMoves: counter(),
    moveDisc: moveDisc()
};
console.log(Board);

//Display board horizontally (USE MAP)
// function logArrayElements(element, index, array){
//     return ("---" + element);
// };

// var displayBoard = Board.current.forEach(logArrayElements);
// console.log('Displaying Current Board ' + displayBoard);



function moveDisc() {
    return function (from, to) {
        //check if this is the 1st move
        if (count == 0) {
            Board.current = Board.starting;
            console.log("starting board is: " + Board.current);
        }
        else {
            Board.current = Board.current;
        }
        console.log("The board is currently: " + Board.current);

        // //set "peg" numbers to 1, 2, 3 
        // var pegs = Board.current.map(function (peg, index) {
        //     index = index + 1
        //     return index;
        // });
        // console.log('pegs:' + pegs); //just creates array = [1,2,3]



        //    var fromPeg = from - 1;
        // console.log('fromPeg =' + fromPeg);
        // var toPeg = to - 1 ;
        // console.log('toPeg =' + toPeg);

        //array of discs on that peg
        var fromPegDiscs = Board.current[from - 1];
        var toPegDiscs = Board.current[to - 1];
        console.log("fromPegDiscs: " + fromPegDiscs);
        console.log("toPegDiscs: " + toPegDiscs);

        //Determine which pegs can take the top disc from the requested peg
        var pegs = [];
        var availPegs = Board.current.filter(function (peg, index, array) {
            //the value of the top disc on that peg's array
            var fromDiscValue = fromPegDiscs[fromPegDiscs.length - 1];
            var toDiscValue = peg[peg.length - 1];
            
            if (fromDiscValue < toDiscValue || toDiscValue == undefined) {
                index = index + 1
                pegs.push(index);
                return pegs;
            };
            console.log('pegs: ' + pegs);
            
        });
        availPegs = pegs;
        console.log('availPegs: ' + availPegs);


        // CHECK WHETHER FROMPEG OR FROMPEGDISCS/ AND TOPEG.....FROM HERE ON........................
        // var disc = fromPegDiscs.pop();
        // toPeg.push(disc);
        // console.log("Success! The board is now: " + Board.current);
        //MOVE MAP FUNCTION HERE TO CHECK IF TO PEG MATCHES INDEX NUMBER???

    };




    // else {
    //     console.log("You cannot move a larger disc on top of a smaller one. The board is: " + Board.current);
    // };
    // })


    //check if there is a disc on the fromPegDiscs
    //     if (fromPegDiscs.length !== 0) {
    //         //check which other pegs that disc can move to(FILTER)
    //         var availPegs = Board.current.filter(function (peg, index, array) {
    //             //the value of the top disc on that peg's array
    //             var fromDiscValue = fromPegDiscs[fromPegDiscs.length - 1];
    //             var toDiscValue = toPeg[toPeg.length - 1];
    //             if (fromDiscValue < toDiscValue || toDiscValue == undefined) {
    //                 console.log("Available pegs are: ")
    //                 // var disc = fromPegDiscs.pop();
    //                 // toPeg.push(disc);
    //                 // console.log("Success! The board is now: " + Board.current);
    //             } else {
    //                 console.log("You cannot move a larger disc on top of a smaller one. The board is: " + Board.current);
    //             };
    //         })

    //     } else {
    //         console.log("There are no discs on that peg.  Try again! The board is: " + Board.current);
    //     };
    // };
    // }


    //     // 3. If Yes, move disc and add to count
    //     // 4. send message and current board


}



// function checkWinner() {

// };
//5 Function to checkWinner (if all discs in order on new peg) (REDUCE)
// if no, send message
//6.  if yes, anounce winner and reset board



Board.moveDisc(1, 2);


