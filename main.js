var array = [
  [
    "1",
    "2",
    "3"
    ],
[
  "4",
  "5",
  "6"
],
[
  "7",
  "8",
  "9"
]
];

var one = array[0][0];
var two = array[0][1];
var thr = array[0][2];
var four = array[1][0];
var fiv = array[1][1];
var six = array[1][2];
var svn = array[2][0];
var eig = array[2][1];
var nin = array[2][2];

var count = 1;


var greeting = function () {
  var start = function () {
    console.log("TIC-TAC-TOE");
  };
  start();
  board();
};

var board = function(){
  console.log("Turn " + count);
  console.log('\n' + one + two + thr + '\n' + four + fiv + six + '\n' + svn + eig + nin);
};


var reset = function () {
  count = 1;
  array[0][0] = 1;
  array[0][1] = 2;
  array[0][2] = 3;
  array[1][0] = 4;
  array[1][1] = 5;
  array[1][2] = 6;
  array[2][0] = 7;
  array[2][1] = 8;
  array[2][2] = 9;

  var newG = prompt("Would you like to play again? y or n?");
    if (newG == 'y') {
      greeting();
      addX();
    }else if (newG == 'n') {
      alert("Thank you for playing Tic-Tac-Toe!");
      console.log("Thank you for playing Tic-Tac-Toe!");
      break;
    }else {
      reset();
    }
};

var checkWinner = function () {
    if (one == 'x' && two == 'x' && thr == 'x') {
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(four == 'x' && fiv == 'x' && six == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(svn == 'x' && eig == 'x' && nin == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(one == 'x' && four == 'x' && svn == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(two == 'x' && fiv == 'x' && eig == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(thr == 'x' && six == 'x' && nin == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(one == 'x' && fiv == 'x' && nin == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if(svn == 'x' && fiv == 'x' && thr == 'x'){
      alert ("Player X WINS on turn " + count + "!!");
      reset();
    } else if (one == 'o' && two == 'o' && thr == 'o') {
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(four == 'o' && fiv == 'o' && six == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(svn == 'o' && eig == 'o' && nin == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(one == 'o' && four == 'o' && svn == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(two == 'o' && fiv == 'o' && eig == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(thr == 'o' && six == 'o' && nin == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(one == 'o' && fiv == 'o' && nin == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if(svn == 'o' && fiv == 'o' && thr == 'o'){
      alert ("Player O WINS on turn " + count + "!!");
      reset();
    } else if (count = 10) {
      alert ("Cat's Game! \nNeither X, nor O wins! \nBetter luck next game!");
      reset();
    }
};

var addX = function () {
  var inputX = prompt("Player X, \nplease select an available number \nto place your x on the board!");
    if (!(inputX > 0 && inputX < 10)){
      console.error("Invalid selection. Please choose a number between 1 and 9");
      addX();
    }/* else if (inputX == 'o' || inputX == 'x'){
      addX();
    } */else {
      if (inputX == 1 && one !== 'o') {
        one = 'x';
      } else if (inputX == 2 && two !== 'o'){
        two = 'x';
      }else if (inputX == 3 && thr !== 'o') {
        thr = 'x';
      }else if (inputX == 4 && four !== 'o') {
        four = 'x';
      }else if (inputX == 5 && fiv !== 'o') {
        fiv = 'x';
      }else if (inputX == 6 && six !== 'o') {
        six = 'x';
      }else if (inputX == 7 && svn !== 'o') {
        svn = 'x';
      }else if (inputX == 8 && eig !== 'o') {
        eig = 'x';
      }else if (inputX == 9 && nin !== 'o') {
        nin = 'x';
      }else {

    }
    checkWinner();
    count++;
    board();
    addO();
  }
};

var addO = function () {
  var inputO = prompt("Player O, \nplease select an available number \nto place your o on the board!");
      if (!(inputO > 0 && inputO < 10)){
        console.error("Invalid selection. Please choose a number between 1 and 9");
        addO();
      }/* else if (inputO == 'o' || inputO == 'x'){
        addO();
      } */else {
        if (inputO == 1 && one !== 'x') {
          one = 'o';
        } else if (inputO == 2 && two !== 'x'){
          two = 'o';
        }else if (inputO == 3 && thr !== 'x') {
          thr = 'o';
        }else if (inputO == 4 && four !== 'x') {
          four = 'o';
        }else if (inputO == 5 && fiv !== 'x') {
          fiv = 'o';
        }else if (inputO == 6 && six !== 'x') {
          six = 'o';
        }else if (inputO == 7 && svn !== 'x') {
          svn = 'o';
        }else if (inputO == 8 && eig !== 'x') {
          eig = 'o';
        }else if (inputO == 9 && nin !== 'x') {
          nin = 'o';
        }else {

        }
        checkWinner();
        count++;
        board();
        addX();
      }
};
console.log('working');
greeting();
addX();
