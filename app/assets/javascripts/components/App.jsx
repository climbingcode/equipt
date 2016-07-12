var RouteHandler = ReactRouter.RouteHandler;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: AuthStore.currentUser()
		}
	}

	componentDidMount() {
    	ErrorsStore.addChangeListener(this._onChange.bind(this));
		AuthStore.addChangeListener(this._onLoginChange.bind(this));
	}

	componentWillMount() {
		if (AuthStore.authenticated()) {
			appInit();
		}
	}
  	
  	componentWillUnMount() {
    	ErrorsStore.removeChangeListener(this._onChange.bind(this));
    	AuthStore.addChangeListener(this._onLoginChange.bind(this));
  	}

  	_onChange() {
    	this.setState({
    		errors: ErrorsStore.getData()
    	});
  	}

  	_onLoginChange() {

		if (AuthStore.authenticated()) {
			this.setState({
				currentUser: AuthStore.currentUser()
			});
			setTimeout(() => {
				this.context.router.transitionTo('equipment');
			});
		} else {
			this.setState({
				currentUser: AuthStore.currentUser()
			});
			setTimeout(() => {
				this.context.router.transitionTo('login');
			});
		}

  	}

	render() {
		return (
			<content>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<Notice errors={this.state.errors}/>
					<RouteHandler 	currentUser={this.state.currentUser}
								  	errors={this.state.errors}
					/>
				</div>
			</content>
		)
	}
	
}

App.contextTypes = {
	router: React.PropTypes.func.isRequired
};