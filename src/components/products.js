"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');

var ProductStore = require('../stores/productStore');
var ProductsPartial = require('./productsPartial');
var CartActions = require('../actions/cartActions');

var Products = React.createClass({	
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {			
			products: ProductStore.getProducts()
		};
	},

	addToCart: function(product, event) {
		event.preventDefault();
		CartActions.addToCart(product);
		this.transitionTo('shoppingcart');
	},

	render: function() {
		return (
			<div>
				<ProductsPartial products={this.state.products} onAddToCart={this.addToCart}/>
			</div>
		);
	}
});

module.exports = Products;