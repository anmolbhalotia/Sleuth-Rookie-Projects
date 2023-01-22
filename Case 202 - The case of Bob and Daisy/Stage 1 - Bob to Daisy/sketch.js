/*

Officer: 1820440
CaseNum: 202-0-37452829-1820440

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Slate Blue text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(561,466);
	textFont(letterFont);
	textSize(23);
}

function draw()
{
	background(255);

	fill(0,255,255);
	//text("Oh", 13,23);
	fill(34,139,34);
	//text("ssed", 46,117);
	fill(0,255,0);
	//text("sunny", 434,191);
	fill(0,128,0);
	//text("those", 349,240);
	fill(173,216,230);
	//text("of", 471,168);
	fill(135,206,235);
	//text("From", 144,215);
	fill(0,128,0);
	//text("hear", 215,93);
	fill(240,128,128);
	//text("of", 181,117);
	//text("love.", 423,264);
	fill(0,255,255);
	//text("You", 301,191);
	fill(30,144,255);
	//text("luckiest", 7,140);
	fill(220,20,60);
	//text("I", 208,240);
	fill(255,69,0);
	//text("the", 437,117);
	fill(222,184,135);
	//text("quiet", 81,93);
	fill(199,21,133);
	//text("?", 289,69);
	//text("you", 164,264);
	fill(0,255,255);
	//text("voice", 333,93);
	fill(219,112,147);
	//text("is", 331,69);
	fill(165,42,42);
	//text("since", 68,168);
	fill(75,0,130);
	//text("in", 57,215);
	fill(0,128,128);
	//text("last", 180,168);
	fill(124,252,0);
	//text("the", 446,93);
	fill(218,165,32);
	//text("my", 391,191);
	fill(135,206,250);
	//text("lovely", 53,23);
	fill(107,142,35);
	//text("and", 69,310);
	//text("nds", 61,264);
	//text("that", 110,264);
	fill(205,133,63);
	//text("harp.", 255,117);
	//text("your", 360,140);
	fill(178,34,34);
	//text("Daisy,", 128,23);
	//text("music", 106,117);
	fill(0,250,154);
	//text("day", 7,215);
	fill(219,112,147);
	//text("Ever", 9,168);
	fill(238,232,170);
	//text("the", 206,215);
	fill(255,105,180);
	//text("your", 11,240);
	fill(0,250,154);
	//text("I", 459,215);
	fill(255,105,180);
	//text("I", 62,69);
	fill(139,69,19);
	//text("seco", 8,264);
	fill(210,105,30);
	//text("lovely", 70,240);
	fill(0,0,205);
	//text("saw", 473,215);
	fill(255,0,255);
	//text("confession", 159,69);
	//text("kisses,", 120,310);
	fill(106,90,205);
	text("date", 228,168);
	text("chosen", 419,140);
	text("first", 251,215);
	fill(127,255,0);
	//text("were", 214,264);
	fill(128,128,0);
	//text("few", 420,240);
	//text("knew", 222,240);
	fill(255,0,0);
	//text("my", 276,264);
	//text("moment", 302,215);
	fill(0,0,128);
	//text("d", 66,191);
	fill(255,165,0);
	//text("that", 249,140);
	fill(154,205,50);
	//text("am", 440,69);
	fill(255,140,0);
	//text("one", 319,264);
	fill(238,232,170);
	//text("I", 322,117);
	fill(250,128,114);
	//text("I", 287,168);
	fill(75,0,130);
	//text("live", 202,140);
	fill(148,0,211);
	//text("lone", 497,69);
	fill(106,90,205);
	text("a", 138,69);
	fill(100,149,237);
	//text("only", 350,168);
	fill(0,250,154);
	//text("true", 369,264);
	fill(0,255,127);
	//text("your", 7,191);
	fill(240,230,140);
	//text("the", 36,93);
	fill(186,85,211);
	//text("the", 210,117);
	fill(127,255,212);
	//text("like", 401,93);
	fill(0,255,127);
	//text("ble", 11,117);
	fill(255,140,0);
	//text("are", 348,191);
	//text("your", 274,93);
	fill(25,25,112);
	//text("be", 401,117);
	//text("green", 160,191);
	fill(244,164,96);
	//text("that", 147,93);
	fill(255,0,0);
	//text("I", 426,69);
	fill(250,128,114);
	//text("make", 76,69);
	fill(50,205,50);
	//text("I", 201,93);
	fill(106,90,205);
	text("April", 85,215);
	fill(72,209,204);
	//text("a", 188,140);
	fill(233,150,122);
	//text("person", 102,140);
	fill(255,127,80);
	//text("that", 405,215);
	//text("Bob", 7,356);
	//text("am", 317,140);
	fill(173,255,47);
	//text("must", 336,117);
	fill(148,0,211);
	//text("a", 483,69);
	fill(173,255,47);
	//text("May", 7,69);
	fill(255,99,71);
	//text("Love", 7,310);
	fill(127,255,212);
	//text("x", 59,356);
	fill(152,251,152);
	//text("can", 301,168);
	//text("eyes.", 233,191);
	//text("face,", 145,240);
	fill(238,232,170);
	//text("I", 303,140);
	fill(255,215,0);
	//text("when", 356,69);
	fill(255,255,0);
	//text("from", 290,240);
	fill(128,128,0);
	//text("in", 8,93);
	//text("It", 308,69);
	fill(255,215,0);
	//text("our", 135,168);
	//text("arling,", 81,191);
	fill(240,230,140);
	//text("think", 406,168);



}
