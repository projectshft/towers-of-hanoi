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

const arrayMaker = (object) => {
  let newArray = [];

  newArray.push(boardState.pegOne);
  newArray.push(boardState.pegTwo);
  newArray.push(boardState.pegThree);

  return newArray
}

const mapper = (array) => {
  array.map(arr => console.log(`---${arr}`));
}

const mover = (from, to) => {
  let popped = from.pop()
  to.push(popped)
}

mapper(arrayMaker(boardState));


 const move = (from, to) => {
  if (from === 1) {
    from = one;
  } else if (from === 2) {
    from = two
  } else if (from === 3) {
    from = three;
  } else {
    from = [];
    console.log('Arguments must equal 1, 2, or 3. Try again.')
  }
  

  if (to === 1) {
    to = one;
  } else if (to === 2) {
    to = two
  } else if (to === 3) {
    to = three;
  } else {
    from = [];
    console.log('Arguments must equal 1, 2, or 3. Try again.')
  }

  const test = tester(from, to);

  if (test) {
    mover(from, to);

    const returnArray = arrayMaker(boardState);

    mapper(returnArray)
  } else {
    return 'You cannot place a bigger number on top of a smaller number. Try again.'
  }

  

 }

 