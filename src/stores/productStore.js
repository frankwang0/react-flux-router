"use strict";

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var StoreBase = require('./storeBase');

var _products = [];

var ProductStore = assign(StoreBase, EventEmitter.prototype, {
	getProducts: function() {
		return _products;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType){
		case ActionTypes.INITIALIZE:
			_products = action.products;
			break;
		default:
	}
});

module.exports = ProductStore;