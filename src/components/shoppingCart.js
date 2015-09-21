"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CartStore = require('../stores/cartStore');
var CartActions = require('../actions/cartActions');

var ShoppingCart = React.createClass({
	getInitialState: function() {
		return {
			CartItems: CartStore.getCartItems()
		};
	},

	componentWillMount: function() {
		CartStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		CartStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: CartStore.getCartItems()});
	},

	removeCartItem: function(index) {
		CartActions.removeCartItem(index);
	},

	render: function() {
		var self = this;
		var cartItems = this.state.CartItems;
		return (
			<div>
				<ul>
					{Object.keys(cartItems).map(function (index) {
						return (
							<li key={index}>
								<h3>{cartItems[index].name}</h3>
								<p>{cartItems[index].quantity}</p>
								<p>{cartItems[index].price}</p>
								<button type="button" onClick={self.removeCartItem.bind(self, index)}>Remove</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
});

module.exports = ShoppingCart;