$(document).ready(function() {
    drawArc();
});

function drawArc() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, 1.5 * Math.PI);
    ctx.fill();
    ctx.stroke();
}