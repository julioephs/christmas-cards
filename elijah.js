
let elijah = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******


var myName = "ELIJAH.RI";
var holidayMessage = "    MERRY CHRISTMAS";



//**************SKY*(*******************
background(8, 50, 240); //sets sky to blue



//**************FLOOR*******************
fill(0, 13, 250); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(119, 0, 255);
rect(175,300,50,75,80); //Tree Stub
fill(245, 157, 5);
//add a fill below for tree color
triangle(50,325, 350,325, 200, 50);
fill(255, 0, 4);
triangle(75,250, 325,250, 200, 50);
fill(242, 0, 255);
triangle(100,150, 300,150, 200, 30);
fill(0, 200, 255);
//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("cute/CharacterPinkGirl"), 180, 4, 40,48); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(27, 222, 53);
ellipse(120,288, 50,50);
fill(205, 8, 245);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL
fill(0, 45, 245);
ellipse(250,188, 50,50);
fill(242, 9, 238);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(0, 242, 255);
ellipse(281,285, 50,50);
fill(255, 0, 221);
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

   

 