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

    // grid
    for (var x = 0.5; x < 800; x += 10) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 600);
    }
    for (var y = 0.5; y < 600; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(800, y);
    }
    ctx.strokeStyle = '#eee';
    ctx.stroke();

    // lines
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(291, 174);
    ctx.lineTo(414, 540);
    ctx.moveTo(377, 524);
    ctx.lineTo(616, 284);
    ctx.stroke();

    // radius
    ctx.beginPath();
    ctx.moveTo(422, 408); // center
    ctx.lineTo(458.5, 372.5); // radius
    ctx.moveTo(452, 372.5); // arrow left
    ctx.lineTo(458.5, 372.5); // radius
    ctx.moveTo(458.5, 379); // arrow right
    ctx.lineTo(458.5, 372.5); // radius
    ctx.stroke();

    // circle
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(422, 408, 50, 0, 2 * Math.PI);
    ctx.stroke();

    // arc
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arcTo(400, 500, 600, 300, 50);
    ctx.stroke();

    // points
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arc(300, 200, 5, 0, 2 * Math.PI); // x0, y0
    ctx.moveTo(0, 0);
    ctx.arc(374, 423, 5, 0, 2 * Math.PI); // t1
    ctx.moveTo(0, 0);
    ctx.arc(422, 408, 5, 0, 2 * Math.PI); // r1
    ctx.moveTo(0, 0);
    ctx.arc(457, 443, 5, 0, 2 * Math.PI); // t2
    ctx.moveTo(400, 500);
    ctx.arc(400, 500, 5, 0, 2 * Math.PI); // x1, y1
    ctx.moveTo(600, 300);
    ctx.arc(600, 300, 5, 0, 2 * Math.PI); // x2, y2
    ctx.fill();

    // labels
    ctx.font = '13px Arial';
    ctx.beginPath();
    ctx.fillText('(x0, y0)', 246, 204);
    ctx.fillText('(x1, y1)', 346, 502);
    ctx.fillText('(x2, y2)', 546, 302);
    ctx.fillText('t1', 352, 428);
    ctx.fillText('t2', 468, 446);
    ctx.fillText('r=50', 410, 386);
}