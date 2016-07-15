class FaceBookView extends React.Component {

	constructor(props) {
		super(props);
	}

	login() {
		if (!this.props.loggedIn) return;
		FB.login((res) =>	 {
			faceBookLogin();
			this.props.updateStatus();
		});	
	}

	logout() {
		if (this.props.loggedIn) return;
		FB.logout((res) => {
			this.props.updateStatus();
		});
	}

	render() {

		if (this.props.loggedIn) {
			var btn = 	<button className="btn btn-success" 
								disabled={this.props.disabled} 
								onClick={this.logout.bind(this)}>
								Logout
					    </button>
		} else {
			var btn = 	<button className="btn btn-success" 
								disabled={this.props.disabled} 
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