class Rope {
    constructor(body1,body2){
    var options = {
    bodyA:body1,
    bodyB:body2,
    lenght:400,
    stiffness:0.05
    
    }
     this.rope = Constraint.create(options);
     World.add(world,this.rope);
    
    }
    display(){
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB;
    
    push();
    
    strokeWeight(5)
    line(posA.x,posA.y,posB.x,posB.y);
    
    pop();
    }
    }