
let salatiel = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******

var myName = "Salatiel";
var holidayMessage = "Merry christmas";



//**************SKY*(*******************
background(135, 243, 255); //sets sky to blue



//**************FLOOR*******************
fill(255,255,255); //sets floor to white
rect(-27,300,430,321);



//**************TREE*******************

//add a fill below for tree stub color
fill(92, 41, 41);
rect(175,300,50,75,80); //Tree Stub
//add a fill below for tree color
fill(0, 8, 0);
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("cute/Star"), 180, 4, 40,48); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(234, 255, 0);

fill(0, 196, 255);


//**************ORNAMENT TWO*******************
//ADD FILL
fill(255, 255, 255);
ellipse(241,156, 50,50);
fill(250, 249, 240);
arc(205,239,177,20,-19,180);
arc(241,160,14,21,-176,180);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(26, 0, 255);

fill(255, 0, 0);



//**************ORNAMENT TWO*******************
//ADD FILL
fill(250, 247, 250);
ellipse(156,158, 50,50);
fill(247, 248, 250);
arc(155,160,16,20,-179,180);


//***************TEXT***************************
//setup font and black text
var fontChosen = createFont("cursive"); //setups cursive font
fill(255, 0, 55); //make text black

//dispaly "Made by Salatiel" text and set font size to 15 
textFont(fontChosen,15);
text("Made by" + myName, 286, 375, 200, 100);

//display "message" text and set font size to 30
textFont(fontChosen,30);
text(holidayMessage, 19, 17, 200, 100);

// image(getImage("space/6") ,160, 252, 72,55); 




   }};

   

 