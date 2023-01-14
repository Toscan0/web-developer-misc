export { Canvas };

class Canvas {
    constructor(canvasId, canvasWidth, canvasHeight) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.setCanvasSyze(canvasWidth, canvasHeight)
    }

    clearCanvas() {
        return this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    setCanvasSyze(newW, newH) {
        this.canvasWidth = newW;
        this.canvasHeight = newH;

        this.canvas.width = this.canvasWidth
        this.canvas.height = this.canvasHeight
    }
}
