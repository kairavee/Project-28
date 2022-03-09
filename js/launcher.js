class launcher{
    constructor(bodyA, point1){
        var options = {
            bodyA: bodyA,
            pointB: point1,
            stiffness: 0.04,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(body)
        {
          this.stone.bodyA=body 
        }

    fly()
        {
            this.stone.bodyA=null
        }
    

    display(){
       if(this.launcher.bodyA)
       {
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}