let currentBoard = { 
  }

function newGame(){
  currentBoard[0]= [5,4,3,2,1],
  currentBoard[1]= [];
  currentBoard[2]=[];
  return(currentBoard)
}
function showBoard(){
  console.log(Object.entries(currentBoard).map((i) => {return("---" + i[1].join(" "))}))
}

newGame()

function moveDisc(disc, peg){
  // let lastPeg = peg[peg.length-1];
  let lastDiscPeg1 = currentBoard[0][currentBoard[0].length-1];
  let lastDiscPeg2 = currentBoard[1][currentBoard[1].length-1];
  let lastDiscPeg3 = currentBoard[2][currentBoard[2].length-1];
  let largeOnSmall = "Sorry, Charlie, you can't place larger discs on top of smaller discs. Try again!";
  let notLastDisc = "Sorry, Charlie, you can only move the last disc on a peg! Try again"
  if (peg === 1){
    peg = currentBoard[0];
    if (peg[peg.length-1] > disc || peg.length === 0){
      // peg.push(disc);
      if (currentBoard[1].includes(disc)){
        if (lastDiscPeg2 === disc)
        {currentBoard[1].pop(disc);
          peg.push(disc)
      }} else if (currentBoard[2].includes(disc)){
        if (lastDiscPeg3 === disc){
        currentBoard[2].pop(disc);
        peg.push(disc)
       } else {console.log(notLastDisc)}
      } else (console.log(largeOnSmall)) } }
else if (peg === 2){
        peg = currentBoard[1];
        if (peg[peg.length-1] > disc || peg.length === 0){
          // peg.push(disc);
          if (currentBoard[0].includes(disc)){
            if (lastDiscPeg1 === disc){
            currentBoard[0].pop(disc);
          peg.push(disc)} else {console.log(notLastDisc)}
          } else if (currentBoard[2].includes(disc))
            if (lastDiscPeg3 === disc){
            currentBoard[2].pop(disc);
          peg.push(disc)} else {console.log(notLastDisc)}}
      }
else if (peg === 3){
  peg = currentBoard[2];
  if (peg[peg.length-1] > disc || peg.length === 0){
    // peg.push(disc);
    if (currentBoard[1].includes(disc) && lastDiscPeg2 === disc){
      if (lastDiscPeg2 === disc)
      {currentBoard[1].pop(disc);
      peg.push(disc);} else  {console.log(notLastDisc)}
    } 
    else if (currentBoard[0].includes(disc)){
      if(lastDiscPeg1 === disc)
     {currentBoard[0].pop(disc);
     peg.push(disc)} else {console.log(notLastDisc)}
    }
  } else (console.log(largeOnSmall))
}

showBoard()     
}
 
function checkWinner(){
  //check that the discs are bag in order on a new peg 
  let peg2 = currentBoard[1];
  let peg3 = currentBoard[2];
  if (peg2.length === 5){
    if (peg2[0] === 5 && peg2[peg2.length -1] === 1){
      console.log("You've won! Let's go again!");
      newGame();
      showBoard();
    }
  } else if (peg3.length === 5){
    if (peg3[0] === 5 && peg3[peg3.length -1] === 1){
      console.log("You've won! Let's go again!");
      newGame();
      showBoard();
    }
  } else {
    console.log("Sorry, Charlie, you haven't won yet.")
  } 
}



// showBoard()
// moveDisc(1,3)
// moveDisc(2,2)
// moveDisc(1,2)
// moveDisc(3,3)
// moveDisc(1,1)
// moveDisc(2,3)
// moveDisc(1,3)
// moveDisc(4,2)
// moveDisc(1,2)
// moveDisc(2,1)
// moveDisc(1,1)
// moveDisc(3,2)
// moveDisc(1,3)
// moveDisc(2,2)
// moveDisc(1,2)
// moveDisc(5,3)
// moveDisc(1,1)
// moveDisc(2,3)
// moveDisc(1,3)
// moveDisc(3,1)
// moveDisc(4,3)
// moveDisc(1,2)
// moveDisc(2,1)
// moveDisc(1,1)
// moveDisc(4,3)
// moveDisc(1,3)
// moveDisc(2,2)
// moveDisc(1,2)
// moveDisc(3,3)
// moveDisc(1,1)
// moveDisc(2,3)
// moveDisc(1,1)
// moveDisc(1,3)

//get number to move
//get peg to move to
//find peg with number
//check to see if there is a smaller number on target peg
//remove number from current peg
//move numb to new peg if no  smaller numbers
