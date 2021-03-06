var canvas = document.getElementById('responsive-canvas');
var ctx = canvas.getContext('2d');
    //canvas.height = window.innerHeight;

var circle = function(color, r) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
}
var i = 0;
var redraw = function() {
    fitToContainer(canvas);

    ctx.save();
    var w = canvas.width;
    var h = canvas.height;
    // paint bg
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, w, h);
    // set origin to center
    ctx.translate(w / 2, h / 2);
    // draw sun
    circle('yellow', 20);
    //Move to over to draw first planet and rotate at it's orbit rate
    ctx.rotate(i / 300);
    ctx.translate(-200, 0);

    // draw planet
    circle('lightblue', 15);
    //move back to the center
    ctx.translate(200,0);
    ctx.rotate(i / 100);
    ctx.translate(-90,-0);
    //rotate in the opposite direction

    // draw planet
    circle('darkgreen', 15);

    //Recenter
    ctx.translate(90,0);
    ctx.rotate(i/50);
    ctx.translate(45,0);

    circle('goldenrod', 10);

    ctx.translate(-45,0);
    ctx.rotate(-i/40);
    ctx.translate(135,0);

    circle('tan', 18);

    ctx.restore();
    i++;
    window.requestAnimationFrame(redraw);
};

function fitToContainer(canvas) {

    canvas.style.width = '99%';
    canvas.style.height = '99%';
    canvas.width = canvas.offsetWidth / 100 * 100;
    canvas.height = canvas.offsetHeight / 100 * 100;
}
window.requestAnimationFrame(redraw);
