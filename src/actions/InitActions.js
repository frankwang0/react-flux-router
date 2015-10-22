"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ProductRepo = require('../repositories/productRepo');

var InitActions = {
	init: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			products: ProductRepo.getProducts()
		});
	}
};

module.exports = InitActions;