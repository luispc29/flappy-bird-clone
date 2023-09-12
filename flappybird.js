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
};
