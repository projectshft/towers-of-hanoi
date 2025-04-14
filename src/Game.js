console.log("Towers of Hanoi!")

var Game = function (){
  this.gameBoard = new GameBoard();
  this.firstSelection = -1;
}

Game.prototype.displayPegElements = function (pegElementsArray) {
  var gameBoard = document.getElementById("game-board");
  // Todo: Do I need this validation check? 
  if (!Array.isArray(pegElementsArray)){
    console.log("please provide an array")
    return false
  }
  pegElementsArray.forEach((element) => {
    gameBoard.appendChild(element);
  });

  this.initPegEventListeners();
  return 
};

Game.prototype.clearPegElements = function() {
  let elementsArray = Array.from(document.getElementsByClassName("game-peg"));
  return elementsArray.forEach((element) => {
    element.remove();
  });
};

Game.prototype.resetGame = function() {
  this.gameBoard.resetBoard();
  this.updateGameBoardElements();
}

Game.prototype.createPegElementsArray = function (board) {
  return board.stringFormattedGameBoard().map((pegString, index) => {
    var pegElement = document.createElement("div");
    pegElement.setAttribute("class", "game-peg");
    pegElement.setAttribute("id", index);

    Array.from(pegString).forEach((diskSize) => {
      var diskElement = document.createElement("div");
      if (diskSize === "-"){
        diskElement.classList.add("peg-footer");
      } else {
        diskElement.innerHTML = diskSize;
        diskElement.classList.add("disk-" + diskSize);
        diskElement.classList.add("disk")
      }
      pegElement.appendChild(diskElement);
    })
    return pegElement;
  });
};

Game.prototype.updateGameBoardElements = function () {
  this.clearPegElements();
  this.displayPegElements(this.createPegElementsArray(this.gameBoard));
};

Game.prototype.checkWinner = function(){
  var winner = this.gameBoard.checkWinner();
  
  return winner ? this.handleWin() : this.handleLose();
}

Game.prototype.handleWin = function() {
  console.log("Winner Winner chicken dinner!");
  alert("Winner Winner chicken dinner!");
  this.resetGame();
}

Game.prototype.handleLose = function() {
  console.log("No winner No chicken dinner.");
  alert("No winner No chicken dinner.");
};

Game.prototype.handleMove = function (from, to){
  console.log ("Moving from peg " + from + " to peg " + to);
  var moved = this.gameBoard.move(from, to);
  if (moved[0]) {
    this.updateGameBoardElements();
    var winner = this.gameBoard.checkWinner(this.gameBoard.board);
    if (winner) {
      this.handleWin();
    }
  } else {
    return alert(moved[1]);
  }
};

Game.prototype.handleMouseHover = function (peg) {
  peg.classList.toggle("isHovered");
};

Game.prototype.handleClick = function(peg) {
  if (this.firstSelection < 0) {
    peg.classList.toggle("selected");
    this.firstSelection = peg.id;
  } else if (this.firstSelection === peg.id){
    peg.classList.toggle("selected")
    this.firstSelection = -1;
  }else {
    var alreadySelectedElement = document.getElementById(this.firstSelection);
    this.handleMove(this.firstSelection, peg.id);
    alreadySelectedElement.classList.toggle("selected");
    this.firstSelection = -1;
  };
}

Game.prototype.initPegEventListeners = function () {
  var pegsArray = Array.from(document.getElementsByClassName("game-peg"));
  pegsArray.forEach((peg) => {
    peg.addEventListener("mouseover", () => {
      this.handleMouseHover(peg);
    });
    peg.addEventListener("mouseout", () => {
      this.handleMouseHover(peg);
    });
    peg.addEventListener("click", () => {
      this.handleClick(peg);
    });
  });
};


var GAME = new Game();
GAME.gameBoard.logGameBoard();
GAME.updateGameBoardElements();

var resetBoardBtn = document.getElementById("reset-btn");
resetBoardBtn.addEventListener("click", () => {
  GAME.resetGame();
});

var dialog = document.getElementById("instructions-dialog");
var dialogCloseBtn = document.getElementById("instructions-close")


var openInstructions = function(dialog) {
  if (dialog.open) {
    console.log("Dialog Opened");
  } else {
    console.log("Dialog closed")
  }
}


var gameInstructionsBtn = document.getElementById("game-instructions");
gameInstructionsBtn.addEventListener("click", () => {
  dialog.showModal();
  openInstructions(dialog);
}) 

dialogCloseBtn.addEventListener("click", () => {
  dialog.close("Instructions closed");
  openInstructions(dialog);
})

var checkWinnerBtn = document.getElementById("check-winner-btn");
checkWinnerBtn.addEventListener("click", () =>{
  GAME.checkWinner();
})

dialog.showModal();


