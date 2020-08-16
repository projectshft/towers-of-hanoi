let boardState = [   // a basic 3x3 board
  [],
  ['3', '2', '1'],
  ['3', '2', '1']
];

var outputBoard = function(boardArray) {    // REQs = use MAP at least once
  let output = '';
  for (let i = 0; i < boardArray.length; i++) {  //common loop through elements in array
    console.log('i loop ' + i);
    if (!boardArray[i].length){   // too clever?
      output += '---\n';
    } else {
      output += '--- ';  // start with the post
      output += boardArray[i].map(function(disc){  // add bits of (hopefully formatted) results to post
        console.log('disc ', disc);
        //disc = disc.replace(/,/g , '');
        return (disc += ' ') //.replace(/,/g , '');
      });
      output = output.replace(/,/g , '');  // clean out the commas before returning. But where do they come from?
      output += '\n';
    }
    
    }
    return output;
}

console.log(outputBoard(boardState));
//var cleanBoard = outputBoard(boardState);
//console.log(cleanBoard.replace(/,/g , ''));
