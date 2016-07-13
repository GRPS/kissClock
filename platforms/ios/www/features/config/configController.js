angular.module('kissClock')

.controller('ConfigCtrl', function($ionicPlatform, $scope, $state, Config, DBA, ColourFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        //Let's just make sure the platform is ready
        $ionicPlatform.ready(function() {

            window.plugins.insomnia.allowSleepAgain();

            $scope.Config = Config;
            $scope.colourUser = Config.colour.user;

            $scope.brightnessMin = 0;
            $scope.brightnessMax = (Config.colour.list).length-1;
            $scope.brightnessIndex = Config.colour.index;

            $scope.weightnessMin = 0;
            $scope.weightnessMax = (Config.font.weights).length-1;
            $scope.weightnessIndex = Config.font.weight;

        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {

        $ionicPlatform.ready(function() {

            $scope.back = function() {

                Config.colour.list = [];
                $scope.myColor = ColourFactory.getColor();
                j = angular.toJson(Config);
                // alert('saving ... ' + j);

                DBA.query("DELETE FROM Config;")
                    .then(function() {
                        DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["Config", j]);
                    })
                    .then(function() {
                        $state.go("time");
                    })
            }

        });

    });

});
