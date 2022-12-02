
let chauncey = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******


var myName = "Chauncey";
var holidayMessage = "Christmas";



//**************SKY*(*******************
background(24, 95, 102); //sets sky to dark 



//**************FLOOR*******************
fill(150, 15, 98); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(133, 61, 28);
rect(175,300,50,75,80); //Tree Stub
fill(40, 107, 28);
//add a fill below for tree color
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("space/star"), 180, 4, 40,48); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(219, 27, 27);
ellipse(120,290, 50,50);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL 
fill(186, 52, 141);
ellipse(250,188, 50,50);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(30, 96, 150);
ellipse(281,285, 50,50);
arc(281,285,50,20,0,180);
arc(281,275,50,20,0,180);


//***************TEXT***************************
//setup font and black text
var fontChosen = createFont("cursive"); //setups cursive font
fill(232, 229, 232); //make text black

//dispaly "Made by ..." text and set font size to 15 
textFont(fontChosen,15);
text("Made by " + myName, 250, 375, 200, 100);

//display "message" text and set font size to 30
textFont(fontChosen,30);
text(holidayMessage, 115, 25, 200, 100);

   }};

   

 