
let isaac = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******

var myName = "Isaac";
var holidayMessage = "Merry Honukka";



//**************SKY*(*******************
background(156, 222, 255); //sets sky to blue



//**************FLOOR*******************
fill(160, 255, 143); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(184, 138, 0);
rect(175,300,50,75,80); //Tree Stub
//add a fill below for tree color
fill(52, 184, 0);
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("cute/Star"),180, -20, 40,74); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(230, 49, 49);
ellipse(120,288, 50,50);
fill(255, 0, 0);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL
fill(218, 51, 230);
ellipse(240,188, 50,50);
arc(240,188,50,20,0,180);
arc(240,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(51, 137, 230);
ellipse(280,285, 50,50);
arc(280,285,50,20,0,180);
arc(280,275,50,20,0,180);

//**************ORNAMENT Four*******************
//ADD FILL
fill(11, 51, 94);
ellipse(140,226, 50,50);
arc(140,221,50,20,0,180);
arc(140,232,50,20,0,180);

//***************TEXT***************************
//setup font and black text
var fontChosen = createFont("cursive"); //setups cursive font
fill(0, 0, 0); //make text black

//dispaly "Made by ..." text and set font size to 15 
textFont(fontChosen,15);
text("Created by " + myName, 250, 375, 200, 100);

//display "message" text and set font size to 30
textFont(fontChosen,30);
text(holidayMessage, 90, 60, 273, 100);
//  image(getImage("cute/GemOrange"),207,73,50,66);
//  image(getImage("cute/GemBlue"),140,117,50,66);
// image(getImage("cute/GemGreen"),174,258,50,66);

   }};

   

 