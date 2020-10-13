var canvas;
var ctx;
function loadCanvas() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    try {
        ctx = canvas.getContext('2d');
        console.log("Context Loaded!", ctx);
        
        draw();
    } catch (error) {
        console.error("contex not working", error);
    }    
}

function draw() {
    ctx.beginPath();
    
    ctx.moveTo(40,70);
    ctx.lineTo(10,20);
    ctx.lineTo(70,20);
    ctx.lineTo(40,70)
    
    ctx.moveTo(200,70);
    ctx.lineTo(200,20);
    ctx.lineTo(270,70);
    ctx.lineTo(200,70);

    ctx.moveTo(450,70);
    ctx.lineTo(380,20);
    ctx.lineTo(520,20);

    ctx.closePath();
    ctx.stroke();
}