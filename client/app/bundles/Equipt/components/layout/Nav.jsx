const Link = ReactRouter.Link;

Equipt.views.Nav = class extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showDropDown: false
		}
	}


	render() {

		const BurgerNavView = Equipt.views.BurgerNavView;
		const DropDownView = Equipt.views.DropDownView;

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

		let pathname = this.context.router.getCurrentPath();
		let currentUser = this.props.currentUser;

		if (pathname.indexOf('/owner/') > -1) {
			
			return 	<Link 	className="btn btn-success equipment-owner-toggle"
							to="equipmentIndex" 
							ref="equipmentLink">
							Rent Equipment
					</Link>;

		} else {

			return 	<Link 	className="btn btn-success equipment-owner-toggle"
							to="ownersIndex" 
							params={{ userId: currentUser.id }}
							ref="ownersLink">
							Owned Equipment
					</Link>;

		}

	}

	sessionBtns() {

		let currentUser = this.props.currentUser;
		let userName 	=  currentUser.firstname ? currentUser.firstname.capitalize() : "";

		if (currentUser.id) {

			return	<div className="col-sm-10 col-md-8 col-lg-7 visible-lg pull-right"
						key="currentUser.email">
						<span className="col-sm-4">
							{ this.ownersOrEquipmentBtn() }
						</span>
						<span className="col-sm-3">
							<Link to="rentalsIndex" params={{ userId: currentUser.id }}>
								<button className="logout-btn btn btn-success">Schedule</button>
							</Link>
						</span>
						<span className="col-sm-3">
							<Link to="profile" params={{ userId: currentUser.id }}>
								<h3 className="nav-title">{ userName }</h3>
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
						<Link to="login">
							<li key="login" 
								className="btn btn-success">
								Login
							</li>
						</Link>
						<Link to="signup">
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

		if (currentUser.id) {

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

Equipt.views.Nav.contextTypes = {
	router: React.PropTypes.func.isRequired
};