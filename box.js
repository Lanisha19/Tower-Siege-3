class Box{
    constructor(x, y, width, height){

        var option = {
        restituition : 0.8,
        friction : 1.0,
        density : 1.0
        }

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    this.body = Bodies.rectangle(x,y, width, height);
    World.add(world, this.body);
    }
    
    display(){
     var pos = this.body.position;
     rectMode(CENTER);
     rect(pos.x, pos.y, this.width, this.height);
    }
}