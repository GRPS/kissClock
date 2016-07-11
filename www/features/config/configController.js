angular.module('kissClock')

.controller('ConfigCtrl', function($ionicPlatform, $scope, $state, sharedData, ConfigFactory, ColourFactory) {

    $scope.config = sharedData;
    $scope.myColor = sharedData.colour.user;

    $scope.back = function() {
        sharedData.colour.list = [];
        $scope.myColor = ColourFactory.getColor();
        $state.go("time");
    }

    $scope.brightnessMin = 0;
    $scope.brightnessMax = (sharedData.colour.list).length-1;
    $scope.brightnessIndex = sharedData.colour.index;


    $ionicPlatform.ready(function() {

        window.plugins.insomnia.allowSleepAgain();

    });

});
