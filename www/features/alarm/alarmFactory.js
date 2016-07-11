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
        return sharedData.alarm.time;
    }

    /* ================================================ */
    /* Internal functions */
    /* ================================================ */

    return self;

})
