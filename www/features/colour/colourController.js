angular.module('kissClock')

.controller('ColorCtrl', function($scope, ColourFactory) {

    $scope.myDate = new Date();
    $scope.myColor = ColourFactory.getColor();
    $scope.myDarkestColor = ColourFactory.getDarkestColor();

    $scope.colorLighter = function() {$scope.myColor = ColourFactory.colorLighter();}
    $scope.colorDarker = function() {$scope.myColor = ColourFactory.colorDarker();}
    $scope.colorReset = function() {$scope.myColor = ColourFactory.colorReset();}

});
