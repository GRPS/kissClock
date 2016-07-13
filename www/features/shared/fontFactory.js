angular.module('kissClock')

.factory('FontFactory', function(config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getWeight = function() {
        return config.font.weights[config.font.index];
    }

    self.fontThinner = function() {
        config.font.index = (config.font.index == 0 ? 0 : config.font.index-1);
        return self.getWeight();
    }

    self.fontThicker = function() {
        config.font.index = (config.font.index == (config.font.weights.length-1) ? config.font.index : config.font.index+1);
        return self.getWeight();
    }

    self.fontReset = function() {
        config.font.index = config.font.start;
        return self.getWeight();
    }


    return self;

})
