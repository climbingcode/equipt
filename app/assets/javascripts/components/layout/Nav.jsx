const Link = ReactRouter.Link;

Equipt.views.Nav = class extends React.Component {

	constructor(props) {
		super(props);
	}

	logout() {
		Equipt.actions.endSession();
		if (FB && FB.getAuthResponse()) {		
			FB.logout((res) => {
				facebookStatusChanged(false);
			});
		}
	}

	render() {

		let currentUser = this.props.currentUser;
		let pathname    = this.context.router.getCurrentPath();

		let userName =  currentUser ? currentUser.firstname.capitalize() : "";
		let userId 	 =  currentUser ? currentUser.id : 0;

		if (currentUser) {

			if (pathname.indexOf('/owner/') > -1) {
				
				var ownersAndEquipmentLink = 	<Link 	className="btn btn-success equipment-owner-toggle"
														to="equipmentIndex" 
														ref="equipmentLink">
														Rent Equipment
												</Link>

			} else {

				var ownersAndEquipmentLink = 	<Link 	className="btn btn-success equipment-owner-toggle"
														to="ownersIndex" 
														params={{ userId: currentUser.id }}
														ref="ownersLink">
														Owned Equipment
												</Link>

			}

			var sessionBtns = 	<div className="col-sm-6 pull-right"
									key="currentUser.email">
									<span className="col-sm-4">
										{ownersAndEquipmentLink}
									</span>
									<span className="col-sm-6">
										<Link to="profile" params={{ userId: userId }}>
											<h3 className="nav-title">{ userName }</h3>
										</Link>
									</span>
									<button className="logout-btn pull-right btn btn-success"
											onClick={this.logout.bind(this)}>
											logout
									</button>
								</div>
								
		} else {

			var sessionBtns =   <ul className="navbar-right col-sm-2"
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
								</ul>						
		}

		return (
			<nav className="navbar">
				<div className="container-fluid col-sm-10 col-sm-offset-1">
					<Link to="equipmentIndex">
						<div className="nav-logo"></div>
					</Link>
					{sessionBtns}
				</div>
			</nav>
		)
	}

}

Equipt.views.Nav.contextTypes = {
	router: React.PropTypes.func.isRequired
};