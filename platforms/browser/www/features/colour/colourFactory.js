angular.module('kissClock')

.factory('ColourFactory', function(sharedData) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.getColor = function() {
        if(sharedData.colour.list.length == 0) {self.prepareColors();}
        return sharedData.colour.list[sharedData.colour.index];
    }

    self.getDarkestColor = function() {
        return sharedData.colour.list[0];
    }

    self.colorLighter = function() {
        sharedData.colour.index = (sharedData.colour.index == (sharedData.colour.list.length-1) ? sharedData.colour.index : sharedData.colour.index+1);
        return self.getColor();
    }

    self.colorDarker = function() {
        sharedData.colour.index = (sharedData.colour.index == 0 ? 0 : sharedData.colour.index-1);
        return self.getColor();
    }

    self.colorReset = function() {
        sharedData.colour.index = sharedData.colour.start;
        return self.getColor();
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    self.getColors = function() {
        return sharedData.colour.list;
    }

    self.prepareColors = function() {
        for(var i=sharedData.colour.min; i<=sharedData.colour.max; i+=sharedData.colour.step) {
            sharedData.colour.list.push(self.shadeColor(sharedData.colour.user, i));
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
