//Classes file

class Button {
    //Origin x and y, length, and width
    constructor(x, y, w, l) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.w = w;
    }
    
    //Paramaters are cursor x, and cursor y
    //Given cursor location find if button is clicked
    //NOT DONE YET
    isClicked(cx, cy) {
        if (cx > this.x && cx < (this.x + this.w) && cy > this.y && cy < (this.y + this.l)) {
           return true;
        }
        
        return false;
    }
            
    drawButton(context, color = "black") {
        context.fillStyle = color;
        context.fillRect(this.x, this.y, this.w, this.l);
    
    }
}