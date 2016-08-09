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

        if(screen.orientation == "landscape") {
            sep = ":";
            size = Config.font.size;
        } else {
            sep = "";
            size = Config.font.size + 30;
        }
        return {"separator": sep, "fontSize": size + "vw", "orientation": screen.orientation};
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
