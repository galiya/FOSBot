//FOS BOT: SignOn, SignOff LUIS Intents

var util = require('util');
var LuisActions = require('../core');

// --- LeaveBalance INTENT ---

var LeaveBalanceAction = {
    intentName: 'LeaveBalance',
    friendlyName: 'LeaveBalance',
    schema: {
    },

    fulfill: function (parameters, callback) {
        // can have an optional parameter @LeaveYear
        if (parameters.LeaveYear)
        {
            var leaveYear = parameters.LeaveYear;
            callback('ACTION_LeaveBalance, leaveYear = [' + leaveYear + ']' );
        }
        else
        {
            callback('ACTION_LeaveBalance (no parameters)' );
        }
    }
};


module.exports = [LeaveBalanceAction];