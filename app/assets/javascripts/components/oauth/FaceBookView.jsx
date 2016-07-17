class FaceBookView extends React.Component {

	constructor(props) {
		super(props);
	}

	login() {
		FB.login((res) => {
			facebookStatusChanged(true);
		});	
	}

	logout() {		
		FB.logout((res) => {
			facebookStatusChanged(false);
		});
	}

	render() {
		
		if (this.props.loggedIn) {
			var btn = 	<button className="btn btn-success" 
								disabled={!this.props.facebookLoaded} 
								onClick={this.logout.bind(this)}>
								Logout
					    </button>
		} else {
			var btn = 	<button className="btn btn-success" 
								disabled={!this.props.facebookLoaded} 
								onClick={this.login.bind(this)}>
								Login With Facebook
						</button>
		}

		return (
			<div className="oauth-container">
				{btn}
				<hr/>
			</div>
		)

	}

}