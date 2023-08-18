class Game {
board = [[5, 4, 3, 2, 1],[],[]];

//using map  to create a starting board mathod within the game class/object
 startBoard() {this.board = this.board.map(function(towers){
    console.log(`--- ${towers.join('')}`);
    return towers
 });
}

//method that allows movement of discs between towers, with parameters regarding legal moves using 'if/else'
moveDisc (fromTower, toTower){
      if (this.board[fromTower].length === 0){
        console.log("There is no disc on this tower to move. Pick a different move please");
        return;
      }

      if (this.board[toTower].length === 0 || this.board[fromTower][this.board[fromTower].length - 1] < board[toTower][board[toTower].length - 1]) {
        var disc = this.board[fromTower].pop();
        this.board[toTower].push(disc);
        console.log(`Moved disc ${disc} from tower ${fromTower + 1} to tower ${toTower + 1}`);
        //check for winner after each succesful move by calling checkIfWin method
        this.checkIfWin();

        } else {
        console.log("Cannot put larger disc on smaller one. Try different move");
      }
    }
//method to see if the move is a winner, and also calling the restartGame method to clear board for a new game
checkIfWin () {
        if (this.board[1].length === 5 || this.board[2].length === 5){
        console.log("You won! Good job! Want to play again?");
        this.restartGame();
        }
    }
//method to restart the game with origianl board layout
restartGame (){
    this.board = [[5, 4, 3, 2, 1], [], []];
    console.log("Do it to it!");
    this.startBoard();
}
}

//creating new const to utilze game class outside of class scope (i.e. closure)
const game = new Game()
game.startBoard()