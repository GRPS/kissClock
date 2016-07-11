angular.module('kissClock')

.service('sharedData', function() {

    return {
            colour : {
                    user    : "#499C32",    //User defined color.
                    min     : -80,          //Shade user color from percentage.
                    max     : 80,           //Shade user color to percentage.
                    step    : 10,           //Shade user color step.
                    list    : [],           //List of available colors using shadinge min/max.
                    start   : 9,            //Colour to start with.
                    index   : 9             //Colour index which user may have changed.
                },
            alarm : {
                    enabled : true,
                    time    : "19:28:00"
                    },
            date : {
                    enabled : true,
                    format : "EEEE, dd MMMM yyyy",
                    formats : ['EEEE, dd MMMM yyyy','dd/mm/yyyy']
                    },
            time : {
                    show12Hour          : false,
                    showHourLeadingZero : true,
                    showSeconds         : true
                    }
    }

})
