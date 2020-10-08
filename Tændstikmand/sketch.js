function setup() {
  createCanvas(500, 500);
}

function draw() {
background(220);
  let Posx = mouseX
  let Posy = mouseY+50
  let headradius = 25
  
  circle(Posx,Posy,headradius*2)
  circle(Posx-10,Posy,2)
  circle(Posx+10,Posy,2)
  line(Posx-12,Posy+15,Posx+12,Posy+10)
  strokeWeight(3)
  fill(0,150,0)
  stroke(150,0,0)
  
  let necklenght =15
  line(Posx, Posy + headradius, Posx , Posy + headradius + necklenght);
  
  let bodyheight = 100
  let bodywidth = 30
  ellipse(Posx, Posy + headradius + necklenght + bodyheight/2, bodywidth, bodyheight)
  
  line(Posx , Posy + headradius + necklenght,Posx-40,Posy+90)
  line(Posx , Posy + headradius + necklenght,Posx+40,Posy+90)
  
  line(Posx , Posy + headradius + necklenght + bodyheight,Posx-30,Posy + headradius + necklenght + bodyheight+70)
  line(Posx , Posy + headradius + necklenght + bodyheight,Posx+30,Posy + headradius + necklenght + bodyheight+70)
}