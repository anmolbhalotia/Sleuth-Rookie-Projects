/*
The case of the Python Syndicate
Stage 2


Officer: 1820440
CaseNum: 301-1-31452496-1820440

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecilKarpinskiImage;
var pawelKarpinskiImage;
var countessHamiltonImage;
var bonesKarpinskiImage;
var linaLovelaceImage;
var rockyKrayImage;


var pawelKarpinskiPositionX = 408;
var pawelKarpinskiPositionY = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	linaLovelaceImage = loadImage("lina.png");
	rockyKrayImage = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiImage, pawelKarpinskiPositionX, pawelKarpinskiPositionY);

	//image(cecilKarpinskiImage, 115, 40);
	image(cecilKarpinskiImage,pawelKarpinskiPositionX -293,pawelKarpinskiPositionY);
	//image(countessHamiltonImage, 701, 40);
	image(countessHamiltonImage,pawelKarpinskiPositionX +293,pawelKarpinskiPositionY);
	//image(bonesKarpinskiImage, 115, 309);
	image(bonesKarpinskiImage,pawelKarpinskiPositionX -293,pawelKarpinskiPositionY +269)
	//image(linaLovelaceImage, 408, 309);
	image(linaLovelaceImage,pawelKarpinskiPositionX,pawelKarpinskiPositionY +269)
	//image(rockyKrayImage, 701, 309);
	image(rockyKrayImage,pawelKarpinskiPositionX +293,pawelKarpinskiPositionY +269)
}