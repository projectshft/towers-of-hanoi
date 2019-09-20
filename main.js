var HanoiGame = (pegs, discs) => {
    var attributes = {
      pegs: pegs,
      discs: discs
    };
    
    var boardArr;

    var buildBoard = () => {
        boardArr = [];
        for(i = 0; i < pegs; i++)
        {
            boardArr.push([]);
            if(i == 0)
            {
                for(j = discs; j > 0; j--)
                {
                    boardArr[i].push(j);
                }
            }
        }
    }

    if(attributes.pegs < 3 || attributes.discs < 1){
        return null;
    }
    else{
        buildBoard(attributes.pegs, attributes.discs);
    }

    //still not sure if this would actually find a matching books
    //if the book object passed in is a different object than the
    //original added book
    var boardView = function () {
        var board = boardArr.map((peg) => { return '--- ' + peg.join(" "); });
        return board.reduce((disp, pegStr) => {
            return disp += pegStr.trimRight() + '\n';
          }, "").trimRight('\n');
    }

    return {
        boardView: boardView,};
  };

var test = HanoiGame(3,1);
var ret = test.boardView();
console.log(test.boardView());