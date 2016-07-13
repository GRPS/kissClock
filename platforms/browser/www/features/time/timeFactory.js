angular.module('kissClock')

.factory('TimeFactory', function(config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.showHours = function() {
        hours = (config.time.showHourLeadingZero ? "HH:" : "H:");
        return config.time.show12Hour ? angular.lowercase(hours) : hours;
    }

    self.showSeconds = function() {
        return config.time.showSeconds ? ":ss" : "";
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
