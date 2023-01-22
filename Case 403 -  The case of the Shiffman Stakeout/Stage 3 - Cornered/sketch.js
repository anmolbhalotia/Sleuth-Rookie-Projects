/*

Officer: 1820440
CaseNum: 403-2-20993208-1820440

Case 403 - Cornered - stage 3


We have Shiffman cornered at Wrong Side of the tracks and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Wrong Side of the tracks

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Wrong Side of the tracks.
Draw a SandyBrown rectangle covering Wrong Side of the tracks for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

*/

var img;
var xpos = 625;
var ypos = 183;
var rect_width = 153;
var rect_height = 101;

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
    if (dist(mouseX,mouseY,xpos+153 / 2,ypos + 101 /2) <= rect_width/2)
    {
      fill(244,164,96);
      rect(xpos,ypos,rect_width,rect_height);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
