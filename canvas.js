

/* DRAW CLASS */
function DRAW() {
    this._elCanvas = document.getElementById('tutorial');
    this._ctx = this._elCanvas.getContext('2d');
    this._setDefaultStyle();
}

DRAW.prototype.strokeRect = function(x,y,width,height, sColor) {
    this._ctx.strokeStyle = sColor;
    this._ctx.strokeRect(x,y,width,height);
}

DRAW.prototype.fillRect = function(x,y,width,height,sColor) {
    this._ctx.fillStyle = sColor;
    this._ctx.fillRect(x,y,width,height);
}

DRAW.prototype.strokeCircle = function(x,y,r,sColor) {
    this._ctx.strokeStyle = sColor;
    this._ctx.beginPath();
    this._ctx.arc(x,y,r,0,Math.PI*2);
    this._ctx.stroke();
}

DRAW.prototype.fillCircle = function(x,y,r,sColor) {
    this.strokeCircle(x,y,r,'white');
    this._ctx.fillStyle = sColor;
    this._ctx.fill();
}

DRAW.prototype._setDefaultStyle = function() {
    this._ctx.fillStyle = _d.color; 
    this._ctx.strokeStyle = _d.blackColor;
}

DRAW.prototype._getContext = function() {
    return this._ctx;
}

DRAW.prototype.drawTriangle = function(x1,y1,x2,y2,x3,y3,sColor) {
    var ctx = this._ctx;

    ctx.strokeStyle = sColor;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.stroke();
}

DRAW.prototype.fillTriangle = function(x1,y1,x2,y2,x3,y3,sColor) {
    this.drawTriangle(x1, y1, x2, y2, x3, y3, sColor);
    this._ctx.fillStyle = sColor;
    this._ctx.fill();
}

DRAW.prototype.clearCanvas = function(sColor) {
    var _width = this._elCanvas.width;
    var _height= this._elCanvas.height;
    this._ctx.clearRect(0, 0, _width, _height);
    this._ctx.restore;
}


var _d = {
    color : "white",
    blackColor : "black",
    ERR_MSG_FILLCOLOR : "\nfillcolor() 안에 원하시는 색깔을 넣어보세요~ \n pink,red,orange,magenta,green,gray...\n\n기본색으로 magenta로 색칠할게요"
};

var _util = {

    _getStrokeColor : function (sColor) {
        return sColor === undefined ? _d.blackColor : sColor;
    },

    _getFillColor : function (sColor) {
        return sColor === undefined ? _d.color : sColor;
    }
}

/**
 * Public function 
 *
 */

/* basic Draw */
function rect(x,y,width,height,sColor) {
    var sColor = _util._getStrokeColor(sColor); 
    _oPen.strokeRect(x,y,width,height,sColor);
}

function fillrect(x,y,width,height,sColor) {
    var sColor = _util._getFillColor(sColor); 
    _oPen.fillRect(x,y,width,height,sColor);
}

function circle(x,y,r,sColor) {
    var sColor = _util._getStrokeColor(sColor); 
    _oPen.strokeCircle(x,y,r,sColor);
}


function fillcircle(x,y,r,sColor) {
    var sColor = _util._getFillColor(sColor); 
    _oPen.fillCircle(x,y,r,sColor);
}

function triangle(x1,y1,x2,y2,x3,y3,sColor) {
    var sColor = _util._getStrokeColor(sColor); 
    _oPen.drawTriangle(x1,y1,x2,y2,x3,y3,sColor);
}

function filltriangle(x1,y1,x2,y2,x3,y3,sColor) {
    var sColor = _util._getFillColor(sColor); 
    _oPen.fillTriangle(x1,y1,x2,y2,x3,y3,sColor);
}


function clear(){
    _oPen.clearCanvas();
}

var _oPen = new DRAW();

