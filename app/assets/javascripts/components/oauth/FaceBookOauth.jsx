class FaceBookOauth extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			FB: {
	      		appId      : '734059966732084',
	      		xfbml      : true,
	      		version    : 'v2.6'
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