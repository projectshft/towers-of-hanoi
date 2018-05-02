// creates a new game before each spec
beforeEach(function () {
  testGame = Object.create(Game);
  testGame.init("Bob", "John");
});

// if player1 selects position 1, there should be an 'X' in position 1
// if player1 selects position 11, board should not change
// if player 2 selects a position that is occupied, board should not change

describe("play for Game", function() {
  it("changes the board position to players character", function() {
    let board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    let board1 = [["X", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    expect(testGame.board).toEqual(board);

    testGame.play('1');

    expect(testGame.board).toEqual(board1);
  });
  it("only allows you to choose a position between 0 and 10", function() {
    let board2 = [["X", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

    expect(testGame.board).toEqual(board2);

    testGame.play('11');

    expect(testGame.board).toEqual(board2);
  });
});





// var library;
// var hungerGames;
//
// // creates a new game before each spec
// beforeEach(function () {
//   library = Library();
//   hungerGames = Book('Hunger Games', 'Suzanne Collins');
//
//   library.addBook(hungerGames);
// });
//
// // sets books back to 'checked in' after each spec
// afterEach(function() {
//   hungerGames.set('checkedOut', false);
// });
//
// describe("checkOutBook for Library", function () {
//   it("changes a book's checkedOut attribute from false to true", function () {
//     expect(hungerGames.get('checkedOut')).toEqual(false);
//
//     library.checkOutBook(hungerGames);
//
//     expect(hungerGames.get('checkedOut')).toEqual(true);
//   });
//
//   it("only allows you to check out books that exist in the library", function () {
//     var toot = Book('Toot', 'Leslie Patricelli');
//
//     expect(toot.get('checkedOut')).toEqual(false);
//
//     library.checkOutBook(toot);
//
//     expect(toot.get('checkedOut')).toEqual(false);
//   });
// });
//
// describe("returnBook for Library", function () {
//   it("changes a book's checkedOut attribute from true to false", function () {
//     library.checkOutBook(hungerGames);
//
//     expect(hungerGames.get('checkedOut')).toEqual(true);
//
//     library.returnBook(hungerGames);
//
//     expect(hungerGames.get('checkedOut')).toEqual(false);
//   });
//
//   it("only allows you to return books that exist in the library", function () {
//     var toot = Book('Toot', 'Leslie Patricelli');
//
//     toot.set('checkedOut', true);
//
//     expect(toot.get('checkedOut')).toEqual(true);
//
//     library.returnBook(toot);
//
//     expect(toot.get('checkedOut')).toEqual(true);
//   });
// });
//
// describe("addBook for Library", function () {
//   it("should add a new book to the library and enable it to be checked out", function () {
//     var harryPotter = Book('Harry Potter', 'J.K. Rowling');
//
//     expect(harryPotter.get('checkedOut')).toEqual(false);
//
//     library.checkOutBook(harryPotter);
//
//     expect(harryPotter.get('checkedOut')).toEqual(false);
//
//     library.addBook(harryPotter);
//
//     library.checkOutBook(harryPotter);
//
//     expect(harryPotter.get('checkedOut')).toEqual(true);
//   });
// });
//
// describe("getAttribute for Book", function () {
//   it("should only return an attribute if the attribute exists", function () {
//     expect(hungerGames.get('pages')).toEqual(undefined);
//   });
//
//   it("should return an attribute that does exist", function () {
//     expect(hungerGames.get('title')).toEqual('Hunger Games');
//   });
// });
//
// describe("setAttribute for Book", function () {
//   it("should not set an attribute that does not previously exist", function () {
//     hungerGames.set('pages', 110);
//
//     expect(hungerGames.get('pages')).toEqual(undefined);
//   });
//
//   it("should set an attribute that previously exists", function () {
//     hungerGames.set('title', 'The Freaking Awesome Games!');
//
//     expect(hungerGames.get('title')).toEqual('The Freaking Awesome Games!');
//   });
// });
