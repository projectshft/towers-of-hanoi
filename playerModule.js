var PlayerModule = function() {
  //different than win scenario, because order matters here.
  const winCombination = [[1,2,3],[1,3,2],[1,4,7],[1,7,4],[1,5,9],[1,9,5],
                          [2,1,3],[2,3,1],[2,5,8],[2,8,5],[8,5,2],[8,2,5],
                          [3,2,1],[3,1,2],[3,6,9],[3,9,6],[3,5,7],[3,7,5],
                          [4,1,7],[4,7,1],[4,5,6],[4,6,5],[5,3,7],[5,7,3],
                          [5,2,8],[5,8,2],[5,4,6],[5,6,4],[5,1,9],[5,9,1],
                          [6,5,4],[6,4,5],[6,3,9],[6,9,3],[8,7,9],[8,9,7],
                          [7,4,1],[7,1,4],[7,8,9],[7,9,8],[7,5,3],[7,3,5],
                          [9,1,5],[9,5,1],[9,3,6],[9,6,3],[9,5,1],[9,1,5]
                        ];

  //Prevents user from tricking AI into playing default move.
  const blockArray = [[1,8,7],[1,6,3],[3,4,1],[3,8,9],[7,2,1],[7,6,9],[9,2,3],[9,4,7]];

  var attributes = {
    name: "default",
    symbol: "default",
    moved: [],
    firstMove: true
  };


  // Set attributes, but pushes moves to array.
  var setAttribute = function(attribute, value) {
    if(attributes.hasOwnProperty(attribute)){
      if(attribute == "moved") {
        attributes[attribute].push(value);
      } else if (attributes.hasOwnProperty(attribute)) {
        attributes[attribute] = value;
      }
    }
  };

  var getAttribute = function(attribute) {
    if(attributes.hasOwnProperty(attribute)){
      return attributes[attribute];
    }
  };


  // AI move function, 1 or 5 for first move, then checks winning combination.
  var makeChoice = function(humanArray, choiceArray) {

    //First move, either 5 or 1, since there is no deciding choice.
    if (attributes.firstMove === true){
      attributes.firstMove = false;

      if(choiceArray.includes(5)){
        return 5;
      } else {
        return 1;
      }

    } else {
      //Check if AI can win, if yes, return the winning combination,
      for(var i = 0; i < winCombination.length ; i++){
        if(attributes.moved.includes(winCombination[i][0])){
          if(attributes.moved.includes(winCombination[i][1])){
            if(choiceArray.includes(winCombination[i][2])){
              return winCombination[i][2];
            }
          }
        }
      }
      //If AI can't win, it will check to play against opponent;
      for(i = 0; i < winCombination.length ; i++){
        if(humanArray.includes(winCombination[i][0])){
          if(humanArray.includes(winCombination[i][1])){
            if(choiceArray.includes(winCombination[i][2])){
              return winCombination[i][2];
            }
          }
        }
      }

      //if there are no winning combination, return choice that blocks human array
      for(i = 0; i < blockArray.length ; i++){
        if(humanArray.includes(blockArray[i][0])){
          if(humanArray.includes(blockArray[i][1])){
            if(choiceArray.includes(blockArray[i][2])){
              return blockArray[i][2];
            }
          }
        }
      }
    }
    // return choice to force player to block AI if there aren't any winning combo, or indecisive blocking
    if(choiceArray.includes(2)){
      return 2;
    } else {
      return 8;
    }

  };


  return {
    set : setAttribute,
    get : getAttribute,
    auto : makeChoice
  };
};
