
function Clock(canvasId, center, radius, highlighted, color) {

    var self = this;

    self.radius = radius;
    self.center = center;
    self.context = self.ctx = document.getElementById(canvasId).getContext("2d");
    self.minutes = 0;
    self.hours = 12;
    self.past = false;
    self.targetHours = -1;
    self.targetMinutes = -1;
    self.speed = 0;
    self.x = -1;
    self.y = -1;
    self.highlighted = highlighted;
    self.color = color;

    self.SetTime = function (hours, minutes) {

        self.hours = hours;
        self.minutes = minutes;

        self.ClearClock();
        self.DrawHourLine(hours, 0);
        self.DrawMinuteLine(minutes);

        if (self.highlighted && self.hours == self.targetHours && self.minutes == self.targetMinutes) {
            
            var fakeMinutes = self.hours / 12 * 60;
            var t = new Date(2013, 7, 12, 13, fakeMinutes);
            var target = new Date(2013, 7, 12, 13, self.minutes);
            if (self.minutes < fakeMinutes) { target = new Date(target.getTime() + 60 * 60000); }

            while (t.getTime() < target.getTime())

            {
                t = new Date(t.getTime() + 60000);
                self.DrawMinuteLine(t.getMinutes(), self.color);
            }
        }

    };

    self.Animate = function () {

        var step = self.speed;

        var stepHours = Math.floor(step / 60);
        var stepMinutes = step % 60;

        self.minutes += stepMinutes;

        stepHours += Math.floor(self.minutes / 60);
        self.minutes = self.minutes % 60;

        self.hours += stepHours;

        if (self.past && self.hours > self.targetHours) {

            if (self.hours > 11) {
                self.past = false;
                self.hours = self.hours % 12;
            }

        }
        else {
            if ((!self.past && self.hours > self.targetHours) || (!self.past && self.hours == self.targetHours && self.minutes >= self.targetMinutes)) {
                self.hours = self.targetHours;
                self.minutes = self.targetMinutes;
            }
        }

        self.SetTime(self.hours, self.minutes);

    };

    self.AnimateTimeTo = function (hour, minute, speed, color) {

        self.targetHours = hour;
        self.targetMinutes = minute;
        self.speed = speed;
        self.color = color;

        if ((self.hours > hour) || (self.hours == hour && self.minutes > minute)) { self.past = true; }

    };

    self.AnimationDone = function () {

        if (self.hours == self.targetHours && self.minutes == self.targetMinutes) {
            return true;
        }
        else {
            return false;
        }

    };

    self.ClearClock = function () {

        self.context.fillStyle = "white";
        self.context.beginPath();
        self.context.arc(center.x, center.y, radius + 1, 0, 2 * Math.PI);
        self.context.fill();

        self.context.strokeStyle = "black";
        self.context.beginPath();
        self.context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        self.context.stroke();

    };

    self.DrawHourLine = function (hour, minute) {

        self.context.beginPath();
        self.ctx.moveTo(center.x, center.y);
        var angle = 2 * Math.PI / 12 * (hour + minute / 60 - 3);
        var point = polar(center, angle, radius * 0.9);
        self.ctx.lineTo(point.x, point.y);
        self.ctx.stroke();

    };

    self.DrawMinuteLine = function (minute, color) {

        if (color === undefined) { color = "black"; }
        self.context.beginPath();
        self.context.strokeStyle = color;
        self.context.moveTo(center.x, center.y);
        var angle = 2 * Math.PI / 60 * (minute - 15);
        var point = polar(center, angle, radius * 0.9);
        self.context.lineTo(point.x, point.y);
        self.context.stroke();

    };

}