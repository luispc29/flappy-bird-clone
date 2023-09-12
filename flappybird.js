// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird

let birdWidth = 34; // width/height ratio = 408/228 = 17/12
let birdtHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdtHeight,
};

// pipes
let pipeArray = [];
let pipeWidth = 64; //widht/height ratio =  384/3072 = 1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//game physics
let velocityX = -2; // pipes moving left speed

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //used for drawing on the board

  //draw flappy bird
  //   context.fillStyle = "green";
  //   context.fillRect(bird.x, bird.y, bird.width, bird.height);

  //load image
  birdImg = new Image();
  birdImg.src = "./flappybird.png";
  birdImg.onload = function () {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  topPipeImg = new Image();
  topPipeImg.src = "./toppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "./bottompipe.png";

  requestAnimationFrame(update);
  setInterval(placePipes, 1500); // every 1.5 seconds
};

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, boardWidth, boardHeight);

  // bird
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  //pipes
  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.widht, pipe.height);
  }
}

function placePipes() {

    //(0-1) * pipeHeight/2.
    //0 -> -128 (pipeHeight/4)
    //1 -> -128 -256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
  let randomPipeY = pipeY - pipeHeight/4 - Math.random()*pipeHeight/2;

  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    widht: pipeWidth,
    height: pipeHeight,
    passed: false,
  };

  pipeArray.push(topPipe);
}
