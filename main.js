// Note: This only seems to work in Repl.it for some reason but it does "kind of" work.





  var towers = [[3, 2, 1], [], []];

  var count = 0;

  var moveTowers = function(start,end) {
    var startPeg = start - 1; // so user doesn't have to ask for 0 when they mean 1
    var endPeg = end - 1;     // so user doesn't have to ask for 0 when they mean 1
    var emptyEndPeg = towers[endPeg].length === 0; // checks if peg is empty. if it's empty, merging is easier.
    var notEmptyStartPeg = towers[startPeg].length != 0; // you don't want to waste a move moving an empty start peg into a peg that has value.
    var lastItemInStartArray = towers[startPeg][towers[startPeg].length - 1]; // Last Item In Start Array
    var lastItemInEndArray = towers[endPeg][towers[endPeg].length-1]; // Last Item in End Array
    if (lastItemInStartArray < lastItemInEndArray || emptyEndPeg && notEmptyStartPeg) {
      towers[endPeg].push(lastItemInStartArray);
      towers[startPeg].pop();
      count++;
    } else {
      console.log("Move is not legal.");
    }

    console.log(towers);
    console.log('Move Count: ' + count);
    checkWinner();
  }

    // Does not run properly
    var checkWinner = function() {
      if (towers === [[],[3,2,1],[]] || towers === [[],[],[3,2,1]]) {
        console.log("You Win!!")
      };
      };



moveTowers(1,2);
moveTowers(1,3);
moveTowers(2,3);
moveTowers(1,2);
moveTowers(3,1);
moveTowers(3,2);
moveTowers(1,2);
