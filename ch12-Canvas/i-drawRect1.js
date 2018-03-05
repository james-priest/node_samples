$(document).ready(function() {
    drawRect();
});

function drawRect() {
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
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 250);
    ctx.lineTo(200, 300);
    ctx.rect(100, 300, 100, 100);
    ctx.fill();
    ctx.stroke();
}