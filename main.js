var player1Name="" , player2Name="", turn = "";
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount=0;
//the above variable sets empty variables essential for game logic.

$(document).ready(function () {
function boardMsg(x){
    return $("#board").text(x);
}

function setTurn(){
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner=0;
    if(r==1){
        turn = player1Name;
        boardMsg(player1Name+"'s turn now!");
    }
    else{
        turn = player2Name;
        boardMsg(player2Name+"'s turn now!");
    }
}
//the above function randomized which player goes first, which goes second.

function init(){
    turn = "";
    grid =  [[0,0,0],[0,0,0],[0,0,0]];
    boardMsg("");
    $(".col").map(function() {
        $(this).text("");
    }).get();
    hasWinner = 0;
    moveCount=0;
}
//this function maps out the inital board.

$("#playButton").click(function (){
    if(hasWinner==1){
        init();
    }
    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }
    setTurn();
});
//the above function ensures players enter their names before staring the game.

$(".col").click(function (){

    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }

    var row = $(this).parent().index();
    var col = $(this).index();

    if(grid[row][col]!==0){
        alert("This position is taken. Please try other position.");
        return;
    }
    if(hasWinner==1){
        alert("Please click play again");
        return;
    }
//again, safe-guards to make sure users always click empty spaces.

    if(turn==player1Name){
        moveCount++;
        $(this).text("O");
        grid[row][col] = 1;
        var ifWon = winnerCheck(1,player1Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            }else{
                turn = player2Name;
                boardMsg(player2Name+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
    //logic if there is a tie and logic for ordering next play to play.

    else if(turn==player2Name){
        moveCount++;
        $(this).text("X");
        grid[row][col] = 2;
        var ifWon = winnerCheck(2,player2Name);
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            } else{
                turn = player1Name;
                boardMsg(player1Name+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
});

function winnerCheck(n,playerName){
    if(

        (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
        (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
        (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
        (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
        (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
        (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)


        ){
        boardMsg(playerName+" won the game!");
        hasWinner = 1;
        moveCount=0;
        $("#playButton").text("Play again");
        return true;
    }
    return false;
    //winning conditions and results if a player meets these conditions.
}
});