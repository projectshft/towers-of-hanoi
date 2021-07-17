

const initialState = [["5", "4", "3", "2", "1"],
    [],
    [],
];  // watch out for off-by-one errors


const board = {
    gameState: [...initialState],
    moveDisc: (initialPeg, targetPeg) => {
        // ... all your game logic
            // top is the last item in the initalPeg
            // check that the peg in question is smaller than where it's headed
                // handle null/empty state
            // if peg is validated, then update the target peg
          initalPeg -= 1;
          targetPeg -= 1;

          var board = this.board;
          var begin = board[initialPeg];
          var end = board[targetPeg];

          // logic for moveDisc to differentiate between legal and illegal moves



        // after every move, you want to check for a winner
        this.checkWinner()
    },
    checkWinner: () => {
        // const winner = ...some logic to check for the winner
        var win = board.find (function () {
          return board[1].length === 5 || board[2].length === 5;
        });
        if (winner) {
            console.log("You won!!")
            // reset to initial state
          var resetGame = function () {
            // line 41 has a problem and needs to be re-written
            return board.gameState;
          }

        }
    }
}












//  Code to use to check for a win in game
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(3, 1)
// board.moveDisc(2, 1)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(3, 2)
// board.moveDisc(3, 1)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)