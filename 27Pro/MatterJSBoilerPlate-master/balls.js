class Bob {
    constructor(x,y) {
      var options = {
          restitution:0.3,
          friction: 0.5,
          density:1.2,
          isStatic: false
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.diameter = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4)
      stroke("green")
      fill(255);
      circle(0, 0, this.diameter);
      pop();
    }
  };