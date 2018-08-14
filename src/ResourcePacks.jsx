import React, { Component } from 'react';
import logo from './logo.png';

import { Link } from 'react-router-dom';

import Button from './Button';
import HeroNav from './HeroNav';

export default class ResourcePacks extends Component {
	render() {
		return (
            <div id="resource-packs" className="blur">
                <div className="pack-change">
                    <HeroNav/>
                    <div className="resource-packs">
                        <div id="available-packs">
                            <div className="resource-pack">
                                <img className="pack-icon" src="http://via.placeholder.com/128x128"/>
                                <div className="pack-info">
                                    <h2 className="pack-name">Modern HD</h2>
                                    <span className="pack-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend gravida leo vitae viverra. Pellentesque consequat quam dui, sit amet semper sem maximus id. Morbi placerat quam leo, rutrum vehicula.</span>
                                </div>
                            </div>
                        </div>
                        <div id="selected-packs">

                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
