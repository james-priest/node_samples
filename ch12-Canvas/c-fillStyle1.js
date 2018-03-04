$(document).ready(function() {
    drawUsingCssColor();
});

function drawUsingCssColor() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        offset = 10,
        size = 50;
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.fillStyle = "red";
    ctx.fillRect(offset + (0 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (1 * (offset + size)), offset, size, size);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(offset + (2 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (3 * (offset + size)), offset, size, size);

    ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
    ctx.fillRect(offset + (4 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (5 * (offset + size)), offset, size, size);
}