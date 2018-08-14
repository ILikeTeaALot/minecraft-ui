import React, { Component } from 'react';
import logo from './logo.png';

import { Link } from 'react-router-dom';

export default class Main extends Component {
	render() {
		return (
			<div id="news" className="">
				<div className="hero-container">
					<div className="hero">
						<div className="hero-img-container">
							<img className="hero-img" src="./Aquatic-Header.jpg"/>
						</div>
						<div className="hero-content">
							<h3 className="hero-title">UPDATE AQUATIC</h3>
							<span className="hero-extra">Minecraft's oceans get their biggest update yet!</span>
						</div>
					</div>
					<div className="button-row">
						// Code to generate buttons from either file or API request
					</div>
				</div>
			</div>
		);
	}
}
