angular.module('kissClock')

.service('sharedData', function() {

    return {
            colour : {
                    user    : "#265717",    //User defined color.
                    min     : -80,          //Shade user color from percentage.
                    max     : 80,           //Shade user color to percentage.
                    step    : 10,           //Shade user color step.
                    list    : [],           //List of available colors using shadinge min/max.
                    start   : 9,            //Colour to start with.
                    index   : 9             //Colour index which user may have changed.
                },
            font : {
                    weights : ['100','200','300','400','500','600','700','800','bolder', 'bolder'],
                    start   : 3,
                    index   : 3
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

})
