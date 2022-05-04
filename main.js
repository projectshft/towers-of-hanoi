var gameBoard 

var pegOne = [5,4,3,2,1];
var pegTwo = [];
var pegThree = [];


console.log('---' + pegOne);
console.log('---' + pegTwo);
console.log('---' + pegThree);

pegOne.forEach(function(elem, index) {
  pegOne.splice(index, 5);
  pegTwo.push(elem);
});
