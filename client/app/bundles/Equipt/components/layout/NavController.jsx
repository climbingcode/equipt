import React from 'react';

import AuthStore from 'stores/AuthStore';

import { MainController } from 'MainController';
import { Link } from 'react-router-dom';
import { BurgerNavView } from 'components/layout/NavViews/BurgerNavView';
import { DropDownView } from 'components/layout/NavViews/DropDownView';

class NavController extends React.Component {

	getState = () => {
		return {
			showDropDown: false,
		}
	}

	constructor(props) {
		super(props);
		this.state = this.getState();
	}

	render() {

		return (
			<nav className="navbar">
				<div className="container-fluid col-lg-10 col-md-12 col-lg-offset-1">
					{ this.logo() }
					{ this.sessionBtns() }
					<BurgerNavView 	toggleDropDown={ this.toggleDropDown.bind(this) }
									showDropDown={ this.state.showDropDown }/>
					<DropDownView showDropDown={ this.state.showDropDown }/>
				</div>
			</nav>
		)
	}

	logout() {
		Equipt.actions.endSession();
		if (FB && FB.getAuthResponse()) {		
			FB.logout((res) => {
				Equipt.actions.facebookStatusChanged(false);
			});
		}
	}

	toggleDropDown() {
		this.state.showDropDown = this.state.showDropDown ? false : true;
		this.setState(this.state);
	}

	ownersOrEquipmentBtn() {

		let currentUser = this.props.currentUser;

		if (currentUser) {
			
			return 	<Link 	className="btn btn-success equipment-owner-toggle"
							to="/equipment">
							Rent Equipment
					</Link>;

		} else {

			return 	<Link 	className="btn btn-success equipment-owner-toggle"
							to={ `/owner/${ currentUser.id }/equipment` }>
							Owned Equipment
					</Link>;

		}

	}

	sessionBtns() {

		let currentUser = this.props.currentUser;

		if (currentUser) {

			return	<div className="col-sm-10 col-md-8 col-lg-7 visible-lg pull-right"
						key="currentUser.email">
						<span className="col-sm-4">
							{ this.ownersOrEquipmentBtn() }
						</span>
						<span className="col-sm-3">
							<Link to={ `/owner/${ currentUser.id }/rentals` }>
								<button className="logout-btn btn btn-success">Schedule</button>
							</Link>
						</span>
						<span className="col-sm-3">
							<Link to={ `/users/${ currentUser.id }/edit` }>
								<h3 className="nav-title">{ currentUser.firstname.capitalize() }</h3>
							</Link>
						</span>
						<span className="col-sm-2">
							<button className="logout-btn btn btn-success"
									onClick={this.logout.bind(this)}>
									logout
							</button>
						</span>
					</div>;
								
		} else {

			return	<ul className="session-container navbar-right col-sm-3"
						key="sessions">
						<Link to="/login">
							<li key="login" 
								className="btn btn-success">
								Login
							</li>
						</Link>
						<Link to="/signup">
							<li key="signup" 
								className="btn btn-success">
								Signup
							</li>
						</Link>
					</ul>;

		}

	}

	logo() {

		let currentUser = this.props.currentUser;

		if (currentUser) {

			return 	<Link to="equipmentIndex">
						<div className="nav-logo"></div>
					</Link>;

		} else {

			return 	<Link to="home">
						<div className="nav-logo"></div>
					</Link>;

		}

	}


}

export { NavController };