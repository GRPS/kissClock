angular.module('kissClock')

.factory('DateFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.isEnabled = function() {
        return Config.date.enabled;
    }

    self.toggle = function() {
        Config.date.enabled = !Config.date.enabled;
        return Config.date.enabled;
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
