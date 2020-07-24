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


    game.addEventListener("click", (e) => {
        ogre.x = e.offsetX;
        ogre.y = e.offsetY;
        ogre.render();
    })

    let ogre = {
        x: 500,
        y: 100,
        color: "#bada55",
        width: 40,
        height: 80,
        alive: true,
        render: function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }
})

