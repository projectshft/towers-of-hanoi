//this version allows chosing number of towers and rings, but looping the game causes rings and towers to duplicate, or at least carry over between sessions
let Game = () => {
  let moves = 0;
  let towersArray = [];
  let userTowers = parseInt(
    prompt('How many towers do you want to play with? ')
  );
  let userRings = parseInt(
    prompt('How many rings do you want to be on the first tower? ')
  );
  // let userTowers = 3;
  // let userRings = 3;

  let setUpTowers = () => {
    for (let index = 0; index < userTowers; index++) {
      towersArray.push([]);
    }
    for (let jindex = 1; jindex <= userRings; jindex++) {
      towersArray[0].push(jindex);
    }
  };
  let renderBoard = () => {
    towersArray.map((obj, num) => {
      console.log(`Tower${num + 1} |>==== ${obj.join(' ')}`);
    });
  };

  let moveDisc = (from, to) => {
    if (to.length === 0 || from.slice(-1) > to.slice(-1)) {
      let currentDisc = from.pop();
      moves++;
      to.push(currentDisc);
      renderBoard();
    } else {
      console.log(`Sorry, that move isn't allowed`);
    }
    gameEnd();
  };

  let gameEnd = () => {
    if (
      towersArray[0].length === 0 &&
      (towersArray[1].length === userRings ||
        towersArray[2].length === userRings)
    ) {
      console.log(`game end if`);
      console.log(`Great job! You finished the game in ${moves} moves!`);
      console.log(`See if you can beat your score next time!`);
    } else {
      console.log('game end else');
      console.log(`Moves: ${moves}`);
      console.log(`----------`);
    }
  };

  return {
    towers: towersArray,
    moves: moves,
    setup: setUpTowers,
    render: renderBoard,
    move: moveDisc,
  };
};

let game = Game();

game.setup();

game.move(game.towers[0], game.towers[1]);
game.move(game.towers[0], game.towers[2]);
game.move(game.towers[1], game.towers[2]);
game.move(game.towers[0], game.towers[1]);
game.move(game.towers[2], game.towers[0]);
game.move(game.towers[2], game.towers[1]);
game.move(game.towers[0], game.towers[1]);
