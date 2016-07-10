class FaceBookOauth extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			FB: {
	      		appId 	: Keys.FACEBOOK_APP_ID,
	      		cookie  : true
	    	} 
		}
	}

	componentWillMount() {
		window.fbAsyncInit = () => {
    		FB.init(this.state.FB);
  		};
	}

	login() {
		if (FB.getAuthResponse()) return;
		FB.login(function(res) {
			faceBookLogin();
			console.log(res);
		});	
	}

	render() {
		return(
			<div className="oauth-container">
				<button className="btn btn-success" onClick={this.login}>Login With Facebook</button>
				<hr/>
			</div>
		)
	}

}