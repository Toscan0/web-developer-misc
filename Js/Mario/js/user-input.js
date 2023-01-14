////export { UserInput };

////class UserInput {
////    constructor() {
////        this.upPressed = false;
////        this.downPressed = false;
////    }

////    eventListener() {
////        document.addEventListener("keydown", this.keyDownHandler, false);
////        document.addEventListener("keyup", this.keyUpHandler, false);
////        document.addEventListener("mousemove", this.mouseMoveHandler, false);
////    }

////    keyDownHandler(e) {
////        if (e.key == "Up" || e.key == "ArrowUp") {
////            this.setUpPressed(true);
////            console.log("111111", this.upPressed); // unique this
////        }
////        //else if (e.key == "Down" || e.key == "ArrowDown") {
////        //    this.downPressed = true;
////        //}

////    }

////    setUpPressed(newVal) {
////        this.upPressed = newVal;
////        console.log("upPresseed", this.upPressed)
////        return this.upPressed;
////    }

////    keyUpHandler(e) {
////        //if (e.key == "Up" || e.key == "ArrowUp") {
////        //    this.upPressed = false;
////        //}
////        //else if (e.key == "Down" || e.key == "ArrowDown") {
////        //    this.downPressed = false;
////        //}
////    }
////}
