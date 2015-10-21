/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var HeaderPart = require('./headerPart');
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<HeaderPart />
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;