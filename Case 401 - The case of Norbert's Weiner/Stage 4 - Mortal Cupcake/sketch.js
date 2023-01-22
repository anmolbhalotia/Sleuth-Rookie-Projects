/*

Officer: 1820440
CaseNum: 401-3-61986420-1820440

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When either arsenic goes above 0.54, deadlyNightshade goes above 0.52, or perhaps sarin goes above 0.55, reduce methylene by 0.02
	- When either insecticide goes above 0.61, lead dips below 0.51, or perhaps snake_venom dips below 0.45, try increasing methylene by 0.01
	- If deadlyNightshade dips below 0.71, whilst at the same time, sarin goes above 0.59 or lead goes above 0.38, try decreasing aspirin by 0.01
	- When strychnine goes above 0.54, warfarin dips below 0.26, arsenic dips below 0.28, and also insecticide goes above 0.47, try increasing aspirin by 0.03
	- If strychnine goes above 0.43 or snake_venom goes above 0.74, whilst at the same time, deadlyNightshade dips below 0.48 and sarin goes above 0.57, decrease Sodium_Bicarbonate by 0.05
	- If either insecticide goes above 0.32, arsenic dips below 0.35, or perhaps warfarin goes above 0.32, try increasing Sodium_Bicarbonate by 0.02
	- When either snake_venom goes above 0.69, deadlyNightshade goes above 0.3, or perhaps sarin dips below 0.64, decrease paracetamol by 0.03
	- If strychnine dips below 0.54, warfarin goes above 0.66, lead goes above 0.52, and also arsenic dips below 0.68, increment paracetamol by 0.03
	- If either sarin goes above 0.38, lead goes above 0.32, or perhaps arsenic dips below 0.68, try decreasing Hydrochloric_Acid by 0.01
	- When strychnine dips below 0.74, whilst at the same time, insecticide dips below 0.42 or snake_venom goes above 0.49, raise Hydrochloric_Acid by 0.04


Your conditional statements should:

consider the following poisons:

	- insecticide
	- snake_venom
	- warfarin
	- strychnine
	- deadlyNightshade
	- arsenic
	- sarin
	- lead


and modify the following antidotes:

	- methylene
	- aspirin
	- Sodium_Bicarbonate
	- paracetamol
	- Hydrochloric_Acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var snake_venom;
var warfarin;
var strychnine;
var deadlyNightshade;
var arsenic;
var sarin;
var lead;


//Declare the antidote variables
var methylene;
var aspirin;
var Sodium_Bicarbonate;
var paracetamol;
var Hydrochloric_Acid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	snake_venom = 0.5;
	warfarin = 0.5;
	strychnine = 0.5;
	deadlyNightshade = 0.5;
	arsenic = 0.5;
	sarin = 0.5;
	lead = 0.5;
	methylene = 0.5;
	aspirin = 0.5;
	Sodium_Bicarbonate = 0.5;
	paracetamol = 0.5;
	Hydrochloric_Acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	
	// - When either arsenic goes above 0.54, deadlyNightshade goes above 0.52, or perhaps sarin goes above 0.55, 
	//reduce methylene by 0.02
	if(arsenic >= 0.54 || deadlyNightshade >= 0.52 || sarin >= 0.55)
	{
		methylene -= 0.02;
	}
	// - When either insecticide goes above 0.61, lead dips below 0.51, or perhaps snake_venom dips below 0.45, 
	// try increasing methylene by 0.01
	if(insecticide >= 0.61 || lead <= 0.51 || snake_venom <= 0.45)
	{
		methylene += 0.01;
	}
	// - If deadlyNightshade dips below 0.71, whilst at the same time, sarin goes above 0.59 or lead goes above 0.38, 
	// try decreasing aspirin by 0.01
	if(deadlyNightshade <= 0.71 && (sarin >= 0.59 || lead >= 0.38))
	{
		aspirin -= 0.01;
	}
	// - When strychnine goes above 0.54, warfarin dips below 0.26, arsenic dips below 0.28, and also insecticide goes above 0.47,
	// try increasing aspirin by 0.03
	if(strychnine >= 0.54 && warfarin <= 0.26 && arsenic <= 0.28 && insecticide >= 0.47)
	{
		aspirin += 0.03;
	}
	// - If strychnine goes above 0.43 or snake_venom goes above 0.74, whilst at the same time, deadlyNightshade dips below 0.48 
	// and sarin goes above 0.57, decrease Sodium_Bicarbonate by 0.05
	if((strychnine >= 0.43 || snake_venom >= 0.74) && (deadlyNightshade <= 0.48 && sarin >= 0.57))
	{
		Sodium_Bicarbonate -= 0.05;
	}
	// - If either insecticide goes above 0.32, arsenic dips below 0.35, or perhaps warfarin goes above 0.32,
	// try increasing Sodium_Bicarbonate by 0.02
	if(insecticide >= 0.32 || arsenic <= 0.35 || warfarin >= 0.32)
	{
		Sodium_Bicarbonate += 0.02;
	}
	// - When either snake_venom goes above 0.69, deadlyNightshade goes above 0.3, or perhaps sarin dips below 0.64,
	// decrease paracetamol by 0.03
	if(snake_venom >= 0.69 || deadlyNightshade >= 0.3 || sarin <= 0.64)
	{
		paracetamol -= 0.03;
	}
	// - If strychnine dips below 0.54, warfarin goes above 0.66, lead goes above 0.52, and also arsenic dips below 0.68,
	// increment paracetamol by 0.03
	if(strychnine <= 0.54 && warfarin >= 0.66 && lead >= 0.52 && arsenic <= 0.68)
	{
		paracetamol += 0.03;
	}
	// - If either sarin goes above 0.38, lead goes above 0.32, or perhaps arsenic dips below 0.68, 
	// try decreasing Hydrochloric_Acid by 0.01
	if(sarin >= 0.38 || lead >= 0.32 || arsenic <= 0.68)
	{
		Hydrochloric_Acid -= 0.01;
	}
	// - When strychnine dips below 0.74, whilst at the same time, insecticide dips below 0.42 or snake_venom goes above 0.49,
	// raise Hydrochloric_Acid by 0.04
	if(strychnine <= 0.74 && (insecticide <= 0.42 || snake_venom >= 0.49))
	{
		Hydrochloric_Acid += 0.04;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	snake_venom = nextValue(graphs[1],snake_venom);
	warfarin = nextValue(graphs[2],warfarin);
	strychnine = nextValue(graphs[3],strychnine);
	deadlyNightshade = nextValue(graphs[4],deadlyNightshade);
	arsenic = nextValue(graphs[5],arsenic);
	sarin = nextValue(graphs[6],sarin);
	lead = nextValue(graphs[7],lead);


	methylene = constrain(methylene, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('deadlyNightshade: ' + nf(deadlyNightshade,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('sarin: ' + nf(sarin,1,2), 20,140);
	fill(colors[7]);
	text('lead: ' + nf(lead,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(aspirin,200,'aspirin');
	drawBar(Sodium_Bicarbonate,350,'Sodium_Bicarbonate');
	drawBar(paracetamol,500,'paracetamol');
	drawBar(Hydrochloric_Acid,650,'Hydrochloric_Acid');


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
