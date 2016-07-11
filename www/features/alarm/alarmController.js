angular.module('kissClock')

.controller('AlarmCtrl', function($scope, AlarmFactory) {

    $scope.alarmEnabled = AlarmFactory.isEnabled();

    $scope.alarmToggle = function(){$scope.alarmEnabled = AlarmFactory.toggle();}
    $scope.alarmTime = AlarmFactory.getAlarmTime();

});
