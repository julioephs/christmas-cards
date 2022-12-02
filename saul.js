
let saul = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******


var myName = "saul";
var holidayMessage = "merry christmas";



//**************SKY*(*******************
background(135, 243, 255); //sets sky to blue



//**************FLOOR*******************
fill(230, 218, 230); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(78, 82, 78);
rect(175,300,50,75,80); //Tree Stub
//add a fill below for tree color
fill(75, 181, 40);
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR



//**************ORNAMENT ONE*******************
//ADD FILL
fill(225, 255, 0);
ellipse(120,288, 50,50);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL
fill(0, 255, 255);
ellipse(250,188, 50,50);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(255, 0, 0);
ellipse(281,285, 50,50);
arc(281,285,50,20,0,180);
arc(281,275,50,20,0,180);


//***************TEXT***************************
//setup font and black text
var fontChosen = createFont("cursive"); //setups cursive font
fill(0, 0, 0); //make text black

//dispaly "Made by ..." text and set font size to 15 
textFont(fontChosen,15);
text("Made by " + myName, 250, 375, 200, 100);

//display "message" text and set font size to 30
textFont(fontChosen,30);
text(holidayMessage, 115, 25, 200, 100);












   }};

   

 