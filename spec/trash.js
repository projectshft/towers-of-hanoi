
// board is a 2-d array
describe("game starting", function() {
  it("makes a 2-d array as starting board with right number of pegs", function() {
    expect(Array.isArray(towers.board)).toEqual(true);
    expect(towers.board.length).toEqual(pegs);
    expect(towers.board.every(element => Array.isArray(element))).toEqual(true);
  });

  it("starts with the right number of discs on the 0th peg", function() {
    expect(towers.board[0].length).toEqual(pegs);
  });
});

// prints the board horizontally
// describe("prints the board horizontally", function() {
//   it("maps each array of board to a new array", function() {
//     expect(towers.printBoard(mappedBoard)).toBeDefined();

    // expect(typeof printPegs === 'function').toEqual(true);
    // expect(printPegs()).toBeDefined();
    // expect(Array.isArray(mapPegs())).toEqual(true);
    // expect(boardsToPrint).toEqual(board);



    // expect(Array.isArray(boardsToPrint)).toEqual(true);
    // expect(boardsToPrint.length).toEqual(pegs);
    // expect(boardsToPrint.every(element => Array.isArray(element))).toEqual(true);
    // expect(check2dEquality(board, boardsToPrint)).toEqual(true);
//   });
// });
// describe("prints the board horizontally", function() {
//       it("utilizes a map function at least once", function() {
//         expect()
//       }
//       })
//     //


// function check2dEquality(originalArray, mappedArray) {
//   if (!originalArray || !mappedArray) {
//     return;
//   }
//
//   for (let i = 0; i < originalArray.length; i++) {
//     for (let j = 0; j < originalArray[i].length; j++) {
//       if (mappedArray[i][j] !== originalArray[i][j]) {
//         return false;
//       }
//     }
//   }
//
//   return true;
// };
