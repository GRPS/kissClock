angular.module('kissClock')

.controller('FontCtrl', function($ionicPlatform, $scope) {

    //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    $scope.$on("$ionicView.beforeEnter", function(event, data) {

        //Let's just make sure the platform is ready
        $ionicPlatform.ready(function() {


        });

    });

    //Do something now the view is rendered.
    $scope.$on("$ionicView.enter", function(event, data) {

        $ionicPlatform.ready(function() {


        });

    });


});
