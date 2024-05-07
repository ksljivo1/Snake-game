class Snake {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580) , y: Math.floor(Math.random() * 280)};
        this.position.x = Math.ceil(this.position.x  / 10) * 10;
        this.position.y = Math.ceil(this.position.y  / 10) * 10;
        this.lives = 5;
        this.length = [this.position]
        this.canvas = document.getElementById("canvas");
        this.direction = {right: 1, left: 0, up: 0, down: 0}
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.stroke();
        console.log(this.position);
    }

    eats(food) {
        return this.position.x === food.getPosition().x && this.position.y === food.getPosition().y;
    }

    async update() {
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, 600, 300);
        document.addEventListener('keyup', (event) => {
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
    }

    buttonUpPressed() {
        this.position.y -= 10;
    }

    buttonDownPressed() {
        this.position.y += 10;
    }

    buttonRightPressed() {
        this.position.x += 10;
    }

    buttonLeftPressed() {
        this.position.x -= 10;
    }

}
