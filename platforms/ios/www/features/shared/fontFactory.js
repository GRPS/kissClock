angular.module('kissClock')

.factory('FontFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getFamily = function() {
        Config.font.family = Config.font.list[Config.font.index];
        return Config.font.family;
    }

    self.fontLess = function() {
        if(Config.font.index > 0) {Config.font.index--;}
        return self.getFamily();
    }

    self.fontMore = function() {
        if(Config.font.index < (Config.font.list.length)-1) {Config.font.index++;}
        return self.getFamily();
    }

    return self;

})
