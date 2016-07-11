angular.module('kissClock')

.factory('AlarmFactory', function(sharedData) {

    var self = this;

    /* ================================================ */
    /* External functions */
    /* ================================================ */

    self.isEnabled = function() {
        return sharedData.alarm.enabled;
    }

    self.toggle = function() {
        sharedData.alarm.enabled = !sharedData.alarm.enabled;
        return sharedData.alarm.enabled;
    }

    self.getAlarmTime = function() {
        if(sharedData.alarm.time == null || sharedData.alarm.time == "") {
            self.setInitialTime();
        }
        return sharedData.alarm.time;
    }

    self.setInitialTime = function() {

        dt = new Date();
        y = dt.getFullYear();
        m = dt.getMonth();
        d = dt.getDate();
        hr = dt.getHours();
        mn = dt.getMinutes() + 1; //Set intial alarm time 1 minute from now.

        dt = new Date(y, m, d, hr, mn, "00", 0);

        sharedData.alarm.time = dt.toLocaleString();
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
