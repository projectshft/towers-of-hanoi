class Tower {
  constructor(rings) {
    this.rings = rings;
    this.array = [];
  }
  setUpForNewGame() {
    for (let index = 1; index <= this.rings; index++) {
      let array = this.array;
      const element = index;
      array.push(element);
    }

    return this.array;
  }
  subtractRing() {
    let currentRing = this.array.pop();
    return currentRing;
  }
  addRing(newRing) {
    this.array.push(newRing);
  }
  topRing() {
    return this.array.slice(-1);
  }
  displayRings() {
    return this.array.reverse();
  }
}

class Game {
  constructor() {
    this.towersArray = [];
    this.rings = 3;
    this.moves = 0;
  }

  setUpForNewGame() {
    this.towersArray = [[], [], []];
    for (let index = 1; index <= this.rings; index++) {
      let array = this.towersArray[0];
      const element = index;
      array.push(element);
    }
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

  displayRings() {
    return this.towersArray.reverse();
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
const gameStarter = function () {
  let towerOne = new Tower(3);
  towerOne.setUpForNewGame();
  let towerTwo = new Tower(0);
  let towerThree = new Tower(0);
  let game = new Game([towerOne, towerTwo, towerThree]);
  game.displayRings();
};
gameStarter();

// game.move(towerOne, towerTwo);
// game.move(towerOne, towerThree);
// game.move(towerTwo, towerThree);
// game.move(towerOne, towerTwo);
// game.move(towerThree, towerOne);
// game.move(towerThree, towerTwo);
// game.move(towerOne, towerTwo);
