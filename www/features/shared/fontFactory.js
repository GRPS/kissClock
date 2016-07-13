angular.module('kissClock')

.factory('FontFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getWeight = function() {
        alert("Font: " + Config.font.index + "/" + Config.font.weights.length);
        return Config.font.weights[Config.font.index];
    }

    self.fontThinner = function() {
        if(Config.font.index > 0) {Config.font.index--;}
        return self.getWeight();
    }

    self.fontThicker = function() {
        if(Config.font.index < (Config.font.weights.length)-1) {Config.font.index++;}
        return self.getWeight();
    }

    self.fontReset = function() {
        Config.font.index = Config.font.start;
        return self.getWeight();
    }


    return self;

})
