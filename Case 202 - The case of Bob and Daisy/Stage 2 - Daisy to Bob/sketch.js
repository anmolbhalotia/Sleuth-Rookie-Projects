/*

Officer: 1820440
CaseNum: 202-1-75047069-1820440

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Slate Blue filled text with a Dark Red outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(588,789);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

	fill(255,255,0);
	stroke(127,255,0);
	//text("my", 404,368);
	fill(199,21,133);
	stroke(165,42,42);
	//text("longer", 204,449);
	fill(255,165,0);
	//text("your", 12,328);
	fill(205,133,63);
	stroke(160,82,45);
	//text("My", 8,34);
	fill(0,250,154);
	stroke(128,128,0);
	//text("is", 531,138);
	fill(255,165,0);
	stroke(32,178,170);
	//text("this", 108,483);
	fill(106,90,205);
	stroke(199,21,133);
	//text("desolate.", 373,411);
	fill(154,205,50);
	stroke(255,140,0);
	//text("think", 477,254);
	fill(233,150,122);
	stroke(0,100,0);
	//text("I", 426,175);
	fill(186,85,211);
	stroke(0,128,0);
	//text("stare", 410,213);
	fill(127,255,212);
	stroke(107,142,35);
	//text("it", 13,175);
	fill(0,250,154);
	stroke(0,191,255);
	//text("around", 408,102);
	fill(250,128,114);
	stroke(255,140,0);
	//text("Forever", 11,591);
	fill(255,99,71);
	stroke(107,142,35);
	//text("you.", 139,291);
	fill(75,0,130);
	stroke(255,140,0);
	//text("return.", 190,328);
	fill(139,0,139);
	stroke(0,128,0);
	//text("without", 146,368);
	fill(186,85,211);
	stroke(139,0,0);
	//text("to", 532,175);
	fill(106,90,205);
	stroke(128,0,128);
	//text("many", 284,138);
	fill(222,184,135);
	stroke(255,0,255);
	//text("at", 359,368);
	fill(250,128,114);
	stroke(0,255,127);
	//text("How", 11,449);
	fill(255,215,0);
	stroke(160,82,45);
	//text("miss", 118,102);
	fill(255,0,255);
	stroke(0,206,209);
	//text("How", 11,102);
	fill(255,105,180);
	stroke(165,42,42);
	//text("?", 397,175);
	fill(144,238,144);
	stroke(0,128,128);
	//text("sid", 468,368);
	fill(139,69,19);
	stroke(124,252,0);
	//text("months", 391,138);
	fill(139,0,0);
	stroke(128,0,0);
	//text("we", 146,175);
	fill(240,128,128);
	stroke(0,100,0);
	//text("much", 97,449);
	fill(65,105,225);
	stroke(210,105,30);
	//text("longing", 181,483);
	fill(0,128,0);
	stroke(154,205,50);
	//text("my", 218,213);
	fill(139,0,0);
	stroke(0,191,255);
	//text("ing", 372,291);
	fill(138,43,226);
	stroke(165,42,42);
	//text("united", 125,523);
	fill(199,21,133);
	stroke(178,34,34);
	//text("n", 129,254);
	fill(128,0,128);
	stroke(0,0,139);
	//text("When", 348,483);
	fill(0,255,0);
	stroke(0,255,127);
	//text("this", 12,411);
	fill(0,0,255);
	stroke(255,140,0);
	//text("can", 404,254);
	fill(139,0,139);
	stroke(0,0,128);
	//text("I", 378,449);
	fill(107,142,35);
	stroke(0,139,139);
	//text("in", 176,213);
	fill(218,165,32);
	stroke(255,215,0);
	//text("in", 411,328);
	fill(255,69,0);
	stroke(139,0,139);
	//text("having", 207,102);
	fill(75,0,130);
	stroke(0,255,127);
	//text("sky,", 228,254);
	fill(160,82,45);
	stroke(127,255,0);
	//text("I", 389,213);
	fill(219,112,147);
	stroke(75,0,130);
	//text("x", 116,659);
	fill(184,134,11);
	stroke(255,0,0);
	//text("?", 351,523);
	fill(0,255,127);
	stroke(199,21,133);
	//text("do", 324,449);
	fill(255,0,255);
	stroke(128,0,0);
	//text("last", 206,175);
	fill(135,206,235);
	stroke(128,128,0);
	//text("Bob,", 198,34);
	fill(210,105,30);
	stroke(127,255,0);
	//text("we", 11,523);
	stroke(154,205,50);
	//text("ight", 151,254);
	fill(255,0,255);
	stroke(25,25,112);
	//text("the", 17,138);
	fill(238,130,238);
	stroke(0,139,139);
	//text("e,", 517,368);
	fill(0,0,128);
	stroke(0,128,128);
	//text("I", 97,102);
	fill(240,230,140);
	stroke(153,50,204);
	//text("darling", 68,34);
	fill(135,206,235);
	stroke(50,205,50);
	//text("bank", 287,291);
	fill(139,0,0);
	stroke(199,21,133);
	//text("you", 285,368);
	fill(106,90,205);
	stroke(139,0,0);
	text("at", 17,254);
	text("store", 11,483);
	fill(222,184,135);
	stroke(255,69,0);
	//text("I", 383,254);
	fill(238,130,238);
	stroke(153,50,204);
	//text("the", 453,328);
	fill(218,165,32);
	stroke(178,34,34);
	//text("again", 245,523);
	fill(0,0,205);
	stroke(0,0,255);
	//text("on", 436,291);
	fill(240,128,128);
	stroke(32,178,170);
	//text("ssed", 307,175);
	fill(135,206,250);
	stroke(255,0,255);
	//text("of", 95,291);
	fill(147,112,219);
	stroke(139,0,139);
	//text("yours,", 151,591);
	fill(255,105,180);
	stroke(46,139,87);
	//text("feels", 281,411);
	fill(255,99,71);
	stroke(25,25,112);
	//text("you", 102,213);
	fill(250,128,114);
	stroke(0,0,255);
	//text("have", 399,449);
	fill(173,255,47);
	stroke(0,139,139);
	//text("only", 12,291);
	fill(138,43,226);
	stroke(0,255,127);
	//text("the", 62,254);
	fill(160,82,45);
	stroke(255,165,0);
	//text("be", 71,523);
	fill(0,191,255);
	stroke(0,191,255);
	//text("since", 46,175);
	fill(106,90,205);
	stroke(0,255,255);
	//text("?", 319,483);
	fill(34,139,34);
	stroke(218,165,32);
	//text("will", 458,483);
	fill(0,255,0);
	stroke(148,0,211);
	//text("How", 198,138);
	fill(0,128,128);
	stroke(255,140,0);
	//text("Even", 316,328);
	fill(0,0,128);
	stroke(210,105,30);
	//text("ki", 278,175);
	fill(127,255,212);
	stroke(0,0,205);
	//text("place.", 84,138);
	fill(255,0,0);
	stroke(128,0,128);
	//text("to", 494,449);
	fill(0,0,205);
	stroke(139,69,19);
	//text("small", 85,411);
	fill(255,140,0);
	stroke(0,191,255);
	//text("you", 334,102);
	fill(0,0,128);
	stroke(220,20,60);
	//text("spring,", 17,368);
	fill(255,105,180);
	stroke(160,82,45);
	//text("and", 307,254);
	fill(100,149,237);
	stroke(0,255,255);
	//text("I'm", 224,291);
	fill(128,0,128);
	stroke(34,139,34);
	//text("Daisy", 11,659);
	fill(0,0,205);
	stroke(0,0,205);
	//text("long", 447,175);
	fill(0,100,0);
	stroke(184,134,11);
	//text("arms.", 282,213);
	fill(106,90,205);
	stroke(139,0,0);
	text("up", 507,213);
	text("swift", 100,328);
	text("hold", 17,213);
	text("town", 186,411);



}
