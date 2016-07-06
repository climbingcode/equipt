const Link = ReactRouter.Link;

class Nav extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="login">Login</Link></li>
						<li><Link to="signup">Signup</Link></li>
					</ul>
				</div>
			</nav>
		)
	}

}