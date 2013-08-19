
function Digit(canvasId, radius, position, speed, color) {

    var self = this;

    self.speed = speed;
    self.color = color;
    self.digit = "";
    self.Clocks = createArray(6, 4);
    self.$clock = $("#" + canvasId);

    self.Width = 4 * (2.2 * radius);
    self.Position = position;

    var highlight = false;
    if (color !== undefined) { highlight = true; }

    for (var i = 0; i < self.Clocks.length; i++) {

        for (var j = 0; j < self.Clocks[i].length ; j++) {

            var c = self.Clocks[i][j] = new Clock(canvasId, new Object({ x: radius + j * (2.2 * radius) + position * self.Width, y: radius + i * (2.2 * radius) }), radius, highlight, self.color);
            c.SetTime(0, 0);
            c.x = j;
            c.y = i;

        }

    }

    self.SetDigit = function (i) {

        if (self.digit == i) {
            return;
        }

        self.digit = i;

        var matrix;

        switch (i) {

            case ":":
                matrix = [0, 00, 0, 00, 0, 00, 0, 00,
                             0, 00, 3, 30, 6, 45, 0, 00,
                             0, 00, 0, 15, 9, 00, 0, 00,
                             0, 00, 3, 30, 6, 45, 0, 00,
                             0, 00, 0, 15, 9, 00, 0, 00,
                             0, 00, 0, 00, 0, 00, 0, 00];
                break;


            case "0":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 30, 6, 00,
                             0, 30, 6, 00, 0, 30, 6, 00,
                             0, 30, 6, 00, 0, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "1":
                matrix = [3, 30, 3, 45, 6, 45, 0, 00,
                             0, 15, 9, 30, 6, 00, 0, 00,
                             0, 00, 0, 30, 6, 00, 0, 00,
                             0, 00, 0, 30, 6, 00, 0, 00,
                             0, 00, 0, 30, 6, 00, 0, 00,
                             0, 00, 0, 15, 9, 00, 0, 00];
                break;

            case "2":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             3, 30, 3, 45, 0, 45, 6, 00,
                             0, 30, 6, 15, 9, 15, 9, 00,
                             0, 30, 3, 00, 3, 45, 6, 45,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "3":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             3, 30, 3, 45, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             3, 30, 3, 45, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "4":
                matrix = [3, 30, 6, 45, 3, 30, 6, 45,
                             0, 30, 6, 00, 0, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             0, 00, 0, 00, 0, 30, 6, 00,
                             0, 00, 0, 00, 0, 15, 9, 00];
                break;

            case "5":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 15, 9, 00,
                             0, 30, 3, 00, 3, 45, 6, 45,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             3, 30, 3, 45, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "6":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 15, 9, 00,
                             0, 30, 3, 00, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "7":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             0, 00, 0, 00, 0, 30, 6, 00,
                             0, 00, 0, 00, 0, 30, 6, 00,
                             0, 00, 0, 00, 0, 30, 6, 00,
                             0, 00, 0, 00, 0, 15, 9, 00];
                break;

            case "8":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 30, 6, 15, 9, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            case "9":
                matrix = [3, 30, 3, 45, 3, 45, 6, 45,
                             0, 30, 6, 15, 9, 30, 6, 00,
                             0, 30, 3, 00, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 30, 6, 00,
                             3, 30, 3, 45, 0, 45, 6, 00,
                             0, 15, 9, 15, 9, 15, 9, 00];
                break;

            default:

        }

        var index = 0;
        for (var i = 0; i < self.Clocks.length; i++) {

            for (var j = 0; j < self.Clocks[i].length ; j++) {

                self.Clocks[i][j].AnimateTimeTo(matrix[index], matrix[index + 1], self.speed, self.color);
                index += 2;
            }

        }

        self.UpdateClocks();

    };

    self.UpdateClocks = function () {

        if (self.AnimationDone()) {
            return;
        }

        self.Clocks[0][0].context.clearRect(self.Width * self.Position, 0, self.Width, self.$clock.height());

        for (var i = 0; i < self.Clocks.length; i++) {

            for (var j = 0; j < self.Clocks[i].length ; j++) {

                var c = self.Clocks[i][j];
                c.Animate();
            }

        }

        self.animId = requestAnimationFrame(self.UpdateClocks);

    };

    self.AnimationDone = function () {

        var animationDone = true;

        for (var i = 0; i < self.Clocks.length; i++) {

            for (var j = 0; j < self.Clocks[i].length ; j++) {

                var c = self.Clocks[i][j];
                if (!c.AnimationDone()) {
                    animationDone = false;

                }

            }

        }

        return animationDone;

    };

}