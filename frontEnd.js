/**
* 
* Tower of Hanoi evaluation from Project Shift
* Author: Daniel Posse
*
* Using canvas and mdn tutorial layout
* 
*/

const discRectanglesArray = [];

//board is 2d array
let draw = (board) => {

  const canvas = document.getElementById('towers');
  const context = canvas.getContext('2d');

  const bottom = canvas.height * 0.9;
  const top = canvas.height * 0.5;
  const discHeight = 30;

  const pegXValues = [150,400,650];

  context.fillStyle = 'black';
  
  //make pegs - default 3
  context.lineWidth = 3;

  context.moveTo(0,bottom);
  context.lineTo(canvas.width,bottom);
  context.stroke();

  /**
   * TODO
   *  make this dynamic, currently only has 3 pegs
   */
  context.lineWidth = 8;
  context.moveTo(pegXValues[0],bottom);
  context.lineTo(pegXValues[0],top);
  context.moveTo(pegXValues[1],bottom);
  context.lineTo(pegXValues[1],top);
  context.moveTo(pegXValues[2],bottom);
  context.lineTo(pegXValues[2],top);
  context.stroke();

  //create discs
  //size will be number of disc, i.e. 1-n
  function Disc(x, y, size) {

    this.x = x;
    this.y = y;
    this.size = size * 30;

  };
  
  const drawDisc = (disc) => {

    context.lineWidth = 1;
    context.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
    context.fillRect(disc.x,disc.y,disc.size,discHeight);
    context.strokeRect(disc.x,disc.y,disc.size,discHeight);

    //this will need to save color and position to move them later

  };

  //test disc
  //let disc1 = Disc(10,10,1);
  for (let i=board[0].length; i>0; i--) {
    //leaving at +2 for now so you can see discs more clearly
    //doing -(i+1) puts bottom disc inside floor, +2 way above floor. -26 at the end puts right on top of floor
    let x = pegXValues[0] - (i*30)/2;
    let y = bottom-(discHeight*(board[0].length-i+2) - 26);
    
    let tempDisc = new Disc(x,y,i);

    discRectanglesArray.push(tempDisc);
    
    drawDisc(tempDisc);

  }

};

