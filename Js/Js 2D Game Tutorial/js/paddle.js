import { updateX } from './ball.js';
import { canvas, ctx } from './canvas.js';

export { drawPaddle, updatePaddleX, paddleX, paddleWidth, paddleHeight };

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function updatePaddleX(newVal) {
    paddleX = newVal;
}