class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    this.path=[]

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    if(this.body.velocity.x>10  && this.body.position.x>200  )
    {    
   var pos=this.body.position;
   var position=[ pos.x,pos.y];
   this.path.push(position)
    }


   for(var s=0;s<this.path.length;s++)
   {
     image( this.smokeImg,this.path[s][0],this.path[s][1])

   }


    super.display();
  }
}
