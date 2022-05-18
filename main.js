const boardState = {
  pegOne: [5, 4, 3, 2, 1],
  pegTwo: [],
  pegThree: []
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


//mover – affects state of board object

//array creator 

//console log