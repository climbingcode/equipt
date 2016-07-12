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
			var sessionBtns = 	[	<li key="currentUser.email">
										<span  className="col-sm-5">
											<h3>{this.props.currentUser.email.capitalize()}</h3>
										</span>
									</li>,
									<li key="logout"> 
										<button className="pull-right btn btn-success" 
												onClick={this.logout.bind(this)}>
												logout
										</button>
									</li>
								];
		} else {
			var sessionBtns = 	[	<li key="login" 
										className="btn btn-success">
										<Link to="login">Login</Link>
									</li>,
									<li key="signup" 
										className="btn btn-success">
										<Link to="signup">Signup</Link>
									</li>
								];
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav navbar-right col-sm-3">
						{sessionBtns}
					</ul>
				</div>
			</nav>
		)
	}

}