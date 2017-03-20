import React from 'react';
import ReactOnRails from 'react-on-rails';
import Router from '../router/Router';

import { MainController } from 'components/MainController';

class App extends React.Component {

	render() {

		return (
			<div className="equipt">
				{ Router(this.props) }
			</div>
		)
	}

};


ReactOnRails.register({ App });