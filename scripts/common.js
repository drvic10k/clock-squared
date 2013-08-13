Number.prototype.toString2Digits = function () {

    return ("0" + this).slice(-2);

}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function polar(base, angle, length) {

    var result = new Object();
    result.x = base.x + length * Math.cos(angle);
    result.y = base.y + length * Math.sin(angle);

    return result;

}

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;