class Paper{
    constructor(x, y) {
        var options = {
        
            'restitution':0.3,
            'friction':0,
            'density':1.2
    
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 55;
        this.height = 67;
        this.image = loadImage("paper.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:20,y:-19});
        }
      }
}