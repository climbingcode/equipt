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
			var sessionBtns = [	<button className="pull-right" key="logout" onClick={this.logout.bind(this)}>logout</button>,
								<span className="col-sm-5" key="currentUser.email"><h3>{this.props.currentUser.email}</h3></span>];
		} else {
			var sessionBtns = [	<li key="login" className="pull-right"><Link to="login">Login</Link></li>,
								<li key="signup" className="pull-right"><Link to="signup">Signup</Link></li>];
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav navbar-right col-sm-4">
						{sessionBtns}
					</ul>
				</div>
			</nav>
		)
	}

}