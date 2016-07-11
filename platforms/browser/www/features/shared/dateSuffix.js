angular.module('kissClock')

.service('dateSuffix', function() {

    var suffixes = ["th", "st", "nd", "rd"];
    return function (input) {
        var dtfilter = $filter('date')(input, 'dd');
        var day = parseInt(dtfilter, 10);
        var relevantDigits = (day < 30) ? day % 20 : day % 30;
        var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
        return suffix;
    };


})
