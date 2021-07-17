

const initialState = [
    ["5", "4", "3", "2", "1"],
    [],
    [],
];  

const game = {
    board: [...initialState],
    displayPegs: () => {
      console.log("gameboard:");
      game.board.map((item) => {
        console.log(item);
      })
    },
    moveDisc: (initialPeg, targetPeg) => {
      game.displayPegs()
        
          initialPeg -= 1;
          targetPeg -= 1;

          var start = game.board[initialPeg];  
          var end = game.board[targetPeg];      
  
        if (end.length === 0 || start[start.length - 1] < end[end.length - 1]) {
          end.push(start.pop());  
        };
        // after every move, you want to check for a winner
        game.checkWinner()
        game.displayPegs();
    },
    checkWinner: () => {
        // const winner = ...some logic to check for the winner
        
        var hasWon = (game.board[1].length === 5 || game.board[2].length === 5);
        if (hasWon) {
            console.log("You won!!")            
        }
    }
}












//  Code to use to check for a win in game
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)