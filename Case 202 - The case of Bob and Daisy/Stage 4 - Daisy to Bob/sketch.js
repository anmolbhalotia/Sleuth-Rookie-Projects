/*

Officer: 1820440
CaseNum: 202-3-37971488-1820440

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Coral filled text with a Dark Green outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(638,498);
	textSize(30);
}

function draw()
{
	background(255);

	fill(64,224,208);
	stroke(0,191,255);
	textFont(Ballpointprint);
	//text("relationship", 273,194);
	fill(30,144,255);
	stroke(255,0,255);
	//text("away", 347,157);
	fill(244,164,96);
	stroke(128,128,0);
	textFont(RonsFont);
	//text("You", 486,194);
	fill(255,69,0);
	stroke(0,255,127);
	//text("I", 7,90);
	fill(0,255,255);
	stroke(160,82,45);
	textFont(Melissa);
	//text("conti", 347,90);
	fill(240,230,140);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("s", 291,266);
	push();
	fill(128,0,128);
	stroke(75,0,130);
	//text("these", 268,90);
	pop();
	stroke(127,255,0);
	textFont(Diggity);
	//text("I'm", 249,230);
	push();
	fill(220,20,60);
	stroke(50,205,50);
	textFont(Melissa);
	//text("I", 273,120);
	pop();
	fill(65,105,225);
	textFont(RonsFont);
	//text("Perhaps", 87,157);
	fill(0,0,205);
	stroke(0,0,255);
	//text("are", 540,194);
	fill(147,112,219);
	stroke(210,105,30);
	//text("much", 439,230);
	fill(0,255,0);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("?", 179,120);
	fill(135,206,235);
	stroke(160,82,45);
	//text("Forever", 17,326);
	push();
	fill(107,142,35);
	stroke(128,0,0);
	textFont(Melissa);
	//text("?", 77,266);
	pop();
	fill(244,164,96);
	//text("no", 69,90);
	fill(165,42,42);
	stroke(0,128,128);
	textFont(Melissa);
	//text("avoidi", 546,120);
	fill(220,20,60);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("we", 183,157);
	fill(0,255,255);
	stroke(165,42,42);
	//text("should", 230,157);
	fill(128,0,0);
	stroke(0,250,154);
	//text("sort", 19,194);
	fill(255,215,0);
	stroke(255,69,0);
	textFont(Melissa);
	//text("ng", 592,120);
	fill(0,250,154);
	textFont(Diggity);
	//text("take", 19,266);
	fill(0,0,205);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("Daisy", 7,386);
	fill(128,0,128);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("The", 93,266);
	fill(75,0,130);
	stroke(0,128,0);
	textFont(Melissa);
	//text("short", 9,120);
	fill(165,42,42);
	stroke(0,255,255);
	//text("If", 213,120);
	push();
	fill(72,209,204);
	stroke(128,0,0);
	//text("yours,", 118,326);
	pop();
	fill(139,0,139);
	//text("can", 592,230);
	fill(0,0,139);
	stroke(210,105,30);
	textFont(Ballpointprint);
	//text("out.", 153,194);
	fill(255,165,0);
	stroke(184,134,11);
	textFont(Melissa);
	//text("I", 576,230);
	fill(176,224,230);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("go", 307,157);
	fill(255,99,71);
	stroke(0,250,154);
	textFont(Melissa);
	//text("My", 17,30);
	fill(139,0,139);
	stroke(0,255,127);
	//text("secrets,", 159,266);
	fill(128,0,0);
	stroke(153,50,204);
	textFont(RonsFont);
	//text("of", 63,120);
	push();
	fill(255,127,80);
	stroke(0,100,0);
	text("safe", 403,194);
	pop();
	stroke(0,191,255);
	textFont(Ballpointprint);
	//text("longer", 105,90);
	push();
	fill(244,164,96);
	stroke(153,50,204);
	//text("a", 447,157);
	pop();
	fill(65,105,225);
	//text("more", 511,230);
	fill(0,250,154);
	stroke(0,0,205);
	textFont(Melissa);
	//text("da", 50,30);
	fill(30,144,255);
	stroke(0,139,139);
	textFont(Ballpointprint);
	//text("can", 289,120);
	fill(186,85,211);
	stroke(107,142,35);
	textFont(Diggity);
	//text("all", 124,194);
	fill(160,82,45);
	stroke(255,69,0);
	textFont(Melissa);
	//text("our", 241,194);
	fill(0,206,209);
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("ilence.", 300,266);
	fill(233,150,122);
	stroke(218,165,32);
	textFont(Diggity);
	//text("?", 463,194);
	fill(0,100,0);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("Are", 442,120);
	fill(138,43,226);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("this", 70,194);
	fill(255,69,0);
	stroke(255,69,0);
	textFont(Melissa);
	//text("Bob,", 110,30);
	fill(240,128,128);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("you", 544,90);
	fill(0,0,128);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("me", 17,157);
	fill(255,127,80);
	stroke(0,100,0);
	textFont(RonsFont);
	text("break", 475,157);
	text("ignore", 184,90);
	text("cash", 381,120);
	push();
	fill(123,104,238);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("the", 237,266);
	pop();
	fill(0,206,209);
	stroke(107,142,35);
	textFont(Melissa);
	//text("delays.", 424,90);
	fill(152,251,152);
	stroke(139,69,19);
	textFont(Ballpointprint);
	//text("how", 386,230);
	fill(255,105,180);
	stroke(124,252,0);
	textFont(Melissa);
	//text("and", 552,157);
	fill(255,0,0);
	stroke(0,255,255);
	textFont(Diggity);
	//text("so,", 238,120);
	fill(178,34,34);
	stroke(0,139,139);
	//text("sure", 332,230);
	fill(0,250,154);
	stroke(0,255,127);
	textFont(RonsFont);
	///text("guarded", 12,230);
	push();
	fill(205,133,63);
	stroke(0,250,154);
	textFont(Ballpointprint);
	//text("you", 498,120);
	pop();
	fill(148,0,211);
	stroke(0,128,0);
	textFont(Melissa);
	//text("so", 594,194);
	fill(107,142,35);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("not", 288,230);
	fill(199,21,133);
	stroke(0,0,255);
	//text("sometimes.", 123,230);
	fill(255,255,0);
	stroke(0,206,209);
	textFont(Melissa);
	//text("for", 413,157);
	fill(255,0,255);
	stroke(255,215,0);
	//text("rling", 69,30);
	fill(106,90,205);
	stroke(34,139,34);
	//text("can", 34,90);
	fill(139,69,19);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("Are", 486,90);
	push();
	fill(240,128,128);
	stroke(0,191,255);
	textFont(RonsFont);
	//text("Is", 201,194);
	pop();
	fill(218,112,214);
	stroke(25,25,112);
	textFont(Melissa);
	//text("nual", 388,90);
	fill(32,178,170);
	stroke(255,140,0);
	textFont(RonsFont);
	//text("?", 65,157);
	fill(153,50,204);
	stroke(148,0,211);
	textFont(Melissa);
	//text("send", 336,120);
	fill(128,128,0);
	stroke(255,140,0);
	textFont(Ballpointprint);
	//text("money", 99,120);
	fill(233,150,122);
	stroke(148,0,211);
	textFont(Diggity);
	//text("x", 77,386);



}
