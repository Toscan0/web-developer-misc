const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

class Player {
    constructor() {
        this.postion = {
            x: 100,
            y: 100,
        };

        this.width = 30;
        this.height = 30;

        this.velocity = {
            x: 0,
            y: 0,
        };
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.postion.x, this.postion.y,
            this.width, this.height);
    }

    update() {
        this.draw();
        this.postion.x += this.velocity.x;
        this.postion.y += this.velocity.y;

        if ((this.postion.y + this.height + this.velocity.y) <= canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0
        }

        if (keys.right.pressed) {
            player.velocity.x = 5;
        }
        else if (keys.left.pressed) {
            player.velocity.x = -5;
        }
        else {
            player.velocity.x = 0;
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
}

const player = new Player();
const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
};

animate();


addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
        case 65: // left
            keys.left.pressed = true;
            break;
        case 83: // down
            player.velocity.y -= 20;
            break;
        case 68: // right
            keys.right.pressed = true;
            break;
        case 87: //up
            player.velocity.y -= 20;
            break;
    }
});

addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
        case 65: // left
            keys.left.pressed = false;
            break;
        case 83: // down
            player.velocity.y = 0;
            break;
        case 68: // right
            keys.right.pressed = false;
            break;
        case 87: //up
            player.velocity.y = 0;
            break;
    }
});
