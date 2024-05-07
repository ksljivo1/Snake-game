class Snake {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580) , y: Math.floor(Math.random() * 280)};
        this.position.x = Math.ceil(this.position.x  / 10) * 10;
        this.position.y = Math.ceil(this.position.y  / 10) * 10;
        this.length = 1;
        this.size = [];
        this.canvas = document.getElementById("canvas");
        this.direction = {right: 1, left: 0, up: 0, down: 0};
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        for(var i = 0; i < this.length; i++) {
            console.log("now;")
            ctx.fillRect(this.size[i].x, this.size[i].y, 10, 10);
            ctx.stroke();
            console.log(i + "jebem te " + this.size[i].x  + " " + this.size[i].y + "\n");
        }
    }

    eats(food) {
        return this.position.x === food.getPosition().x && this.position.y === food.getPosition().y;
    }

    grow() {
        this.length++;
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
        //console.log(this.position);
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

Array.prototype.insertAtIndex = function(index, element) {
    // Check if the index is valid
    if (index < 0 || index > this.length) {
        console.error("Index out of bounds");
        return;
    }
    
    // Shift elements to the right to make space for the new element
    for (let i = this.length; i > index; i--) {
        this[i] = this[i - 1];
    }
    
    // Insert the element at the specified index
    this[index] = element;
};
