import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Button from './Button';

export default class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {
			realmsNotifications: true,
		}
	}
	
	handleRealms() {
		this.state.realmsNotifications ? this.setState({realmsNotifications: false}) : this.setState({realmsNotifications: true});
	}
	
	render() {
		return (
			<div id="options" className="blur">
				<div className="options-container">
					<div className="slide-container"><input type="range" className="slider" id="FOV"/><label for="FOV" className="slider-label">FOV: {this.state.FOV}</label></div>
					<div className="button"	><span>Realms Notifications: {this.state.realmsNotifications ? "ON" : "OFF"}</span></div>
					<div className="spacer"></div>
					<Button to="/Options/Skin-Customisation">Skin Customisation...</Button>
					<Button to="/Options/Sound-and-Music">Sounds and Music...</Button>
					<Button to="/Options/Video">Video Settings...</Button>
					<Button to="/Options/Controls">Controls...</Button>
					<Button to="/Options/Language">Language...</Button>
					<Button to="/Options/Chat">Chat Settings...</Button>
					<Button to="/Options/Resource-Packs">Resource Packs...</Button>
					<Button to="/Options/Snooper">Snooper Settings...</Button>
					<div className="spacer"></div>
					<Button to="../">Back</Button>
				</div>
				<div className="routes">
					<Route exact path={this.props.match.url + "/Skin-Customisation"}/>
					<Route exact path={this.props.match.url + "/Sound-and-Music"}/>
					<Route exact path={this.props.match.url + "/Video"}/>
					<Route exact path={this.props.match.url + "/Controls"}/>
					<Route exact path={this.props.match.url + "/Language"}/>
					<Route exact path={this.props.match.url + "/Chat"}/>
					<Route exact path={this.props.match.url + "/Resource-Packs"}/>
					<Route exact path={this.props.match.url + "/Snooper"}/>
				</div>
			</div>
		);
	}
}
