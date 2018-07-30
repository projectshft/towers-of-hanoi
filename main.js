// tic-tac-toe game started 7/27/2018 by Carrington

var board = [["1","2","3"],
            ["4","5","6"],
            ["7","8","9"]];

//player 1 will use x
var count = 1;

var player1 = function () {
  var name1 = prompt("Player 1, please enter your name");
  alert("Welcome " + name1);
  return name1;
};

// player 2 will use o
var player2 = function () {
  var name2 = prompt("Player 2, please enter your name");
  alert("Welcome " + name2);
  return name2;
};



function print(x){
  y = x.join('');
  var realBoard = y.toString();
  console.log(realBoard)
  return realBoard;
};


//the cleared board function
function set(){

  console.clear();
  console.log("new board");
  var z = "";

  for(i=0; i < 3; i++){
    if("x" === board[0][i]){
    z = board[0].indexOf("x")+1;
    board[0].splice(board[0].indexOf("x"),1,z);
    }
    else if("o" === board[0][i]){
    z = board[0].indexOf("o")+1;
    board[0].splice(board[0].indexOf("o"),1,z);
    }
  }

  for(i=0; i < 3; i++){
    if("x" === board[1][i]){
    z = board[1].indexOf("x")+4;
    board[1].splice(board[1].indexOf("x"),1,z);
    }
    else if("o" === board[1][i]){
    z = board[1].indexOf("o")+4;
    board[1].splice(board[1].indexOf("o"),1,z);
    }
  };

  for(i=0; i < 3; i++){
    if("x" === board[2][i]){
    z = board[2].indexOf("x")+7;
    board[2].splice(board[2].indexOf("x"),1,z);
    }
    else if("o" === board[2][i]){
    z = board[2].indexOf("o")+7;
    board[2].splice(board[2].indexOf("o"),1,z);
    }
  }
  print(board[0]);
  print(board[1]);
  print(board[2]);
}
// start of play function

// first player's turn
function play1(y){

  console.clear();
  console.log(" is playing");
  console.log(y);
  var f = y;
  var s = y;
  var t = y;

  //first array
  if (f!=1 && f!=2 && f!=3){
    print(board[0]);
  }
  else if(y<=3){
    if(board[0].includes(f.toString())===true){
      for(i=0; i < board[0].length; i++){
        if(y == board[0][i]){
          board[0].splice(parseInt(board[0][i])-1,1,"x");
          print(board[0]);
        }
      }
    }
    else if(board[0].includes(f.toString())===false){
      print(board[0]);
    }
  };
  //second array
  if (s!=4 && s!=5 && s!=6){
    print(board[1]);
  }
  else if(s==4 || s==5 || s==6){
    if(board[1].includes(s.toString())===true){
      for(i=0; i < board[1].length; i++){
        if(y == board[1][i]){
          board[1].splice(parseInt(board[1][i])-4,1,"x");
          print(board[1]);
        }
      }
    }
    else if(board[1].includes(s.toString())===false){
      print(board[1]);
    }
  };
  //third array
  if(t!=7 && t!=8 && t!=9){
    print(board[2]);
  }
  else if (t>6){
    if(board[2].includes(t.toString())===true){
      for(i=0; i < board[2].length; i++){
        if(y == board[2][i]){
          board[2].splice(parseInt(board[2][i])-7,1,"x");
          print(board[2]);
        }
      };
    }
    else if(board[2].includes(t.toString())===false){
      print(board[2]);
    }
  };
};
//second players turn
function play2(y){
  console.clear();
  console.log(" is playing");
  console.log(y);
  var f = y;
  var s = y;
  var t = y;
  //first array
  if (f!=1 && f!=2 && f!=3){
    print(board[0]);
  }
  else if(y<=3){
    if(board[0].includes(f.toString())===true){
      for(i=0; i < board[0].length; i++){
        if(y == board[0][i]){
          board[0].splice(parseInt(board[0][i])-1,1,"o");
          print(board[0]);
        }
      }
    }
    else if(board[0].includes(f.toString())===false){
      print(board[0]);
    }
  };
  //second array
  if (s!=4 && s!=5 && s!=6){
    print(board[1]);
  }
  else if(s==4 || s==5 || s==6){
    if(board[1].includes(s.toString())===true){
      for(i=0; i < board[1].length; i++){
        if(y == board[1][i]){
          board[1].splice(parseInt(board[1][i])-4,1,"o");
          print(board[1]);
        }
      }
    }
    else if(board[1].includes(s.toString())===false){
      print(board[1]);
    }
  };
  //third array
  if(t!=7 && t!=8 && t!=9){
    print(board[2]);
  }
  else if (t>6){
    if(board[2].includes(t.toString())===true){
      for(i=0; i < board[2].length; i++){
        if(y == board[2][i]){
          board[2].splice(parseInt(board[2][i])-7,1,"o");
          print(board[2]);
        }
      };
    }
    else if(board[2].includes(t.toString())===false){
      print(board[2]);
    }
  };
};
// starting the game
function startGame(){
  set();

  alert(player1() + " will be X, and "+player2() +" will be O");

  alert("Lets Get started.");

  var k=0;

  for (j=0; j<5; j++){

    k+=1;
    console.log("turn " + k)
    turn1();
    if (true === checkWinner()){
      break;
    };
    k+=1
    console.log("turn " + k);
    turn2();
    if (true === checkWinner()){
      break;
    };
    if (k === 9){
      console.log("Game ends in a tie.")
      break;
    };
  };
  alert("To play again type 'startGame()' or simply refresh the page'");
};
//the turn function

function turn1(){

/* I try to get it to work where players have to put in a number
between 1 and 9 or it kicks back but i couldn't
git it work. it always says it wrong up front then takes it after.
 */
  alert("player 1 your move");
  move = prompt(
    "Type the number of the spot you want between 1 and 9"
     )
  if (move !== 1 || move !== 2 ||
     move !== 3 || move !== 4 ||
     move !== 5 || move !== 6 ||
     move !== 7 || move !== 8 ||
     move !== 9){
       var correct=true
       while(correct===true){
       move = prompt("You did not pick a number between 1 and 9,please try again"
       );
       if (move===null) break;
       if (move == 1 || move == 2 ||
          move == 3 || move == 4 ||
          move == 5 || move == 6 ||
          move == 7 || move == 8 ||
          move == 9){ correct=false
       }
     }
     play1(move);
  }
  else{
    play1(move);
  }
  console.log("player 1 chose "+ move);
};

function turn2(){
/* I didn't change turn2 like i did turn1 becuase i didn't get it to work
*/
  alert("player 2 your move");
  move = prompt(
    "Type the number of the spot you want between 1 and 9"
    );
  play2(move);

  console.log("player 2 chose " + move);
};

function checkWinner(){
  var win=false
  //condition 1
  if (
      board[0][0]=== "o" &&
      board[0][1]=== "o" &&
      board[0][2]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 2
  else if (
      board[1][0]=== "o" &&
      board[1][1]=== "o" &&
      board[1][2]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 3
  else if (
      board[2][0]=== "o" &&
      board[2][1]=== "o" &&
      board[2][2]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 4
  else if (
      board[0][0]=== "o" &&
      board[1][0]=== "o" &&
      board[2][0]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 5
  else if (
      board[0][1]=== "o" &&
      board[1][1]=== "o" &&
      board[2][1]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 6
  else if (
      board[0][2]=== "o" &&
      board[1][2]=== "o" &&
      board[2][2]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 7
  else if (
      board[0][0]=== "o" &&
      board[1][1]=== "o" &&
      board[2][2]=== "o")
      {console.log("player 2 wins")
      win=true
      return win
      }
  //condition 8
  else if (
      board[0][2]=== "o" &&
      board[1][1]=== "o" &&
      board[2][0]=== "o")
      {console.log("player 2 wins")
      win=true
      return win;
      }
  //condition 9
  else if (
      board[0][0]=== "x" &&
      board[0][1]=== "x" &&
      board[0][2]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 10
  else if (
      board[1][0]=== "x" &&
      board[1][1]=== "x" &&
      board[1][2]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 11
  else if (
      board[2][0]=== "x" &&
      board[2][1]=== "x" &&
      board[2][2]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 12
  else if (
      board[0][0]=== "x" &&
      board[1][0]=== "x" &&
      board[2][0]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 13
  else if (
      board[0][1]=== "x" &&
      board[1][1]=== "x" &&
      board[2][1]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 14
  else if (
      board[0][2]=== "x" &&
      board[1][2]=== "x" &&
      board[2][2]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
  //condition 15
  else if (
      board[0][0]=== "x" &&
      board[1][1]=== "x" &&
      board[2][2]=== "x")
      {console.log("player 1 wins")
      win=true
      return win
      }
  //condition 16
  else if (
      board[0][2]=== "x" &&
      board[1][1]=== "x" &&
      board[2][0]=== "x")
      {console.log("player 1 wins")
      win=true
      return win;
      }
};




//tests

//play(1);
//play(2);
//play(3);
//play(4);
//play(5);
//play(6);
//play(7);
//play(8);
//play(9);
//set();

startGame();
//checkWinner();


console.log("program finished");

//this is the first time I saved
//this is the second time i saved
