$(document).ready(function() {
    drawLineJoin();
});

function drawLineJoin() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.lineWidth = 20;
    
    ctx.lineJoin = 'round';
    ctx.strokeRect(20, 20, 50, 50);

    ctx.lineJoin = 'bevel';
    ctx.strokeRect(100, 100, 50, 50);

    ctx.lineJoin = 'miter';
    ctx.strokeRect(180, 180, 50, 50);
}
