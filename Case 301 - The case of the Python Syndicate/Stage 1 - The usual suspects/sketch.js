/*
The case of the Python Syndicate
Stage 1

Officer: 1820440
CaseNum: 301-0-87149158-1820440

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var countessHamiltonImage;
var robbieKrayImage;
var bonesKarpinskiImage;
var linaLovelaceImage;
var rockyKrayImage;
var annaKarpinskiImage;



//declare your new variables below
var linaLovelaceCoordinateX = 115;
var linaLovelaceCoordinateY = 309;
var countessHamiltonCoordinateX = 115;
var countessHamiltonCoordinateY = 40;
var robbieKrayCoordinateX = 408;
var robbieKrayCoordinateY = 40;
var bonesKarpinskiCoordinateX =  701;
var bonesKarpinskiCoordinateY =  40;
var rockyKrayCoordinateX = 408;
var rockyKrayCoordinateY = 309;
var annaKarpinskiCoordinateX = 701;
var annaKarpinskiCoordinateY = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	linaLovelaceImage = loadImage("lina.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
    

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(linaLovelaceImage, linaLovelaceCoordinateX, linaLovelaceCoordinateY);
    //image(countessHamiltonImage, 115, 40);
    image(countessHamiltonImage,countessHamiltonCoordinateX,countessHamiltonCoordinateY);
    //image(robbieKrayImage, 408, 40);
    image(robbieKrayImage,robbieKrayCoordinateX,robbieKrayCoordinateY);
    //image(bonesKarpinskiImage, 701, 40);
	image(bonesKarpinskiImage,bonesKarpinskiCoordinateX,bonesKarpinskiCoordinateY);
    //image(rockyKrayImage, 408, 309);
	image(rockyKrayImage,rockyKrayCoordinateX,rockyKrayCoordinateY);
    //image(annaKarpinskiImage, 701, 309);
    image(annaKarpinskiImage,annaKarpinskiCoordinateX,annaKarpinskiCoordinateY);
    
}