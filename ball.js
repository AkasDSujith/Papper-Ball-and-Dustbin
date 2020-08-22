class Ball {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.circle(x, y,20, options);
        this.radius = 20;
        //this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       pos.x=mouseX;
       pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        circle(0, 0, this.radius);
        pop();
      }
}  
