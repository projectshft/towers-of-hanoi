$(document).ready(function() {

$("#start").click(function() {
  $('#gameBoard').empty()
  var pegs = $("#pegStart").val();
  var blocks = $("#blockStart").val()
  game.newGame(pegs, blocks);
  for (var i = 1; i <= pegs; i++) {
    $("#gameBoard").append("<div class='peg' id='peg" + i + "'>Peg" + i + "</div>");
    for (var j = blocks; j >= 1; j--) {
      if (i == 1) {
        $('.peg').prepend("<div class='block' id='block" + j +"'>" + j + "</div>");
      }
    }
  }
  $('#controls').show();
});
$('#moveButton').click(function(){
  var sPeg = $('#startPeg').val();
  // console.log(sPeg)
  var ePeg = $('#endPeg').val();
   if(game.moveBlock(sPeg,ePeg)){
     $('#peg'+[sPeg]).find(':first').prependTo('#peg'+[ePeg])
   }
});
$('#solver').click(function(){
  var pegs = $("#pegStart").val();
  game.solve(pegs);
})
});
