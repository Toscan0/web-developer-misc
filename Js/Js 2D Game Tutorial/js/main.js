import { initializeBricks, drawBricks, collisionDetection } from './bricks.js';
import { canvas, clearCanvas } from './canvas.js';
import { x, y, dx, dy, drawBall, checkColision, updateX, updateY } from './ball.js';
import { drawPaddle, paddleX, updatePaddleX, paddleWidth } from './paddle.js';
import { drawScore, drawLives } from './score.js';
import { rightPressed, leftPressed, eventListener } from './user-input.js';

initializeBricks();
eventListener();

function handleUserInput() {
    if (rightPressed) {
        updatePaddleX(paddleX + 7);
        if (paddleX + paddleWidth > canvas.width) {
            updatePaddleX(canvas.width - paddleWidth);
        }
    }
    else if (leftPressed) {
        updatePaddleX(paddleX - 7);
        if (paddleX < 0) {
            updatePaddleX(0);
        }
    }
}



function draw() {
    clearCanvas();

    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    checkColision();
    handleUserInput();
    updateX(x + dx);
    updateY(y + dy);
    requestAnimationFrame(draw);
}


draw();