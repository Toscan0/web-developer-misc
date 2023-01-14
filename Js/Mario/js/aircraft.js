export { Aircraft };

const aircraftType = ['player', 'fast', 'big', 'normal']

class Aircraft {
    constructor(xPos, yPos, type) {
        this.xPos = xPos;
        this.yPos = yPos;
        if (aircraftType.includes(type)) {
            this.type = type;
        }
        else {
            throw 'Type is not a recognized type! Type: ' + type;
        }
    }

    //Todo try to draw a icon
    // draw based on type
    drawAircraft(ctx) {
        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, 10, 5);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }


    // only for player
    movePlayer(upPressed, downPressed) {
        if (upPressed) {
            this.yPos -= 1;
            //if (paddleX + paddleWidth > canvas.width) {
            //    updatePaddleX(canvas.width - paddleWidth);
            //}
            //console.log(this.xPos);
        }
        else if (downPressed) {
            this.yPos += 1;

            //if (paddleX < 0) {
            //    updatePaddleX(0);
            //}
        }
    }
}
