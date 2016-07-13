angular.module('kissClock')

.controller('SetupCtrl', function($ionicPlatform, $ionicHistory, $scope, $state, DBA) {
    //
    // //Do something before the view is rendered. Must be kept to bare minimum, so user is not held waiting necessarily.
    // $scope.$on("$ionicView.beforeEnter", function(event, data) {

        //Let's just make sure the platform is ready
        $ionicPlatform.ready(function() {

            DBA.setup()
                .then(function(config) {

                    $ionicHistory.nextViewOptions({disableAnimate: true});
                    $state.go("time");
                })

        });
    //
    // });
    //
    // //Do something now the view is rendered.
    // $scope.$on("$ionicView.enter", function(event, data) {
    //
    //     $ionicPlatform.ready(function() {
    //
    //         // $scope.back = function() {
    //         //
    //         //     sharedData.colour.list = [];
    //         //     $scope.myColor = ColourFactory.getColor();
    //         //     j = angular.toJson(sharedData);
    //         //     // alert('saving ... ' + j);
    //         //
    //         //     DBA.query("DELETE FROM Config;")
    //         //         .then(function() {
    //         //             DBA.query("INSERT INTO Config (key, obj) values (?, ?)", ["config", j]);
    //         //         })
    //         //         .then(function() {
    //         //             $state.go("time");
    //         //         })
    //         // }
    //
    //     });
    //
    // });

});
