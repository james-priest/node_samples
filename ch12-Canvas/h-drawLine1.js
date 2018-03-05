$(document).ready(function() {
    drawLine();
});

function drawLine() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'gold';
    ctx.lineWidth = 10;
    
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(150, 350);
    ctx.lineTo(50, 350);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 350);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(350, 350);
    ctx.lineTo(250, 350);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(500, 250);
    ctx.lineTo(500, 350);
    ctx.moveTo(450, 300);
    ctx.lineTo(550, 300);
    ctx.fill();
    ctx.stroke();
}