// Starting board array
var board = [[5, 4, 3, 2, 1],
  [],
  []];

// Array needed to win
const winningArr = [5, 4, 3, 2, 1];

// Logs the starting board in a cleaner way
console.log('Starting board: ')
  board.map (function (num) {
    console.log('--- ' + num.join(' '));
    });

// Allows moveDisc function to fire from HTML
window.addEventListener("click", function () {
    button.addEventListener("click", moveDisc);  
  });


// Function to check for winning array on peg two or three - resets game board
const checkWinner = function () {
    let check1 = JSON.stringify(board[0, 1]) === JSON.stringify(winningArr);
    let check2 = JSON.stringify(board[0, 2]) === JSON.stringify(winningArr);

    if (check1 === true || check2 === true) {
      alert('You win! Game board is now reset to starting position.');
      board = [[5, 4, 3, 2, 1],
      [],
      []];
      

      console.log('Starting board: ')
      board.map (function (num) {
        console.log('--- ' + num.join(' '));
      
        peg1 = document.getElementById("peg1").innerHTML = ' ';
        peg2 = document.getElementById("peg2").innerHTML = ' ';
        peg3 = document.getElementById("peg3").innerHTML = ' ';
        document.getElementById("peg1").innerHTML = `Peg #1: --- ${board[0, 0].join(' ')}`;
        document.getElementById("peg2").innerHTML = `Peg #2: --- ${board[0, 1].join(' ')}`;
        document.getElementById("peg3").innerHTML = `Peg #3: --- ${board[0, 2].join(' ')}`;

      });
    }
  };

// moveDisc function, works using HTML. Comment out "from" and "to" getElementById's to play in console.
const moveDisc = function () {

  from = document.getElementById("from").value; 
  to = document.getElementById("to").value;
  
  let fromPeg = board[0, from - 1];
  let toPeg = board[0, to - 1];
  let discMoved = fromPeg[fromPeg.length -1];
  let discDestination = toPeg[toPeg.length -1];

  if (discDestination === undefined || discDestination > discMoved) {
    fromPeg.pop();
    toPeg.push(discMoved);

    console.log('Move is successful, board is now: ')
    board.map (function (num) {
    console.log('--- ' + num.join(' '));
  })
  } else if (discMoved > discDestination) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still: ')
    alert('You cannot move a larger disc on top of a smaller one, board is unchanged: ');
    board.map (function (num) {
    console.log('--- ' + num.join(' '));
  })
  
  };

  document.getElementById('from').value = '';
  document.getElementById("to").value = '';
  document.getElementById("startingboard").innerHTML = '';
  peg1 = document.getElementById("peg1").innerHTML = `Peg #1: --- ${board[0, 0].join(' ')}`;
  peg2 = document.getElementById("peg2").innerHTML = `Peg #2: --- ${board[0, 1].join(' ')}`;
  peg3 = document.getElementById("peg3").innerHTML = `Peg #3: --- ${board[0, 2].join(' ')}`;
  
  
  checkWinner();
  };

  
 
  

    





// Winning game moves
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(3, 1)
// moveDisc(2, 1)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 3)
// moveDisc(2, 1)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(2, 1)
// moveDisc(3, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)
// moveDisc(1, 2)
// moveDisc(3, 2)
// moveDisc(1, 3)
// moveDisc(2, 1)
// moveDisc(2, 3)
// moveDisc(1, 3)




