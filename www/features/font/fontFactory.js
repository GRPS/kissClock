angular.module('kissClock')

.factory('FontFactory', function(sharedData) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getWeight = function() {
        return sharedData.font.weights[sharedData.font.index];
    }

    self.fontThinner = function() {
        sharedData.font.index = (sharedData.font.index == 0 ? 0 : sharedData.font.index-1);
        return self.getWeight();
    }

    self.fontFatter = function() {
        sharedData.font.index = (sharedData.font.index == (sharedData.font.weights.length-1) ? sharedData.font.index : sharedData.font.index+1);
        return self.getWeight();
    }

    self.fontReset = function() {
        sharedData.font.index = sharedData.font.start;
        return self.getWeight();
    }


    return self;

})
