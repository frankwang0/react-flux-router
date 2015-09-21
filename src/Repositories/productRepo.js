"use strict";

var products = require('./productData').products;

var productRepo = {
	getProducts: function(){
		return products; // Simulte call to database 
	}
};

module.exports = productRepo;