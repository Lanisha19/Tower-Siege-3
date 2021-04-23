class Blue extends Box{
    constructor(x, y){
     super(x,y,30,35);
     this.visibility = 255;
    }
    display(){
        fill("blue");

        if(this.body.speed<3){
            super.display();
        }
        else{
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5
        tint(255,this.visibility);
        pop();
        }
      
    }
}