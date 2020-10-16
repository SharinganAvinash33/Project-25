class SuperClass{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
       
        
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.Width=width;
        this.Height=height;
        this.image=loadImage("Wood.jpg")
        World.add(world,this.body);
    
        }
        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            
            imageMode(CENTER);
            image(this.image,0,0,this.Width,this.Height);
            pop();
        }
}