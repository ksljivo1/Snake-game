class Food {
    constructor() {
        this.position = {x: Math.floor(Math.random() * 580), y: Math.floor(Math.random() * 280)};
        this.position.x = Math.ceil(this.position.x  / 10) * 10;
        this.position.y = Math.ceil(this.position.y  / 10) * 10;
        this.alive = true;
        this.canvas = document.getElementById("canvas");
    }

    getPosition() {
        return this.position;
    }

    show() {
        if(!this.alive) return;
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
        ctx.stroke();
    }

    /*dead() {
        this.alive = false;
    }*/
}