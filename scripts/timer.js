
function Timer(canvasId, radius, speed, color, shade) {

    var self = this;

    self.shade = shade;
    self.speed = speed;
    self.Digits = new Array();
    self.$clock = $("#" + canvasId);
    var t = new Date();
    self.Time = t.getHours().toString2Digits() + ":" + t.getMinutes().toString2Digits();

    for (var i = 0; i < 5; i++) {
        self.Digits.push(new Digit(canvasId, radius, i, speed, color, self.shade));
    }

    self.CheckTime = function () {

        var t = new Date();
        var t2 = t.getHours().toString2Digits() + ":" + t.getMinutes().toString2Digits();

        if (t2 != self.Time) {

            for (var s in t2) {
                self.Digits[s].SetDigit(t2[s]);
            }

            self.Time = t2;

        }

        requestAnimationFrame(self.CheckTime);

    };


    for (var s in self.Time) {
        self.Digits[s].SetDigit(self.Time[s]);
    }

    requestAnimationFrame(self.CheckTime);

}