class FaceBookController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			FB: {
	      		appId 	: Keys.FACEBOOK_APP_ID,
	      		cookie  : true,
	      		status  : true,
	      		xfbml   : true
	    	},
	    	loggedIn: false,
	    	disabled: true 
		}
	}

	componentWillMount() {
		window.fbAsyncInit = () => {
			window.FB.init(this.state.FB);	
			this.updateStatus();
		}
	}

	updateStatus() {			
		window.FB.getLoginStatus((response) => {
			let connected = response.status === 'connected' ? true : false
			this.setState({
				loggedIn: connected,
				disabled: false
			});
		});
	}

	render() {
		return (
			<FaceBookView 	updateStatus={this.updateStatus} 
							loggedIn={this.state.loggedIn}
							disabled={this.state.disabled}/>
		)
	}

}