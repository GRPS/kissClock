angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, $cordovaToast, TimeFactory) {

    $ionicPlatform.ready(function() {

        var tick = function() {
            $scope.clock = Date.now();
        }

        tick();
        $interval(tick, 1000);

        $scope.showHours = TimeFactory.showHours();
        $scope.showSeconds = TimeFactory.showSeconds();
        $scope.showConfig = function() {$state.go("config");}

    });

});
