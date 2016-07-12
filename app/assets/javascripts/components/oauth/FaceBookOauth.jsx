class FaceBookOauth extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			FB: {
	      		appId 	: Keys.FACEBOOK_APP_ID,
	      		cookie  : true,
	      		status  : true,
	      		xfbml   : true
	    	} 
		}
		this.disabled 	= true;
		this.loggedIn 	= false;
		this.initalized = false;
		this._isMounted = false;
	}

	componentWillMount() {
		this._isMounted = true;
		if (this.initalized) {
			this.updateStatus();
		} else {
			window.fbAsyncInit = () => {
				window.FB.init(this.state.FB);	
				this.initalized = true;
    			this._isMounted && this.updateStatus();
  			};
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	updateStatus() {
		if (this.initalized) {			
			window.FB.getLoginStatus((response) => {
				this.loggedIn = response.status === 'connected' ? true : false;
				this.disabled = false;
		    	this.forceUpdate();
			});
		} else {
			if (window.FB) window.FB.init(this.state.FB);
		}
	}

	login() {
		if (FB.getAuthResponse()) return;
		FB.login((res) =>	 {
			faceBookLogin();
			this.updateStatus();
		});	
	}

	logout() {
		if (!FB.getAuthResponse()) return;
		FB.logout((res) => {
			this.updateStatus();
		});
	}

	render() {

		if (this.loggedIn) {
			var btn = <button className="btn btn-success" disabled={this.disabled} onClick={this.logout.bind(this)}>Logout</button>
		} else {
			var btn = <button className="btn btn-success" disabled={this.disabled} onClick={this.login.bind(this)}>Login With Facebook</button>
		}

		return(
			<div className="oauth-container">
				{btn}
				<hr/>
			</div>
		)
	}

}