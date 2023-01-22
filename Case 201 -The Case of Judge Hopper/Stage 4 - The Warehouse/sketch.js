/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 1820440
CaseNum: 201-3-69627911-1820440

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


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

    // write the code to draw around the Judge's body below
    beginShape()
    vertex(574,213)
    vertex(578,224)
    vertex(578,232)
    vertex(572,254)
    vertex(572,278)
    vertex(558,286)
    vertex(562,334)
    vertex(598,324)
    vertex(616,333)
    vertex(617,349)
    vertex(537,361)
    vertex(367,425)
    vertex(328,425)
    vertex(276,447)
    vertex(209,378)
    vertex(274,321)
    vertex(456,216)
    vertex(380,66)
    vertex(515,55)
    vertex(574,213)
    endShape()
    
    
}
