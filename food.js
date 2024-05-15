class Food {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580), y: Math.floor(Math.random() * 280)};
        this.position.x = Math.ceil(this.position.x  / 10) * 10;
        this.position.y = Math.ceil(this.position.y  / 10) * 10;
        this.canvas = document.getElementById("canvas");
    }

    getPosition() {
        return this.position;
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.stroke();
    }
}