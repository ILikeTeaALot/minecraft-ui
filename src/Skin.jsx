import React, { Component } from 'react';
import logo from './logo.png';

import { Link } from 'react-router-dom';

import Button from './Button';
import HeroNav from './HeroNav';

export default class Skin extends Component {
	render() {
		return (
            <div id="player-customiser" className="blur">
                <div className="skin-change">
                    <HeroNav/>
                    <div className="skin">
                        <div className="skin-controls">
                            <Button to="">Upload</Button>
                            <Button to="">Other</Button>
                            <Button to="">Other</Button>
                            <Button to="">Other</Button>
                        </div>
                        <div className="skin-preview">
                            <img className="skin-preview-img" src="./Steve.png"/>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
