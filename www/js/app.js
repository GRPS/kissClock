// Ionic Starter App

var db = null;

//Goto google fonts and download.
//Then goto https://everythingfonts.com/font-face to get all variations of type.
//Then add to styles.css
//Then add reference here

var options = {
                colour : {
                        user    : "#265717",    //User defined color.
                        min     : -80,          //Shade user color from percentage.
                        max     : 80,           //Shade user color to percentage.
                        step    : 20,           //Shade user color step.
                        list    : [],           //List of available colors using shadinge min/max.
                        start   : 4,            //Colour to start with.
                        index   : 4             //Colour index which user may have changed.
                        },
                font : {
                        list    : ["OpenSansLight-36-23", "OpenSansRegular-36-23", "OpenSansBold-36-23", "OpenSansExtraBold-36-23", "OpenSansCondLight-50-32", "OpenSansCondBold-44-26", "OswaldLight-40-27", "OswaldRegular-40-27", "OswaldBold-37-27","OrbitronRegular-25-16", "OrbitronBold-25-16", "ArimaMaduraiThin-35-23", "ArimaMaduraiRegular-35-23", "ArimaMaduraiBold-35-20"],
                        family  : "OpenSansLight-36-23",
                        start   : 0,
                        index   : 0,
                        },
                time : {
                        show12Hour          : false,
                        showHourLeadingZero : true,
                        showSeconds         : false
                        },
                date : {
                        enabled : true,
                        format : "EEEE, dd MMMM yyyy",
                        formats : ['EEEE, dd MMMM yyyy','dd/mm/yyyy']
                        }
                }

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('kissClock', ['ionic', 'ngCordova', 'ionic-color-picker', 'ionic-modal-select'])

.run(function($ionicPlatform, DBA) {

    $ionicPlatform.ready(function() {

        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if(window.StatusBar) {
            StatusBar.hide();
            ionic.Platform.isFullScreen = true;
        }

        DBA.init();

    })

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
