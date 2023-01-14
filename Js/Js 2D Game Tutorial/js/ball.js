import { canvas, ctx } from './canvas.js';
import { gameOver } from './score.js';
import { paddleX, paddleWidth, paddleHeight } from './paddle.js';

export { x, y, dx, dy, drawBall, checkColision, updateX, updateY, updateDX, updateDY };

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function checkColision() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            gameOver();
        }
    }
}

function updateX(newX) {
    x = newX;
}

function updateY(newY) {
    y = newY;
}

function updateDX(newDX) {
    dx = newDX;
}

function updateDY(newDY) {
    dy = newDY;
}