//create a board and return an object that provides access to methods while keeping the board itself private
var Board = function(numPegs, numDiscs) {
  //initialize winning total, move counter, and the board array of arrays, which is a private variable.
  var board = [];
  var winTotal = 0;
  var moves = 0;
  //this holds the disc objects so we can access and update their positions later in three.js
  var discPosArr = [];
  //start a new game by taking in an array with [pegs,discs]. This can either be set to certain numbers (for Jasmine testing purposes),
  //or can take user input with the getUserInputForNewGame function
  var newGame = (pegDiscArr => {
    //start with an empty board and cleared move counter
    board = [];
    var pegs = pegDiscArr[0];
    var discs = pegDiscArr[1];
    moves = 0;
    $('#move-counter').html("Moves: " + moves);
    //build the board of empty pegs first
    for (var i = 0; i < pegs; i++) {
      board.push([]);
    }
    //build the disc stack on the left peg
    for (var j = 1; j <= discs; j++) {
      board[0].unshift(j.toString());
    }
    //calculate the winning total (sum of all disc values)
    winTotal = board[0].reduce((accum, disc) => {
      accum += Number(disc);
      return accum;
    }, 0);

    //empty the three.js scene of any objects from the previous game
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    //empty the array of disc objects from previous games
    discPosArr = [];
    //generate the inital disc stack and peg objects
    var discPos;
    board.forEach(peg => {
      for (var disc = peg.length; disc > 0; disc--) {
        discPos = generateDisc(board.indexOf(peg) * 200 - 500, 0, disc * 100 - 250, peg[disc - 1] * 20, peg[disc - 1] * 5);
        discPosArr.push(discPos);
      }
      //generate the peg heights based on the number of discs
      generatePeg(board.indexOf(peg) * 200 - 500, 0, 0,board[0].length*100+50);
    })
    //print & render both displays
    printBoard();
  });

  //this returns an array to input into newGame with [pegs,discs] coming from user prompts
  var getUserInputForNewGame = (() => {
    var pegDiscArr = [];
    var pegs = 0;
    var discs = 0;
    //handle erroneous input for users until you get a number of pegs and discs in the desired range
    do {
      pegs = Number(Math.round(Number(prompt("How many pegs would you like? Must be a whole number between 3 and 7"))));
    } while (pegs < 3 || pegs > 7);
    do {
      discs = Number(Math.round(Number(prompt("How many discs would you like? Must be a whole number between 2 and 5"))));
    } while (discs < 2 || discs > 5);
    //build the array to return to the newGame function as [pegs,discs]
    pegDiscArr.push(pegs);
    pegDiscArr.push(discs);
    return pegDiscArr;
  });

  //ensures that the user input peg exists on the board
  var checkPegValidity = (peg => {
    //handle if the user input is something other than a number
    if (!peg) {
      $('#alert-label').text("Your peg was not a number");
      return false;
    }
    //handle if the peg is out of range
    if (peg > board.length || peg < 1) {
      $('#alert-label').text("Your peg is out of range, must be between 1 and " + board.length);
      return false;
    } else {
      return true;
    }
  });

  //uses filter to return  an array of the valid moves
  var possibleMoves = (peg => {
    var pegIndex = peg - 1;
    var correctPegs = [];
    //make sure peg is in the valid range and that there are discs there
    if (!checkPegValidity(peg)) {
      //these label updates are handled in the validity function
    } else if (board[pegIndex].length === 0) {
      $('#alert-label').text("There are no discs on your starting peg");
    } else {
      //if we have a valid peg with discs then get the top disc from the stack
      var disc = board[pegIndex][board[pegIndex].length - 1];
      //form an array of the peg numbers from the indices
      var pegMap = board.map(peg => board.indexOf(peg) + 1);
      //filter that peg list down to the ones which are valid (empty pegs or where the top disc # is larger than the moving disc)
      correctPegs = pegMap.filter(pegToCheck => {
        if (pegMap.indexOf(pegToCheck) !== pegIndex) {
          return (board[pegToCheck - 1].length <= 0 || disc < board[pegToCheck - 1]);
        } else {
          return false;
        }
      })
    }
    return correctPegs;
  })

  // reduces to see if player has won the game by comparing the total of all discs to the total on each peg
  var checkWinner = (() => {
    var pegWinner = board.find(peg => {
      return (peg.reduce((accum, disc) => {
          accum += Number(disc);
          return accum;
        }, 0) ===
        winTotal)
    });
    // if the winning peg exists and is not the first peg at index 0, then the player wins
    if (board.indexOf(pegWinner) > 0) {
      alert("Nice work, you have won the game! It took " + moves + " moves. You can now reset the board.");
      return true;
    } else {
      return false;
    }
  });

  //moves a disc from the starting peg to ending peg
  var moveDisc = ((startPeg, endPeg) => {
    //verify that both pegs are valid
    if (checkPegValidity(startPeg) && checkPegValidity(endPeg)) {
      //if the end peg is within the possible moves, then make the move
      if (possibleMoves(startPeg).indexOf(endPeg) > -1) {
        //first update the position of the moving disc on the 3-D display before changing the board array
        var discToMove = board[startPeg - 1][board[startPeg - 1].length - 1] - 1;
        discPosArr[discToMove].position.x = (endPeg - 1) * 200 - 500;
        //then change the board
        board[endPeg - 1].push(board[startPeg - 1].pop());
        //update the move counter, ask for the next move, & print the board
        moves++;
        $('#move-counter').html("Moves: " + moves);
        $('#alert-label').text("Next move?");
        printBoard();
        // check each time to see if the player has won, then start a new game if they have
        if (checkWinner()) {
          newGame(getUserInputForNewGame());
        };
        //return a boolean value showing if move was made or not for testing purposes
        return true;
      }
    }
    //autofocus on the starting peg input text box
    $('#startpeg').focus();
    return false;
  });

  //the board prints in the console with a map function (per the requirements). It also prints in 2D HTML and in 3-D w/three.js & WebGL
  var printBoard = (() => {
    //print in console
    board.map(peg => {
     console.log(peg.reduce((pegString, disc) => {
       pegString += disc + " ";
       return pegString;
     }, "--- "));
   })
   //empty strings for html
    var boardStr = "";
    var pegStr = "";
    //create the html to display the board by creating each disc <p> tag inside each peg's <div> tag
    board.forEach(peg => {
      for (var disc = peg.length; disc > 0; disc--) {
        pegStr += '<p class = "disc" id=disc-' + peg[disc - 1] + '>' + peg[disc - 1] + '</p>';
      }
      boardStr += '<div class = "peg-width"><div class = "peg">' + pegStr + '</div></div>';
      pegStr = "";
    })
    //place the html inside the .row div and adjust the div width to accomodate the pegs
    $(".row").html(boardStr);
    $(".peg-width").css("width", 100 / board.length + "%");
    $('#startpeg').focus();
    //3-D positions have already been updated prior to board changing, so just re-render it here to print
    render();
  })
  //this returns from the Board - these are the public methods to allow the user to play the game or to use the new game button to get user input
  return {
    moveDisc: moveDisc,
    newGame: newGame,
    getUserInputForNewGame: getUserInputForNewGame
  }
}

//initialize the three.js scene
init();
//initializes the board & starts a new game
var board = Board();
board.newGame(board.getUserInputForNewGame());
//call the initial render and animate for the 3-D display
render();
animate();

//click listeners for the buttons
$("#mover").click(function() {
  var startPeg = Number($("#startpeg").val());
  var endPeg = Number($("#endpeg").val());
  board.moveDisc(startPeg, endPeg);
  //empty the text inputs
  $("#startpeg").val("");
  $("#endpeg").val("");
});

$("#newgame").click(function() {
  board.newGame(board.getUserInputForNewGame());
});

//3-D graphics prep from three.js
var camera, scene, renderer;

//generate a new box geometry as a peg
function generatePeg(xPos, yPos, zPos, height) {
  var object;
  var material = new THREE.MeshBasicMaterial({
    color: 0x0088ff
  })
  object = new THREE.Mesh(new THREE.BoxGeometry(20, 20, height), material);
  object.position.set(xPos, yPos, zPos);
  scene.add(object);
}

//generate a new torus geometry for the discs
function generateDisc(xPos, yPos, zPos, outerRad, innerRad) {
  var object;
  var material = new THREE.MeshBasicMaterial({
    color: 0x0000ff
  })
  object = new THREE.Mesh(new THREE.TorusGeometry(outerRad, innerRad, 16, 100), material);
  object.position.set(xPos, yPos, zPos);
  scene.add(object);
  return object;
}

//initialize the camera, lighting , and renderer
function init() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.y = -800;
  camera.position.z = 550;
  scene = new THREE.Scene();
  var ambientLight = new THREE.AmbientLight(0x0000ff, 0.8);
  scene.add(ambientLight);
  var pointLight = new THREE.PointLight(0xff0000, 0.8);
  camera.add(pointLight);
  scene.add(camera);
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  $("#scene-holder").append(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);
}

//adjust if the window is resized
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.lookAt(scene.position);
  scene.traverse(function(object) {
  renderer.render(scene, camera);
  })
}
