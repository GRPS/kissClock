angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, TimeFactory) {

    // $ionicPlatform.ready(function() {
        alert('TimeCtrl called.');
        var tick = function() {
            $scope.clock = Date.now();
            alert($scope.clock);
        }
        tick();
        $interval(tick, 1000);

        $scope.showHours = TimeFactory.showHours();
        $scope.showSeconds = TimeFactory.showSeconds();
        $scope.showConfig = function() {$state.go("config");}

    // });

});
