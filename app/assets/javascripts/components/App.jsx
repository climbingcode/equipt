var RouteHandler = ReactRouter.RouteHandler;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: AuthStore.currentUser()
		}
	}

	componentDidMount() {
		if (AuthStore.authenticated()) appInit();	
	}

	componentWillMount() {
		AuthStore.addChangeListener(this._onLoginChange.bind(this));
	}
  	
  	componentWillUnmount() {
    	AuthStore.removeChangeListener(this._onLoginChange.bind(this));
  	}

  	_onLoginChange() {

  		this.setState({
			currentUser: AuthStore.currentUser()
		});

		if (AuthStore.authenticated()) {
			setTimeout(() => {
				var path = this.context.router.getCurrentPathname();
				if (path.indexOf('/equipment') > -1) {
					this.context.router.transitionTo(path);
				} else {
					this.context.router.transitionTo(Constants.links.equipmentIndex);
				}
			});
		} else {			
			setTimeout(() => {
				this.context.router.transitionTo(Constants.links.login);
			});
		}

  	}

	render() {
		return (
			<content>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<NoticeController/>
					<RouteHandler currentUser={this.state.currentUser}/>
				</div>
			</content>
		)
	}
	
}

App.contextTypes = {
	router: React.PropTypes.func.isRequired
};