angular.module('kissClock')

.controller('DateCtrl', function($scope, DateFactory) {

    $scope.dateEnabled = DateFactory.isEnabled();

    $scope.dateFormat = DateFactory.dateFormat();
    $scope.dateToggle = function(){$scope.dateEnabled = DateFactory.toggle();}

});
