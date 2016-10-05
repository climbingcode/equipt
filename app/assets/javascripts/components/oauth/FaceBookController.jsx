Equipt.controllers.FaceBookController = class FaceBookController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.AuthStore];
		this.state = {
			logginIn: Equipt.stores.AuthStore.isFacebookLogin(),
			facebookLoaded: false
		}
	}

	loadFaceBook(callback) {
		window.FB.init({
      		appId: Keys.FACEBOOK_APP_ID,
      		cookie: true
    	});		
    	window.FB.getLoginStatus((response) => {
    		let loggedIn = response.status === 'connected' ? true : false;
    		this.setState({
    			logginIn: Equipt.stores.AuthStore.isFacebookLogin(),
				facebookLoaded: true
    		});
    		if (callback) callback();
    		this.forceUpdate();
    	});
	}

	waitForFaceBook(callback) {
		if (window.FB) {
			this.loadFaceBook(callback);
		} else {
			window.fbAsyncInit = () => {
				this.loadFaceBook(callback);
			}
		}
	}

	login() {
		if (window.FB) {
			window.FB.login((res) => {
				Equipt.actions.facebookStatusChanged(true);
			});	
		}
	}

	logout() {
		if (window.FB) {
			window.FB.logout((res) => {
				Equipt.actions.facebookStatusChanged(false);
			});
		}
	}

	componentWillMount() {
		this.waitForFaceBook(() => {		
			if (!!window.FB) {
				this.setState({
		    		logginIn: Equipt.stores.AuthStore.isFacebookLogin(),
					facebookLoaded: true
		    	});	
		    	this.forceUpdate();
		    }
		});	
	}

	dataChanged() {
		this.setState({
			loggedIn: Equipt.stores.AuthStore.isFacebookLogin(),
			facebookLoaded: true
		});
	}

	render() {
		return (
			<FaceBookView 	login={ this.login.bind(this) } 
							logout={ this.logout.bind(this) }
							{ ...this.state }/>
		)
	}

}