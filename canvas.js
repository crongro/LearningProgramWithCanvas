/* 
 * global context 
 */
var o = {
    color : "green",
    in : ""
};


/*
 * initialization
 */
(function(){
    oPen = new DRAW();
    o.in = oPen;
})();


/* DRAW CLASS */
function DRAW() {
    this._elCanvas = document.getElementById('tutorial');
    this._ctx = this._elCanvas.getContext('2d');
}

DRAW.prototype.drawRect = function(x,y,width,height) {
    //this.setDefaultStyle();
    //this._ctx.fillRect (x,y,width,height);
    this._ctx.strokeRect(x,y,width,height);
}

DRAW.prototype.drawCircle = function(x,y,r,arc) {
    this._ctx.beginPath();
    this._ctx.arc(x,y,r,0,arc);
    this._ctx.stroke();
}

DRAW.prototype.setDefaultStyle = function() {
    //this._ctx.fillStyle = oCanvasInfo.color;
}

DRAW.prototype._getContext = function() {
    return this._ctx;
}



/**
 * Public function 
 *
 */

/* basic Draw */
function rect(x,y,width,height) {
    o.in.drawRect(x,y,width,height);
}

function color(sColor) {
    var sColor = sColor === undefined ? o.color : sColor;
    var ctx = o.in._getContext();
    ctx.fillStyle = sColor;
    ctx.strokeStyle = sColor;
}

function fillcolor(sColor) {
    var ctx = o.in._getContext();
    ctx.fillStyle = sColor === undefined ? ctx.fillStyle : sColor;
    ctx.fill();
}

function circle(x,y,r,s) {
    var _nSize = s ? (parseInt(s)/180) : 2;
    o.in.drawCircle(x, y, r, (Math.PI*_nSize) );
    //if(!s) o.in._getContext().fill();
}

function triangle(x1,y1,x2,y2,x3,y3) {
    var ctx = o.in._getContext();
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.stroke();
}

function clear(){
    var ctx = o.in._getContext();
    var _width = o.in._elCanvas.width;
    var _height= o.in._elCanvas.height;
    ctx.clearRect(0, 0, _width, _height);
    ctx.restore;
}

