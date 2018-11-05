var HanoiTower = function(disk, start, end, via) {
var board = [[3, 2, 1], [], []];

  var displayDisc = board.map(function (row) {
        console.log(row.join(''));
  });

  var moveDisc = board.filter(function (start, end) {
    var disk = board[0].pop(2);
    if (disk == 1) {
      board[2].push(disk);
      console.log("Disk Moved!");
      console.log(board);

    }

      else {
        return "disk not allowed";
      }
       var disk = board[0].pop(1);
   board[1].push(disk);
       console.log("Disk Moved!");
   console.log(board);
   var disk = board[2].pop(0);
   board[1].push(disk);
       console.log("Disk Moved!");
   console.log(board);
   var disk = board[0].pop(0);
   board[2].push(disk);
       console.log("Disk Moved!");
   console.log(board);
   var disk = board[1].pop(1);
   board[0].push(disk);
       console.log("Disk Moved!");
   console.log(board);
   var disk = board[1].pop(0);
   board[2].push(disk);
       console.log("Disk Moved!");
   console.log(board);
    var disk = board[0].pop(0);
   board[2].push(disk);
       console.log("Disk Moved!");
   console.log(board);



});


  var result = board.reduce(function checkWinner(pegs) {
    if (board[2].length = 3) {
          console.log("Congratulations!");
        }
      else if (board[1].length = 3) {
          console.log("Congratulations!");
        }

    else {
      console.log("Sorry! Do better next time!");
    }
   });



};

HanoiTower(3, 'start', 'end', 'via');
