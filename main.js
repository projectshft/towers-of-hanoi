// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.

var towerObj = { 
   pegs: [[5, 4, 3, 2, 1], [], []],
   plays: 0,
   originalBoard: null,

 moveDisc: function (startPeg, endPeg) {
     if(this.plays === 0) {
         this.originalBoard = this.createOriginalBoard();
     }
     var startPegArr = towerObj.pegs[startPeg];  
     var endPegArr = this.pegs[endPeg];

     var startPegDisc = startPegArr[startPegArr.length -1];
     var endPegDisc = endPegArr[endPegArr.length -1];

     if (startPegDisc > endPegDisc || startPegDisc === undefined) {
         console.log('That move is not permitted');
     } else {
         startPegArr.splice(startPegArr.length -1, 1); 
        endPegArr.push(startPegDisc);
    }
    this.plays += 1
    this.printPlays();
   this.printBoard();
   this.checkWinner(); 
    },
    checkWinner: function() {
        const originalPegsLength = this.originalBoard[0].length;
        const currentPegsLength = this.pegs[this.pegs.length - 1].length;
        if (originalPegsLength === currentPegsLength) {
            console.log('Winner, Winner, Chicken Dinner');
            this.resetBoard();
        }
    },
createOriginalBoard: function () {
    return this.pegs.map(function(peg) {
      return peg.map(function(disc) {
          return disc;
      })  
    });
},
resetBoard: function() {
    this.pegs = [...this.originalBoard];
},
    
printBoard: function () {
        var printedBoard = this.pegs.map(function(peg) {
            return `---${peg.map(function (disc) {
                return ` ${disc}`;
            })}`;
        });
        var loggedBoard = printedBoard.reduce(function(acc, arr) {
            let str = acc;
          return (str += `${arr}\n`);  
        }, '');
        console.log(loggedBoard);
    },
printPlays: function() {
    console.log(`This is play number ${this.plays}`);
}

    };


// checkWinner: function () {
//     if ()
//     }

towerObj.moveDisc(0, 1);
towerObj.moveDisc(0, 1);
towerObj.moveDisc(2, 1);

