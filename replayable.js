class Game {
  constructor(towers, rings) {
    this.towersArray = towers;
    this.rings = rings;
    this.moves = 0;
  }

  newGame() {
    console.log('starting a new game');

    for (let index = 1; index <= this.towerQty; index++) {
      let name = `tower${index}`;
      if (index === 1) {
        name = new Tower(this.rings);
        name.setUpForNewGame();
        this.towersArray.push(name);
        console.log(name);
      } else {
        name = new Tower(0);
        name.setUpForNewGame();
        this.towersArray.push(name);
        console.log(name);
      }
    }
  }

  move(from, to) {
    if (from.topRing() < to.topRing() ? false : true) {
      let movingRing = from.subtractRing();
      to.addRing(movingRing);
      this.moves++;
      this.displayRings();
      this.stillPlaying(to);
    } else {
      console.error('nope!');

      this.displayRings();
      this.stillPlaying(to);
    }
  }
  displayRings() {
    this.towersArray.map((obj, number) => {
      console.log(`${number + 1} ===== ${obj.array.join(' ')}`);
    });
    console.log(`<<===========>>`);
    console.log(`Moves: ${this.moves}`);
  }
  moveValidation(from, to) {
    from.topRing > to.topRing ? false : true;
  }
  stillPlaying(to) {
    if (towerOne.topRing().length === 0 && to.topRing()[0] === 3) {
      console.log(`winner`);
      console.log(`---------------`);
      this.replayGame();
    } else {
      console.log(`keep going!`);
      console.log(`---------------`);
    }
  }
  replayGame() {
    let replay = prompt(
      'Great job! Would you like to play again? Enter Yes or No: '
    );
    if (replay.toLowerCase === `y` || `yes`) {
      // console.clear();
      // this.newGame;y
      let towerOne = new Tower(3);
      towerOne.setUpForNewGame();
      let towerTwo = new Tower();
      let towerThree = new Tower();
      let game = new Game([towerOne, towerTwo, towerThree]);
      this.newGame();
      this.displayRings();
    }
  }
  // startGame;
}
// let Game = () => {
//   // let board = [[], [], []];
//   let board;
//   let moves = 0;

//   // function reset() {
//   //   board = ['empty', 'array'];
//   //   newGame();
//   // }

//   function newGame() {
//     board = [[3, 2, 1], [], []];
//     // console.log(board);
//     moves = 0;
//     console.log(`Let's play a new game!`);
//     renderBoard();
//   }

//   function renderBoard() {
//     board.map((obj, num) => {
//       console.log(`Tower ${num + 1} >>>>>> ${obj.join(' ')}`);
//     });
//   }
//   function move(from, to) {
//     if (to.length === 0 || from.slice(-1) < to.slice(-1)) {
//       let currentDisc = from.pop();
//       moves++;
//       to.push(currentDisc);
//       renderBoard();
//       gameEnd();
//     } else {
//       console.log(
//         `Sorry, that move isn't allowed. The board still looks like this: `
//       );
//       renderBoard();
//     }
//   }
//   function gameEnd() {
//     if (
//       board[0].length === 0 &&
//       (board[1].length === 3 || board[2].length === 3)
//     ) {
//       console.log(`Great job! You finished the game in ${moves} moves!`);
//       console.log(`See if you can beat your score next time!`);
//       console.log(`Type game = Game() to try again!`);
//       newGame();
//     } else {
//       console.log(`Moves: ${moves}`);
//       console.log(`--↓--↓--`);
//     }
//   }

//   // reset();
//   return {
//     board: board,
//     moves: moves,
//     renderBoard: renderBoard,
//     move: move,
//     // reset: reset,
//     newGame: newGame,
//   };
// };

let game = Game();
game.newGame();
console.log(game.board[0]);
// game.move(game.board[0], game.board[1]);
// console.log(game.board[0]);
// game.move(game.board[0], game.board[2]);
// game.move(game.board[1], game.board[2]);
// game.move(game.board[0], game.board[1]);
// game.move(game.board[2], game.board[0]);
// game.move(game.board[2], game.board[1]);
// game.move(game.board[0], game.board[1]);
// game.newGame();
