
let emma = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******


var myName = "Emms";
var holidayMessage = "    Marry Christmas ";



//**************SKY*(*******************
background(242, 27, 41); //sets sky to blue



//**************FLOOR*******************
fill(37, 161, 122); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************
//Tree Stub 
fill (130, 30, 30); 
rect(175,300,50,75,80);
//draw tree
fill(12, 128, 21); //color tree
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("cute/Star"), 180, 4, 40,48); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(224, 18, 18);
ellipse(119,288, 50,50);
arc(120,288,50,20,0,180);
arc(120,280,50,20,0,180);

//**************ORNAMENT TWO*******************
//ADD FILL
fill (0, 255, 89);
ellipse(250,188, 50,50);
arc(250,188,50,20,0,180);
arc(250,180,50,20,0,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill (38, 94, 235);
ellipse(281,284, 50,50);
arc(281,285,50,20,0,180);
arc(281,275,50,20,0,180);

//*************ORNAMENT FOUR*******************
fill (173, 45, 156);
ellipse(151,188, 49,48);
arc(151, 189, 50, 20,0,180);
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

   

 