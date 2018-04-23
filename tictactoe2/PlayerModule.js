
var board =[
      [1,2,3],
      [4,5,6],
      [7,8,9]
      ];

  //this is the loop that builds the array into a box
      arr=[];

      for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board.length; j++) {
              arr += board[i][j] + ' ';
          }
          console.log(arr);
          arr=[];
      }


var PlayerModule = function() {

  const winnerCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var detail = {
    name: 'hello',
    symbol: 'x',
    movePieces: []
  };

  var set = function(key, value){
      if(key == 'movePieces'){
        detail[key].push(value);
      }
        else if (detail.hasOwnProperty(key)) {
        detail[key] = value;

      }};

  var get = function(key){
    if (detail.hasOwnProperty(key)) {
    return detail[key];
  }};


  return{
    get: get,
    set: set
  };
};
