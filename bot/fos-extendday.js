var util = require('util');
var rp = require('request-promise');
var LuisActions = require('../core');

var ExtendDayAction = {
    intentName: 'ExtendDay',
    friendlyName: 'Extend my day',
    schema: {
        SysTimestamp: {
            type: 'SysTime',
            builtInType: LuisActions.BuiltInTypes.DateTime.Time,
            message: 'Extend day to what time?'
        }
    },
    // Action fulfillment method, recieves parameters as keyed-object (parameters argument) and a callback function to invoke with the fulfillment result.
    fulfill: function (parameters, callback) {
        // should have a mandatory parameter @SysTime
        if (parameters.SysTime)
        {
            var SysTime = parameters.SysTime;
            callback('ACTION_ExtendDay, leaveYear = [' + leaveYear + ']' );
        }
        else
        {
            callback('ACTION_ExtendDay (no parameters)' );
        }
        callback('ACTION_ExtendDay: ');
        
    }
};

module.exports = ExtendDayAction;