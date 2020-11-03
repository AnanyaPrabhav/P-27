class Bob {
    constructor(x, y, r){
        var options={
            restitution:0.3,
            density:2.0
        }
        this.body = Matter.Bodies.circle(x, y, 10, options);
        this.radius = r;

        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("black");
        fill(rgb(176, 18, 229));
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}