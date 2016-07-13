angular.module('kissClock')

.factory('TimeFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.showHours = function() {
        hours = (Config.time.showHourLeadingZero ? "HH:" : "H:");
        return Config.time.show12Hour ? angular.lowercase(hours) : hours;
    }

    self.showSeconds = function() {
        return Config.time.showSeconds ? ":ss" : "";
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
