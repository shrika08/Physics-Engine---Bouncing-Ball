var Engine = Matter.Engine
var World1 = Matter.World
var Bodies = Matter.Bodies
var e,w,o,g,b

function setup() {
  createCanvas(800,400);
  

  e = Engine.create()
  w = e.world
var g_options={
  isStatic:true
}

  g = Bodies.rectangle(400,380,800,10,g_options)
  World1.add(w,g)

  var b_options={
 restitution:1

  }

  b = Bodies.circle(400,100,25,b_options)
  World1.add(w,b)
}

function draw() {
  background(0); 
  Engine.update(e)
  rectMode(CENTER)
  rect(g.position.x,g.position.y,800,10)
  
 ellipseMode(RADIUS)
 ellipse(b.position.x,b.position.y,25,25)
}