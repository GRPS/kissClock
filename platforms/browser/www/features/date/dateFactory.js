angular.module('kissClock')

.factory('DateFactory', function(sharedData) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.isEnabled = function() {
        return sharedData.date.enabled;
    }

    self.toggle = function() {
        sharedData.date.enabled = !sharedData.date.enabled;
        return sharedData.date.enabled;
    }

    self.dateFormat = function() {
        return sharedData.date.format;
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
