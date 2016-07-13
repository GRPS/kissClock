angular.module('kissClock')

.factory('DateFactory', function(config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.isEnabled = function() {
        return config.date.enabled;
    }

    self.toggle = function() {
        config.date.enabled = !config.date.enabled;
        return config.date.enabled;
    }

    self.dateFormat = function() {
        return config.date.format;
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
