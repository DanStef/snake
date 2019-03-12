var height = 600;
var width = 600;
function bodyPart(x,y)
{
    this.x = x;
    this.y = y;
    this.size = 20;
    this.direction = 1;
    this.vel = 20;
    this.color = [255,255,0];
    
    this.display = function()
    {
        fill(this.color);
        //rectMode(CENTER);
        rect(this.x,this.y,this.size,this.size);
    }
    
    this.move = function()
    {
        if(this.direction == 0)
        {
            this.x = this.x - this.vel;
        }
        else if(this.direction == 1)
        {
            this.x = this.x + this.vel;
        }
        else if(this.direction == 2)
        {
            this.y = this.y - this.vel;
        }
        else if(this.direction == 3)
        {
            this.y = this.y + this.vel;
        }
        
        if(this.x < 0) {
            this.x = width - this.size;
        }
        if(this.x >= width) {
            this.x = 0;
        }
        if(this.y < 0) {
            this.y = height - this.size;
        }
        if(this.y >= height) {
            this.y = 0;
        }
    }
    
    this.intersectFood = function(food) {
        var d = dist(this.x,this.y,food.x,food.y);
        
        if(d < this.size/2 + food.size/2) {
            return true;
        }
        
        return false;
    }
}