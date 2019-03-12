var end = false;
var scale = 20; 
var patrat = 20;
var score = 0;
var rows = 600/scale;
var cols = 600/scale;
function setup() {
	createCanvas(600, 600);
    snake = new Snake(width/2,height/2);
    food = new Food(floor(random(width/patrat)),floor(random(height/patrat)));
    frameRate(10);
}

function draw() {
    background(0);
    end = snake.checkDeath();
    
    fill(255);
    textSize(10);
    textAlign(CENTER);
    text("Score:"+score,500,30);
    
    if(end)
    {
        fill(255);
        textSize(30);
        textAlign(CENTER);
        text("Game over",width/2,height/2);
    }
    else
    {
        for(var i=0;i<rows;i++){
            for(var j=0;j<cols;j++) {
                noFill();
                stroke(50);
                rectMode(CORNER);
                rect(i*patrat,j*patrat,patrat,patrat);
            }
        }
        
        snake.display();
        food.display();
        if(snake.body[0].intersectFood(food))
        {
            //creste corpul
            score++;
            snake.addBody();
            food.newPiece();
        }
    }
}

function keyPressed() {
    if(keyCode == LEFT_ARROW && snake.body[0].direction != 1)
    {
        snake.body[0].direction = 0;
    }
    else if(keyCode == RIGHT_ARROW && snake.body[0].direction != 0)
    {
        snake.body[0].direction = 1;
    }
    else if(keyCode == UP_ARROW && snake.body[0].direction != 3)
    {
        snake.body[0].direction = 2;
    }
    else if(keyCode == DOWN_ARROW && snake.body[0].direction != 2)
    {
        snake.body[0].direction = 3;
    }
}