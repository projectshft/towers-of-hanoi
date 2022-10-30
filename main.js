  let gameBoard = [[5, 4, 3, 2, 1], [], []];
  let numOfDiscs = gameBoard[0].length;
  
  // assign each array to a peg
  let peg1 = gameBoard[0];
  let peg2 = gameBoard[1];
  let peg3 = gameBoard[2];
  
  
  // store each disc's size and location
  let discs = {
    disc1:  {
    size: 1,
    location: peg1
    },
    disc2: {
      size: 2,
      location: peg1
    },
    disc3: {
      size: 3,
      location: peg1
    },
    disc4: {
      size: 4,
      location: peg1
    }, 
    disc5: {
      size: 5,
      location: peg1
    }
  };
  
  // reference each disc in the object 
  let discOne = discs.disc1;
  let discTwo = discs.disc2;
  let discThree = discs.disc3;
  let discFour = discs.disc4;
  let discFive = discs.disc5;
  
  
  // to check if all discs are together on one peg other than the starting peg
  checkWinner = function() {
    if (peg2.length === numOfDiscs || peg3.length === numOfDiscs) {
      console.log('You are a winner!!!');
      resetGame();
    }
  }
  
   
  console.log('The beginning board is:')
  
  // print 2D to the console
  gameBoard.map(function (peg) {
    console.log('--- ' + peg.join(' '));
   });
  
  // play the game by moving discs to different pegs  
  let moveDisc = function (disc, peg) {
    let topDisc = disc.location[disc.location.length - 1];
  
    // if disc is at the top of the peg and the peg is empty **
    if (disc.size === topDisc && typeof peg[peg.length - 1] === 'undefined') {
          disc.location.pop();
          peg.push(disc.size);
          disc.location = peg;
  
          console.log('Move was successful. Board is now:');
          
          
    // if disc is at the top of the peg and the peg has a ring(s) on it already ?*
    } else if (disc.size === topDisc && peg[peg.length - 1] && disc.size < peg[peg.length - 1]) {
          disc.location.pop();
          peg.push(disc.size);
          disc.location = peg;
          console.log('Move was successful. Board is now:');
         
  
  
    // if attempt is not a legitimate move
    } else {
      console.log('Move was unsuccessful. Board is now:')
    }
    gameBoard.map(function (peg) {
      console.log('--- ' + peg.join(' '));   
     });
  
     checkWinner(discs);
    }
  
  
    // a reset game function that is triggered if a winner was determined in the checkWinner function 
    resetGame = function() {
        gameBoard = new Array([5, 4, 3, 2, 1], [], []);
        peg1 = gameBoard[0];
        peg2 = gameBoard[1];
        peg3 = gameBoard[2];
        discOne.location = peg1;
        discTwo.location = peg1;
        discThree.location = peg1;
        discFour.location = peg1;
        discFive.location = peg1;
        
        // console.clear();
        console.log('New Game:')
        gameBoard.map(function (peg) {
        console.log('--- ' + peg.join(' '));   
         });
    }
  
  

    //// A solution for testing purposes:

    // moveDisc(discOne, peg3);
    // moveDisc(discTwo, peg2);
    // moveDisc(discOne, peg2);
    // moveDisc(discThree, peg3);
    // moveDisc(discOne, peg1);
  
    // moveDisc(discTwo, peg3);
    // moveDisc(discOne, peg3);
    // moveDisc(discFour, peg2);
    // moveDisc(discOne, peg2);
    // moveDisc(discTwo, peg1);
  
    // moveDisc(discOne, peg1);
    // moveDisc(discThree, peg2);
    // moveDisc(discOne, peg3);
    // moveDisc(discTwo, peg2);
    // moveDisc(discOne, peg2);
    
    // moveDisc(discFive, peg3);
    // moveDisc(discOne, peg1);
    // moveDisc(discTwo, peg3);
    // moveDisc(discOne, peg3);
    // moveDisc(discThree, peg1);
  
    // moveDisc(discOne, peg2);
    // moveDisc(discTwo, peg1);
    // moveDisc(discOne, peg1);
    // moveDisc(discFour, peg3);
    // moveDisc(discOne, peg3);
  
    // moveDisc(discTwo, peg2);
    // moveDisc(discOne, peg2);
    // moveDisc(discThree, peg3);
    // moveDisc(discOne, peg1);
    // moveDisc(discTwo, peg3);
    // moveDisc(discOne, peg3);