let cnv = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');
let radius = 10;
let x = cnv.width/2;
let y = cnv.height - 30;

let dx = 2;
let dy = 2

let paddleHeight = 12;
let paddleWidth = 72

let paddleX = (canvas.width-paddleWidth)/2

let rightPressed=false;
let leftPressed=false;

let brickRowCount=4;
let brickColumnCount=7;
let brickWidth=72;
let brickHeight =24
let brickPadding=12;
let brickOffsetTop=32
let brickOffsetLeft=32

let score = 0

// create a container for the bricks

let bricks = []
for (c=0;c<brickColumnCount; c++){
    bricks[c] = [];
    for (r=0;r<brickRowCount;r++){
        bricks[c][r] = {x:0, y:0, status:1};
    }
}

document.addEventListener('keydown' keyDownHandler, false);
document.addEventListener('keyup' keyUpHandler, false);
document.addEventListener('mousemove' mouseMoveHandler, false);

function keyDownHandler(e){
    if(e.keyCode === 39){
        rightPressed = true;
    }
    else if(e.keyCode === 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode === 39){
        rightPressed = false;
    }
    else if(e.keyCode === 37){
        leftPressed = false;
    }
}

function mouseMoveHandler(e){
    var relX = e.clientX = canvas.offsetLeft;
    if(relX > 0 && relX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function drawBricks(){
    for(c=0;c<brickColumnCount; c++){
        for(r=0; r<brickRowCount; r++){
            if(bricks[c][r].status === 1){
                let brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x=brickX;
                bricks[c][r].y=brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY,brickWidth,brickHeight);
                ctx.fillStyle = '#6600cc';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawPaddle(){}

function drawScore(){}

function collisionDetection(){}

function draw(){}


setInterval(draw, 10)