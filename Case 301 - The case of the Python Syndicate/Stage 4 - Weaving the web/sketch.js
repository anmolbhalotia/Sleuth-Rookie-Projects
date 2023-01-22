/*
The case of the Python Syndicate
Stage 4

Officer: 1820440
CaseNum: 301-3-13674838-1820440

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bonesKarpinskiImg;
var cecilKarpinskiImg;
var linaLovelaceImg;
var pawelKarpinskiImg;
var countessHamiltonImg;
var robbieKrayImg;

var countessHamiltonObj;


//declare your new objects below


var bonesKarpinskiCoordinateX = 115;
var bonesKarpinskiCoordinateY = 40;
var cecilKarpinskiCoordinateX = 408;
var cecilKarpinskiCoordinateY = 40;
var linaLovelaceCoordinateX = 701;
var linaLovelaceCoordinateY = 40;
var pawelKarpinskiCoordinateX = 115;
var pawelKarpinskiCoordinateY = 309;
var robbieKrayCoordinateX = 701;
var robbieKrayCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	linaLovelaceImg = loadImage("lina.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 408,
		y: 309,
		image: countessHamiltonImg
	};
	bonesKarpinskiObj = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
	linaLovelaceObj = {
		x: 701,
		y: 40,
		image: linaLovelaceImg
	};
	pawelKarpinskiObj = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImg
	};
	robbieKrayObj = {
		x: 701,
		y: 309,
		image: robbieKrayImg
	};
	cecilKarpinskiObj = {
		x: 408,
		y: 40,
		image: cecilKarpinskiImg
	};


	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	//image(bonesKarpinskiImg, bonesKarpinskiCoordinateX, bonesKarpinskiCoordinateY);
	image(bonesKarpinskiImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	//image(cecilKarpinskiImg, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY);
	image(cecilKarpinskiImg,cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	//image(linaLovelaceImg, linaLovelaceCoordinateX, linaLovelaceCoordinateY);
	image(linaLovelaceImg,linaLovelaceObj.x,linaLovelaceObj.y);
	//image(pawelKarpinskiImg, pawelKarpinskiCoordinateX, pawelKarpinskiCoordinateY);
	image(pawelKarpinskiImg,pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	//image(robbieKrayImg, robbieKrayCoordinateX, robbieKrayCoordinateY);
	image(robbieKrayImg,robbieKrayObj.x,robbieKrayObj.y);

}