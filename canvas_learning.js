/* 
 * DRAW CLASS
 */

var myNext = {};

myNext.DATA = {
    sFillColor : "#fff",
    sStrokeColor : "#000"
}

myNext._oPen = (function() {
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
        this.strokeCircle(x,y,r,'#fff');
        this._ctx.fillStyle = sColor;
        this._ctx.fill();
    }

    DRAW.prototype._setDefaultStyle = function() {
        this._ctx.fillStyle = "#fff"; 
        this._ctx.strokeStyle = "#000";
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


    return new DRAW;

})();


(function(win, N) {
    function rect(x,y,width,height,sColor) {
        var sColor = _getStrokeColor(sColor); 
        N._oPen.strokeRect(x,y,width,height,sColor);
    }

    function fillrect(x,y,width,height,sColor) {
        var sColor = _getFillColor(sColor); 
        N._oPen.fillRect(x,y,width,height,sColor);
    }

    function circle(x,y,r,sColor) {
        var sColor = _getStrokeColor(sColor); 
        N._oPen.strokeCircle(x,y,r,sColor);
    }


    function fillcircle(x,y,r,sColor) {
        var sColor = _getFillColor(sColor); 
        N._oPen.fillCircle(x,y,r,sColor);
    }

    function triangle(x1,y1,x2,y2,x3,y3,sColor) {
        var sColor = _getStrokeColor(sColor); 
        N._oPen.drawTriangle(x1,y1,x2,y2,x3,y3,sColor);
    }

    function filltriangle(x1,y1,x2,y2,x3,y3,sColor) {
        var sColor = _getFillColor(sColor); 
        N._oPen.fillTriangle(x1,y1,x2,y2,x3,y3,sColor);
    }


    function clear(){
        N._oPen.clearCanvas();
    }

    //private
    function _getStrokeColor(sColor) {
        return sColor === undefined ? N.DATA.sStrokeColor : sColor;
    }

    function _getFillColor(sColor) {
        return sColor === undefined ? N.DATA.sFillColor : sColor;
    }

    (function addPublicFunctions() {
        win.rect         = rect;
        win.fillrect     = fillrect;
        win.circle       = circle;
        win.fillcircle   = fillcircle;
        win.triangle     = triangle;
        win.filltriangle = filltriangle;
        win.clear        = clear;
    })();

})(window, myNext);

