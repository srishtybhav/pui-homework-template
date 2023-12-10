
//reference for making sketch a background https://www.youtube.com/watch?v=OIfEHD3KqCg
//reference for switch statement https://youtu.be/cxppa6dNzxE?si=aL25Euo7g5_UyjUd
// how to access dom events in p5 https://youtu.be/NcCEzzd9BGE?si=iLVc5PtaFnHCkjxx

//variable that will be assigned the option
var Seasonname;
let y = -1200;
let snowflakes = 200;
let leaves = 200;
var canvas;
let ywave = 0.0;


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

        case "Summer":
            background(120,228,255); 
            circle()

            fill(0,157,196); // ocean blue
    
            //create perlin noise graph to look like waves

            noStroke();
            beginShape();

            let xwave = 0;
            for (let x = 0; x <= width; x += 10) {
              let y = map(noise(xwave, ywave), 0, 1, 100, 300);

              vertex(x, y);

              xwave += 0.03; //increment small waves
            }

            ywave += 0.01;
            vertex(width+1000, windowHeight);
            vertex(0, windowHeight);
            endShape(CLOSE);
            break;
        case "Fall":
            var leafcoloroptions = [color(161, 86, 28), color(222, 136, 45), color(190, 58, 52), color(106, 144,51), color(207, 181, 0), color(85, 80, 37) ];
            let leaffill = random(leafcoloroptions);
            frameRate(5);
            background(59,79,2); 
//fallingleaves
                noStroke();
                for (let l = 0; l < leaves; l++){
                    push()
                    fill(leaffill);
                    rotate(random(360));
                    ellipse(random(width), y + random(3000), 25, 50);
                    //line(200, y + 175, 200, 275);
                    pop();
                }
                y += 20;

                if (y > 0) {
                    y = - 600;
                }

            break;
        case 'Winter':
//snowfall animation
            frameRate(5);
            background(211,225,255);
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

//floweranimation
            frameRate(3);
            var flowercoloroptions = [color(255, 204, 153), color(255, 153, 204), color(204, 153, 255), color(153, 204, 255), color(204, 204, 255), color(204, 255, 153) ];
            let flowerfill = random(flowercoloroptions);
            
            push()
            background(212,226,205);
            noStroke();
            x = random(0, width);
            y = random(0, height);
            var size = 40;
            var flowers = 200;

            for (let f = 0; f < flowers; f+5){
                fill(flowerfill);
                ellipse(x, y + size/2, size);
                ellipse(x, y - size/2, size);
                ellipse(x + size/2, y, size);
                ellipse(x - size/2, y, size);
                stroke(2);
                fill(255, 255, 204);
                noStroke();
                ellipse(x, y, size-10);
            }
            break;

    }


}


