"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../consts/actionTypes');
var CartRepo = require('../repositories/cartRepo');

var CartActions = {
	addToCart: function(product) {				
		CartRepo.addToCart(product);

		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_TO_CART,
			product: product
		});
	},
	
	removeCartItem: function(index) {
		CartRepo.removeCartItem(index);

		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE_CART_ITEM,
			index: index
		});
	}
};

module.exports = CartActions;