class Ground{
    constructor(){
        var options={
            isStatic:true,
            

        }
        this.body=Bodies.rectangle(600,380,1200,20,options)
        
        World.add(world,this.body)
    }
    display(){
        
        rectMode(CENTER)
        fill ("brown")
        rect(this.body.position.x,this.body.position.y,1200,20)
        
    }
}