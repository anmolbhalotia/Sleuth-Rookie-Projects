/*

Officer: 1820440
CaseNum: 101-3-98790364-1820440

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Brown filled rectangle with a Blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Navy filled
rectangle with a Dark Blue outline around him.

Identify the man reading the newspaper by drawing a Midnight Blue filled rectangle
with a Chartreuse outline around him.

Identify the woman with the dog by drawing a Pale Violet Red filled rectangle with a
Tomato outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //Lina - Brown Fill, Blue outline
    fill(165,42,42,100)
    stroke(0,0,255)
    rect(526,157,244,496)
    
    
    //monocle smoking - navy filled,dark blue outline
    fill(0,0,128,100)
    stroke(0,0,139)
    rect(1337,279,139,192)
    
    //newspaper - midnight blue fill,charteuse outline
    fill(25,25,112,100)
    stroke(127,255,0)
    rect(1070,207,131,257)
    
    //woman with dog - pale violet red, tomato outline
    fill(219,112,147,100)
    stroke(255,99,71)
    rect(3,170,105,230)
    
    
    
}
