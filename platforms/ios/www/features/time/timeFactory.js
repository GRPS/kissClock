angular.module('kissClock')

.factory('TimeFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.showHours = function() {
        hours = (Config.time.showHourLeadingZero ? "HH" : "H");
        return Config.time.show12Hour ? angular.lowercase(hours) : hours;
    }

    self.getTimeSpec = function() {
        console.log("initial angle = "+screen.orientation.angle);
        angle = screen.orientation.angle;
        if(angle == 0) {
            sep = "";
            size = Config.font.size + 25;
            lp = "portraite";
        } else {
            sep = ":";
            size = Config.font.size;
            lp = "landscape";
        }
        return {"separator": sep, "fontSize": size + "vw", "orientation": lp};
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
