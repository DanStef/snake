var patrat = 20; 
var width = 600;
var height = 600;
function Food(i,j)
{
    this.i = i;
    this.j = j;
    this.x = this.i*patrat;
    this.y = this.j*patrat;
    this.size = 20;
    this.display = function()
    {
        fill(0,255,0);
        rect(this.x,this.y,this.size,this.size);
    }
    
    this.newPiece = function()
    {
        this.i = random(width/patrat);
        this.j = random(height/patrat);
        this.x = floor(this.i)*patrat;
        this.y = floor(this.j)*patrat;
    }
}