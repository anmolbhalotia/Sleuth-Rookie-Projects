/*

Officer: 1820440
CaseNum: 403-3-73755884-1820440

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 71 meters from Norbert's Cupcake Center then alert local police by drawing a Olive circle around it with a radius of 71 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Coral rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Aqua rectangle covering the area between Bereners-Lee Street, Turing Place, Meyers Way and Mullenweg Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

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
    // - if Shiffman is within 71 meters from Norbert's Cupcake Center then alert local police by drawing a Olive circle around it with a radius of 71 pixels.
    if (dist(mouseX,mouseY,2448,612)<=71)
    {
      fill(128,128,0);
      ellipse(2448,612,71*2);
    }
    // - if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a Coral rectangle around it.
    else if (dist(mouseX,mouseY,2803,134) <= 83)
    {
      fill(255,127,80);
      rect(2720,56,165,156);
    }

    // - if Shiffman is in neither position, a global alert must be issued by drawing a Aqua rectangle covering the area between 
    //   Bereners-Lee Street, Turing Place, Meyers Way and Mullenweg Street.
    else
    {
      fill(0,255,255);
      rect(504,30,239,1054);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
