import { canvas, ctx } from './canvas.js';
import { paddleX, updatePaddleX, paddleWidth } from './paddle.js';
import { updateX, updateY, updateDX, updateDY } from './ball.js';

export { drawScore, drawLives, gameOver, setScore, score };

var score = 0;

var lives = 3;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function gameOver() {
    lives--;
    if (!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else {
        updateX( canvas.width / 2 );
        updateY( canvas.height - 30 );
        updateDX(2);
        updateDY(-2);
        updatePaddleX( (canvas.width - paddleWidth) / 2 );
    }
}

function setScore(newVal) {
    score = newVal;
}