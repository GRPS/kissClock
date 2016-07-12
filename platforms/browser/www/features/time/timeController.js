angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, sharedData, DBA, TimeFactory) {

    var tick = function() {
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);

    $scope.showHours = TimeFactory.showHours();
    $scope.showSeconds = TimeFactory.showSeconds();
    $scope.showConfig = function() {$state.go("config");}

    $ionicPlatform.ready(function() {

        window.plugins.insomnia.keepAwake();

alert('is db ok');
alert(db);
alert('prepare');
        DBA.prepareTables()
            .then(function(cnt) {
                alert('cnt = ' + cnt);
                if(cnt == 0) {
                    DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", angular.toJson(sharedData)]);
                } else {
                    DBA.query("SELECT c.rowid AS id, c.key AS key, c.obj AS obj FROM Config c WHERE c.rowid = 1")
                        .then(function(result){
                            res = DBA.getFirst(result);
                            alert(res);
                            shared = JSON.parse(res.obj);
                        });
                }
            })

    });

});
