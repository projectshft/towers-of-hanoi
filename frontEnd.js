/**
* 
* Tower of Hanoi evaluation from Project Shift
* Author: Daniel Posse
*
* Using canvas and mdn tutorial layout
* 
*/

//board is 2d array
let draw = (board) => {

  const canvas = document.getElementById('towers');
  const context = canvas.getContext('2d');

  const bottom = canvas.height * 0.9;
  const top = canvas.height * 0.5;

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
  context.moveTo(150,bottom);
  context.lineTo(150,top);
  context.moveTo(400,bottom);
  context.lineTo(400,top);
  context.moveTo(650,bottom);
  context.lineTo(650,top);
  context.stroke();

  //create discs
  //size will be number of disc, i.e. 1-n
  let Disc = (x, y, size) => {

    context.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
    context.fillRect(x,y,size*30,30);

  };

  //test disc
  //let disc1 = Disc(10,10,1);

  const discRectanglesArray = [];
  for (let i=board[0].length; i>0; i--) {
    //leaving at +2 for now so you can see discs more clearly
    
    let x = 0;
    let y = bottom-(30*(board[0].length-i+2));
    discRectanglesArray.push(Disc(x,y,i));

  }

  // for(let i=0; i<pegs; i++) {

  //   context.moveTo( ((canvas.width/pegs)*(i+1))/(pegs-i) , canvas.height*.9);
  //   context.lineTo( (canvas.width/pegs) , 0);
  //   context.stroke();

  // } //end for


};

