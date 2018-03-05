$(document).ready(function() {
    drawGradientStroke();
});

function drawGradientStroke() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        gradient ='',
        x0 = 0,
        y0 = 0,
        r0 = 0,
        x1 = 200,
        y1 = 0,
        r1 = 100,
        width = 300,
        height = 40,
        offset = 25;
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    ctx.lineWidth = 15;
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 0 * (height + offset) + 10, width, height);
    ctx.strokeRect(100, 1 * (height + offset)+10, width, height);
    
    y1 = 300;
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 2 * (height + offset)+10, width, height);
    ctx.strokeRect(100, 3 * (height + offset)+10, width, height);
    
    x0 = x1 = width / 2;
    y0 = y1 = 4 * (height + offset) + (height / 2);
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 4 * (height + offset)+10, width, height);
    ctx.strokeRect(100, 5 * (height + offset)+10, width, height);
    
    y0 = 5 * (height + offset) + (height / 2);
    y1 = y0 + 100;
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 6 * (height + offset)+10, width, height);
    ctx.strokeRect(100, 7 * (height + offset)+10, width, height);
}

function addColorStops(gradient) {
    gradient.addColorStop('0', 'magenta');
    gradient.addColorStop('.25', 'blue');
    gradient.addColorStop('.50', 'green');
    gradient.addColorStop('.75', 'yellow');
    gradient.addColorStop('1.0', 'red');
}
