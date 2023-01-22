/*

Officer: 1820440
CaseNum: 101-2-39164939-1820440

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Dark Turquoise filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Indigo filled
rectangle around him.

Identify the man in the striped top by drawing a Crimson filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    // Lina Lovelace - Drak turquoise
    fill(0,206,209,100)
    rect(97,21,81,168)
    //heavy - indigo
    fill(75,0,130,100)
    rect(270,324,430,460)
    //Strip - crimson
    fill(220,20,60,100)
    rect(499,66,73,192)    
    
}
