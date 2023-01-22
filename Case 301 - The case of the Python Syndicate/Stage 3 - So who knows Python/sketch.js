/*
The case of the Python Syndicate
Stage 3


Officer: 1820440
CaseNum: 301-2-29335479-1820440

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Cecil karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_image;
var cecil_karpinski_image;
var robbie_kray_image;
var bones_karpinski_image;
var countess_hamilton_image;
var lina_lovelace_image;

var cecil_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	lina_lovelace_image = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_object = {
		x: 408,
		y: 40,
		image: cecil_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);

	//image(rocky_kray_image, 115, 40);
	image(rocky_kray_image,cecil_karpinski_object.x -293,cecil_karpinski_object.y)
	//image(robbie_kray_image, 701, 40);
	image(robbie_kray_image,cecil_karpinski_object.x +293,cecil_karpinski_object.y)
	//image(bones_karpinski_image, 115, 309);
	image(bones_karpinski_image,cecil_karpinski_object.x -293,cecil_karpinski_object.y +269)
	//image(countess_hamilton_image, 408, 309);
	image(countess_hamilton_image,cecil_karpinski_object.x,cecil_karpinski_object.y +269)
	//image(lina_lovelace_image, 701, 309);
	image(lina_lovelace_image,cecil_karpinski_object.x +293,cecil_karpinski_object.y +269)


}