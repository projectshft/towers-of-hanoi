class Board {
  constructor(){
    this.board =
    [[1,2,3],
    [4,5,6],
    [7,8,9]];
    this.available=[1,2,3,4,5,6,7,8,9];
    this.ready = false;
  }
  addPlayer(player){
    if(this.player1===undefined){
      this.player1=player;
      this.player1.setTurn(true);
    }
    else if(this.player2===undefined){
      this.player2=player;
      this.player2.setTurn(false);
      this.ready = true;
      this.print();
    }
    else{
      console.log("May only have two players");
    }
  }
  get checkWin(){
    for(var i=0;i<3;i++){
      if(this.board[0][i]==this.board[1][i] && this.board[1][i]==this.board[2][i]){
        return true;
      }
      if(this.board[i][0]==this.board[i][1] && this.board[i][1]==this.board[i][2]){
        return true;
      }
    }
    if(this.board[0][0]==this.board[1][1] && this.board[1][1]==this.board[2][2]){
      return true;
    }
    if(this.board[2][0]==this.board[1][1] && this.board[1][1]==this.board[0][2]){
      return true;
    }
    if(this.available.length==0){
      return "tie";
    }
    return false;
  }
  update(n, symbol){
    if(!this.ready){
      console.log("Please add players");
    }
    else if(this.available.indexOf(n)==-1){
      console.log("Position "+n+" is not available. Choose another option.");
    }
    else{
      switch(n){
        case 1:
          this.board[0][0]=symbol;
          break;
        case 2:
          this.board[0][1]=symbol;
          break;
        case 3:
          this.board[0][2]=symbol;
          break;
        case 4:
          this.board[1][0]=symbol;
          break;
        case 5:
          this.board[1][1]=symbol;
          break;
        case 6:
          this.board[1][2]=symbol;
          break;
        case 7:
          this.board[2][0]=symbol;
          break;
        case 8:
          this.board[2][1]=symbol;
          break;
        case 9:
          this.board[2][2]=symbol;
          break;
        default:
          console.log("Please choose a position between 1 and 9");
          break;
      }
      this.print();
      this.available =this.available.filter(num => num !=n);
      //console.log(this.available);
      if(this.player1.turn){
        this.player1.setTurn(false);
        this.player2.setTurn(true);
      }
      else{
        this.player1.setTurn(true);
        this.player2.setTurn(false);
      }
    }
  }
  reset(){
    this.board =
      [[1,2,3],
      [4,5,6],
      [7,8,9]];
    this.available=[1,2,3,4,5,6,7,8,9];
    this.ready = false;
    this.player1 = undefined;
    this.player2 = undefined;
  }
  print(){
    for(var i=0;i<3;i++){
      var row ="";
      for(var j=0;j<3;j++){
        row+=this.board[i][j];
      }
      console.log(row);
    }
    console.log("");
  }
}

class Player {
  constructor(name, symbol, board){
    this.name=name;
    this.symbol=symbol;
    this.board = board;
    this.board.addPlayer(this);
  }
  setTurn(turn){
    this.turn=turn;
  }
  move(n){
    if(this.turn){
      this.board.update(n, this.symbol);
      //console.log(this.board.checkWin);
      if(this.board.checkWin=="tie"){
        console.log("This game was a tie!");
        this.board.reset();
      }
      else if(this.board.checkWin){
        console.log("Congratulations "+this.name+"! You are the winner");
        this.board.reset();
      }
    }
    else{
      console.log("Wait your turn!");
    }
  }
}

class RandomComputer extends Player{
  constructor(name, symbol, board){
    super(name, symbol, board);
  }
  move(){
    var pos = Math.floor(Math.random()*this.board.available.length);
    //console.log(pos);
    super.move(this.board.available[pos]);
  }
}

var myBoard = new Board();
myBoard.print();
