class Ground{

    constructor(x,y,width,height){
        var groundopt={
            isStatic:true
        }

        this.width=width;
        this.height=height;

        this.ground=Bodies.rectangle(x,y,width,height,groundopt);

        World.add(world,this.ground);
    }

    display(){
        rectMode(CENTER);
        var pos=this.ground.position;

        fill("blue");

        rect(pos.x,pos.y,this.width,this.height);
    }
}