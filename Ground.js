class Ground{
    constructor(){
    var options={
        isStatic:true
    }

    this.body=Bodies.rectangle(600,390,1300,10,options);
    this.Width=1200;
    this.Height=10;
    
    World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        
        
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.Width,this.Height);
        
    }
}