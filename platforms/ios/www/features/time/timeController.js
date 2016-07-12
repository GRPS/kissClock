angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, sharedData, DBA, TimeFactory) {

    $ionicPlatform.ready(function() {

        window.plugins.insomnia.keepAwake();

        $scope.showConfig = function() {$state.go("config");}

        var tick = function() {
            $scope.clock = Date.now();
        }
        tick();
        $interval(tick, 1000);

    });

});
