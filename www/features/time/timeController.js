angular.module('kissClock')

.controller('TimeCtrl', function($scope, $state, $interval, TimeFactory, AlarmFactory) {

    var alarmActive = (alarmActive == undefined ? AlarmFactory.isEnabled() : alarmActive);
    var adt = null;
    if(alarmActive && adt == null) {

        adt = new Date();
        y = adt.getFullYear();
        m = adt.getMonth();
        d = adt.getDate();

        aa = AlarmFactory.getAlarmTime();
        v = aa.split(":");
        hr = v[0];
        mn = v[1];
        se = v[2]

        adt = new Date(y, m, d, hr, mn, se, 0);
        sadt = adt.toLocaleString();

    }

    var tick = function() {
        dt = new Date();
        $scope.clock = dt;

        if(alarmActive && dt.toLocaleString() == sadt) {
            navigator.notification.beep(10);
            alert("boo!");
        }

    }

    tick();
    $interval(tick, 1000);

    $scope.showHours = TimeFactory.showHours();
    $scope.showSeconds = TimeFactory.showSeconds();
    $scope.showConfig = function() {$state.go("config");}

});
