console.log("hello");

document.addEventListener("DOMContentLoaded", function() {
    //movement tag
    let movementDisplay = document.getElementById("movement");
    // canvas
    let game = document.getElementById("game");

     //set some canvas configs
     game.setAttribute("height", 400);
     game.setAttribute("width", 800);
    //context
    let ctx = game.getContext("2d"); //getContext return an objects that can do something
   
    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }
    //drawBox(200, 100, 200, "hotpink");
    //Draw a box
    //set a fill color
    //ctx.fillStyle = "white";
    //set a line color
    //ctx.strokeStyle = "red";
    //set a line width
    //ctx.lineWidth = 5;
    //call the fillRect to draw the filled square
    //ctx.fillRect(10, 10, 100, 100);
    //call strokeRect to draw the line rectangle
    //ctx.strokeRect(10, 10, 100, 100);

    //Crawler Constructor function
    function Crawler(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.alive = true;
        this.render = function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    //character ref
    let ogre = new Crawler(300, 100, 80, 120, "#bada55");
    let hero = new Crawler(20, 100, 50, 50, "hotpink");

   //hero.render();

    const gameLoop = () => {
        //console.log("loopin ");
        //clear the canvas
        ctx.clearRect(0, 0, game.width, game.height);
        //display x,y coordinates of our hero onto the DOM
        movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
        //check if the ogre is alive and 
        if (ogre.alive) {
            //render the ogre
            ogre.render();
            //check for collision
            //TODO detectHit()
          //render the hero

        }
          hero.render(); 
    }

    const movementHandler = e => {
        console.log(e);
        //w; 87, a:65, s:83, d: 68
        switch (e.keyCode) {
            case (87): //w - up
            if(hero.y > 0) hero.y -=5
            break;
            case (83): //s down
            if(hero.y + hero.height < game.height) hero.y +=5
            break;
            case (65):
            if(hero.x > 0) hero.x -=5
            break;
            case (68):
            if(hero.x + hero.width < game.width) hero.x +=5
            break;
        }
        //when user presses w, 
        // if (e.keyCode === 87 && hero.y > 0) {
        //     //hero moves up - decrease hero y coordinates
        //     hero.y -=5;
        // } else if (e.keyCode === 83 && hero.y + hero.height < game.height) {
        //     hero.y +=5;

        // }
        
    }
    document.addEventListener("keydown", movementHandler);


    game.addEventListener("click", (e) => {
        //clear the gameboard
        ctx.clearRect(0, 0, game.width, game.height);
        //render hero
        hero.render();
        //move ogre
        ogre.x = e.offsetX;
        ogre.y = e.offsetY;
        //render ogre
        ogre.render();
    })

    let gamePlay = setInterval(gameLoop, 60);

    // let ogre = {
    //     x: 500,
    //     y: 100,
    //     color: "#bada55",
    //     width: 40,
    //     height: 80,
    //     alive: true,
    //     render: function () {
    //         ctx.fillStyle = this.color;
    //         ctx.fillRect(this.x, this.y, this.width, this.height);
    //         console.log("clicked!");
    //     }

    // }
})

