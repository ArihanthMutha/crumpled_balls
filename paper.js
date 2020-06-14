class Paper{
    constructor(x,y){
        this.image = loadImage("paper1.png");
        var options={
            isStatic:false,
            friction:0.5,
            restitution:0.3,
            density:1.2

        }
        this.body=Bodies.circle(x,y,10,options)
        this.radius=10;
        World.add(world,this.body)
        
    }
    display(){
       var pos=this.body.position;
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}