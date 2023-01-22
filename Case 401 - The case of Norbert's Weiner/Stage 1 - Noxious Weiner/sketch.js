/*

Officer: 1820440
CaseNum: 401-0-40834794-1820440

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If strychnine dips below 0.71, decrement ethanol by 0.02
	- If spiderVenom dips below 0.71, increment ethanol by 0.04
	- If spiderVenom goes above 0.47, try decreasing sulphates by 0.02
	- If strychnine goes above 0.42, increase sulphates by 0.02
	- When methanol goes above 0.72, try decreasing insulin by 0.03
	- If spiderVenom dips below 0.56, raise insulin by 0.01


Your conditional statements should:

consider the following poisons:

	- methanol
	- strychnine
	- spiderVenom


and modify the following antidotes:

	- ethanol
	- sulphates
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var strychnine;
var spiderVenom;


//Declare the antidote variables
var ethanol;
var sulphates;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	strychnine = 0.5;
	spiderVenom = 0.5;
	ethanol = 0.5;
	sulphates = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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

	// - If strychnine dips below 0.71, decrement ethanol by 0.02
	if (strychnine <= 0.71)
	{
		ethanol -= 0.02
	}

	// - If spiderVenom dips below 0.71, increment ethanol by 0.04
	if (spiderVenom <=0.71)
	{
		ethanol += 0.04
	}
	// - If spiderVenom goes above 0.47, try decreasing sulphates by 0.02
	if (spiderVenom >= 0.47)
	{
		sulphates -= 0.02
	}
	// - If strychnine goes above 0.42, increase sulphates by 0.02
	if (strychnine	>=0.42)
	{
		sulphates += 0.02
	}
	// - When methanol goes above 0.72, try decreasing insulin by 0.03
	if (methanol >=0.72)
	{
		insulin -=0.03
	}
	// - If spiderVenom dips below 0.56, raise insulin by 0.01
	if (spiderVenom <=0.56)
	{
		insulin	+= 0.01
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	strychnine = nextValue(graphs[1],strychnine);
	spiderVenom = nextValue(graphs[2],spiderVenom);


	ethanol = constrain(ethanol, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(sulphates,200,'sulphates');
	drawBar(insulin,350,'insulin');


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
