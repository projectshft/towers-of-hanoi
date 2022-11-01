

class Game {
  constructor() {
    this.pegs = [[5, 4, 3, 2, 1],[],[]];
  }

  logBoard() {
    this.pegs.map((peg) => { 
      console.log("--- " + peg.join(" "));
    })
  }

  moveDisk(fromPeg, toPeg) {
    if (this.pegs[fromPeg - 1].length === 0) {
      console.log("That peg is empty!");
      console.log("The board is still:");
      return this.logBoard();
    } else if (this.pegs[fromPeg - 1] === this.pegs[toPeg - 1]) {
      console.log("Same peg!");
      console.log("The board is still:");
      return this.logBoard();
    } else if (this.pegs[fromPeg - 1][this.pegs[fromPeg - 1].length - 1] > this.pegs[toPeg - 1][this.pegs[toPeg - 1].length - 1] && this.pegs[toPeg - 1].length !== 0) { 
      console.log("Cannot move a larger disc on top of a smaller one, board is still:")
      return this.logBoard()
    } else {
      let disk = this.pegs[fromPeg - 1].pop()
      this.pegs[toPeg - 1].push(disk)
      if (this.checkWinner()) {
        console.log("Congrats! You Win! Play again.")
        return this.logBoard()
      } else {
        console.log("That move was successful, the board is now:")
        return this.logBoard()
      }
    }
  }

  solution(n = 5, fromPeg = 1, toPeg = 3, auxPeg = 2) {
    if (n === 0) {
      return;
    }
    this.solution(n - 1, fromPeg, auxPeg, toPeg);
    this.moveDisk(fromPeg, toPeg);
    this.solution(n - 1, auxPeg, toPeg, fromPeg);
  }

  checkWinner() {
    if (this.pegs[1].toString() === "5,4,3,2,1" || this.pegs[2].toString() == "5,4,3,2,1") {
      this.pegs = [[5, 4, 3, 2, 1],[],[]]
      return true
    } else {
      return false
    }
  }
}

let Towers = new Game;
Towers.logBoard()
Towers.solution()

