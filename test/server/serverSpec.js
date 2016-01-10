var expect = require('chai').expect;
var request = require('request');
var db = require('../../db/config.js');




var helper = {
	addSalesperson:function(salespersonName){
		return db.query("INSERT INTO salesperson (salesperson_name) VALUES ($1);",[salespersonName]);
	},
	addClient:function(clientName){
		return db.query("INSERT INTO client (client_name) VALUES ($1);",[clientName]);

	},
	joining:function(salespersonName,clientName){
		var salespersonId;
		var clientId;
		return db.query("SELECT (salesperson_id) FROM salesperson WHERE salesperson_name = $1;", [salespersonName])
			.then(function(result){
				salespersonId = result[0].salesperson_id;
				return db.query("SELECT (client_id) FROM client where client_name = $1;",[clientName]);
			})
			.then(function(result){
				clientId = result[0].client_id;
				db.query("INSERT INTO salesperson_client (salesperson_id, client_id) VALUES ($1,$2);", [salespersonId,clientId]);
				return salespersonName;
			})
			
	},
	getClientsForSalesperson:function(salespersonName){
		
		return db.query("SELECT (salesperson_id) from salesperson where salesperson_name = $1", [salespersonName])
			.then(function(salespersonId){
				console.log("sales person name", salespersonId);
				salespersonId = salespersonId[0].salesperson_id;
				return db.query("SELECT client_id from salesperson_client where salesperson_id = $1", [salespersonId]);
			})
			.then(function(result){
				console.log(result);
			})
			.catch(function(error){
				console.log(error);
			});
	}
}

describe("Persistent express server routing", function(){
	// before(function(done){
	// 	db.query("CREATE TABLE IF NOT EXISTS salesperson (salesperson_name VARCHAR(40),salesperson_id SERIAL PRIMARY KEY);")
	// 	 .then(function(){
	// 	   return db.query("CREATE TABLE IF NOT EXISTS client (client_name VARCHAR(40),client_id SERIAL PRIMARY KEY)");
	// 	   //if you want to add additional basic schema fields to the client such as info, add it to the string here
	// 	 })
	// 	 .then(function(){
	// 	   return db.query("CREATE TABLE IF NOT EXISTS salesperson_client (salesperson_id int NOT NULL, client_id int NOT NULL, PRIMARY KEY (salesperson_id,client_id), FOREIGN KEY (salesperson_id) REFERENCES salesperson(salesperson_id), FOREIGN KEY (client_id) REFERENCES client(client_id));")
	// 	 })
	// 	 .then(function(){
	// 	 	done();
	// 	 })
	// 	.catch(function(error){
	// 	  console.log(error);
	// 	})
	// });

	// beforeEach(function(done){
	// 	db.query('TRUNCATE TABLE salesperson, client, salesperson_client;')
	// 		.then(function(){
	// 			done();
	// 		})
		
	// });

	// afterEach(function(){
	// 	// Some kind of clean up function
	// 	// IMPORTANT -- THIS TEST DELETES EVERYTHING FROM YOUR DATABASE EACH ROUND!!!
	// });

	it('Should serve a list of clients on GET /api/users/userid/clients', function(done){
		// NOTE -- the helpers at the top of this file were built for testing purposes, and should eventually be replaced with the helpers we build out in /db

		var salesperson_id;
		var client_id;

		var salesperson = "Rebecca"
		var client = "Alan"

		helper.addSalesperson(salesperson)
			.then(helper.addClient(client))
			.then(helper.joining(salesperson,client))
			.then(helper.getClientsForSalesperson(salesperson));




		// db.query("INSERT INTO salesperson (salesperson_name) VALUES ('Stephen')")
		// 	.then(function(){
		// 		return db.query("INSERT INTO client (client_name) VALUES ('Rebecca')")
		// 	})
		// 	.then(function(){
		// 		return db.query("SELECT (salesperson_id) FROM salesperson WHERE salesperson_name = 'Stephen'");
		// 	})
		// 	.then(function(salesperson_record){
		// 		salesperson_id = salesperson_record[0].salesperson_id;
		// 		return db.query("SELECT (client_id) FROM client where client_name = 'Rebecca'");
		// 	})
		// 	.then(function(client_record){
		// 		client_id = client_record[0].client_id;
		// 		return db.query("INSERT INTO salesperson_client (salesperson_id,client_id) VALUES ($1,$2)",salesperson_id,client_id);
		// 	})
		// 	.then(function(){
		// 		return db.query("SELECT client_id FROM salesperson_client where salesperson_id = " + record[0].salesperson_id + ";");
		// 	})
		// 	.then(function(finalOutput){
		// 			console.log("ran")
		// 			console.log(finalOutput);
		// 			return finalOutput;
		// 			done()
					
		// 	});

		



		// db.query("SELECT * FROM salesperson where")
		// .catch(function(){
		// 		console.log('error!');
		// 		done();
		// })
	
		// return db.query("INSERT INTO client (client_name) VALUES ('Rebecca')")
		// 	}).then(function(clientRecord){
		// 		console.log(salespersonRecord)
		// 		console.log(clientRecord)
		// 		done();
		// 	}).
			
		
		
		request({
			method: "GET",
			uri: "http://127.0.0.1:3000/api/users/1/clients"
		}, function(){
			// TO DO: COMPLETE THIS SECTION

		});
	});

	xit('Should throw an error when attempting to get clients for non-existent userid', function(done){
		request({
			method: "GET",
			uri: "http://127.0.0.1:3000/api/users/theraininspainoglebogle/clients"
		}, function(){
			// TO DO: COMPLETE THIS SECTION
		})
	});

	xit('Should add a new client on POST /api/users/userid/clients', function(done){
		request({
			method: "POST",
			uri: "http://127.0.0.1:3000/api/users/{FIX THIS}/clients"
		}, function(){
			// TO DO: COMPLETE THIS SECTION
		})
	})

	xit('Should get details on a particular client on GET /api/users/userid/clients/clientid', function(done){
		request({
			method: "GET",
			uri: "http://127.0.0.1:3000/api/users/{FIX THIS}/clients/{FIX THIS}"
		}, function(){

		})
	})

})