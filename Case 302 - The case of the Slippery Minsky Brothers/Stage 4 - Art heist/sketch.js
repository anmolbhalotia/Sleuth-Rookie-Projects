/*
The case of the slippery Minsky brothers
Stage 4: Gates Memorial Art Museum

Officer: 1820440
CaseNum: 302-3-78449402-1820440

Darn it ! All three Minskys have broken out of the county jail. I told you they were slippery. Word has it that they are planning their biggest heist yet. Tonight they plan to steal multiple priceless artworks from the Gates Memorial Art Museum. I’ve assembled you a team. Head down to the Museum and stop them.

- Edit the spotlight object by creating x and y properties initialised to your location. Also endX and endY properties initialised to one of the Minsky's location.

- Assign the other 2 spotlights and create the required properties.

- Make the spotlight move perfectly from you towards the Minskys by adjusting the increments of x and y properties.
  If you get everything correct then it will stop over the target.

- Adjust x and y properties using

 * "+=" or "+"
 * "-=" or "-"

*/

// other variables, you don't need to change these
var img, spotlight_image;

var spotlight1;
var spotlight2;
var spotlight3;
var x;
var y;
var endX;
var endY;



function preload()
{
	img = loadImage('scene.png');


	spotlight_image = loadImage('spotlight.png')

}

function setup()
{
	createCanvas(img.width, img.height);
	console.log(mouseX,mouseY);

	//complete the initialisation of the first spotlight
  //with properties x, y, endX and endY

	spotlight1 = {
		image: spotlight_image, x: 369, y: 629, endX: 477, endY: 115
	}

	//Initialize the second and third spotlights
	spotlight2 = {
		image: spotlight_image, x: 369, y: 629, endX: 562, endY: 287
	}

	spotlight3 = {
		image: spotlight_image, x: 369, y: 629, endX: 760, endY: 808
	}

}


function draw()
{
	image(img, 0, 0);

	// alter the properties x and y of the objects below to animate the spotlights
	spotlight1.x +=1
	spotlight1.y -=5
	spotlight2.x +=2 
	spotlight2.y -=4
	spotlight3.x +=4
	spotlight3.y +=2

	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	var spotlights = [spotlight1, spotlight2, spotlight3];
	var spotlightSize = 300;

	blendMode(BLEND);
	background(30);

	for (var i = 0; i < spotlights.length; i++)
	{
		var spotlight = spotlights[i];
		//stop the spotlight if it's near enough to endx and endy
        if(spotlight)
        {
               //stop the spotlight if it goes off of the screen
            spotlight.x = min(spotlight.x, 960);
            spotlight.y = min(spotlight.y, 945);
            spotlight.x = max(spotlight.x, 0);
            spotlight.y = max(spotlight.y, 0);

            if (abs(spotlight.endX - spotlight.x) < 50
                && abs(spotlight.endY - spotlight.y) < 50)
            {
                spotlight.x = spotlight.endX;
                spotlight.y = spotlight.endY;
            }


            image(spotlight.image, spotlight.x-spotlightSize/2,
                    spotlight.y-spotlightSize/2, spotlightSize, spotlightSize);
        }
	}

	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
