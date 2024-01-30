// TO DO
// reset gameboard
// add css disc movement elements
// reconfigure redundant code
// what is JQuery and API and why would it help me display the game in HTML
// write a test in Jasmine
// give options to change of numbers pegs and discs
// add function to automatically complete the game

let towerOne = [5, 4, 3, 2, 1];
let towerTwo = [];
let towerThree = [];

let board = [towerOne, towerTwo, towerThree];

document.addEventListener("DOMContentLoaded", function() {
  const inputBoxDisc = document.getElementById("text-box-one");
  const inputBoxTower = document.getElementById("text-box-two");

  let discOneTowerLocation = 1;
  let discTwoTowerLocation = 1;
  let discThreeTowerLocation = 1;
  let discFourTowerLocation = 1;
  let discFiveTowerLocation = 1;

  const moveDisc = function () {
    let discOrigin = parseInt(inputBoxDisc.value);
    let towerDestination = parseInt(inputBoxTower.value);

    const allTheThings = function () {
      const moveDisplay = function ()   {
        console.log("Disc " + discOrigin + " moved to Tower " + towerDestination + ".");
      };
      moveDisplay();
  
      const gameDisplay = function () {
        board.forEach((tower, index) => {
          const label = `Tower ${index + 1}`;
          if (tower.length === 0) {
            console.log(`${label}:`);
          } else {
            console.log(`${label}: ${tower.join(", ")}`);
          }
        });
      };
      gameDisplay();

    //   const updateBoard = function () {
    //     board.map(row => {
    //       if (row.length === 0) {
    //         console.log("---");
    //       } else {
    //         console.log("---" + row.join(" ,"));
    //       }
    //     });
    //   };
    //   updateBoard();
    };
    
    const clearTextBox = function () {
      inputBoxDisc.value = "";
      inputBoxTower.value = "";
    };

    if (isNaN(discOrigin) || isNaN(towerDestination)) {
      alert("Error. You must enter a number.");
      clearTextBox();
      return;
    } else if (discOrigin === 1 && towerDestination === discOneTowerLocation) {
      alert("Error.  Disc 1 is already on that Tower.");
      clearTextBox();
      return;
    } else if (discOrigin === 2 && towerDestination === discTwoTowerLocation) {
      alert("Error. Disc 2 is already on that Tower.");
      clearTextBox();
      return;
    } else if (discOrigin === 3 && towerDestination === discThreeTowerLocation) {
      alert("Error.  Disc 3 is already on that Tower.");
      clearTextBox();
      return;
    } else if (discOrigin === 4 && towerDestination === discFourTowerLocation) {
      alert("Error.  Disc 4 is already on that Tower.");
      clearTextBox();
      return;
    } else if (discOrigin === 5 && towerDestination === discFiveTowerLocation) {
      alert("Error.  Disc 5 is already on that Tower.");
      clearTextBox();
      return;
    } else if ((discOrigin === 2 && towerDestination === 1 && towerOne[towerOne.length -1] < discOrigin) || (discOrigin === 2 && towerDestination === 2 && towerTwo[towerTwo.length - 1] < discOrigin) || (discOrigin === 2 && towerDestination === 3 && towerThree[towerThree.length - 1] < discOrigin)) {
      alert("Error. A smaller disc is already on Tower.");
      clearTextBox();
      return;
    } else if ((discOrigin === 3 && towerDestination === 1 && towerOne.length > 0 && towerOne[towerOne.length - 1] < discOrigin) || (discOrigin === 3 && towerDestination === 2 && towerTwo.length > 0 && towerTwo[towerTwo.length -1] < discOrigin) || (discOrigin === 3 && towerDestination === 3 && towerThree.length > 0 && towerThree[towerThree.length -1] < discOrigin)) {
      alert("Error. A smaller disc is already on Tower.");
      clearTextBox();
      return;
    } else if ((discOrigin === 4 && towerDestination === 1 && towerOne.length > 0 && towerOne[towerOne.length -1] < discOrigin) || (discOrigin === 4 && towerDestination === 2 && towerTwo.length > 0 && towerTwo[towerTwo.length -1] < discOrigin) || (discOrigin === 4 && towerDestination === 3 && towerThree.length > 0 && towerThree[towerThree.length -1] < discOrigin)) {
      alert("Error. A smaller disc is already on Tower.");
      clearTextBox();
      return;
    } else if ((discOrigin === 5 && towerDestination === 1 && towerOne.length > 0 && towerOne[towerOne.length -1] < discOrigin) || (discOrigin === 5 && towerDestination === 2 && towerTwo.length > 0 && towerTwo[towerTwo.length -1] < discOrigin) || (discOrigin === 5 && towerDestination === 3 && towerThree.length > 0 && towerThree[towerThree.length -1] < discOrigin)) {
      alert("Error. A smaller disc is already on Tower.");
      clearTextBox();
      return;
    } else if (discOrigin === 1 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discOneTowerLocation === 1) {
      towerOne.pop();
      towerTwo.push(discOrigin);
      discOneTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "320px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 1 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discOneTowerLocation === 1) {
      towerOne.pop();
      towerThree.push(discOrigin);
      discOneTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 1 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discOneTowerLocation === 2) {
      towerTwo.pop();
      towerOne.push(discOrigin);
      discOneTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 1 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discOneTowerLocation === 2) {
      towerTwo.pop();
      towerThree.push(discOrigin);
      discOneTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 1 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discOneTowerLocation === 3) {
      towerThree.pop();
      towerOne.push(discOrigin);
      discOneTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 1 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discOneTowerLocation ===  3) {
      towerThree.pop();
      towerTwo.push(discOrigin);
      discOneTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discTwoTowerLocation === 1) {
      towerOne.pop();
      towerTwo.push(discOrigin);
      discTwoTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discTwoTowerLocation === 1) {
      towerOne.pop();
      towerThree.push(discOrigin);
      discTwoTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discTwoTowerLocation === 2) {
      towerTwo.pop();
      towerOne.push(discOrigin);
      discTwoTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discTwoTowerLocation === 2) {
      towerTwo.pop();
      towerThree.push(discOrigin);
      discTwoTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discTwoTowerLocation === 3) {
      towerThree.pop();
      towerOne.push(discOrigin);
      discTwoTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 2 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discTwoTowerLocation === 3) {
      towerThree.pop();
      towerTwo.push(discOrigin);
      discTwoTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discThreeTowerLocation === 1) {
      towerOne.pop();
      towerTwo.push(discOrigin);
      discThreeTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discThreeTowerLocation === 1) {
      towerOne.pop();
      towerThree.push(discOrigin);
      discThreeTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discThreeTowerLocation === 2) {
      towerTwo.pop();
      towerOne.push(discOrigin);
      discThreeTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discThreeTowerLocation === 2) {
      towerTwo.pop();
      towerThree.push(discOrigin);
      discThreeTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discThreeTowerLocation === 3) {
      towerThree.pop();
      towerOne.push(discOrigin);
      discThreeTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 3 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discThreeTowerLocation === 3) {
      towerThree.pop();
      towerTwo.push(discOrigin);
      discThreeTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discFourTowerLocation === 1) {
      towerOne.pop();
      towerTwo.push(discOrigin);
      discFourTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "320px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discFourTowerLocation === 1) {
      towerOne.pop();
      towerThree.push(discOrigin);
      discFourTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discFourTowerLocation === 2) {
      towerTwo.pop();
      towerOne.push(discOrigin);
      discFourTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discFourTowerLocation === 2) {
      towerTwo.pop();
      towerThree.push(discOrigin);
      discFourTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      clearTextBox();
      checkWinner();
    } else if (discOrigin === 4 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discFourTowerLocation === 3) {
      towerThree.pop();
      towerOne.push(discOrigin);
      discFourTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discFourTowerLocation === 3) {
      towerThree.pop();
      towerTwo.push(discOrigin);
      discFourTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 5 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discFiveTowerLocation === 1) {
      towerOne.pop();
      towerTwo.push(discOrigin);
      discFiveTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "320px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 5 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discFiveTowerLocation === 1) {
      towerOne.pop();
      towerThree.push(discOrigin);
      discFiveTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 5 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discFiveTowerLocation === 2) {
      towerTwo.pop();
      towerOne.push(discOrigin);
      discFiveTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 5 && towerDestination === 3 && (!towerThree.length || towerThree[towerThree.length - 1] > discOrigin) && discFiveTowerLocation === 2) {
      towerTwo.pop();
      towerThree.push(discOrigin);
      discFiveTowerLocation = 3;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 5 && towerDestination === 1 && (!towerOne.length || towerOne[towerOne.length - 1] > discOrigin) && discFiveTowerLocation === 3) {
      towerThree.pop();
      towerOne.push(discOrigin);
      discFiveTowerLocation = 1;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    } else if (discOrigin === 4 && towerDestination === 2 && (!towerTwo.length || towerTwo[towerTwo.length - 1] > discOrigin) && discFiveTowerLocation === 3) {
      towerThree.pop();
      towerTwo.push(discOrigin);
      discFiveTowerLocation = 2;
      const discPicOne = document.getElementById("disc-one");
      discPicOne.style.marginLeft = "660px";
      discPicOne.style.marginTop = "280px";
      allTheThings();
      checkWinner();
      clearTextBox();
    };
  };
  inputBoxTower.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && inputBoxDisc.value && inputBoxTower.value) {
       moveDisc(inputBoxDisc.value, inputBoxTower.value);
       document.getElementById("text-box-one").focus();
    }
  });
  const checkWinner = function () {
    if ((towerOne.length === 0 && towerTwo.length === 0) || (towerOne.length === 0 && towerThree.length === 0)) {
      console.log("You are Master of Hanoi!");
      gameReset();
    };
  };
  const gameReset = function () {
    let towerOne = [5, 4, 3, 2, 1];
    let towerTwo = [];
    let towerThree = [];
    discOneTowerLocation = 1;
    discTwoTowerLocation = 1;
    discThreeTowerLocation = 1;
    discFourTowerLocation = 1;
    discFiveTowerLocation = 1;
    console.clear();
  };
  document.addEventListener("keydown", function(event) {
    // Prevent the default action for the Enter key (key code 13)
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
});