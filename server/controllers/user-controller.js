
var userModel = require('../models/user-model.js');
var twilio = require('../../api/twilio-api.js');

module.exports.post = function(req, res) {
			// This is where we call the DB function for creating new user
			// TO DO: Make sure you send a response
			// Love your comments Rebecca!
			var salesID = req.params.user_id;
			console.log('in controller, SALES ID is', salesID);
			
			userModel.insertUser(req.body, salesID, function(user) {
				res.send(201, user);
				var message = {};
				console.log('req.body is', req.body);
				message.recipient = req.body.client_name;
				message.company = req.body.client_company;
				console.log('about to send this to twilio:', message)
				// message.event = "You just added" + message.recipient
				console.log('user is inserted, req.body is:', req.body);
				twilio(message);
			});

		};
	

