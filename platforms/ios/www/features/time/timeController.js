angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, ColourFactory, DateFactory, FontFactory, TimeFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        $ionicPlatform.ready(function() {

            window.plugins.insomnia.keepAwake();


            //Make some settings available to the view.
            $scope.colourUser = ColourFactory.getColor();
            $scope.fontWeight = FontFactory.getWeight();
            $scope.dateEnabled = DateFactory.isEnabled();
            $scope.dateFormat = DateFactory.dateFormat();
            $scope.currentDate = Date.now();
            $scope.timeShowHours = TimeFactory.showHours();
            $scope.timeShowSeconds = TimeFactory.showSeconds();

            // var tick = function() {
            //     $scope.clock = Date.now();
            // }
            // tick();
            // $interval(tick, 1000);


        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {

        $scope.dateToggle = function(){$scope.dateEnabled = DateFactory.toggle();}
        $scope.showConfig = function() {$state.go("config");}

        $scope.colorLighter = function() {$scope.myColor = ColourFactory.colorLighter();}
        $scope.colorDarker = function() {$scope.myColor = ColourFactory.colorDarker();}
        $scope.colorReset = function() {$scope.myColor = ColourFactory.colorReset();}

        $scope.fontThinner = function() {$scope.myWeight = FontFactory.fontThinner();}
        $scope.fontThicker = function() {$scope.myWeight = FontFactory.fontThicker();}
        $scope.fontReset = function() {$scope.myWeight = FontFactory.fontReset();}

    });

});
