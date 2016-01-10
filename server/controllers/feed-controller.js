'use strict';
var db = require('../../db');
var bingApi = require('../helpers/bing-search-api.js')
var weatherApi = require('../helpers/weather-api.js')


module.exports = {

  getBing: function(req, res){
  	bingApi('Adobe', function(result){
  		res.json(result.d.results)
  	})
  },
  getWeather: function(req, res){
  	weatherApi(94303, function(result){
  		res.json(result)
  	})

  }
}