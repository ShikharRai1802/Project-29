class Roof{
    constructor(x,y,w,h){
        var options  = {
        isStatic:true
    }
        this.body = Bodies.rectangle(x,y,w,h,options);  
        World.add(world,this.body); 
    }
        display(){
        rectMode(CENTER);
        fill("gray");
        rect(this.body.position.x,this.body.position.y,400,60);
    }
    }