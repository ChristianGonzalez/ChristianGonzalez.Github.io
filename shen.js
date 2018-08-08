//on the page being loaded, or resized start the responsiveCanvas function
window.onload = responsiveCanvas;
window.onresize = responsiveCanvas;
//This is used for stopping the animation when the page is resized.
//If we don't use this the animation will get progressively faster.
var currentAnimationFrame = 0,
    mouseX = -1,
    mouseY = -1,
    button1={
        xl: 0,
        xr: 100,
        yu: 280,
        yd: 320
    };


//Add listener to page to get mouse coords when clicked
document.addEventListener("click", printMousePos);
function printMousePos(event) {
    if(event.clientY < window.innerHeight/2){
        mouseX = event.clientX;
        mouseY = event.clientY;
    }else{
        mouseX = -1;
        mouseY = -1;
    }
}

function responsiveCanvas() {
    'use strict';
    var context = document.getElementById('shenCanvas').getContext('2d'),
        canvas = context.canvas;
    //Minus 2 since border is 1px big
    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight / 2;
    context.fillStyle = "#3c3c3c";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    if (window.currentAnimationFrame !== 0) {
        window.cancelAnimationFrame(window.currentAnimationFrame);
    }   
    
    shenInit(context, canvas, true);
}

function shenInit(context, canvas, requestAnimation){
    //This only gets called once
    //We don't necessarily need this, but it might be useful down the line

    if(requestAnimation){
        window.currentAnimationFrame = window.requestAnimationFrame(shenLoop)
    }
}

//THE MAIN LOOP
function shenLoop(){
    var context = document.getElementById('shenCanvas').getContext("2d"),
        canvas = context.canvas,
        img = new Image();

    //clear canvas then redraw the background
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "grey";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillStyle = "black";
    context.fillRect(button1.xl, button1.yu, 100, 100)

    //Check if button pressed(Probably make a little function to check so we don't have lots of big if statements)
    if(mouseX != -1 && mouseX > button1.xl && mouseX < button1.xr && mouseY > button1.yu && mouseY < button1.yd){
        //Figure out scaling images
        img.src = 'images/pic.png';
        context.drawImage(img, 0, 0);
        context.font = "30px Arial";
        context.fillText(mouseX +" "+mouseY, 10, 50);
    }
    window.currentAnimationFrame = window.requestAnimationFrame(shenLoop);
}



