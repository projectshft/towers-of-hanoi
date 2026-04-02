import { checkWinner, moveDisc, boardObj } from "../main.js";

describe("Towers of Hanoi", function () {
  beforeEach(function () {
    boardObj[1] = [5, 4, 3, 2, 1];
    boardObj[2] = [];
    boardObj[3] = [];
  });

  it("returns no winner at the start", function () {
    expect(checkWinner(boardObj)).toBe("No Winner Yet");
  });

  it("moves a disc from tower 1 to tower 3", function () {
    moveDisc(1, 3);
    expect(boardObj[1]).toEqual([5, 4, 3, 2]);
    expect(boardObj[3]).toEqual([1]);
  });

  it("returns winner when all discs are on one tower in order", function () {
    let winningBoard = {
      1: [],
      2: [5, 4, 3, 2, 1],
      3: [],
    };

    expect(checkWinner(winningBoard)).toBe("We Have a Winner!");
  });
});

