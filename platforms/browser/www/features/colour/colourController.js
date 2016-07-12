angular.module('kissClock')

.controller('ColorCtrl', function($ionicPlatform, $scope, sharedData, DBA, ColourFactory, TimeFactory, FontFactory) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        //Let's just make sure the platform is ready
        $ionicPlatform.ready(function() {

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
                    sharedData.colour = j.colour;
                    sharedData.date = j.date;
                    sharedData.font = j.font;
                    sharedData.time = j.time;
                    // alert('loading ... ' + res.obj);

                    $scope.myDate = new Date();
                    $scope.showHours = TimeFactory.showHours();

                    $scope.showSeconds = TimeFactory.showSeconds();
                    $scope.myColor = ColourFactory.getColor();
                    $scope.myWeight = FontFactory.getWeight();
                    $scope.myDarkestColor = ColourFactory.getDarkestColor();

                });

        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {

        $scope.colorLighter = function() {$scope.myColor = ColourFactory.colorLighter();}
        $scope.colorDarker = function() {$scope.myColor = ColourFactory.colorDarker();}
        $scope.colorReset = function() {$scope.myColor = ColourFactory.colorReset();}

        $scope.fontThinner = function() {
            a = FontFactory.fontThinner();
            $scope.myWeight = a
        }
        $scope.fontFatter = function() {$scope.myWeight = FontFactory.fontFatter();}
        $scope.fontReset = function() {$scope.myWeight = FontFactory.fontReset();}
    });

});
