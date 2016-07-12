angular.module('kissClock')

.controller('ColorCtrl', function($scope, DBA, ColourFactory, FontFactory) {

    DBA.init()
        .then(function() {
            return DBA.prepareTables();
        })
        .then(function(cnt) {
            if(cnt == 0) {
                DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", angular.toJson(sharedData)]);
            }
        })
        .then(function() {
            return DBA.query("SELECT c.rowid AS id, c.key AS key, c.obj AS obj FROM Config c WHERE c.rowid = 1");
        })
        .then(function(result){
            res = DBA.getFirst(result);
            sharedData = JSON.parse(res.obj);

            $scope.myDate = new Date();
            $scope.myColor = ColourFactory.getColor();
            $scope.myWeight = FontFactory.getWeight();
            $scope.myDarkestColor = ColourFactory.getDarkestColor();

        });

    $scope.colorLighter = function() {$scope.myColor = ColourFactory.colorLighter();}
    $scope.colorDarker = function() {$scope.myColor = ColourFactory.colorDarker();}
    $scope.colorReset = function() {$scope.myColor = ColourFactory.colorReset();}

    $scope.fontThinner = function() {$scope.myWeight = FontFactory.fontThinner();}
    $scope.fontFatter = function() {$scope.myWeight = FontFactory.fontFatter();}
    $scope.fontReset = function() {$scope.myWeight = FontFactory.fontReset();}


});
