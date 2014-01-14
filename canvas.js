
/* 
 * global context 
 */
var o = {
    color : "black",
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
    this._ctx.fillRect (x,y,width,height);
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
function drawRect(x,y,width,height) {
    o.in.drawRect(x,y,width,height);
}

function fillColor(sColor) {
    var sColor = sColor === undefined ? o.color : sColor;
    var ctx = o.in._getContext();
    ctx.fillStyle = sColor;
}

function drawCircle(x,y,r) {
    o.in.drawCircle(x,y,r,Math.PI*2);
    o.in._getContext().fill();
}

function drawHalfCircle(x,y,r) {
    o.in.drawCircle(x,y,r,Math.PI);
}



