class Paperball extends SuperClass{
    constructor(x,y){
        super(x,y);
    var option={
        isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
    
    fill("white");
    this.image=loadImage("paper.png");
    this.body=Bodies.rectangle(x,y,50,50,option);
    this.Width=50;
    this.Height=50; 
    World.add(world,this.body);

     }
      display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            
            imageMode(CENTER);
            image(this.image,0,0,this.Width,this.Height+20);
            pop();
        }
     
    
}
