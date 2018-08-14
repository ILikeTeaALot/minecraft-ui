import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class button extends Component {
	render() {
		return (
			<Link to={this.props.to} className="button">
				<span>{this.props.children}</span>
			</Link>
		);
	}
}