$(document).ready(function() {
    drawPattern();
});

function drawPattern() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    // create new image object to use as pattern
    var img = new Image();
    img.src = "assets/images/shapes.png";
    img.onload = function() {
        // create pattern
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 700, 500);
    };
}
