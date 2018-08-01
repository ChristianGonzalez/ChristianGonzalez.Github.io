//on the page being loaded, or resized start the responsiveCanvas function
window.onload = responsiveCanvas;
window.onresize = responsiveCanvas;
//This is used for stopping the animation when the page is resized.
//If we don't use this the animation will get progressively faster.
var currentAnimationFrame = 0;    


function responsiveCanvas() {
    'use strict';
    var context = document.getElementById('shenCanvas').getContext('2d'),
        canvas = context.canvas;
    
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
    var context = document.getElementById('solarSystem').getContext("2d"),
        canvas = context.canvas;

    //clear canvas then redraw the background
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#3c3c3c";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    

    window.currentAnimationFrame = window.requestAnimationFrame(planetMovement);
}



