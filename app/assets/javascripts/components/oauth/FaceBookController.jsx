class FaceBookController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [AuthStore];
		this.state = {
			logginIn: AuthStore.isFacebookLogin(),
			facebookLoaded: false
		}
		this.loadFacebook();
	}

	loadFacebook() {
		window.fbAsyncInit = () => {
			window.FB.init({
	      		appId: Keys.FACEBOOK_APP_ID,
	      		cookie: true
	    	});		
	    	window.FB.getLoginStatus((response) => {
	    		let loggedIn = response.status === 'connected' ? true : false;
	    		this.setState({
	    			logginIn: AuthStore.isFacebookLogin(),
					facebookLoaded: true
	    		});
	    		this.forceUpdate();
	    	});
		}
	}

	componentWillMount() {
		if (window.FB && window.FB.getAuthResponse()) {
			this.setState({
	    		logginIn: AuthStore.isFacebookLogin(),
				facebookLoaded: true
	    	});	
	    	this.forceUpdate();			
		}
	}

	dataChanged() {
		this.setState({
			loggedIn: AuthStore.isFacebookLogin(),
			facebookLoaded: true
		});
	}

	render() {
		return (
			<FaceBookView 	facebookLoaded={this.state.facebookLoaded}
							loggedIn={this.state.loggedIn}/>
		)
	}

}