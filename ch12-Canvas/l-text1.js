$(document).ready(function() {
    drawText();
});

function drawText() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.strokeStyle = 'magenta';
    ctx.fillStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.font = "bold 100pt TimesNewRoman";
    
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(700, 300);
    ctx.stroke();

    ctx.strokeStyle = 'blue';
    ctx.fillText('Hello', 400, 300);
    ctx.strokeText('Hello', 400, 300);
}