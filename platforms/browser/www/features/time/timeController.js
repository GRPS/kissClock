angular.module('kissClock')

.controller('TimeCtrl', function($ionicScrollDelegate, $ionicPlatform, $scope, $state, $interval, Config, DBA, ColourFactory, DateFactory, FontFactory, TimeFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        $ionicPlatform.ready(function() {

            window.plugins.insomnia.keepAwake();
            alert("initial angle = "+screen.orientation.angle);
            window.addEventListener("orientationchange", function(o){
                spec = TimeFactory.getTimeSpec();
                alert(JSON.Stringify(spec));
                $scope.fontSize = spec.fontSize;
                $scope.timeSep = spec.separator;
            });

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

                    spec = TimeFactory.getTimeSpec();
                    $scope.fontSize = spec.fontSize;
                    $scope.timeSep = spec.separator;
                    $scope.timeHours = TimeFactory.showHours();
                    $scope.fontFamily = FontFactory.getFamily();
                    blink = false;

                    $scope.dateEnabled = DateFactory.isEnabled();

                    $scope.dateToggle = function(){$scope.dateEnabled = DateFactory.toggle();}
                    $scope.showConfig = function() {$state.go("config");}
                    $scope.colorLighter = function() {$scope.colourUser = ColourFactory.colorLighter();}
                    $scope.colorDarker = function() {$scope.colourUser = ColourFactory.colorDarker();}

                    $scope.fontLess = function() {
                        $scope.fontFamily = FontFactory.fontLess();
                    }
                    $scope.fontMore = function() {
                        $scope.fontFamily = FontFactory.fontMore();
                    }

                    var tick = function() {
                        $scope.currentDate = Date.now();
                        blink = !blink;
                        if(Config.time.blinkSeconds && $scope.timeSep != "") {
                            $scope.timeSep = (blink?":":".");
                        }
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
