// Get DOM elements for input field
var fromValue = document.getElementById('fromPeg input').value; 
var toValue = document.getElementById('toPeg input').value;
var input = document.querySelectorAll('.input').value;
// for the pegs
const peg1 = document.querySelector('.pegOne');
const peg2 = document.querySelector('.pegTwo');
const peg3 = document.querySelector('.pegThree');
const peg1Div = document.querySelector('.pegOneContent')
const peg2Div = document.querySelector('.pegTwoContent')
const peg3Div = document.querySelector('.pegThreeContent')
const goBtn = document.getElementById('go');
const numbers = document.querySelector('.starting-numbers');
const moveMessage = document.querySelector('.move-message');
// for the buttons and modals
const answerBtn = document.getElementById('answer');
const solutionModal = document.querySelector('.solution-modal');
const cheerBtn = document.getElementById('cheer');
const cheerModal = document.querySelector('.cheer-modal');
const closeBtn = document.getElementById('close');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const resetBtn = document.getElementById('reset');
// for the board
const arrays = [[5, 4, 3, 2, 1], [], []]

// Functions
goBtn.addEventListener('click', function (){
  moveMessage.innerHTML = '';
  numbers.innerHTML = '';
  peg1Div.innerHTML = '';
  peg2Div.innerHTML = '';
  peg3Div.innerHTML = '';
  let toArray = arrays[document.getElementById('toPeg input').value - 1];
  let fromArray = arrays[document.getElementById('fromPeg input').value - 1];
  const removedNumber = fromArray.pop();

  // Only move smaller disc on top of bigger one:
  if (`${removedNumber}` < `${toArray[toArray.length-1]}`){
    toArray.push(removedNumber);  

    const div1 = document.createElement('div');  
    div1.style.lineHeight = "40px";
    div1.style.textOrientation = "upright";
    div1.style.writingMode = "vertical-rl";
    div1.innerText = arrays[0].sort(function(a,b){return a-b}).join(' ');
    peg1Div.appendChild(div1);

    const div2 = document.createElement('div');  
    div2.style.lineHeight = "40px";
    div2.style.textOrientation = "upright";
    div2.style.writingMode = "vertical-rl";
    div2.innerText = arrays[1].sort(function(a,b){return a-b}).join(' ');
    peg2Div.appendChild(div2);

    const div3 = document.createElement('div');  
    div3.style.lineHeight = "40px";
    div3.style.textOrientation = "upright";
    div3.style.writingMode = "vertical-rl";
    div3.innerText = arrays[2].sort(function(a,b){return a-b}).join(' ');
    peg3Div.appendChild(div3);

    const message = document.createElement('div');
    message.innerText = `
    Move the disc from peg ${document.getElementById('fromPeg input').value} to ${document.getElementById('toPeg input').value} 
      That move was successful, board is now: 
      --- ${arrays[0].reverse().join(' ')}  
      --- ${arrays[1].reverse().join(' ')}  
      --- ${arrays[2].reverse().join(' ')}      
    `
  ;
  checkWinner();
  moveMessage.appendChild(message)  

  } else {
    fromArray.push(removedNumber);
    const div1 = document.createElement('div');  
    div1.style.lineHeight = "40px";
    div1.style.textOrientation = "upright";
    div1.style.writingMode = "vertical-rl";
    div1.innerText = arrays[0].sort(function(a,b){return a-b}).join(' ');
    peg1Div.appendChild(div1);

    const div2 = document.createElement('div');  
    div2.style.lineHeight = "40px";
    div2.style.textOrientation = "upright";
    div2.style.writingMode = "vertical-rl";
    div2.innerText = arrays[1].sort(function(a,b){return a-b}).join(' ');
    peg2Div.appendChild(div2);

    const div3 = document.createElement('div');  
    div3.style.lineHeight = "40px";
    div3.style.textOrientation = "upright";
    div3.style.writingMode = "vertical-rl";
    div3.innerText = arrays[2].sort(function(a,b){return a-b}).join(' ');
    peg3Div.appendChild(div3);

    const message = document.createElement('div');
    message.innerText = `
      Move the disc from peg ${document.getElementById('fromPeg input').value} to ${document.getElementById('toPeg input').value} 
      You cannot move a larger disc on top of a smaller one, board is still:
      --- ${arrays[0].join(' ')}  
      --- ${arrays[1].join(' ')}  
      --- ${arrays[2].join(' ')}      
  `
  ;
  moveMessage.appendChild(message)
  checkWinner();
  }
});

cheerBtn.addEventListener('click', function(){
  cheerModal.style.display = 'block';
});

const checkWinner = () => {
  if(`${arrays[2]}` == [5, 4, 3, 2, 1] && `${arrays[0]}` == [] && `${arrays[1]} == []`){
    moveMessage.innerHTML = '';
    const winText = document.createElement('div');  
      winText.innerText =  '🥳🥳🥳🥳🥳🥳🥳 Congratulations! That was the last step! You solved the puzzle!'
      winText.style.padding = '10px 5px';
      winText.style.marginTop = '15px';
      winText.style.width = '100%';
      winText.style.backgroundColor = 'white';
      winText.style.border = '2px solid orange';
      winText.style.borderRadius = '10px';
      winText.style.color = 'orangered';
      winText.style.fontSize = '26px';
      moveMessage.appendChild(winText);
    console.log(moveMessage.innerHTML);
  }
}

answerBtn.addEventListener('click', function(){
  solutionModal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
  solutionModal.style.display = 'none';
  cheerModal.style.display = 'none';
});

solutionModal.onclick = event => {
  solutionModal.style.display = "none";
}

addBtn.addEventListener('click', function(){
  numbers.style.display = 'none';
  peg1.innerText = '';
  var startArray = arrays[0]; 
  var newNum = startArray[0] + 1; 
  startArray.unshift(newNum);
  console.log(`new array: ${startArray}`)
  arrays[0].join(' ')  

  const div1 = document.createElement('div');  
    div1.style.lineHeight = "50px";
    div1.style.textOrientation = "upright";
    div1.style.writingMode = "vertical-rl";
    div1.innerText = arrays[0].join('');
    peg1.appendChild(div1);
});


removeBtn.addEventListener('click', function(){
  numbers.style.display = 'none';
  peg1.innerText = '';
  numbers.style.display = 'none';
  var startArray = arrays[0]; 
  var minusNum = startArray[0];
  startArray.shift(minusNum);
  console.log(`new array: ${startArray}`)
  arrays[0].join(' ')  

  const div1 = document.createElement('div');  
    div1.style.lineHeight = "50px";
    div1.style.textOrientation = "upright";
    div1.style.writingMode = "vertical-rl";
    div1.innerText = arrays[0].join(' ');
    peg1.appendChild(div1);
});

resetBtn.addEventListener('click', function(){
  location.reload();
});



