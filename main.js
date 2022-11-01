

class Game {
  constructor() {
    this.peg1 = [5, 4, 3, 2, 1];
    this.peg2 = [];
    this.peg3 = [];
  }

  logBoard() {
    console.log("--- " + this.peg1.join(" "));
    console.log("--- " + this.peg2.join(" "));
    console.log("--- " + this.peg3.join(" "));
  }

  moveDisk(fromPeg, toPeg) {
    let pegs = {
      1: this.peg1,
      2: this.peg2,
      3: this.peg3
    }
    if (pegs[fromPeg].length === 0) {
      console.log("That peg is empty!");
      console.log("The board is still:");
      return this.logBoard();
    } else if (pegs[fromPeg] === pegs[toPeg]) {
      console.log("Same peg!");
      console.log("The board is still:");
      return this.logBoard();
    } else if (pegs[fromPeg][pegs[fromPeg].length - 1] > pegs[toPeg][pegs[toPeg].length - 1] && pegs[toPeg].length !== 0) { 
      console.log("Cannot move a larger disc on top of a smaller one, board is still:")
      return this.logBoard()
    } else {
      let disk = pegs[fromPeg].pop()
      pegs[toPeg].push(disk)
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
    if (this.peg2.toString() === "5,4,3,2,1" || this.peg3.toString() == "5,4,3,2,1") {
      this.peg1 = [5, 4, 3, 2, 1]
      this.peg2 = []
      this.peg3 = []
      return true
    } else {
      return false
    }
  }
}

let Towers = new Game;
Towers.logBoard()
Towers.solution()
