
let boardGame = [
  [ 5, 4, 3, 2, 1],
  [],
  []
]

function towerHanoi() {
  boardGame.map((dowel, index) => {
      console.log(`--- ${dowel.join(' ')}`)
  });
}
towerHanoi();


function moveDisc(fromDowel, toDowel) {

  fromDowel = fromDowel - 1;
  toDowel = toDowel - 1;

const fromDowelRods = boardGame[fromDowel]
const toDowelRods = boardGame[toDowel]

if (fromDowelRods.length === 0) {
  console.log('Sorry, there are no dowels here to move!')
  return;
}


const moveTheRod = fromDowelRods[fromDowelRods.length - 1]



if (toDowelRods.length === 0 || moveTheRod < toDowelRods[toDowelRods.length - 1]) {
  toDowelRods.push(fromDowelRods.pop());
  console.log(`You have moved the rod ${moveTheRod} to this dowel ${fromDowel + 1}, to this dowel ${toDowel + 1}`);
} else {
  console.log('Sorry-unfortunately, this move is now allowed. You cannot put a larger rod/disc on a smaller one. Try again.');
}

towerHanoi();
}

moveDisc(1, 3);

// create checkWinner function to see if player has won the game
function checkWinner() {

   const victorHanoi = [5, 4, 3, 2, 1]

   if (boardGame[1].join('') === victorHanoi.join('')|| boardGame[2].join('') === victorHanoi.join('')) {
    console.log('Congratulations- You won the game! That is amazing!');
    reset();
   }

}
//create function to reset the game too
function reset() {

  boardGame = [
  [ 5, 4, 3, 2, 1],
  [],
  []
];


towerHanoi();

}