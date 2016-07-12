angular.module('kissClock')

.controller('WelcomeCtrl', function($scope, $state, $ionicPlatform) {

    $scope.showTime = function() {$state.go("time");}

    $ionicPlatform.ready(function() {

        alert('WelcomeCtrl start');
        DBA.init()
            .then(function() {
                alert('start prepare');
                alert(db);
                alert('prepare go now');
                return DBA.prepareTables();
            })
            .then(function(cnt) {
                alert('cnt = ' + cnt);
                if(cnt == 0) {
                    DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", angular.toJson(sharedData)]);
                } else {
                    DBA.query("SELECT c.rowid AS id, c.key AS key, c.obj AS obj FROM Config c WHERE c.rowid = 1")
                        .then(function(result){
                            res = DBA.getFirst(result);
                            alert(res.obj);
                            sharedData = JSON.parse(res.obj);
                            alert('WelcomeCtrl done');
                        });
                }
            })

    })

});
