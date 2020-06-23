class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.r=30;
		this.body=Matter.Bodies.circle(x,y,15, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			strokeWeight(3);
			fill(255,0,255);
			ellipseMode(CENTER);
			ellipse(pos.x,pos.y,this.r, this.r);
			
	}

}