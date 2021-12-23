class Circle {
    x;
    y;
    radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getRadius() {
        return this.radius;
    }


    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    getRandomcolor(){
        let red=this.getRandomHex();
        let green=this.getRandomHex();
        let blue=this.getRandomHex();
        return "rgb("+red+","+green+","+blue+")";
    }
    createCircle(ctx) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}
