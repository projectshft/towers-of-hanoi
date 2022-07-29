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
  constructor(towers, rings) {
    this.towerQty = towers;
    this.towersArray = [];
    this.rings = rings;
    this.moves = 0;
    this.playing = true;
  }
  newGame() {
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
      this.stillPlaying(from, to);
    } else {
      console.error('nope!');
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
  stillPlaying(from, to) {
    if (tower1.topRing().length === 0 && to.topRing()[0] === 3) {
      console.log(`winner`);
      console.log(`---------------`);
      this.stillPlaying = false;
    } else {
      console.log(`keep going!`);
      console.log(`---------------`);
    }
  }
  // newGame;
}

// let towerOne = new Tower(3);
// let towerTwo = new Tower(0);
// let towerThree = new Tower(0);
// towerOne.setUpForNewGame();
// let game = new Game([towerOne, towerTwo, towerThree], true);
// console.log(towerThree.topRing().length);
// game.move(towerOne, towerTwo);
// game.move(towerOne, towerThree);
// game.move(towerTwo, towerThree);
// game.move(towerOne, towerTwo);
// game.move(towerThree, towerOne);
// game.move(towerThree, towerTwo);
// game.move(towerOne, towerTwo);
// game.displayRings();
// game.move(towerOne, towerTwo);
// game.newGame();
// game.displayRings();
let game = new Game(3, 3);
let domTowers = document.querySelectorAll('.tower');
const newGameButton = document.getElementById('startBtn');
const domRing = document.querySelectorAll('.ring');
const newTowerCreator = () => {};
const newLiCreator = () => {};
newGameButton.addEventListener('click', function () {
  domRing.insertAdjacentElement('afterbegin', 'li');
  // newTowerCreator();
  newLiCreator();
});
