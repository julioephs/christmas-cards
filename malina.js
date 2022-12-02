
let malina = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******
var myName = "Malina";
var holidayMessage = "merry christmas";



//**************SKY*(*******************
background(135, 243, 255); //sets sky to blue



//**************FLOOR*******************
fill(255,255,255); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(117, 117, 91);
rect(175,300,56,75,80); //Tree Stub
//add a fill below for tree color
fill(30, 105, 66);
triangle(50,325, 350,325, 201, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
 

//**************ORNAMENT ONE*******************
//ADD FILL
ellipse(120,288, 50,50);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);
fill(110, 24, 33);
//**************ORNAMENT TWO*******************
//ADD FILL
ellipse(250,188, 50,50);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);
fill(80, 176, 28);
//**************ORNAMENT THREE*******************
//ADD FILL
ellipse(281,285, 50,50);
arc(281,285,50,20,0,180);
arc(281,275,50,20,0,180);
fill(135, 22, 133);
//**************ORNAMENT THREE*******************
//ADD FILL
ellipse(203,285, 50,50);
arc(203,285,46,20,0,180);
arc(203,275,50,20,0,180);
fill(38, 50, 189);
//***************TEXT***************************
//setup font and black text
 var fontChosen= createFont("cursive"); //setups cursive font
fill(207, 116, 207); //make text black

//dispaly "Made by ..." text and set font size to 15 
textFont(fontChosen,15);
text("Made by " + myName, 250, 375, 200, 100);

//display "message" text and set font size to 30
textFont(fontChosen,30);
text(holidayMessage, 115, 25, 200, 100);


   }};

   

 