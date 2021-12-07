import * as lcanvas from './loadingcanvas.js';
document.getElementsByClassName('loader-container')[0].onload = () => {
    lcanvas.initCanvas();
}
window.addEventListener('resize', lcanvas.setCanvasSize());
lcanvas.canvas.addEventListener('mousedown', (e) => {lcanvas.updateCanvas(e)});
lcanvas.canvas.addEventListener('mousemove', (e) => {lcanvas.updateCanvas(e)});
lcanvas.canvas.addEventListener('mouseup', (e) => {lcanvas.updateCanvas(e)});
setTimeout(lcanvas.updateCircles, 2000);