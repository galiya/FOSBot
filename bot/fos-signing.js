//FOS BOT: SignOn, SignOff LUIS Intents

var util = require('util');
var LuisActions = require('../core');

// --- SIGN ON INTENT ---

var SignOnAction = {
    intentName: 'SignOn',
    friendlyName: 'SignOn',
    schema: {},

    fulfill: function (parameters, callback) {

        callback('ACTION_SignOn');
    }
};

var SignOffAction = {
    intentName: 'SignOff',
    friendlyName: 'SignOff',
    schema: {},

    fulfill: function (parameters, callback) {

        callback('ACTION_SignOff');
    }
};

module.exports = [SignOnAction, SignOffAction];