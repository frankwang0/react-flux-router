"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<p>About</p>
		);
	}
});

module.exports = About;

/*

import React from 'react';

class About extends React.Component {
    render() {
        return <h1>Hello from {this.props.phrase}!</h1>;
    }
}

export default About;

*/