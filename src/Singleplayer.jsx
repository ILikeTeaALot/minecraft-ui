import React, { Component } from 'react';
import logo from './logo.png';

import Button from './Button';

export default class Main extends Component {
	render() {
		return (
			<div id="singleplayer" className="blur">
				<div className="main-menu-controls">
					<h2>Select World</h2>
					<Button to="../">Back</Button>
				</div>
			</div>
		);
	}
}
