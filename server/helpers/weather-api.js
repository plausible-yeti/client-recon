var accountKey = require('./weather-api-key.js')
var request = require('request');

module.exports = function(zipCode){
	request('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&&APPID=' + accountKey, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        callback(body); // Show the HTML for the Modulus homepage.
	    }
	});
}



