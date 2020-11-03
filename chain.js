class Chain{
    constructor(a, b, xOffset, yOffset){

        var options = {
            bodyA : a,
            bodyB : b,
            pointB : {x : xOffset, y : yOffset}
        }

        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
  
    display() {

      var pointA = this.Chain.bodyA.position;
      var pointB = this.Chain.bodyB.position;

      strokeWeight(3);
      line(pointA.x, pointA.y-50, pointB.x+this.Chain.pointB.x, pointB.y)

    }
  }