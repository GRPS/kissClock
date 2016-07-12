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
        sharedData.font.index = (sharedData.font.index == (sharedData.font.list.length-1) ? sharedData.font.index : sharedData.font.index+1);
        return sharedData.font.index;
    }

    self.fontFatter = function() {
        sharedData.font.index = (sharedData.font.index == 0 ? 0 : sharedData.font.index-1);
        return sharedData.font.index;
    }

    self.fontReset = function() {
        sharedData.font.index = sharedData.font.start;
        return sharedData.font.index;
    }


    return self;

})
