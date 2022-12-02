
let mario = function(processingInstance) {
    with (processingInstance) {
     size(400, 400); 
     frameRate(30);

//*****STUDENT CODE BELOW(((((((*******


var myName = "Mario";
var holidayMessage = "merry christmas!!!!";



//**************SKY*(*******************
background(135, 243, 255); //sets sky to blue



//**************FLOOR*******************
fill(255, 255, 255); //sets floor to white
rect(-27,300,430,321);
fill(176, 134, 86);


//**************TREE*******************

//add a fill below for tree stub color
rect(175,300,50,75,80); //Tree Stub
//add a fill below for tree color
fill(79, 196, 58);
triangle(50,325, 350,325, 200, 50);
triangle(75,250, 325,250, 200, 50);
triangle(100,150, 300,150, 200, 30);

//tree top decoration
//REPLACE MY DINOSAUR WITH A STAR
// image(getImage("cute/Star"), 175, -18, 52,70); 



//**************ORNAMENT ONE*******************
//ADD FILL
fill(235, 87, 87);
ellipse(120,288, 37,37);


//**************ORNAMENT TWO*******************
//ADD FILL
fill(129, 0, 242);
ellipse(250,188, 37,37);

//**************ORNAMENT THREE*******************
//ADD FILL
fill(17, 217, 174);
ellipse(281,285, 37,37);


//***************TEXT***************************
//setup font and black text
// var fontChosen = createFont("cursive"); //setups cursive font
fill(0, 0, 0); //make text black

//dispaly "Made by ..." text and set font size to 15 
// textFont(fontChosen,19);
text("Made by " + myName, 250, 375, 200, 100);

//display "message" text and set font size to 30
// textFont(fontChosen,18);
text(holidayMessage, 21, 32, 205, 98);

//ornament 4
fill(189, 85, 85);
ellipse(169, 111, 37,37);

//ornament 5
// fill(196, 63, 183);
ellipse(173,211,37,37);

//decoration
// image(getImage("cute/CharacterBoy"), -5, 225, 63,112); 


   }};

   

 