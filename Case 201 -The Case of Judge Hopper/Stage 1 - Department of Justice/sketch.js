/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 1820440
CaseNum: 201-0-30290949-1820440

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the evidence below
    //telephone
    ellipse(255,230,180,150)
    //Letter Opener
    ellipse(415,300,50,150)
    //Death threat letters
    ellipse(570,230,100,142)
    //AGOL
    ellipse(269,367,130,118)
    
}
