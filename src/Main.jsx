import React, { Component } from 'react';
import logo from './logo.png';

import { Link } from 'react-router-dom';

export default class Main extends Component {
	render() {
		return (
			<div id="main-menu" className="blur">
				<div className="main-menu-controls">
					<img src={logo} className="logo"/>
					<Link className="button" to="/Singleplayer">
						<span>Singleplayer</span>
					</Link>
					<Link className="button" to="/Multiplayer">
						<span>Multiplayer</span>
					</Link>
					<Link className="button" to="/Realms">
						<span>Realms</span>
					</Link>
					<div className="spacer"></div>
					<Link className="button" to="/Options">
						<span>Options</span>
					</Link>
					<Link className="button" to="/Quit">
						<span>Quit</span>
					</Link>
				</div>
				<span id="version">Minecraft 1.14</span>
			</div>
		);
	}
}
