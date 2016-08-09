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

    self.getOrientation = function() {
        var orientation="landscape";
        if(screen.orientation.angle == -90 || screen.orientation.angle == 90) orientation = "landscape";
        return orientation;
    }

    self.getTimeSpec = function() {

        if(self.getOrientation() == "landscape") {
            sep = ":";
            size = Config.font.size;
        } else {
            sep = "";
            size = Config.font.size + 30;
        }
        return {"separator": sep, "fontSize": size + "vw", "orientation": self.getOrientation()};
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
