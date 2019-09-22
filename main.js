var HanoiGame = (pegs, discs) => {
    var attributes = {
        pegs: pegs,
        discs: discs,
        moves: 0,
        //gauss
        solution: ((discs * (discs + 1)) / 2)
    };

    var boardArr;

    //create an array of arrays initilzed for game state
    var buildBoard = () => {
        boardArr = [];
        for (i = 0; i < pegs; i++) {
            boardArr.push([]);
            if (i == 0) {
                for (j = discs; j > 0; j--) {
                    boardArr[i].push(j);
                }
            }
        }
    }

    var initGame = () => {
        attributes.moves = 0;
        buildBoard(attributes.pegs, attributes.discs);
        writeMessage("");
    }

    //draws the board in new line separated strings
    var boardView = () => {
        return boardArr.map((peg) => { return '--- ' + peg.join(" "); })
            .reduce((disp, pegStr) => { return disp += pegStr.trimRight() + '\n'; }, "")
            .trimRight('\n');
    }

    var moveDisc = (fromPeg, toPeg) => {
        //check for valid index on from and to peg
        var indexFromPeg = fromPeg - 1;
        var indexToPeg = toPeg - 1;
        if (indexFromPeg !== indexToPeg
            && indexFromPeg >= 0 && indexFromPeg < attributes.pegs
            && indexToPeg >= 0 && indexToPeg < attributes.pegs) {
            //non-filter implementation
            /* // if there is even a disc to move on the from peg
            if (boardArr[indexFromPeg].length > 0) {
                if (boardArr[indexToPeg].length == 0
                    || boardArr[indexToPeg][boardArr[indexToPeg].length - 1] > boardArr[indexFromPeg][boardArr[indexFromPeg].length - 1]) {
                    boardArr[indexToPeg].push(boardArr[indexFromPeg].pop())
                    attributes.moves++;
                    if(checkWinner()){
                        writeMessage(`You won! ${attributes.moves} Moves!`);
                    }
                    else{
                        writeMessage("");
                    }
                    return;
                }
            } */
            //filter implementation - seems weird to use filter instead of map or something similar
            // if there is even a disc to move on the from peg
            if (boardArr[indexFromPeg].length > 0) {
                var valid = boardArr[indexToPeg].length == 0;

                if (!valid) {
                    //lets only filter to pegs with discs since above valid covers 0 disc pegs
                    var filtered = boardArr.filter((peg) => {
                        return peg.length > 0 && peg[peg.length - 1] > boardArr[indexFromPeg][boardArr[indexFromPeg].length - 1];
                    });

                    for (i = 0; i < filtered.length && valid == false; i++) {
                        valid = filtered[i][filtered[i].length - 1] === boardArr[indexToPeg][boardArr[indexToPeg].length - 1];
                    }
                }

                if (valid) {
                    boardArr[indexToPeg].push(boardArr[indexFromPeg].pop());
                    attributes.moves++;
                    if (checkWinner()) {
                        writeMessage(`You won! ${attributes.moves} Moves!`);
                    }
                    else {
                        writeMessage("");
                    }
                    return;
                }

            }
        }
        writeError("Invalid Move");
    }

    //check if only 1 peg is populated (not the first) and if the sum of it's discs is equal to solution
    var checkWinner = () => {
        var populatedPegs = boardArr.filter((peg) => { return peg.length > 0; });
        return boardArr[0].length == 0 && populatedPegs.length == 1
            && populatedPegs[0].reduce((sum, number) => { return sum + number; }, 0) == attributes.solution;
    }

    //this is the solution for a 3 peg hanoi tower but not sure how to expand onto 4+
    var solveHanoi = (itDisks, from, to) => {
        if (itDisks == 1) {
            return from + " -> " + to + '\n';
        }
        else {
            var freePeg = 6 - from - to;

            var miniSol = solveHanoi(itDisks - 1, from, freePeg);
            var thisSol = solveHanoi(1, from, to);
            var nextSol = solveHanoi(itDisks - 1, freePeg, to);

            return miniSol + thisSol + nextSol;
        }
    }

    //don't initilize if settings are wrong
    if (attributes.pegs < 3 || attributes.discs < 1) {
        return null;
    }
    else {
        initGame();
    }

    return {
        checkWinner: checkWinner,
        boardView: boardView,
        moveDisc: moveDisc,
        solveHanoi: solveHanoi
    };
};

var drawTowers = () => {
    if (currHanoiGame) {
        document.getElementById("hanoi-data").innerHTML = currHanoiGame.boardView().replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
}

var currHanoiGame;

var startGame = () => {
    var num_pegs = parseInt(document.getElementById('num-pegs').value);
    var num_discs = parseInt(document.getElementById('num-discs').value);

    currHanoiGame = HanoiGame(num_pegs, num_discs);

    if (currHanoiGame) {
        drawTowers();
        document.getElementById('start-button').innerHTML = "Restart Game";
    }
    else {
        alert("Invalid Game Setup");
    }
}

var makeMove = () => {
    var from_peg = document.getElementById('from-peg').value;
    var to_peg = document.getElementById('to-peg').value;

    currHanoiGame.moveDisc(from_peg, to_peg);
    drawTowers();
}

var writeMessage = (msg) => {
    var displayEl = document.getElementById('display-text');
    displayEl.style.color = "Black";
    displayEl.innerHTML = msg;
    console.log(msg);
}

var writeError = (error) => {
    var displayEl = document.getElementById('display-text');
    displayEl.style.color = "Red";
    displayEl.innerHTML = error;
    console.log(error);
}


