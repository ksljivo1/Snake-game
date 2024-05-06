class Snake {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580), y: Math.floor(Math.random() * 280)};
        this.lives = 5;
        this.length = 1;
        this.canvas = document.getElementById("canvas");
        this.direction = {right: 1, left: 0, up: 0, down: 0}
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.stroke();
    }

    async update() {
        var ctx = this.canvas.getContext("2d");
        while(true) {
            ctx.clearRect(0, 0, 600, 300);
            document.addEventListener('keyup', (event) => {
                // Check if the key released is the "Up" arrow key
                if (event.key === 'ArrowUp') {
                    this.direction.up = 1;
                    this.direction.down = 0;
                    this.direction.right = 0;
                    this.direction.left = 0;
                }
                else if (event.key === 'ArrowDown') {
                    this.direction.up = 0;
                    this.direction.down = 1;
                    this.direction.right = 0;
                    this.direction.left = 0;
                }
                else if (event.key === 'ArrowRight') {
                    this.direction.up = 0;
                    this.direction.down = 0;
                    this.direction.right = 1;
                    this.direction.left = 0;
                }
                else {
                    this.direction.up = 0;
                    this.direction.down = 0;
                    this.direction.right = 0;
                    this.direction.left = 1;
                }
              });
            if(this.direction.right === 1) {
                this.buttonRightPressed();
            }
            else if(this.direction.left === 1) {
                this.buttonLeftPressed();
            }
            else if(this.direction.up === 1) {
                this.buttonUpPressed();
            }
            else  {
                this.buttonDownPressed();
            }
            this.show();
            await sleep(150);
        }
    }

    buttonUpPressed() {
        this.position.y -= 7;
    }

    buttonDownPressed() {
        this.position.y += 7;
    }

    buttonRightPressed() {
        this.position.x += 7;
    }

    buttonLeftPressed() {
        this.position.x -= 7;
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}