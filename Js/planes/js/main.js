import { Canvas } from './canvas.js';
import { Aircraft } from './aircraft.js';
//import { UserInput } from './user-input.js';

const canvas = new Canvas("gameCanvas", 1800, 320);

const playerStartPos = [5, canvas.canvasHeight / 2];
const player = new Aircraft(playerStartPos[0], playerStartPos[1], "player");

//const userInput = new UserInput();

/*#region UserInput*/
var upPressed = false;
var downPressed = false;

function eventListener() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

function keyDownHandler(e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}
/*#endregion */

function start() {
    // draw player start pos
    player.drawAircraft(canvas.ctx);

    // Start listined - Todo myabe pass this to player code
    eventListener();
}

function update() {
    canvas.clearCanvas();

    player.drawAircraft(canvas.ctx);
    player.movePlayer(upPressed, downPressed);

    requestAnimationFrame(update);
}

start();
update();