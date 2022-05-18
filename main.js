const boardState = {
  pegOne: [1],
  pegTwo: [2],
  pegThree: [3]
}

const one = boardState.pegOne;
const two = boardState.pegTwo;
const three = boardState.pegThree;

const tester = (from, to) => {
  const fromLength = from.length;
  const toLength = to.length;

  let fromLastElement = 0;
  let toLastElement = 0;

  if (fromLength > 0) {
    fromLastElement = from[fromLength - 1]
  }

  if (toLength > 0) {
    toLastElement = to[toLength - 1]
  }

  if (fromLastElement < toLastElement || toLastElement === 0) {
    return true;
  } else {
    return false;
  } 
}


//create argument conv

//mover – affects state of board object

//array creator 

//console log


// const move = () => {
  // if (from === 1) {
  //   from = one;
  // } else if (from === 2) {
  //   from = two
  // } else if (from === 3) {
  //   from = three;
  // } else {
  //   console.log('Arguments must equal 1, 2, or 3.')
  // }

  // if (to === 1) {
  //   to = one;
  // } else if (to === 2) {
  //   to = two
  // } else if (to === 3) {
  //   to = three;
  // } else {
  //   console.log('Arguments must equal 1, 2, or 3.')
  // }

  // tester(from, to);

//   tester;

//   //mover

//   array creator 

// }