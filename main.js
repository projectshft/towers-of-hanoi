var HanoiGame = (pegs, discs) => {
    var attributes = {
      pegs: pegs,
      discs: discs
    };

    if(attributes.pegs < 3 || attributes.discs < 1){
        return null;
    }

    //still not sure if this would actually find a matching books
    //if the book object passed in is a different object than the
    //original added book
    var movePeg = function () {
    }

    return {
        movePeg: movePeg,};
  };

var test = HanoiGame(3,1);
console.log(test);