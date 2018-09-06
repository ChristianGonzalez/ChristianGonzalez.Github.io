// //on the page being loaded, or resized start the responsiveCanvas function
// window.onload = responsiveCanvas;
// window.onresize = responsiveCanvas;
// //This is used for stopping the animation when the page is resized.
// //If we don't use this the animation will get progressively faster.
// var mouseX = -1,
//     mouseY = -1,
//     button1 = new Button(0, (window.innerHeight * 0.75) - (window.innerHeight / 13), window.innerWidth / 10, window.innerHeight / 13)

// //Add listener to page to get mouse coords when clicked
// document.addEventListener("click", printMousePos);
// function printMousePos(event) {
//     'use strict';
//     if (event.clientY < (window.innerHeight * 0.75)) {
//         mouseX = event.clientX;
//         mouseY = event.clientY;
//     } else {
//         mouseX = -1;
//         mouseY = -1;
//     }
// }

// function mouseClick(cx, cy, button) {
//     'use strict';
//     if (cx !== -1 && cx > button.xl && cx < button.xr && cy > button.yu && cy < button.yd) {
//         return true;
//     }
// }
// function responsiveCanvas() {
//     'use strict';
//     var context = document.getElementById('shenCanvas').getContext('2d'),
//         canvas = context.canvas;
//     //Minus 2 since border is 1px bigc  
//     canvas.width = window.innerWidth - 2;   
//     canvas.height = window.innerHeight * .75;
//     context.fillStyle = "#3c3c3c";
//     context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
//     if (window.currentAnimationFrame !== 0) {
//         window.cancelAnimationFrame(window.currentAnimationFrame);
//     }
    
//     shenInit(context, canvas, true);
// }

// function shenInit(context, canvas, requestAnimation) {
//     'use strict';
//     //This only gets called once
//     //We don't necessarily need this now, but it might be useful down the line

//     if (requestAnimation) {
//         window.currentAnimationFrame = window.requestAnimationFrame(shenLoop);
//     }
// }

// //THE MAIN LOOP
// function shenLoop() {
//     'use strict';
//     var context = document.getElementById('shenCanvas').getContext("2d"),
//         canvas = context.canvas,
//         img = new Image(),
//         scale = 0,
//         imgX = 0,
//         imgY = 0,
//         centerX = 0;
    
//     img.src = 'images/pic.png';
//     //clear canvas then redraw the background
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.fillStyle = "grey";
//     context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
//     button1.drawButton(context)
    
//     if (button1.isClicked(mouseX, mouseY)) {
//         scale = (canvas.height >= canvas.width ? canvas.width / img.width: (canvas.height - (window.innerHeight / 13)) / img.height);
//         imgX = img.width * scale;
//         imgY = img.height * scale;
//         centerX = (canvas.width / 2) - (imgX / 2);``
//         context.drawImage(img, 0, 0, img.width, img.height,
//                          centerX, 0, imgX, imgY);
//         context.font = "30px Arial";
//         context.fillText(mouseX + " " + mouseY, 10, 50);
//     }
    
//     window.currentAnimationFrame = window.requestAnimationFrame(shenLoop);
// }

const NOOP = () => {};

class Entity {
    constructor(drawFn) {
        // this.x = 0;
        // this.y = 0;
        // this.width = 0;
        // this.height = 0;
        // this.rotation = 0;
        this.draw = drawFn || NOOP;
    }

    // get position() {
    //     return { x: this.x, y: this.y };
    // }
}

const Button = (x, y, txt) => (
    new Entity(() => {
        fill(255);
        rect(x, y, 100, 50);
        fill(0);
        text(txt, x + 10, y + 10);
    })
);

const entities = [];

function processEntities() {
    entities.forEach(entity => {
        push();
        entity.draw();
        pop();
    });
}

function setup() {
    const canvas = createCanvas(700, 410);
    canvas.parent('contentArea');
    frameRate(30);
    angleMode(DEGREES);
    background(0);

    entities.push(Button(150, 150, 'Hello'))
    entities.push(Button(400, 150, 'Button'));
}
  
function draw() {
    fill(255);
    textSize(16);
    rect(50,50,50,50);
    processEntities();
}

function mouseClicked() {
    rect(mouseX, mouseY, 50, 50);
};

function mouseDragged() {
    rect(mouseX, mouseY, 50, 50);
};