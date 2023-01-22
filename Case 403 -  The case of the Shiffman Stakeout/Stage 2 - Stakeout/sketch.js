/*

Officer: 1820440
CaseNum: 403-1-98904160-1820440

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Courthouse.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 78 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 78 pixels of Courthouse - draw a DarkBlue ellipse with a radius of 78 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;
var x_pos = 1546;
var y_pos = 526;
var collision_dist = 78;
var object_rad = collision_dist * 2;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if(dist(mouseX,mouseY,x_pos,y_pos)<=collision_dist)
    {
      fill(0,0,139);
      ellipse(x_pos,y_pos,object_rad);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
