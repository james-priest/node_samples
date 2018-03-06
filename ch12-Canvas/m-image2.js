$(document).ready(function() {
    drawImage();
});

function drawImage() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    var img = new Image();
    img.src = './assets/images/full-size/IceBoat.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 448);
    };
}