function Board() {
  // let board = [[3,2,1], [],[]]
  let board = [];
  let [a, b, c] = board;
  let moves = 0;

  setUpGame = () => {
    this.board = [[3, 2, 1], [], []];
    this.moves = 0;
    console.log(`moves: ${moves}, board: ${board}`);
  };
}
let board1 = new Board();
