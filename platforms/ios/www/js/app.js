// Ionic Starter App

var db = null;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('kissClock', ['ionic', 'ngCordova', 'ionic-color-picker', 'ngFitText'])

.run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {

        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if(window.StatusBar) {
            StatusBar.hide();
            ionic.Platform.isFullScreen = true;
        }

    });

})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //Disbaled because iOS device didn't like it!
    $ionicConfigProvider.views.swipeBackEnabled(false);

    //Use native scrolling rather than js scrolling for increased performance.
    $ionicConfigProvider.scrolling.jsScrolling(false);

    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('time', {
                        cache: false,
                        url: '/time',
                        templateUrl: 'features/time/time.html',
                        controller: 'TimeCtrl'
                    })

        .state('config', {
                        cache: false,
                        url: '/config',
                        templateUrl: 'features/config/config.html',
                        controller: 'ConfigCtrl'
                    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/time');

})
