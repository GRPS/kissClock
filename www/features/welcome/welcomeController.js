angular.module('kissClock')

.controller('WelcomeCtrl', function($scope, $state) {

    $scope.showTime = function() {$state.go("time");}

});
