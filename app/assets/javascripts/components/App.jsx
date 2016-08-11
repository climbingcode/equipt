var RouteHandler = ReactRouter.RouteHandler;

Equipt.App = class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	componentDidMount() {
		if (Equipt.stores.AuthStore.authenticated()) appInit();	
	}

	componentWillMount() {
		Equipt.stores.AuthStore.addChangeListener(this._onLoginChange.bind(this));
	}
  	
  	componentWillUnmount() {
    	Equipt.stores.AuthStore.removeChangeListener(this._onLoginChange.bind(this));
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
					<Equipt.controllers.NoticeController/>
					<RouteHandler currentUser={this.state.currentUser}/>
				</div>
			</content>
		)
	}
	
}

Equipt.App.contextTypes = {
	router: React.PropTypes.func.isRequired
};