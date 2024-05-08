class Snake {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580) , y: Math.floor(Math.random() * 280)};
        this.position.x = Math.ceil(this.position.x  / 10) * 10;
        this.position.y = Math.ceil(this.position.y  / 10) * 10;
        this.length = 1;
        this.size = [];
        this.canvas = document.getElementById("canvas");
        this.direction = {right: 1, left: 0, up: 0, down: 0};
        this.animate = false;
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        if(this.animate) {ctx.fillStyle = "green"; this.animate = false;}
        const n = this.size.length - this.length;
        this.size = this.size.slice(0, this.length);
        for(var i = 0; i < this.length; i++) {
            console.log("now;")
            ctx.fillRect(this.size[i].x, this.size[i].y, 10, 10);
            ctx.stroke();
        }
        var text = document.getElementById("score");
        text.innerHTML = "Score: " + this.length;
    }

    eats(food) {
        return this.position.x === food.getPosition().x && this.position.y === food.getPosition().y;
    }

    eatsItself() {
        return this.hasDuplicates();
    }

    hasDuplicates() {
        const seen = {};
        for (const item of this.size) {
            const key = item.x + '|' + item.y;
            if (seen[key]) return true;
            seen[key] = true;
        }
        return false;
    }

    crossesBorder() {
        const x = this.position.x;
        const y = this.position.y;
        if(x === 600) this.position.x = 0;
        else if(y === 300) this.position.y = 0;
        else if(x === -10) this.position.x = 600;
        else if(y === -10) this.position.y = 300;
    }

    changeDirection(dir) {
        if(dir == "ArrowUp") {
            this.direction.up = 1;
            this.direction.down = 0;
            this.direction.right = 0;
            this.direction.left = 0;
        }

        else if(dir == "ArrowDown") {
            this.direction.up = 0;
            this.direction.down = 1;
            this.direction.right = 0;
            this.direction.left = 0;
        }
        else if(dir == "ArrowRight") {
            this.direction.up = 0;
            this.direction.down = 0;
            this.direction.right = 1;
            this.direction.left = 0;
        }
        else if(dir == "ArrowLeft") {
            this.direction.up = 0;
            this.direction.down = 0;
            this.direction.right = 0;
            this.direction.left = 1;
        }
    }

    grow() {
        this.length++;
        this.animate = true;
    }

    async update() {
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, 600, 300);
        document.addEventListener('keyup', (event) => {
            this.changeDirection(event.key); 
        });
        this.crossesBorder();
        this.size.unshift({x: this.position.x, y: this.position.y});
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
