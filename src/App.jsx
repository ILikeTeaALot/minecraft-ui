import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

import Main from './Main';
import Singleplayer from './Singleplayer';
import Options from './Options';
import Quit from './Quit';

import News from './News';
import Skin from './Skin';
import ResourcePacks from './ResourcePacks';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
	}
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Route path="/" exact component={Main} />
					<Route path="/Player-Customiser" exact component={Main} />
					<Route path="/Resource-Packs" exact component={Main} />
					<Route path="/Store" exact component={Main} />
					<Route path="/" exact component={News} />
					<Route path="/Player-Customiser" exact component={Skin} />
					<Route path="/Resource-Packs" exact component={ResourcePacks} />
					<Route path="/Singleplayer" exact component={Singleplayer} />
					<Route path="/Options" exact component={Options} />
					<Route path="/Quit" exact component={Quit} />
					<span id="copyright">UI Design by Jamesneakz - <a className="external" href="https://github.com/ILikeTeaALot">https://github.com/ILikeTeaALot</a><br/>Copyright Mojang AB</span>
				</div>
			</Router>
		);
	}
}

export default App;
