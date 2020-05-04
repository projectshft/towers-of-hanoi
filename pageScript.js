var myBoard = Object.create(board);
var boardState = myBoard.boardState();

var buildBoard = function(pegs, disks) {
  removePegs();
  boardState.setPegs(Number(pegs));
  boardState.setDisks(Number(disks));
  boardState.initializeBoard();
}

var addPegs = function() {
  removePegs();
  var pegsDiv = document.getElementById("gameBoard");
  for (let i = 1; i <= boardState.getPegs(); i++) {
    var pegContainer = buildPegContainer(i);
    var pegNumber = buildPegNumber(i);
    var peg = document.createElement("div");
    peg.classList.add("peg");
    pegContainer.appendChild(peg);
    pegContainer.appendChild(pegNumber);
    pegsDiv.appendChild(pegContainer);
  }
}

var buildPegNumber = function(pegIndex) {
  var pegNumber = document.createElement("div");
  pegNumber.classList.add("pegNumber");
  pegNumber.innerHTML = `<h5>Peg ${pegIndex}</h5>`;
  return pegNumber;
}

var buildPegContainer = function(pegIndex) {
  var pegContainer = document.createElement("div");
  pegContainer.classList.add("pegContainer");
  pegContainer.id = `peg${pegIndex}`;
  return pegContainer;
}

var removeDisks = function() {
  for (let i = 1; i <= boardState.getDisks(); i++) {
    var diskID = `disk${i}`;
    var disk = document.getElementById(diskID);
    if (disk) disk.remove();
  }
}

var removePegs = function() {
  for (let i = 1; i <= boardState.getPegs(); i++) {
    var pegID = `peg${i}`;
    var peg = document.getElementById(pegID);
    if (peg) peg.remove();
  }
}

var updateDisks = function() {
  removeDisks();
  var board = boardState.returnBoardCopy();
  for (let pegIndex = 0; pegIndex < board.length; pegIndex++) {
    var peg = document.getElementById(`peg${pegIndex + 1}`);
    for (let diskIndex = 0; diskIndex < board[pegIndex].length; diskIndex++) {
      var disk = document.createElement("div");
      disk.classList.add("disk");
      disk.id = `disk${board[pegIndex][diskIndex]}`;
      disk.style.bottom = `${(diskIndex+1) * 24}px`;
      var diskNumber = document.createElement("span");
      diskNumber.innerHTML = board[pegIndex][diskIndex];
      disk.appendChild(diskNumber);
      peg.appendChild(disk);
    }
  }
}

var initializeHTMLBoard = function() {
  addPegs();
  updateDisks();
}

var validateMoveInput = function(sourcePeg, targetPeg) {
  if (sourcePeg > boardState.getPegs() || sourcePeg <= 0) {
    alert("Invalid input: source peg number is out of range");
  } else if (targetPeg > boardState.getPegs() || targetPeg <= 0) {
    alert("Invalid input: target peg number is out of range");
  } else if (boardState.returnBoardCopy()[sourcePeg - 1].length === 0) {
    alert("Invalid input: source peg has no disks");
  } else {
    myBoard.playerMove(sourcePeg, targetPeg, boardState);
  }
}

var validateSourcePeg = function(sourcePeg) {

}
