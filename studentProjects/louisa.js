
let louisa = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******

var myName = "Louisa";
var holidayMessage = "Merry Christmas";



//**************SKY*(*******************
background(135, 243, 255); //sets sky to blue



//**************FLOOR*******************
fill(245, 245, 245); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(130, 70, 70);
rect(175,300,50,75,80); //Tree Stub

//add a fill below for tree color
fill(40, 168, 40);
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("space/star"), 180, 4, 40,48); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(0, 208, 255);
ellipse(120,288, 50,50);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL
fill(196, 67, 196);
ellipse(250,188, 50,50);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(212, 34, 117);
ellipse(281,285, 50,50);
arc(281,285,50,20,0,180);
arc(281,275,50,20,0,180);

//*************Personal Ornament****************
fill(0, 55, 255);
ellipse(159,178,50,50);
arc(150,158,50,20,0,120);
fill(43, 169, 171);
ellipse(150,180,10,10);
ellipse(170,189,10,10);
ellipse(175,169,10,10);


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

   

 