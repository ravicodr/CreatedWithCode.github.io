export const canvas = document.getElementById('loading-canvas');
const ctx =  canvas.getContext('2d');
var lastEvent;
var isMousedown;
var rcArray = [];

export function setCanvasSize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}
export function initCanvas() {

}
export function updateCanvas(e) {
    lastEvent = e;
    if (e.type=="mousedown") {
        isMousedown = true;
        var rc = new rippleCircle(e.pageX,e.pageY,20,40);
        rcArray.push(rc);
        rc.create();
        
    };
    if (e.type=="mouseup") {console.log('mouseup');isMousedown=false};

    if (e.type=="mousemove" & lastEvent.type == "mousemove" & isMousedown) {
        var rc = new rippleCircle(e.pageX,e.pageY,20,40);
        rcArray.push(rc);
        rc.create();
    };

}
var changes = 0;
export function updateCircles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0; i < rcArray.length; i++) {
        var xChange = getRandomArbitrary(1,4);
        var yChange = getRandomArbitrary(1,4);
        var rc = rcArray[i];
        rc.x += xChange;
        rc.y += yChange;
        rc.create();
    }
    if (changes == 5) {
        changes = 0;
    }
    changes++;

    requestAnimationFrame(updateCircles);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
class rippleCircle {
    constructor(x,y,radius,endRadius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.endRadius = endRadius;
    }
    create() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
    update() {

    }
}
