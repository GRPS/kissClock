angular.module('kissClock')

.controller('TimeCtrl', function($ionicPlatform, $scope, $state, $interval, $cordovaToast, TimeFactory, AlarmFactory) {

    $ionicPlatform.ready(function() {

        // window.plugins.insomnia.keepAwake(
        //     function(msg) {console.log(msg)}
        // );

        // var alarmActive = (alarmActive == undefined ? AlarmFactory.isEnabled() : alarmActive);
        // var dtAlarm = (dtAlarm == undefined ? null : dtAlarm);
        //
        // if(alarmActive && dtAlarm == null) {
        //     dtAlarm = AlarmFactory.getAlarmTime();
        // }

        var tick = function() {
            dt = new Date();
            $scope.clock = dt;

            // dts = dt.toLocaleString();
            // if(alarmActive && dts == dtAlarm) {
            //     navigator.notification.beep(1);
            //     navigator.notification.alert(
            //                                 'Now what?',        // message
            //                                 function(){},       // callback
            //                                 'Alarm Actiated',   // title
            //                                 'OK'                // buttonName
            //                                 );
            // }

        }

        tick();
        $interval(tick, 1000);

        $scope.showHours = TimeFactory.showHours();
        $scope.showSeconds = TimeFactory.showSeconds();
        $scope.showConfig = function() {$state.go("config");}

        // $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
        //     // success
        // }, function (error) {
        //     // error
        // });
        //
        // $cordovaToast.showShortTop('Here is a message').then(function(success) {
        //     // success
        // }, function (error) {
        //     // error
        // });
        //
        // $cordovaToast.showLongBottom('Here is a message').then(function(success) {
        //     // success
        // }, function (error) {
        //     // error
        // });

    });

});
