let arr1 = [1, 2, 3];

const createArrCopy = arr => {
  return arr.map(num => num);
}

let arr2 = createArrCopy(arr1);
console.log(arr2);

arr2.push(4);

console.log(arr1);
console.log(arr2);