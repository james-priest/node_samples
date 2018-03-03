$(document).ready(function() {
    drawSomething();
});

function drawSomething() {
    // var canvas = document.getElementById('myCanvas');
    var canvas = document.createElement('canvas'); // for vscode intellisense
    canvas.id = 'myCanvas';
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.fillRect(10, 50, 100, 200);
}