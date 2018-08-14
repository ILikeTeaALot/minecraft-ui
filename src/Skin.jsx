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
                    <div className="skin">
                        
                    </div>
                    <HeroNav/>
                </div>
            </div>
		);
	}
}
