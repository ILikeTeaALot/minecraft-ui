import React, { Component } from 'react';
import Button from './Button';

export default class HeroNav extends Component {
	render() {
		return (
            <div className="button-row">
                {/* Code to generate buttons from either file or API request */}
                <Button to="">News</Button>
                <Button to="/Player-Customiser">Change Skin</Button>
                <Button to="/Resource-Packs">Resource Packs</Button>
                <Button to="/Store">Store (Bedrock Only)</Button>
            </div>
		);
	}
}
