"use strict";

//NOTE - the code below was written so that someone could play entirely in the console OR using the interactive browser inputs. This is for the purpose of an educational exercise to program both.

//Board - original data
const board = {
  firstPeg: ["5", "4", "3", "2", "1"],
  secondPeg: [],
  thirdPeg: [],
};

//Object for maintaining the state of the board.This is a 'deep copy so it can be manipulated while not changing original object;
let boardState = JSON.parse(JSON.stringify(board));

//Simplifying names for the pegs using object destructuring
let { firstPeg, secondPeg, thirdPeg } = boardState;

//Variable for highest number, which will be used in checkWinner function and add functions. Starting with "5" as our default.
//Doing the same with peg Numbers
let highestNum = "5";
let pegNum = 3;

//Adding placeholders for pegValues for displaying on the console;
let pegOneNums = [];
let pegTwoNums = [];
let pegThreeNums = [];
let pegFourNums = [];

// Starting board
//Get values out, translate to numbers & display with 3 pegs in the format instructed
const startingNums = board.firstPeg.map((item) => Number(item)).join(" ");

const startingBoard = `
--- ${startingNums}
---
---`;

//Variables for move failure and success
const moveFailMsg =
  "You cannot move a larger disc on top of a smaller one! Try again.";
const moveSuccessMsg = "That move was successful, check out the new board.";
const wrongMove = "You cannot move from an empty peg. Try again.";

//Variables for DOM manipulation, with event listener, then the rest is incorporated into the moveDisc function;
const inputTo = document.querySelector(".input-to-data");
const inputFrom = document.querySelector(".input-from-data");
const submitBtn = document.querySelector(".btn-input");
const pegOneDocNums = document.querySelector(".nums-pegOne");
const pegTwoDocNums = document.querySelector(".nums-pegTwo");
const pegThreeDocNums = document.querySelector(".nums-pegThree");
const msg = document.querySelector(".directions");
const winner = document.querySelector(".winner-screen");
const reset = document.querySelector(".btn-reset");
const addRow = document.querySelector(".btn-add");
const popOutGuide = document.querySelector(".pop-out-container");

let pegFourDocNums;
let fourthPeg;

//Event Listener for the Submit Button (when interacting with the browser game)
submitBtn.addEventListener("click", () => {
  let pegTo = parseInt(inputTo.value);
  let pegFrom = parseInt(inputFrom.value);

  if (pegTo > pegNum || pegFrom > pegNum || pegTo === 0 || pegFrom === 0) {
    msg.innerText = `Inputs must be unique and be between 1 and ${pegNum}`;
    styleErrMsg();
    clearMsg();
    clearInputs();
    throw new Error(
      `Please enter a value between 1 and ${pegNum} for both inputs`
    );
  }
  //Transition actions to the moveDisc function, using browser inputs here;
  moveDisc(pegFrom, pegTo);
});

//Event Listener for the add a row
addRow.addEventListener("click", () => {
  if (firstPeg.length < 5) {
    document.querySelector(".add-row-err").style.display = "block";
    setTimeout(function () {
      document.querySelector(".add-row-err").style.display = "none";
      document.querySelector(".add-row-err").textContent =
        "You cannot add a row after the game has begun";
    }, 4000);
    throw new Error("You cannot add a row after the game has begun");
  } else if (fourthPeg) {
    document.querySelector(".add-row-err").style.display = "block";
    setTimeout(function () {
      document.querySelector(".add-row-err").style.display = "none";
      document.querySelector(".add-row-err").innerHTML =
        "Maximum number of rows is 4";
    }, 4000);
    throw new Error("You cannot add more than 4 rows");
  } else {
    addPeg();
  }
});

//Instructions open and close event listeners

document.querySelector(".instructions").addEventListener("click", () => {
  popOutGuide.style.display = "block";
});

document.querySelector(".pop-out-close").addEventListener("click", () => {
  popOutGuide.style.display = "none";
});

///////////////////////////////////////////
//For updating display state
function updateState() {
  //For display in console;
  pegOneNums = firstPeg.map((item) => Number(item)).join(" ");
  pegTwoNums = secondPeg.map((item) => Number(item)).join(" ");
  pegThreeNums = thirdPeg.map((item) => Number(item)).join(" ");

  if (fourthPeg) {
    pegFourNums = fourthPeg.map((item) => Number(item)).join(" ");
  }

  let newBoard;

  if (!fourthPeg) {
    newBoard = `
--- ${pegOneNums}
--- ${pegTwoNums}
--- ${pegThreeNums}`;
  }

  if (fourthPeg) {
    newBoard = `
  --- ${pegOneNums}
  --- ${pegTwoNums}
  --- ${pegThreeNums}
  --- ${pegFourNums}`;
  }

  console.log(newBoard);

  //For updates to the DOM
  pegOneDocNums.textContent = pegOneNums;
  pegTwoDocNums.textContent = pegTwoNums;
  pegThreeDocNums.textContent = pegThreeNums;
  if (fourthPeg) {
    pegFourDocNums.textContent = pegFourNums;
  }
}

//resetting everything back to original layout

function resetState() {
  boardState = JSON.parse(JSON.stringify(board));
  ({ firstPeg, secondPeg, thirdPeg } = boardState);

  pegOneDocNums.textContent = firstPeg.map((item) => Number(item)).join(" ");
  pegTwoDocNums.textContent = "";
  pegThreeDocNums.textContent = "";

  if (fourthPeg) {
    document.querySelector(".pegFour").remove();
  }

  console.log(startingBoard);
}

//Adding an event listener for the reset btn (which appears after game is won

reset.addEventListener("click", () => {
  resetState();
  winner.style.display = "none";
});

//Move Disc Function

function moveDisc(pegFrom, pegTo) {
  const error = `Your inputs must start at 1 and cannot exceed ${pegNum} pegs`;
  //Before doing anything, let's make sure the inputs are even usable
  //First, let's make sure they are not zero.
  if (pegFrom < 1 || pegTo < 1) {
    msg.innerText = error;
    styleErrMsg();
    clearMsg();
    clearInputs();
    throw error;
  }

  //Now make sure they are not higher than the number of pegs we have;
  if (pegFrom > pegNum || pegTo > pegNum) {
    msg.innerText = error;
    styleErrMsg();
    //Discard the browser message after 3s (function for this is later in the code;
    clearMsg();
    clearInputs();
    throw error;
  }

  //Third, let's check that people didn't put in the same number for both 'from' and 'to'
  if (pegFrom === pegTo) {
    msg.innerText = error;
    styleErrMsg();
    clearMsg();
    clearInputs();
    throw new Error("Please specify two different values for the input");
  }

  // Translating input from number to peg number. I THOUGHT that we weren't supposed to use 'for' loops so I didn't use them to match up the number and peg. I know there is a better way to do this though :)

  if (pegFrom === 1) {
    pegFrom = firstPeg;
  }
  if (pegFrom === 2) {
    pegFrom = secondPeg;
  }
  if (pegFrom === 3) {
    pegFrom = thirdPeg;
  }

  if (pegTo === 1) {
    pegTo = firstPeg;
  }
  if (pegTo === 2) {
    pegTo = secondPeg;
  }
  if (pegTo === 3) {
    pegTo = thirdPeg;
  }

  //   //IF a fourth peg is added (optional)
  if (fourthPeg) {
    if (pegTo === 4) {
      pegTo = fourthPeg;
    }
    if (pegFrom === 4) {
      pegFrom = fourthPeg;
    }
  }

  //Make sure the 'from' input is not empty (i.e. that there is something to move)
  if (pegFrom.length === 0) {
    msg.innerText = wrongMove;
    styleErrMsg();
    clearMsg();
    clearInputs();
    throw new Error("You cannot move from an empty peg. Try again");
  }

  //Determine whether there is already input in the 'pegTo' array
  //Starting with an empty 'to' peg
  if (pegTo.length === 0) {
    console.log(moveSuccessMsg);
    msg.innerText = moveSuccessMsg;
    styleMsg();
    clearMsg();
    let popped = pegFrom.pop();
    pegTo.push(popped);
    updateState();
    clearInputs();
  }

  //If there is already something on the 'to' peg, is it bigger or smaller. If smaller, no go
  else if (pegTo.length > 0) {
    if (pegTo[pegTo.length - 1] < pegFrom[pegFrom.length - 1]) {
      console.log(moveFailMsg);
      msg.innerText = moveFailMsg;
      styleErrMsg();
      clearMsg();
      updateState();
      clearInputs();
    }
    //If it is bigger, however, we can move
    else if (pegTo[pegTo.length - 1] > pegFrom[pegFrom.length - 1]) {
      console.log(moveSuccessMsg);
      msg.innerText = moveSuccessMsg;
      styleMsg();
      clearMsg();

      let popped = pegFrom.pop();
      pegTo.push(popped);
      updateState();
      checkWinner();
      clearInputs();
    }
  }
}

// Checkwinner function
function checkWinner() {
  if (
    secondPeg.map((item) => Number(item)).join(" ") === startingNums ||
    thirdPeg.map((item) => Number(item)).join(" ") === startingNums
  ) {
    winner.style.display = "block";
    console.log(
      "YOU'VE WON! Click reset button in browser or refresh to reset!"
    );
  } else if (fourthPeg) {
    if (fourthPeg.map((item) => Number(item)).join(" ") === startingNums) {
      winner.style.display = "block";
      console.log(
        "YOU'VE WON! Click reset button in browser or refresh to reset!"
      );
    }
  }
}

//Function to style the message text so that it stands out in the browser

function styleMsg() {
  msg.style.fontStyle = "italic";
  msg.style.color = "#80c9e4";
}

//And one to style an error message
function styleErrMsg() {
  msg.style.fontStyle = "italic";
  msg.style.color = "rgb(248, 184, 184)";
}

// Function to clear input fields after a short period after pressing the submit button

function clearInputs() {
  setTimeout(function () {
    inputTo.value = "";
    inputFrom.value = "";
  }, 500);
}

// Function to clear the text of the message  that user gets in the browser after inputs
function clearMsg() {
  setTimeout(function () {
    msg.innerText = "How do you want to move the numbers?";
    msg.style.fontStyle = "normal";
    msg.style.color = "#decfeb";
  }, 3000);
}

//Function to add a 4th peg

function addPeg() {
  if (firstPeg.length < 5) {
    throw new Error("You cannot add a row after the game has begun");
  }

  if (fourthPeg) {
    throw new Error("You cannot add more than a fourth peg");
  }
  //selecting the third peg to clone
  let existingPeg = document.querySelector(".pegThree");
  const container = document.querySelector(".innerContainer");

  //let's create a clone of the last peg and append it to our peg container
  let clonedPeg = existingPeg.cloneNode(true);
  clonedPeg.removeAttribute("class");
  clonedPeg.classList.add("peg");
  clonedPeg.classList.add("pegFour");
  container.appendChild(clonedPeg);

  // But let's swap out the number image for four
  let img = document.querySelector(".pegFour .img-box  img");
  img.src = "./images/numberfourincircularbutton_80047.png";
  img.alt = "the number four";

  //Switch out classnames
  document.querySelector(".pegFour .numbers").classList.remove("nums-pegThree");
  document.querySelector(".pegFour .numbers").classList.add("nums-pegFour");

  boardState.fourthPeg = [];
  fourthPeg = boardState.fourthPeg;
  pegNum = 4;
  pegFourDocNums = document.querySelector(".nums-pegFour");
}
