var box1
function setup() 
{
  createCanvas(400, 400);
box1 = new Box(212,121,2.12,1.21,2,1.21,2.12)


}

function draw() 
{
  background(220);
box1.show()
box1.movey()
}

