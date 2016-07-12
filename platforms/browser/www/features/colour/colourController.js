angular.module('kissClock')

.controller('ColorCtrl', function($scope, ColourFactory, FontFactory) {

    $scope.myDate = new Date();
    $scope.myColor = ColourFactory.getColor();
    $scope.myWeight = FontFactory.getWeight();
    $scope.myDarkestColor = ColourFactory.getDarkestColor();

    $scope.colorLighter = function() {$scope.myColor = ColourFactory.colorLighter();}
    $scope.colorDarker = function() {$scope.myColor = ColourFactory.colorDarker();}
    $scope.colorReset = function() {$scope.myColor = ColourFactory.colorReset();}

    $scope.fontThinner = function() {$scope.myWeight = FontFactory.fontThinner();}
    $scope.fontFatter = function() {$scope.myWeight = FontFactory.fontFatter();}
    $scope.fontReset = function() {$scope.myWeight = FontFactory.fontReset();}

});
