/*

Officer: 1820440
CaseNum: 401-1-49789189-1820440

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When polonium dips below 0.56, reduce hydrochloricAcid by 0.02
	- If insecticide dips below 0.45 and strychnine dips below 0.65, try increasing hydrochloricAcid by 0.05
	- If mercury dips below 0.32 and polonium goes above 0.65, try decreasing calciumGluconate by 0.04
	- If insecticide goes above 0.6, increment calciumGluconate by 0.02
	- If strychnine goes above 0.36, decrease antivenom by 0.02
	- If polonium goes above 0.62, increase antivenom by 0.01
	- When strychnine goes above 0.32 and insecticide goes above 0.38, reduce aspirin by 0.01
	- If mercury dips below 0.75 and polonium dips below 0.37, increase aspirin by 0.02


Your conditional statements should:

consider the following poisons:

	- mercury
	- insecticide
	- polonium
	- strychnine


and modify the following antidotes:

	- hydrochloricAcid
	- calciumGluconate
	- antivenom
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var mercury;
var insecticide;
var polonium;
var strychnine;


//Declare the antidote variables
var hydrochloricAcid;
var calciumGluconate;
var antivenom;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	insecticide = 0.5;
	polonium = 0.5;
	strychnine = 0.5;
	hydrochloricAcid = 0.5;
	calciumGluconate = 0.5;
	antivenom = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	
	// - When polonium dips below 0.56, reduce hydrochloricAcid by 0.02
	if (polonium <= 0.56)
	{
		hydrochloricAcid -= 0.02
	}
	// - If insecticide dips below 0.45 and strychnine dips below 0.65, try increasing hydrochloricAcid by 0.05
	if (insecticide <= 0.45 && strychnine <= 0.65)
	{
		hydrochloricAcid += 0.05
	}
	// - If mercury dips below 0.32 and polonium goes above 0.65, try decreasing calciumGluconate by 0.04
	if (mercury <= 0.32 && polonium >= 0.65)
	{
		calciumGluconate -= 0.04
	}
	// - If insecticide goes above 0.6, increment calciumGluconate by 0.02
	if (insecticide >= 0.6)
	{
		calciumGluconate += 0.02
	}
	// - If strychnine goes above 0.36, decrease antivenom by 0.02
	if (strychnine >= 0.36)
	{
		antivenom -= 0.02
	}	
	// - If polonium goes above 0.62, increase antivenom by 0.01
	if(polonium >= 0.62)
	{
		antivenom += 0.01
	}
	// - When strychnine goes above 0.32 and insecticide goes above 0.38, reduce aspirin by 0.01
	if (strychnine >= 0.32 && insecticide >= 0.38)
	{
		aspirin -= 0.01
	}
	// - If mercury dips below 0.75 and polonium dips below 0.37, increase aspirin by 0.02
	if (mercury <= 0.75 && polonium <= 0.37)
	{
		aspirin += 0.02
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	insecticide = nextValue(graphs[1],insecticide);
	polonium = nextValue(graphs[2],polonium);
	strychnine = nextValue(graphs[3],strychnine);


	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(hydrochloricAcid,50,'hydrochloricAcid');
	drawBar(calciumGluconate,200,'calciumGluconate');
	drawBar(antivenom,350,'antivenom');
	drawBar(aspirin,500,'aspirin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
