
"use strict";

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var StoreBase = require('./storeBase');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/ActionTypes');

var _cartItems = [];

function addCartItem(product) {
	_cartItems.push({
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: 1
	});
}

var CartStore = assign(StoreBase, EventEmitter.prototype, {
	getCartItems: function () {
		return _cartItems;
	}
});

Dispatcher.register(function (action) {
	switch (action.actionType) {

		case ActionTypes.ADD_TO_CART:
			var product = action.product;
			var cartItem = _.find(_cartItems, {id: product.id});

			if (cartItem != null) {
				cartItem.quantity += 1;
			} else {				
				addCartItem(product);
			}
			break;

		case ActionTypes.REMOVE_CART_ITEM:
			delete _cartItems[action.index];
			break;

		default:
			return;
	}

	CartStore.emitChange();
});

module.exports = CartStore;