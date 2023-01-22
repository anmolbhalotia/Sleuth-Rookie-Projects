/*

Officer: 1820440
CaseNum: 303-2-77536369-1820440

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make hiddenStoreCombinationA equal to the value of mouseX
	- Use the 'constrain' function to prevent hiddenStoreCombinationA from falling below 4 and going above 15

	Whilst the mouse is being dragged:
	- Decrement hiddenStoreCombinationB by 2
	- Use the 'max' function to prevent hiddenStoreCombinationB from falling below 4

	Whilst the mouse is moving:
	- Make hiddenStoreCombinationC equal to the value of mouseY
	- Use the 'min' function to prevent hiddenStoreCombinationC from going above 10

	When the mouse button is released:
	- Increment hiddenStoreCombinationD by 2
	- Use the 'constrain' function to prevent hiddenStoreCombinationD from falling below 2 and going above 11

	When the mouse button is pressed:
	- Make hiddenStoreCombinationE equal to the value of mouseY
	- Use the 'min' function to prevent hiddenStoreCombinationE from going above 74



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var hiddenStoreCombinationA;
var hiddenStoreCombinationB;
var hiddenStoreCombinationC;
var hiddenStoreCombinationD;
var hiddenStoreCombinationE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	hiddenStoreCombinationA = 0;
	hiddenStoreCombinationB = 0;
	hiddenStoreCombinationC = 0;
	hiddenStoreCombinationD = 0;
	hiddenStoreCombinationE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased()
{
	// When the mouse button is released:
	// - Make hiddenStoreCombinationA equal to the value of mouseX
	// - Use the 'constrain' function to prevent hiddenStoreCombinationA from falling below 4 and going above 15
	
	console.log("mouseReleased");
	hiddenStoreCombinationA = mouseX;
	hiddenStoreCombinationA = constrain(hiddenStoreCombinationA,4,15)

	// When the mouse button is released:
	// 	- Increment hiddenStoreCombinationD by 2
	// 	- Use the 'constrain' function to prevent hiddenStoreCombinationD from falling below 2 and going above 11
	
	hiddenStoreCombinationD +=2
	hiddenStoreCombinationD = constrain(hiddenStoreCombinationD,2,11)

}

function mouseDragged()
{
	// Whilst the mouse is being dragged:
	// - Decrement hiddenStoreCombinationB by 2
	// - Use the 'max' function to prevent hiddenStoreCombinationB from falling below 4
	
	console.log("mouseDragged")
	hiddenStoreCombinationB = max(hiddenStoreCombinationB -=2, 4)


}

function mouseMoved()
{

	// Whilst the mouse is moving:
	// 	- Make hiddenStoreCombinationC equal to the value of mouseY
	// 	- Use the 'min' function to prevent hiddenStoreCombinationC from going above 10	
	
	console.log("mouseMoved")
	hiddenStoreCombinationC = min(mouseY, 10)

}

function mousePressed()

{

	// When the mouse button is pressed:
	// - Make hiddenStoreCombinationE equal to the value of mouseY
	// - Use the 'min' function to prevent hiddenStoreCombinationE from going above 74

	console.log("mousePressed")
	hiddenStoreCombinationE = min(mouseY, 74)
}



///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,hiddenStoreCombinationA, 21);
	pop();

	push();
	translate(120,380);
	drawDial(140,hiddenStoreCombinationB, 20);
	pop();

	push();
	translate(280,170);
	drawDial(140,hiddenStoreCombinationC, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,hiddenStoreCombinationD, 15);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(hiddenStoreCombinationE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
