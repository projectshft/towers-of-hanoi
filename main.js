let pegs = [
  {pegNumber: "1" , count: ["5", "4", "3", "2", "1"]},
  {pegNumber: "2" , count: []},
  {pegNumber: "3" , count: []}

];

function moveDiscs() {
}

let checkWinner = function() {

}

let board = pegs.map(function(peg) {
return "--- " + peg.count
})

console.table(board)