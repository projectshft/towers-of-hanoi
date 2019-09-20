var HanoiGame = (pegs, discs) => {
    var attributes = {
        pegs: pegs,
        discs: discs,
        moves: 0,
        //gauss
        solution: ((discs * (discs + 1)) / 2)
    };

    var boardArr;

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
    }

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
            // if there is even a disc to move on the from peg
            if (boardArr[indexFromPeg].length > 0) {
                if (boardArr[indexToPeg].length == 0
                    || boardArr[indexToPeg][boardArr[indexToPeg].length - 1] > boardArr[indexFromPeg][boardArr[indexFromPeg].length - 1]) {
                    boardArr[indexToPeg].push(boardArr[indexFromPeg].pop())
                }
            }
        }
    }

    //check if only 1 peg is populated (not the first) and if the sum of it's discs is equal to solution
    var checkWinner = () => {
        var populatedPegs = boardArr.filter((peg) => { return peg.length > 0; });
        return boardArr[0].length == 0 && populatedPegs.length == 1
            && populatedPegs[0].reduce((sum, number) => { return sum + number; }, 0) == attributes.solution;
    }

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
    };
};

var test = HanoiGame(3, 1);
console.log(test.boardView());
console.log('---------');
hanoiGame = HanoiGame(5, 5);
hanoiGame.moveDisc(1, 2);
hanoiGame.moveDisc(1, 3);
hanoiGame.moveDisc(1, 4);
hanoiGame.moveDisc(2, 4);
console.log(hanoiGame.boardView());