const Link = ReactRouter.Link;

class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	logout() {
		endSession();
	}

	render() {

		if (this.props.currentUser) {
			var sessionBtns = 	<div className="col-sm-3 pull-right"
									 key="currentUser.email">
									<span className="col-sm-5">
										<h3>{this.props.currentUser.email.capitalize()}</h3>
									</span>
									<button className="pull-right btn btn-success"
											onClick={this.logout.bind(this)}>
											logout
									</button>
								</div>
								
		} else {
			var sessionBtns =   <ul className="navbar-right col-sm-2"
									key="sessions">
									<li key="login" 
										className="btn btn-success">
										<Link to="login">Login</Link>
									</li>
									<li key="signup" 
										className="btn btn-success">
										<Link to="signup">Signup</Link>
									</li>
								</ul>						
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid col-sm-10 col-sm-offset-1">
					<div className="nav-logo"></div>
					{sessionBtns}
				</div>
			</nav>
		)
	}

}