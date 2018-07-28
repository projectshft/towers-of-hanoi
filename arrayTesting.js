//define the basic 2D board array
const startingBoard = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];

const updatedBoard = startingBoard.map(item => {
  if(item === startingBoard["1"]) {
    item = "0";
  }
  return item;
});

function boardDisplay(array) {
  console.log("Here's the current board:")
  console.log(array.join("\n").replace(/,/g, "") + "\n");
}

function simpleBoardDisplay(array) {
  console.log("Here's the current board:")
  console.log(row1.join().replace(/,/g, "") + "\n");
}

function updateArray() {

}

// console.log(boardDisplay(startingBoard));
// console.log(boardDisplay(updatedBoard));
console.log(simpleBoardDisplay(row1));
console.log(simpleBoardDisplay(row2));
console.log(simpleBoardDisplay(row3));


const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = arr1.map(item => {
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
});

// console.log(arr2);
