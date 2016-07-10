class FaceBookOauth extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			FB: {
	      		appId 	: Keys.FACEBOOK_APP_ID,
	      		cookie  : true
	    	} 
		}
		this.disabled = true;
	}

	componentWillMount() {
		window.fbAsyncInit = () => {
    		FB.init(this.state.FB);
    		this.disabled = false;
    		this.forceUpdate();
  		};
	}

	login() {
		if (FB.getAuthResponse()) return;
		FB.login(function(res) {
			faceBookLogin();
		});	
	}

	render() {
		return(
			<div className="oauth-container">
				<button className="btn btn-success" disabled={this.disabled} onClick={this.login}>Login With Facebook</button>
				<hr/>
			</div>
		)
	}

}