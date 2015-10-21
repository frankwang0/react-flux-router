"use strict";

var React = require('react');


var ProductPart = React.createClass({
	propTypes: {
		products: React.PropTypes.array.isRequired,
		onAddToCart: React.PropTypes.func.isRequired
	},

	render: function() {
		var createProductRow = function(product) {
			return (
				<tr key={product.id}>
					<td>
						Name: {product.name} <br/>
						Price: {product.price} <br/>
						Description: {product.desc} <br/>
						<button type="button" onClick={this.props.onAddToCart.bind(null, product)}>Add To Cart</button>
					</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<tbody>
						{this.props.products.map(createProductRow, this)}
					</tbody>					
				</table>
			</div>
		);
	}
});

module.exports = ProductPart;