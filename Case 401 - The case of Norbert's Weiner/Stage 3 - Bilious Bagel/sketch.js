/*

Officer: 1820440
CaseNum: 401-2-92823594-1820440

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If formaldehyde dips below 0.31 and chlorine goes above 0.4, reduce glucagon by 0.04
	- If hemlock goes above 0.54 or sarin dips below 0.36, whilst at the same time, mercury goes above 0.41, increase glucagon by 0.01
	- When formaldehyde dips below 0.28 and chlorine dips below 0.66, decrease protamine by 0.01
	- If alcohol goes above 0.48 or sarin dips below 0.32, increment protamine by 0.01
	- When formaldehyde dips below 0.52 and hemlock dips below 0.62, or on the other hand, sarin dips below 0.35, try decreasing ethanol by 0.02
	- When alcohol dips below 0.44 or mercury dips below 0.38, try increasing ethanol by 0.01
	- If alcohol dips below 0.52 and chlorine dips below 0.61, reduce antivenom by 0.05
	- When either formaldehyde dips below 0.41, sarin goes above 0.67, or perhaps hemlock goes above 0.34, try increasing antivenom by 0.05


Your conditional statements should:

consider the following poisons:

	- mercury
	- alcohol
	- sarin
	- hemlock
	- chlorine
	- formaldehyde


and modify the following antidotes:

	- glucagon
	- protamine
	- ethanol
	- antivenom


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var mercury;
var alcohol;
var sarin;
var hemlock;
var chlorine;
var formaldehyde;


//Declare the antidote variables
var glucagon;
var protamine;
var ethanol;
var antivenom;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	alcohol = 0.5;
	sarin = 0.5;
	hemlock = 0.5;
	chlorine = 0.5;
	formaldehyde = 0.5;
	glucagon = 0.5;
	protamine = 0.5;
	ethanol = 0.5;
	antivenom = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	// - If formaldehyde dips below 0.31 and chlorine goes above 0.4, reduce glucagon by 0.04
	if (formaldehyde <= 0.31 && chlorine >= 0.4)
	{
		glucagon -= 0.04
	}

	// - If hemlock goes above 0.54 or sarin dips below 0.36, whilst at the same time, mercury goes above 0.41, increase glucagon by 0.01
	if ((hemlock >= 0.54 || sarin <= 0.36) && mercury >= 0.41)
	{
		glucagon += 0.01
	}

	// - When formaldehyde dips below 0.28 and chlorine dips below 0.66, decrease protamine by 0.01
	if (formaldehyde <= 0.28 && chlorine <= 0.66)
	{
		protamine -= 0.01
	}

	// - If alcohol goes above 0.48 or sarin dips below 0.32, increment protamine by 0.01
	if (alcohol >= 0.48 || sarin <= 0.32)
	{
		protamine += 0.01
	}

	// - When formaldehyde dips below 0.52 and hemlock dips below 0.62, or on the other hand, sarin dips below 0.35, try decreasing ethanol by 0.02
	if ((formaldehyde <= 0.52 && hemlock <= 0.62) || sarin <= 0.35)
	{
		ethanol -=0.02
	}

	// - When alcohol dips below 0.44 or mercury dips below 0.38, try increasing ethanol by 0.01
	if (alcohol <= 0.44 || mercury <= 0.38)
	{
		ethanol += 0.01
	}
	
	// - If alcohol dips below 0.52 and chlorine dips below 0.61, reduce antivenom by 0.05
	if (alcohol <= 0.52 && chlorine <= 0.61)
	{
		antivenom -= 0.05
	}
	
	// - When either formaldehyde dips below 0.41, sarin goes above 0.67, or perhaps hemlock goes above 0.34, try increasing antivenom by 0.05
	if(formaldehyde <= 0.41 || sarin >= 0.67 || hemlock >= 0.34)
	{
		antivenom +=0.05
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	alcohol = nextValue(graphs[1],alcohol);
	sarin = nextValue(graphs[2],sarin);
	hemlock = nextValue(graphs[3],hemlock);
	chlorine = nextValue(graphs[4],chlorine);
	formaldehyde = nextValue(graphs[5],formaldehyde);


	glucagon = constrain(glucagon, 0, 1);
	protamine = constrain(protamine, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	antivenom = constrain(antivenom, 0, 1);


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
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('hemlock: ' + nf(hemlock,1,2), 20,80);
	fill(colors[4]);
	text('chlorine: ' + nf(chlorine,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(glucagon,50,'glucagon');
	drawBar(protamine,200,'protamine');
	drawBar(ethanol,350,'ethanol');
	drawBar(antivenom,500,'antivenom');


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
