beforeEach(() => {
	spyOn(console, "log");
	spyOn(console, "error");
});

afterEach(() => {
	game.resetGame();
});

describe("moveDisc method", () => {
	it("is a function", () => {
		expect(typeof game.moveDisc).toBe("function");
	});

	it("should log an error if given no arguments", () => {
		game.moveDisc();
		expect(console.error).toHaveBeenCalledWith(
			"Error: Please provide two numbers to moveDisc function!"
		);
	});

	it("should log an error if the arguments are not two numbers", () => {
		game.moveDisc("test", "strings");
		expect(console.error).toHaveBeenCalledWith(
			"Error: Please provide two numbers to moveDisc function!"
		);
	});

	it("should log an error if the two numbers are the same number", () => {
		game.moveDisc(1, 1);
		expect(console.error).toHaveBeenCalledWith(
			"Error: You entered the same peg number!"
		);
	});

	it("should log an error if the either the current or target peg do not exist", () => {
		game.moveDisc(1, 4);
		expect(console.error).toHaveBeenCalledWith(
			"Error: You entered a peg number the does not exist!"
		);
	});

	it("should log an error if the disc being moved is too large", () => {
		game.moveDisc(1, 2);
		game.moveDisc(1, 2);
		expect(console.error).toHaveBeenCalledWith(
			`Error: You cannot make this move right now. Disc 2 cannot be placed on top of disc 1`
		);
	});

	it("should log an error if there are no discs left on the current peg", () => {
		game.board = [["---"], ["---", 5, 4, 3, 2], ["---", 1]];
		game.moveDisc(1, 2);
		expect(console.error).toHaveBeenCalledWith(
			`Error: There are no discs left on the current peg!`
		);
	});

	it("should move the topmost disc from the current Peg to the target Peg", () => {
		game.moveDisc(1, 2);
		expect(game.board).toEqual([["---", 5, 4, 3, 2], ["---", 1], ["---"]]);
	});
});

describe("checkWinner method", () => {
	it("is a function", () => {
		expect(typeof game.checkWinner).toBe("function");
	});

	it("returns false when the board initially loads", () => {
		expect(game.checkWinner()).toBe(false);
	});

	it("returns true when the player has moved all the discs onto another peg besides the starting peg", () => {
		game.board = [["---"], ["---", 5, 4, 3, 2, 1], ["---"]];
		expect(game.checkWinner()).toBe(true);
	});

	it("returns false when the discs are not in the correct order on a peg", () => {
		game.board = [["---"], ["---", 5, 4, 3, 1, 2], ["---"]];
		expect(game.checkWinner()).toBe(false);
	});
});

describe("resetGame method", () => {
	it("is a function", () => {
		expect(typeof game.resetGame).toBe("function");
	});

	it("should log a message when player wins", () => {
		game.board = [["---"], ["---", 5, 4, 3, 2, 1], ["---"]];
		game.resetGame();
		expect(console.log).toHaveBeenCalledWith(
			"You Won! Resetting the board to play again!"
		);
	});

	it("should log a message when player resets the game while win condition is not met", () => {
		game.resetGame();
		expect(console.log).toHaveBeenCalledWith(
			`Resetting the board for a new game...`
		);
	});

	it("should reset the game when called", () => {
		game.board = [["---"], ["---", 5, 4, 3, 2, 1], ["---"]];
		game.resetGame();
		expect(game.board).toEqual([["---", 5, 4, 3, 2, 1], ["---"], ["---"]]);
	});
});

describe("printBoard method", () => {
	it("is a function", () => {
		expect(typeof game.printBoard).toBe("function");
	});

	it("prints the board to the console", () => {
		game.printBoard();
		expect(console.log).toHaveBeenCalledTimes(game.numPegs + 1);
	});
});
