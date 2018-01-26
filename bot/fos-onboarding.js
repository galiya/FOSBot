//FOS BOT: Hello, HowDoI, Goodbye LUIS Intents

var util = require('util');
var LuisActions = require('../core');

// --- HELLO INTENT ---
var helloArray = [
    'How can I help you?',
    'What would you like me to do?',
    'How can I help?',
    'What can I do for you today?'
];

var HelloAction = {
    intentName: 'Hello',
    friendlyName: 'Hello',
    schema: {},

    fulfill: function (parameters, callback) {

        var randomNumber = Math.floor(Math.random() * helloArray.length);
        console.log("hello:" + helloArray[randomNumber] + "; random#:" + randomNumber);

        callback(helloArray[randomNumber]);
    }
};

// --- HOW DO I INTENT ---
var helpArray = [
    'Try something like "book leave for next Thursday"',
    'Try something like "extend my day"',
    'Try something like "What is my leave balance?"',
    'Try something like "sign on"',
    'Try something like "When is my next absence?"'
];

var HelpAction = {
    intentName: 'HowDoI',
    friendlyName: 'Help',
    schema: {},

    fulfill: function (parameters, callback) {

        var randomNumber = Math.floor(Math.random() * helpArray.length);
        console.log("how do I:" + helpArray[randomNumber] + "; random#:" + randomNumber);

        callback(helpArray[randomNumber]);
    }
};

// --- GOODBYE INTENT ---

var goodbyeArray = [
    'Thanks! See you soon!',
    'Bye for now!',
    'Until next time...',
    'Goodbye!',
    'Thank you and goodbye!',
    'Cheerio!',
    'Have a nice day!'
];

var GoodbyeAction = {
    intentName: 'Goodbye',
    friendlyName: 'Goodbye',
    schema: {},

    fulfill: function (parameters, callback) {

        var randomNumber = Math.floor(Math.random() * goodbyeArray.length);
        console.log("goodbye:" + goodbyeArray[randomNumber] + "; random#:" + randomNumber);

        callback(goodbyeArray[randomNumber]);
    }
};


module.exports = [HelloAction, HelpAction, GoodbyeAction];