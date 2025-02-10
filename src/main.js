class Game {
	constructor(numPegs, numDiscs) {
		this.numDiscs = numDiscs;
		this.numPegs = numPegs;
		this.board = Array(numPegs)
			.fill(null)
			.map((peg, index) => {
				if (index === 0) {
					return Array(numDiscs + 1)
						.fill(null)
						.map((disc, discIndex) => {
							if (discIndex === 0) {
								return "---";
							}
							return numDiscs - discIndex + 1;
						});
				}
				return ["---"];
			});
	}

	moveDisc(fromPegNum, toPegNum) {
		if (typeof fromPegNum !== "number" && typeof fromPegNum !== "number") {
			console.error("Error: Please provide two numbers to moveDisc function!");
			return;
		}

		if (fromPegNum === toPegNum) {
			console.error("Error: You entered the same peg number!");
			return;
		}

		if (fromPegNum > this.numPegs || toPegNum > this.numPegs) {
			console.error("Error: You entered a peg number the does not exist!");
			return;
		}

		const currPeg = this.board[fromPegNum - 1];
		const targetPeg = this.board[toPegNum - 1];

		if (currPeg.at(-1) === "---") {
			console.error("Error: There are no discs left on the current peg!");
			return;
		}

		if (currPeg.at(-1) < targetPeg.at(-1) || targetPeg.at(-1) === "---") {
			console.log(
				`Moving disc ${currPeg.at(
					-1
				)} from  peg ${fromPegNum} to peg ${toPegNum} `
			);
			targetPeg.push(currPeg.pop());
			this.printBoard();
			if (this.checkWinner()) {
				this.resetGame();
			}
		} else {
			console.error(
				`Error: You cannot make this move right now. Disc ${currPeg.at(
					-1
				)} cannot be placed on top of disc ${targetPeg.at(-1)}`
			);
			this.printBoard();
		}
	}

	checkWinner() {
		if (this.board[0].length !== 1) {
			return false;
		}

		return this.board.some((peg) => {
			if (peg.length - 1 !== this.numDiscs) {
				return false;
			}

			for (let index = 1; index < peg.length; index++) {
				const disc = peg[index];
				const expectedDisc = this.numDiscs - index + 1;
				if (disc !== expectedDisc) {
					return false;
				}
			}
			return true;
		});
	}

	resetGame() {
		if (this.checkWinner()) {
			console.log("You Won! Resetting the board to play again!");
		} else {
			console.log(`Resetting the board for a new game...`);
		}
		game = new Game(this.numPegs, this.numDiscs);
		game.printBoard();
	}

	printBoard() {
		console.log(`Printing current board...`);
		this.board.forEach((peg) => console.log(peg));
	}
}

let game = new Game(3, 5);
game.printBoard();
