class box {
  constructor(x,y) {
    var options = {
        'restitution':0.3,
        'friction':2.0,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, 25, 25, options);
    this.width = 25;
    this.height = 25;
    
    World.add(world, this.body);
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1000){
      score++;
    }
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<10){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    strokeWeight(4);
    stroke("green"); 
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      tint(255,this.Visiblity);
      rect(this.body.position.x,this.body.position.y,25,25);
      pop();
    }
  }
};
