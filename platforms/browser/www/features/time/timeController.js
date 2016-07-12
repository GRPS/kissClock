angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, TimeFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        $ionicPlatform.ready(function() {

            window.plugins.insomnia.keepAwake();

            var tick = function() {
                $scope.clock = Date.now();
            }
            tick();
            $interval(tick, 1000);

            $scope.showHours = TimeFactory.showHours();
            $scope.showSeconds = TimeFactory.showSeconds();

        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {

        $scope.showConfig = function() {$state.go("config");}

    });

});
