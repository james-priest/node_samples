$(document).ready(function() {
    drawArcTo();
});

function drawArcTo() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    // lines
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;

    // ctx.beginPath();
    // ctx.moveTo(291, 174);
    // ctx.lineTo(414, 540);
    // ctx.moveTo(377, 524);
    // ctx.lineTo(616, 284);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(400, 500);
    ctx.lineTo(600, 300);
    ctx.stroke();

    // arc
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(374, 423);
    ctx.arcTo(400, 500, 600, 300, 120);
    ctx.stroke();
}