
var _d = {
    color : "magenta",
    ERR_MSG_FILLCOLOR : "\nfillcolor() 안에 원하시는 색깔을 넣어보세요~ \n pink,red,orange,magenta,green,gray...\n\n기본색으로 magenta로 색칠할게요"
};

/* DRAW CLASS */
function DRAW() {
    this._elCanvas = document.getElementById('tutorial');
    this._ctx = this._elCanvas.getContext('2d');
    this._setDefaultStyle();
}

DRAW.prototype.drawRect = function(x,y,width,height) {
    //this._ctx.fillRect (x,y,width,height);
    //this._ctx.strokeRect(x,y,width,height);
    this._ctx.rect(x,y,width,height);
    this._ctx.stroke();
}

DRAW.prototype.drawCircle = function(x,y,r,s) {
    var _nSize = !!s ? (parseInt(s)/180) : 2;
    var _arc = Math.PI *_nSize ;

    this._ctx.beginPath();
    this._ctx.arc(x,y,r,0,_arc);
    this._ctx.stroke();
}

DRAW.prototype._setDefaultStyle = function() {
    this._ctx.fillStyle = "magenta";
}

DRAW.prototype._getContext = function() {
    return this._ctx;
}

DRAW.prototype.setColor = function(sColor) {
    this._ctx.strokeStyle = sColor;
}

DRAW.prototype.drawTriangle = function(x1,y1,x2,y2,x3,y3) {
    var ctx = this._ctx;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.stroke();
}

DRAW.prototype.setFillColor = function(sColor) {
    sColor = sColor || this._ctx.fillStyle || 'magenta';
    this._ctx.fillStyle = sColor;
    this._ctx.fill();
}

DRAW.prototype.clearCanvas = function(sColor) {
    var _width = this._elCanvas.width;
    var _height= this._elCanvas.height;
    this._ctx.clearRect(0, 0, _width, _height);
    this._ctx.restore;
}



/**
 * Public function 
 *
 */

/* basic Draw */
function rect(x,y,width,height) {
    _oPen.drawRect(x,y,width,height);
}

function color(sColor) {
    var sColor = sColor === undefined ? _d.color : sColor;
    _oPen.setColor(sColor);
}

function circle(x,y,r,s) {
    _oPen.drawCircle(x,y,r,s);
}

function fillcolor(sColor) {
    if(!sColor || typeof sColor !== 'string') {
        alert(_d.ERR_MSG_FILLCOLOR);
    }
    _oPen.setFillColor(sColor);
}

function triangle(x1,y1,x2,y2,x3,y3) {
    _oPen.drawTriangle(x1,y1,x2,y2,x3,y3);
}

function clear(){
    _oPen.clearCanvas();
}

var _oPen = new DRAW();
