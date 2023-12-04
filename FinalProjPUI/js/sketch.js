
//reference for making sketch a background https://www.youtube.com/watch?v=OIfEHD3KqCg
//reference for switch statement https://youtu.be/cxppa6dNzxE?si=aL25Euo7g5_UyjUd
// how to access dom events in p5 https://youtu.be/NcCEzzd9BGE?si=iLVc5PtaFnHCkjxx

//variable that will be assigned the option
var Seasonname;

let y = -1200;
let snowflakes = 200;
var canvas;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    //canvas is size of window
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    //canvas is behind htmlcssjs
    canvas.style('z-index', -1);


    const dropdown = document.getElementById('Season');
    dropdown.addEventListener('change', updateScene);

}

 /* 

I need to first access html element of dropdown

Logic:
if the drop down selection = summer the NumScene == 0
if the drop down selection = fall the NumScene == 1
if " =  winter the NumScene == 2
if " = spring the NumScene == 3

*/

function draw() {
    getScene(Seasonname);
}

  // Function to update the selected color based on the dropdown value
function updateScene() {
    Seasonname = document.getElementById('Season').value;
}

function getScene(){
    //each dropdown option must trigger a switch in the Season Scene 
    switch(Seasonname){
        case 'Summer':
            background(221,252,247); 

            break;

        case "Fall":
            background(	255,248,232); 
            break;
        case 'Winter':
            frameRate(5);
            background(	228, 242, 247);
            fill(255);
            noStroke();
            for (let s = 0; s < snowflakes; s++){
                ellipse(random(width), y + random(3000), random(1,10));
            }
            y += 20;

            if (y > 0) {
                y = - 600;
            }
            break;
        case 'Spring':
            background(212,226,205);

            
            break;

    }
}
