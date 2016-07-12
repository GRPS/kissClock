angular.module('kissClock')

.factory('TimeFactory', function(sharedData) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.showHours = function() {
        hours = (sharedData.time.showHourLeadingZero ? "HH:" : "H:");
        return sharedData.time.show12Hour ? angular.lowercase(hours) : hours;
    }

    self.showSeconds = function() {
        return sharedData.time.showSeconds ? ":ss" : "";
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
