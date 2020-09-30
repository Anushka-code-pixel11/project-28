class Stone {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
      }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("pics/stone.png");
        World.add(world, this.body);
    }

      display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
        pop();
  }
}