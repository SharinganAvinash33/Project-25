class binSide extends SuperClass{
    constructor(x,y,width,height){
    super(x,y,width,height)
    
    this.image=loadImage("dustbingreen.png");
    
    

    }
      display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            
            imageMode(CENTER);
            image(this.image,0,0,this.Width,this.Height+125);
            pop();
        }
}