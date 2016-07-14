angular.module('kissClock')

.factory('ColourFactory', function(Config) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getColor = function() {
        if(Config.colour.list.length == 0) {self.prepareColors();}
        return Config.colour.list[Config.colour.index];
    }

    self.getDarkestColor = function() {
        return Config.colour.list[0];
    }

    self.colorLighter = function() {
        if(Config.colour.index > 0) {Config.colour.index--;}
        return self.getColor();
    }

    self.colorDarker = function() {
        if(Config.colour.index < (Config.colour.list.length)-1) {Config.colour.index++;}
        return self.getColor();
    }

    self.colorReset = function() {
        Config.colour.index = Config.colour.start;
        return self.getColor();
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    self.getColors = function() {
        return Config.colour.list;
    }

    self.prepareColors = function() {
        for(var i=Config.colour.min; i<=Config.colour.max; i+=Config.colour.step) {
            Config.colour.list.push(self.shadeColor(Config.colour.user, i));
        }
        a=1;
    }

    self.shadeColor = function(color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R<255)?R:255;
        G = (G<255)?G:255;
        B = (B<255)?B:255;

        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

        color = "#"+RR+GG+BB;

        return color;
    }

    return self;

})
