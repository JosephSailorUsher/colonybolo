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
    // rotate + move along x
    ctx.rotate(i / 100);
    ctx.translate(100, 0);
    // draw planet
    circle('goldenrod', 15);
    ctx.translate(-100, 0);
    // rotate the other planet
    ctx.rotate(i / 110);
    ctx.translate(0, -75);
    // draw planet
    circle('skyblue', 9);
    // rotate the next planet
    ctx.translate(-150, 75);
    // draw planet
    circle('lawngreen', 10);
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