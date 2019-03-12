function Snake(x,y)
{
    this.body=[];
    this.body.push(new bodyPart(x,y));
    this.body[0].color = [0,204,255];
    this.display = function()
    {
        //this.body[0].move();
        for(var i=this.body.length-1; i>=0; i--)
        {
            this.body[i].display();
            //this.body[i].move();
            if(i!=0)//scoate asta cand te vei plictisi
            {
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            }
        }
        this.body[0].move();
    }
    this.addBody = function()
    {
        if(this.body[0].direction == 1 ) {
            
            var x_temp = this.body[this.body.length-1].x - this.body[this.body.length-1].size;
            var y_temp = this.body[this.body.length-1].y;
        }
        else if(this.body[0].direction == 0 ) {
            
            var x_temp = this.body[this.body.length-1].x + this.body[this.body.length-1].size;
            var y_temp = this.body[this.body.length-1].y;
        }
        else if(this.body[0].direction == 3 ) {
            
            var x_temp = this.body[this.body.length-1].x;
            var y_temp = this.body[this.body.length-1].y - this.body[this.body.length-1].size;
        }
        else if(this.body[0].direction == 2 ) {
            
            var x_temp = this.body[this.body.length-1].x;
            var y_temp = this.body[this.body.length-1].y + this.body[this.body.length-1].size;
        }
        this.body.push(new bodyPart(x_temp,y_temp));
    }
    
    this.checkDeath = function()
    {   
        for(var i=1;i<this.body.length;i++)
        {
            var d = dist(this.body[i].x,this.body[i].y,this.body[0].x,this.body[0].y);
            if(d <= 2)
            {
                return true;
            }
        }
        return false;
    }
}








