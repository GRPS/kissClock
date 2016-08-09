angular.module('kissClock')

.controller('TimeCtrl', function($ionicScrollDelegate, $ionicPlatform, $scope, $state, $interval, Config, DBA, ColourFactory, DateFactory, FontFactory, TimeFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        $ionicPlatform.ready(function() {

            window.plugins.insomnia.keepAwake();

            DBA.prepareTables()
                .then(function(cnt) {
                    if(cnt == 0) {
                        DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", angular.toJson(options)]);
                    }
                })
                .then(function() {
                    return DBA.query("SELECT c.rowid AS id, c.key AS key, c.obj AS obj FROM Config c WHERE c.rowid = 1");
                })
                .then(function(result){
                    res = DBA.getFirst(result);
                    j = JSON.parse(res.obj);
                    Config.colour = j.colour;
                    Config.date = j.date;
                    Config.font = j.font;
                    Config.time = j.time;

                    $scope.currentDate = Date.now();
                    $scope.colourUser = ColourFactory.getColor();
                    $scope.timeHours = TimeFactory.showHours();
                    $scope.timeSeconds = TimeFactory.showSeconds();

                    fontDetails = FontFactory.getFamily();
                    fontArray = fontDetails.split("-");
                    $scope.fontFamily = fontArray[0];
                    $scope.fontSize = ($scope.timeSeconds ? fontArray[2] : fontArray[1])+"vw";

                    $scope.dateEnabled = DateFactory.isEnabled();
                    $scope.dateFormat = DateFactory.dateFormat();

                    $scope.dateToggle = function(){$scope.dateEnabled = DateFactory.toggle();}
                    $scope.showConfig = function() {$state.go("config");}
                    $scope.colorLighter = function() {$scope.colourUser = ColourFactory.colorLighter();}
                    $scope.colorDarker = function() {$scope.colourUser = ColourFactory.colorDarker();}

                    $scope.fontLess = function() {
                        fontDetails = FontFactory.fontLess();
                        fontArray = fontDetails.split("-");
                        $scope.fontFamily = fontArray[0];
                        $scope.fontSize = ($scope.timeSeconds ? fontArray[2] : fontArray[1])+"vw";
                    }
                    $scope.fontMore = function() {
                        fontDetails = FontFactory.fontMore();
                        fontArray = fontDetails.split("-");
                        $scope.fontFamily = fontArray[0];
                        $scope.fontSize = ($scope.timeSeconds ? fontArray[2] : fontArray[1])+"vw";
                    }

                    var tick = function() {
                        $scope.currentDate = Date.now();
                    }
                    tick();
                    $interval(tick, 1000);

                });

        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {



    });

});