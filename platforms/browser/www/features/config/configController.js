angular.module('kissClock')

.controller('ConfigCtrl', function($ionicPlatform, $scope, $state, sharedData, DBA, ConfigFactory, ColourFactory) {

    $scope.config = sharedData;
    $scope.myColor = sharedData.colour.user;

    $scope.back = function() {
        sharedData.colour.list = [];
        $scope.myColor = ColourFactory.getColor();
        alert('remove old db config');
        DBA.query("DELETE FROM Config;")
            .then(function() {
                alert('insert new db config');
                DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", angular.toJson(sharedData)]);
            })
            .then(function() {
                alert('db config done');
                $state.go("time");
            })
    }

    $scope.brightnessMin = 0;
    $scope.brightnessMax = (sharedData.colour.list).length-1;
    $scope.brightnessIndex = sharedData.colour.index;

    $scope.weightnessMin = 0;
    $scope.weightnessMax = (sharedData.font.weights).length-1;
    $scope.weightnessIndex = sharedData.font.weight;


    $ionicPlatform.ready(function() {

        window.plugins.insomnia.allowSleepAgain();

    });

});
