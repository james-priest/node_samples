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
        ctx.font = 'bold 24pt Arial';

        ctx.drawImage(img, 120, -170, 450, 673);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(400, 180);
        ctx.lineTo(329, 180);
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText('Mast', 325, 180);
        ctx.strokeText('Mast', 325, 180);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(455, 120);
        ctx.lineTo(496, 120);
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText('Sail', 500, 120);
        ctx.strokeText('Sail', 500, 120);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(304, 294);
        ctx.lineTo(430, 294);
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText('Boom', 300, 290);
        ctx.strokeText('Boom', 300, 290);
    };
}