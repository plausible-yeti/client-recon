'use strict';

var controller = require('../controllers');
var helpers = require('../helpers');

module.exports = function(app, express) {
	// ROUTE FOR DISPLAYING DASHBOARD
	app.get('/api/users/:user_id/clients', function(req,res){
		controller.dashboard.get(req,res);
	});

	// ROUTE FOR CREATING A NEW CLIENT
	app.post('/api/users/:user_id/clients', function(req,res){
		 controller.user.post(req,res);
	});

	// ROUTE FOR DISPLAYING PARTICULAR CLIENT
	app.get('/api/users/:user_id/clients/:client_id', function(req,res){
		controller.client.get(req,res);
	})

  // ROUTE FOR UPDATING A CLIENT
	app.put('/api/users/:user_id/clients/:client_id', controller.client.put);

	// ROUTE FOR GETTING FEED FOR A PARTICULAR CLIENT
	app.get('/api/users/:user_id/clients/:client_id/feed', function(req,res){
		controller.feed.getOneClient(req,res);
	})
};