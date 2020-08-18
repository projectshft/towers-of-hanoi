/*function startGame() {
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  };*/
  let gameBoard = [];
  var pegs = '---';
  var disks = 3;
  
  gameBoard = [
    [3], [2], [1],
    [], [], [],
    [], [], []
  ];
  
  gameBoard.map(function (arr) {
    for (i=0; i < 3; i++) {
    console.log(pegs, gameBoard)
  }
    return arr
  });